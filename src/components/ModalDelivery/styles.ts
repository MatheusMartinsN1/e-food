import styled from 'styled-components'
import { Colors, media } from '../../style'

export const FormContainer = styled.form`
  margin-left: 8px;
`

export const TitleForm = styled.h4`
  color: ${Colors.white};
  margin: 32px 0px 16px 8px;
`

export const FieldsFlex = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;
`

export const Fields = styled.input`
  width: 344px;
  margin: 8px auto;
  display: block;
  padding: 6px;
  background-color: ${Colors.bege};
  border: none;

  ${media.mobile} {
    width: 200px;
  }
`

export const FieldName = styled.label`
  display: block;
  color: ${Colors.white};
  margin-left: 8px;
`

export const FieldNameFlex = styled(FieldName)`
  margin-left: 0px;
`

export const FieldNumber = styled(Fields)`
  width: 158px;
`

export const FormButton = styled.button`
  background-color: ${Colors.bege};
  color: ${Colors.red};
  border: none;
  display: block;
  cursor: pointer;
  font-weight: bold;
  padding: 6px;
  margin: 0px auto;
  margin-bottom: 8px;
  width: 344px;

  ${media.mobile} {
    width: 200px;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 24px;
`

export const ErrorText = styled.p`
  font-weight: bold;
  color: ${Colors.white};
  text-decoration: underline;
  text-align: center;
  font-size: small;
  padding: 10px 0px;
`
