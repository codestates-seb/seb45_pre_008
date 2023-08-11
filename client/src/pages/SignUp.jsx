import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import OauthButton from '../componets/OauthButton.jsx';

const SignUpContainer = styled.div`
  display: flex;
  background-color: #f1f2f3;
  justify-content: center;
  align-items: center;
`;

const SignUpExplain = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignUpPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignUpForm = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-top: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 15px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005fa6;
  }
`;

const SignInLink = styled.a`
  text-decoration: underline;
  color: #0077cc;
  cursor: pointer;
  margin-top: 10px;
`;

export default function SignUp() {
  return (
    <SignUpContainer>
      <SignUpExplain>Join the Stack Overflow community</SignUpExplain>
      <SignUpPage>
        <OauthButton />
        <SignUpForm>
          <FormLabel htmlFor="username">Display name:</FormLabel>
          <FormInput type="text" id="username" placeholder="Username" />
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput type="email" id="email" placeholder="Email" />
          <FormLabel htmlFor="password">Password:</FormLabel>
          <FormInput type="password" id="password" placeholder="Password" />
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </SignUpForm>
        <SignInLink href="/signin">Already have an account? Log in</SignInLink>
        <SignInLink href="/signin">
          Are you an employer? Sign up on Talent
        </SignInLink>
      </SignUpPage>
    </SignUpContainer>
  );
}
