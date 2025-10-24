import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { selectCartTotal } from '../../store/cartSlice'
import ModalBase from '../ModalBase'

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
import { openModal } from '../../store/modalSlice'
import { FieldNumberCard, FieldNumberCvv, FieldsContainer } from './styles'
import { RootState } from '../../store/store'

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

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PaymentModal>()

  const onSubmit = (data: PaymentModal) => {
    console.log('Dados do pagamento', data)
    toast.success('Pagamento realizado com sucesso!')

    setTimeout(() => {
      dispatch(openModal('confirmation'))
    }, 1500)
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
          {...register('name', {
            required: 'O nome no cartão é obrigatório',
            minLength: {
              value: 5,
              message: 'Digite o nome completo do cartão'
            }
          })}
        ></Fields>

        <FieldsFlex>
          <FieldsContainer>
            <FieldNameFlex htmlFor="card-number">
              Número do cartão
            </FieldNameFlex>
            <FieldNumberCard
              id="card-number"
              type="text"
              maxLength={16}
              {...register('numberCard', {
                required: 'O número do cartão é obrigatório',
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: 'O número do cartão deve ter 16 dígitos numéricos'
                }
              })}
            />
          </FieldsContainer>

          <FieldsContainer>
            <FieldNameFlex htmlFor="cvv">CVV</FieldNameFlex>
            <FieldNumberCvv
              id="cvv"
              type="text"
              maxLength={3}
              {...register('cvv', {
                required: 'O CVV é obrigatório',
                pattern: {
                  value: /^[0-9]{3}$/,
                  message: 'O CVV deve ter 3 números'
                }
              })}
            />
          </FieldsContainer>

          <FieldsContainer>
            <FieldNameFlex htmlFor="due-month">Mês do vencimento</FieldNameFlex>
            <FieldNumber
              type="text"
              id="due-month"
              maxLength={2}
              {...register('dueMonth', {
                required: 'Informe o mês de vencimento',
                pattern: {
                  value: /^(0[1-9]|1[0-2])$/,
                  message: 'Mês inválido (01 a 12)'
                }
              })}
            />
          </FieldsContainer>

          <FieldsContainer>
            <FieldNameFlex htmlFor="expiry-year">
              Ano de vencimento
            </FieldNameFlex>
            <FieldNumber
              type="text"
              id="expiry-year"
              maxLength={4}
              {...register('expiryYear', {
                required: 'Informe o ano de vencimento',
                pattern: {
                  value: /^(202[5-9]|203\d)$/,
                  message: 'Ano inválido (maior ou igual a 2025)'
                }
              })}
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
