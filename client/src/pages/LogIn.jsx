import React from "react";
import styled from "styled-components";
import { useState } from "react"
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: coral;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-color: teal;
  border-width: 5px;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: teal;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-right: 5px;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  margin-top: 10px;
  padding: 15px;
  cursor: pointer;
  background-color: white;

  &:disabled {
    color:green;
    cursor: not-allowed
  }

  &:hover {
    background-color: #f8f4f4;
  }
`;
const Link = styled.a`
   padding; 10px;
   margin: 20px;
   cursor:pointer;

   &:hover {
       background-color:rgb(18, 129, 154)
   }
`;

const Error = styled.span`
   color:red;
`

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { isFetching, error} = useSelector((state) => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { email, password})
  }
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <Button onClick={handleClick} disabled ={isFetching} >Log In</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>SIGN UP</Link>
          {error && <Error>Something went wrong</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};
