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
          id="name"
          placeholder="Ex: Matheus Martins"
          {...register('name', { required: 'O nome é obrigatório!' })}
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

        <FieldName htmlFor="address">Endereço</FieldName>
        <Fields
          type="text"
          id="address"
          placeholder="Ex: Avenida Paulista"
          {...register('address', { required: 'O endereço é obrigatório!' })}
        />
        {errors.address && <ErrorText>{errors.address.message}</ErrorText>}

        <FieldName htmlFor="city">Cidade</FieldName>
        <Fields
          type="text"
          id="city"
          placeholder="EX: São Paulo"
          {...register('city', { required: 'O nome da cidade é obrigatório!' })}
        />
        {errors.city && <ErrorText>{errors.city.message}</ErrorText>}

        <FieldsFlex>
          <div>
            <FieldNameFlex htmlFor="cep">CEP</FieldNameFlex>
            <FieldNumber
              inputMode="numeric"
              type="text"
              id="cep"
              placeholder="Ex: 12345-678"
              {...register('cep', {
                required: 'O CEP é obrigatório',
                pattern: {
                  value: /^[0-9]{5}-?[0-9]{3}$/,
                  message: 'CEP inválido'
                }
              })}
              onInput={(e) => {
                let value = e.currentTarget.value.replace(/\D/g, '')
                if (value.length > 8) value = value.slice(0, 8)
                if (value.length > 5)
                  value = `${value.slice(0, 5)}-${value.slice(5)}`
                e.currentTarget.value = value
              }}
            />
            {errors.cep && <ErrorText>{errors.cep.message}</ErrorText>}
          </div>

          <div>
            <FieldNameFlex htmlFor="number">Número</FieldNameFlex>
            <FieldNumber
              type="text"
              id="number"
              inputMode="numeric"
              placeholder="Ex: 123"
              {...register('number', { required: 'O número é obrigatório!' })}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '')
              }}
            />
            {errors.number && <ErrorText>{errors.number.message}</ErrorText>}
          </div>
        </FieldsFlex>

        <FieldName htmlFor="complement">Complemento (opcional)</FieldName>
        <Fields {...register('complement')} type="text" id="complement" />

        <ButtonContainer>
          <FormButton type="submit">Continuar com o pagamento</FormButton>
          <FormButton type="button" onClick={handleBack}>
            Voltar para o carrinho
          </FormButton>
        </ButtonContainer>
      </form>
    </ModalBase>
  )
}

export default ModalDelivery
