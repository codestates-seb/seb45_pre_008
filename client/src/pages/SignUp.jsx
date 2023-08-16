import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import OauthButton from '../components/OauthButton.jsx';
import images from '../assets/images/index.js';

const SignUpContainer = styled.div`
  display: flex;
  background-color: #f1f2f3;
  justify-content: center;
  align-items: center;
`;

const SignUpExplain = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
`;

const SignUpExplainText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: first baseline;
  align-items: center;
`;

const SignImg = styled.img`
  width: 26px;
  height: 26px;
  top: 30px;
  color: #0077cc;
`;

const SignUpPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignUpForm = styled.form`
  width: 335px;
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
  border-radius: 7px;
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
      <SignUpExplain>
        <h2>Join the Stack Overflow community</h2>
        <SignUpExplainText>
          <SignImg src={images.signque} /> <p>Get unstuck - ask a question</p>
        </SignUpExplainText>
        <SignUpExplainText>
          <SignImg src={images.signvote}></SignImg>{' '}
          <p>Unlock new privileges like voting and commenting</p>
        </SignUpExplainText>
        <SignUpExplainText>
          {' '}
          <SignImg src={images.signtag}></SignImg>{' '}
          <p>Save your favorite questions, answers, watch tags, and more</p>
        </SignUpExplainText>
        <SignUpExplainText>
          <SignImg src={images.signbadge}></SignImg>{' '}
          <p>Earn reputation and badges</p>
        </SignUpExplainText>
        <SignUpExplainText>
          <p>Collaborate and share knowledge with a private group for FREE. </p>
        </SignUpExplainText>
        <SignUpExplainText>
          <p>Get Stack Overflow for Teams free for up to 50 users.</p>
        </SignUpExplainText>
      </SignUpExplain>
      <SignUpPage>
        <OauthButton />
        <SignUpForm>
          <FormLabel htmlFor="username">Display name:</FormLabel>
          <FormInput type="text" id="username" placeholder="Username" />
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput type="email" id="email" placeholder="Email" />
          <FormLabel htmlFor="password">Password:</FormLabel>
          <FormInput type="password" id="password" placeholder="Password" />
          <p>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </p>
          <SubmitButton type="submit">Sign Up</SubmitButton>
          <p>
            By clicking “Sign up”, you agree to our terms of service and
            acknowledge that you have read and understand our privacy policy and
            code of conduct.
          </p>
        </SignUpForm>
        <SignInLink href="/signin">Already have an account? Log in</SignInLink>
        <SignInLink href="/signin">
          Are you an employer? Sign up on Talent
        </SignInLink>
      </SignUpPage>
    </SignUpContainer>
  );
}
