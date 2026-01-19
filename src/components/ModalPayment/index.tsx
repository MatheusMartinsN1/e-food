import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { selectCartTotal } from '../../store/cartSlice'
import ModalBase from '../ModalBase'

import { openModal } from '../../store/modalSlice'
import { FieldNumberCard, FieldNumberCvv, FieldsContainer } from './styles'
import { RootState } from '../../store/store'
import { setOrderId } from '../../store/orderSlice'
import { useCreateOrderMutation } from '../../services/apiOrders'

import {
  FieldsFlex,
  FieldNameFlex,
  FieldNumber,
  FieldName,
  Fields,
  TitleForm,
  ButtonContainer,
  FormButton
} from '../ModalDelivery/styles'

type PaymentModal = {
  name: string
  numberCard: string
  cvv: string
  dueMonth: string
  expiryYear: string
}

const ModalPayment = () => {
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()
  const activeModal = useSelector((state: RootState) => state.modal.activeModal)
  const isOpen = activeModal === 'payment'
  const [sendPayment] = useCreateOrderMutation()

  const cart = useSelector((state: RootState) => state.cart.items)
  const delivery = useSelector((state: RootState) => state.delivery)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PaymentModal>()

  const onSubmit = async (data: PaymentModal) => {
    try {
      const products = cart.map((item) => ({
        id: item.id,
        price: item.price
      }))

      const response = await sendPayment({
        products,
        delivery,
        payment: {
          card: {
            name: data.name,
            number: data.numberCard,
            code: Number(data.cvv),
            expires: {
              month: Number(data.dueMonth),
              year: Number(data.expiryYear)
            }
          }
        }
      }).unwrap()

      dispatch(setOrderId(response.orderId))

      toast.success('Pagamento realizado com sucesso!')

      setTimeout(() => {
        dispatch(openModal('confirmation'))
      }, 1500)
    } catch (error: any) {
      toast.error('Erro ao processar o pagamento')
    }
  }

  const onError = () => {
    Object.values(errors).forEach((error) => {
      if (error?.message) {
        toast.error(error.message)
      }
    })
  }

  const handleBack = () => {
    dispatch(openModal('address'))
  }

  if (!isOpen) return null

  return (
    <ModalBase>
      <TitleForm>Pagamento - Valor a pagar R$ {total.toFixed(2)}</TitleForm>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FieldName htmlFor="name">Nome no cartão</FieldName>
        <Fields
          id="name"
          type="text"
          placeholder="Ex: Matheus Martins"
          {...register('name', {
            required: 'O nome no cartão é obrigatório',
            minLength: {
              value: 5,
              message: 'Digite o nome completo do cartão'
            }
          })}
        />

        <FieldsFlex>
          <FieldsContainer>
            <FieldNameFlex htmlFor="card-number">
              Número do cartão
            </FieldNameFlex>
            <FieldNumberCard
              id="card-number"
              type="text"
              inputMode="numeric"
              placeholder="Ex: 4111.1111.1111.1111"
              maxLength={16}
              {...register('numberCard', {
                required: 'O número do cartão é obrigatório',
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: 'O número do cartão deve ter 16 dígitos numéricos'
                }
              })}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '')
              }}
            />
          </FieldsContainer>

          <FieldsContainer>
            <FieldNameFlex htmlFor="cvv">CVV</FieldNameFlex>
            <FieldNumberCvv
              id="cvv"
              type="text"
              inputMode="numeric"
              placeholder="Ex: 123"
              maxLength={3}
              {...register('cvv', {
                required: 'O CVV é obrigatório',
                pattern: {
                  value: /^[0-9]{3}$/,
                  message: 'O CVV deve ter 3 números'
                }
              })}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '')
              }}
            />
          </FieldsContainer>

          <FieldsContainer>
            <FieldNameFlex htmlFor="due-month">Mês do vencimento</FieldNameFlex>
            <FieldNumber
              type="text"
              id="due-month"
              inputMode="numeric"
              placeholder="Ex: 08"
              maxLength={2}
              {...register('dueMonth', {
                required: 'Informe o mês de vencimento',
                pattern: {
                  value: /^(0[1-9]|1[0-2])$/,
                  message: 'Mês inválido (01 a 12)'
                }
              })}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '')
              }}
            />
          </FieldsContainer>

          <FieldsContainer>
            <FieldNameFlex htmlFor="expiry-year">
              Ano de vencimento
            </FieldNameFlex>
            <FieldNumber
              type="text"
              id="expiry-year"
              inputMode="numeric"
              placeholder="2030"
              maxLength={4}
              {...register('expiryYear', {
                required: 'Informe o ano de vencimento',
                pattern: {
                  value: /^(202[5-9]|203\d)$/,
                  message: 'Ano inválido (maior ou igual a 2025)'
                }
              })}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '')
              }}
            />
          </FieldsContainer>
        </FieldsFlex>

        <ButtonContainer>
          <FormButton type="submit">Finzalizar pagamento</FormButton>
          <FormButton onClick={handleBack}>
            Voltar para a edição de endereço
          </FormButton>
        </ButtonContainer>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </ModalBase>
  )
}

export default ModalPayment
