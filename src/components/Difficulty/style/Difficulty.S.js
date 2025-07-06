import styled from "styled-components";

export const Container = styled.div`
width: 480px;
height: 459px;
border-radius: 12px;
background-color: #C2F5FF;
display: flex; 
flex-direction: column;
align-items: center; 
justify-content: center;
`
export const Title = styled.div`
width: 208px;
height: 96px;
padding-top: 48px;
padding-bottom: 48px;
font-family: StratosSkyeng;
font-weight: 400;
font-size: 40px;
text-align: center;
color: #004980;
`

export const Button = styled.button`
width: 246px;
height: 50.px;
border-radius: 12px;
background-color: #7AC100;

`
export const InputContainer = styled.button`
font-size: 14px;
color: #333;
display: inline-block;
margin-right: 10px;
letter-spacing: 0.5px;
`
export const Input = styled.input`
display: none;
`
export const Label = styled.label`
 width: 98px;
 height: 98px;
 display: inline-block;
 padding: 2px 9px;
 cursor: pointer;
 border: 1px solid #00C2FF;
 border-radius: 5px;
 border-radius: 12px;
 background-color: #C2F5FF;

 &:checked + label {
    background-color: #00C2FF;
    border: 1px solid #00C2FF;
    color: #fff;
}

 &:hover {
  background-color: #B9EA2C;
  border: 1px solid #B9EA2C;
  }
`