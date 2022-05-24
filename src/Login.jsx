import React from "react";
import { Button, Description, Input, Info, InputWrapper, PassIcon, Title, UserIcon, Wrapper, CheckBox, Span, Forget } from "./style";

const Login = ()=>{
    return(
        <Wrapper>
           <Description>
               Already have an account
           </Description>
           <Title>Login in here</Title>
           <InputWrapper>
              <UserIcon />
              <Input placeholder="Username" />
           </InputWrapper>
           <InputWrapper>
              <PassIcon />
              <Input placeholder="Password" />
           </InputWrapper>
           <Info>
               <Span>
               <CheckBox type="checkbox" /> 
                Keep me loged in
               </Span>
               <Button select> Log In </Button>
           </Info>
           <Forget>Forget Password?</Forget>
        </Wrapper>
    )
}
export default Login;