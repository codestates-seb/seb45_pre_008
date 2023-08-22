import React, { useState, useRef, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import OauthButton from '../components/OauthButton.jsx';
import images from '../assets/images/index.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice.js';
import { useNavigate } from 'react-router-dom';

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
  margin-right: 10px;
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
  margin-top: 10px;
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

const EmailError = styled.div`
  font-size: 14px;
  color: #d03932;
  margin-top: 0.5rem;
`;

const PasswordError = styled.div`
  font-size: 14px;
  color: #d03932;
  margin-top: 5px;
`;

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError('이메일을 입력해주세요');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('유효하지 않은 이메일 주소입니다');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요');
    } else if (!/(?=.*[A-Za-z])(?=.*\d).{8,}/.test(password)) {
      setPasswordError(
        '비밀번호는 적어도 1개의 문자와 1개의 숫자를 포함하여 8자 이상이어야 합니다',
      );
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    validateEmail();
    validatePassword();

    if (!username || !email || !password) {
      console.log('유효성 검사 실패');
    } else {
      // 더미 사용자 데이터 생성
      const newUser = { username, email, password };

      dispatch(addUser(newUser));

      navigate('/login');

      console.log('더미 회원가입 성공:', newUser);
    }

    // // 이메일과 비밀번호 모두 유효한 경우, 회원가입 로직을 실행합니다
    // if (!emailError && !passwordError) {
    //   try {
    //     // 여기에 실제 회원가입 API 호출 등의 로직을 수행합니다.
    //     const response = await fetch('/api/signup', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ email, password }),
    //     });

    //     if (response.ok) {
    //       // 회원가입이 성공한 경우, 사용자를 로그인 페이지로 리디렉션하거나
    //       // 필요한 로직을 수행합니다.
    //       console.log('회원가입 성공!');
    //     } else {
    //       // 회원가입이 실패한 경우, 적절한 처리를 수행합니다.
    //       console.error('회원가입 실패');
    //     }
    //   } catch (error) {
    //     console.error('오류 발생:', error);
    //   }
    // }
  };

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
        <SignUpForm onSubmit={handleSubmit}>
          <FormLabel htmlFor="username">Display name:</FormLabel>
          <FormInput
            type="text"
            id="username"
            placeholder="Username"
            onChange={handleUsernameChange}
          />
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            type="email"
            id="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
          <EmailError>{emailError}</EmailError>

          <FormLabel htmlFor="password">Password:</FormLabel>
          <FormInput
            type="password"
            id="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            disabled={false}
          />
          <PasswordError>{passwordError}</PasswordError>

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
