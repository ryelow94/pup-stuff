import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signUp } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: coral;
  display: flex;
  align-items: center;
  justify-content: center;
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
  min-width: 40%;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-right: 5px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  margin-top: 10px;
  padding: 15px;
  cursor: pointer;
  background-color: white;

  &:hover {
    background-color: #f8f4f4;
  }
`;
const Match = styled.span`
  text-align: center;
  color: red;
  font-size: 12px;
  margin-top: 20px;
`;

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [match, setMatch] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [required, setRequired] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const validate = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      setRequired(true);
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      setValidEmail(false)
    } else {
      setValidEmail(true)
    }
    if (password !== confirm) {
      setMatch(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    validate();
    console.log(validEmail)
    if (
      required===false &&
      password===confirm &&
      validEmail===true
    ) {
      signUp(dispatch, { email, password, firstName, lastName });
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
          <Input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => setConfirm(e.target.value)}
          />
          <Agreement>
            By creating an account, I consent to the use of my personal
            information in accordance with our <b>Privacy Policy</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            Sign Up
          </Button>
        </Form>
        {match===false ? <Match>Passwords do not match</Match> : null}
        <br></br>
        {validEmail===false ? <Match>Invalid email address</Match> : null}
        <br></br>
        {required === true ? <Match>All fields must be entered</Match> : null}
      </Wrapper>
    </Container>
  );
};
