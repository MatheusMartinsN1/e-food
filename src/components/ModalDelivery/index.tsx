import ModalBase from '../ModalBase'
import {
  Fields,
  FieldsFlex,
  FieldName,
  FieldNumber,
  TitleForm,
  FieldNameFlex,
  FormButton,
  ButtonContainer
} from './styles'

const ModalDelivery = () => {
  return (
    <ModalBase>
      <TitleForm>Entrega</TitleForm>

      <form>
        <FieldName htmlFor="name">Quem irá receber</FieldName>
        <Fields type="text" id="name" />

        <FieldName htmlFor="address">Endereço</FieldName>
        <Fields type="text" id="address" />

        <FieldName htmlFor="city">Cidade</FieldName>
        <Fields type="text" id="city" />

        <FieldsFlex>
          <div>
            <FieldNameFlex htmlFor="cep">CEP</FieldNameFlex>
            <FieldNumber type="number" id="cep" />
          </div>

          <div>
            <FieldNameFlex htmlFor="number">Número</FieldNameFlex>
            <FieldNumber type="number" id="number" />
          </div>
        </FieldsFlex>

        <FieldName htmlFor="complement">Complemento (opcional)</FieldName>
        <Fields type="text" id="complement" />

        <ButtonContainer>
          <FormButton>Continuar com o pagamento</FormButton>
          <FormButton>Voltar para o carrinho</FormButton>
        </ButtonContainer>
      </form>
    </ModalBase>
  )
}

export default ModalDelivery
