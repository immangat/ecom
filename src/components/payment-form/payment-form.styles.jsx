import styled from "styled-components";
import ButtonComponent from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`

export const FormContainer = styled.form`
height: 100px;
  min-height: 500px;
  min-width: 400px;
  
  

`

export const PaymentButton = styled(ButtonComponent)` 
    margin-top: 20px;
`