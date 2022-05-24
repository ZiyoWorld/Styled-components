import styled from 'styled-components';
import { ReactComponent as User } from './assets/usename.svg';
import { ReactComponent as Pass } from './assets/passswod.svg';

export const Container = styled.div`
background-color: #2A393E;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
color:  white;
`
export const Wrapper = styled.div`
 width: 360px;
 height: 380px;
 border: 2px solid #445859;
 margin: 10px;
 border-radius: 5px;
 display:flex;
 justify-content: flex-start;
 align-items: center;
 flex-direction: column;
 padding: 30px;
 box-sizing: border-box;
`

export const Description = styled.div`
color: white;
font-weight: 600;
font-size: 20px;

`
export const Title = styled.div`    
color: #E7C961;
font-size: 28px;

`
export const InputWrapper = styled.div`
 display: flex;
 width: 100%;
 position: relative;
`
export const Input =styled.input`
width: 100%;
height: 45px;
border-radius: 4px;
background-color: rgba(104,105, 102, .5);
border: 1px solid #354545;
margin-top: 20px;
padding: 0 35px;
outline: none;
color: white;
font-size: 20px;

`
export const UserIcon = styled(User)`
width: 20px;
height: 20px;
position: absolute;
top: 50%;
left: 10px;

`
export const PassIcon = styled(Pass)`
width: 20px;
height: 20px;
position: absolute;
top: 50%;
left: 10px;

`

export const Button = styled.button`
width: 123px;
height: 45px;
background: #00908D;
font-width: 700;
color:white;
font-size: 20px;
margin-top: ${({select})=> select ? "0": "20px"};
margin-left: auto;
border: 0;
outline: none;
border-radius: 4px;
`

export const Info = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items:center;
margin-top: 20px;
`

export const CheckBox = styled.input`
width:40px;
height: 40px;
background-color:  rgba(104, 105, 102, .1);
border: 1px solid #354545;
margin-right: 10px;
`

export const Span = styled.span`
display:flex;
width: 120px;
justify-content: center;
align-items: center;
`
export const Forget = styled.div`
margin-left: auto;
margin-top: 20px;
font-size:20px;
color:#fff;
font-weight: 600;
`
