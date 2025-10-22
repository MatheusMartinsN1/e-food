import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { RootState } from '../../store/store'
import ModalBase from '../ModalBase'
import {
  Fields,
  FieldsFlex,
  FieldName,
  FieldNumber,
  TitleForm,
  FieldNameFlex,
  FormButton,
  ButtonContainer,
  ErrorText
} from './styles'
import { openModal } from '../../store/modalSlice'

type DeliveryForm = {
  name: string
  address: string
  city: string
  cep: string
  number: string
  complement?: string
}

const ModalDelivery = () => {
  const dispatch = useDispatch()
  const activeModal = useSelector((state: RootState) => state.modal.activeModal)
  const isOpen = activeModal === 'address'

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<DeliveryForm>()

  const onSubmit = (data: DeliveryForm) => {
    console.log('Dados da entrega', data)
    dispatch(openModal('payment'))
  }

  const handleBack = () => {
    dispatch(openModal('cart'))
  }

  if (!isOpen) return null

  return (
    <ModalBase>
      <TitleForm>Entrega</TitleForm>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldName htmlFor="name">Quem irá receber</FieldName>
        <Fields
          type="text"
          {...register('name', { required: 'O nome é obrigatório!' })}
          id="name"
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

        <FieldName htmlFor="address">Endereço</FieldName>
        <Fields
          {...register('address', { required: 'O endereço é obrigatório!' })}
          type="text"
          id="address"
        />
        {errors.address && <ErrorText>{errors.address.message}</ErrorText>}

        <FieldName htmlFor="city">Cidade</FieldName>
        <Fields
          {...register('city', { required: 'O nome da cidade é obrigatório!' })}
          type="text"
          id="city"
        />
        {errors.city && <ErrorText>{errors.city.message}</ErrorText>}

        <FieldsFlex>
          <div>
            <FieldNameFlex htmlFor="cep">CEP</FieldNameFlex>
            <FieldNumber
              {...register('cep', {
                required: 'O CEP é obrigatório',
                pattern: {
                  value: /^[0-9]{5}-?[0-9]{3}$/,
                  message: 'CEP inválido'
                }
              })}
              type="number"
              id="cep"
            />
            {errors.cep && <ErrorText>{errors.cep.message}</ErrorText>}
          </div>

          <div>
            <FieldNameFlex htmlFor="number">Número</FieldNameFlex>
            <FieldNumber
              {...register('number', { required: 'O número é obrigatório!' })}
              type="number"
              id="number"
            />
            {errors.number && <ErrorText>{errors.number.message}</ErrorText>}
          </div>
        </FieldsFlex>

        <FieldName htmlFor="complement">Complemento (opcional)</FieldName>
        <Fields {...register('complement')} type="text" id="complement" />

        <ButtonContainer>
          <FormButton type="submit">Continuar com o pagamento</FormButton>
          <FormButton type="button" onClick={handleBack}>Voltar para o carrinho</FormButton>
        </ButtonContainer>
      </form>
    </ModalBase>
  )
}

export default ModalDelivery
