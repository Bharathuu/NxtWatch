import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 1110px;
  margin: auto;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  @media screen and (min-width: 992px) {
    width: 350px;
    flex-shrink: 0;
    padding: 64px 48px 64px 48px;
  }
`
export const LoginWebsiteLogo = styled.img`
  width: 185px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`
export const LoginButton = styled.button`
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  border-radius: 8px;
  background-color: #ob69ff;
  border: none;
  outline: none;
  cursor: pointer;
`
export const InputLabel = styled.label`
  margin-bottom: 0px;
  line-height: 12px;
  color: #475569;
`
export const PasswordInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #d7dfe9;
  color: #475569;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const UserNameInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #d7dfe9;
  color: #475569;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 14px;
  color: #ff0b37;
  font-family: 'Roboto';
  margin-bottom: opx;
  margin-top: 3px;
`
export const ShowHideContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
export const CheckboxInput = styled.input`
  margin-right: 4px;
`
