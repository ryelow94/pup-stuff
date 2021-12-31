import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
   background-color:coral;
   display: flex;
   align-items:center;
   justify-content: center;


`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: teal;
     
`
const Title = styled.h1`
font-size:24px;
font-weight: 300;
`

const Form = styled.form`
    display:flex;
    flex-wrap:wrap;

`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin-top:20px;
    margin-bottom:10px;
    margin-right: 5px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size:12px;
    margin-top: 20px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    margin-top:10px;
   padding: 15px;
   cursor: pointer;
   background-color:white;

   &:hover {
       background-color:#f8f4f4;
   }
`

export const SignUp = () => {
    return (
       <Container>
           <Wrapper>
               <Title>SIGN UP</Title>
               <Form>
                   <Input placeholder="First Name"/>
                   <Input placeholder="Last Name"/>
                   <Input placeholder="Email"/>
                   <Input placeholder="Password"/>
                   <Input placeholder="Confirm Password" />
                   <Agreement>By creating an account, I consent to the use of my personal information in accordance with our <b>Privacy Policy</b></Agreement>
                   <Button>Sign Up</Button>
               </Form>
           </Wrapper>
       </Container>
    )
}
