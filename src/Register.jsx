import React from "react";
import { Description,UserIcon, InputWrapper, PassIcon, Input, Title, Wrapper, Button } from "./style";

const Register = ()=>{
 return(
     <Wrapper>
        <Description>
            Do not an account
        </Description>
        <Title>Register Now</Title>
        <InputWrapper>
              <UserIcon />
              <Input placeholder="Username" />
        </InputWrapper>
        <InputWrapper>
              <PassIcon />
              <Input placeholder="Username" />
        </InputWrapper>
        <InputWrapper>
              <PassIcon />
              <Input placeholder="Username" />
        </InputWrapper>
        <Button> Log In </Button>
     </Wrapper>
 )
}
export default Register;