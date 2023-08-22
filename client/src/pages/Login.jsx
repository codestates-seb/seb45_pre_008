import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import stackoverflow from '../assets/images/stackoverflow.svg';
import styled from 'styled-components';
import OauthButton from '../components/OauthButton.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { loginActions } from '../store/login.js';
import { useNavigate } from 'react-router-dom';

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f2f3;
`;

const Logo = styled.img`
  width: 35px;
  height: 37px;
  margin-bottom: 10px;
`;

const LoginForm = styled.form`
  width: 335px;
  height: 225px;
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

const FormField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const ForgotPasswordButton = styled.button`
  background-color: transparent;
  color: #0077cc;
  border: none;
  cursor: pointer;
  font-size: 12px;
  margin-top: 5px;
`;

const Extend = styled.p`
  margin-top: 20px;
`;

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const users = useSelector((state) => state.user);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (user) {
      dispatch(loginActions.loginUserSuccess());
      console.log('로그인 성공:', user);
      navigate('/');

      // 로그인 성공 처리 로직 추가
    } else {
      console.log('로그인 실패: 아이디 또는 비밀번호가 일치하지 않습니다');
    }
  };

  return (
    <>
      <LoginPage>
        <Logo src={stackoverflow} alt="Stack Overflow Logo" />
        <OauthButton />
        <LoginForm onSubmit={handleLogin}>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormField>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <ForgotPasswordButton>Forgot Password?</ForgotPasswordButton>
          </FormField>
          <FormInput
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="button" onClick={handleLogin}>
            Login
          </SubmitButton>
        </LoginForm>
        <Extend>Don &lsquo;t have an account? Sign up</Extend>
        <Extend>Are you an employer? Sign up on Talent</Extend>
      </LoginPage>
    </>
  );
}
