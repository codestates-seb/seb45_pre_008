import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import images from '../assets/images/index.js';
import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';

const OAuthButtons = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OAuthButton = styled.button`
  background-color: ${(props) => props.bgColor || '#0077cc'};
  color: ${(props) => props.textColor || '#fff'};
  padding: 8px 12px;
  border: none;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
  margin-top: 10px;
  width: 325px;
  border-radius: 5px;
  height: 40px;
  &:hover {
    filter: brightness(90%);
  }
`;

const OAuthButtonImg = styled.img`
  position: relative;
  left: -5px;
  top: 3px;
`;

const FacebookLoginButton = styled(FacebookLogin)`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border: none;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
  width: 325px;
  height: 40px;
  color: #fff;
  background-color: #314a86;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(90%);
  }
`;

const FacebookButtonContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: -5px;
  transition: filter 0.3s;
`;

export default function OauthButton() {
  const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const FACEBOOK_CLIENT_ID = process.env.REACT_APP_FACEBOOK_CLIENT_ID;
  const googleSocialLogin = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
  });

  const githubSocialLogin = () => {
    const loginUri = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000`;
    window.location.href = loginUri;
  };
  return (
    <>
      <OAuthButtons>
        <OAuthButton
          bgColor="#ffffff"
          textColor="#000000"
          onClick={googleSocialLogin}
        >
          <OAuthButtonImg src={images.google} alt="" />
          Login with Google
        </OAuthButton>
        <OAuthButton bgColor="#24292e" onClick={githubSocialLogin}>
          <OAuthButtonImg src={images.github} alt="" />
          Login with GitHub
        </OAuthButton>
        {/* <OAuthButton bgColor="#314a86">
          <OAuthButtonImg src={images.facebook} alt="" />
          Login with Facebook
        </OAuthButton> */}

        <FacebookLoginButton
          appId={FACEBOOK_CLIENT_ID}
          onSuccess={(response) => {
            console.log('Login Success!');
            console.log('id: ', response.id);
          }}
          onFail={(error) => {
            console.log('Login Failed!');
            console.log('status: ', error.status);
          }}
          onProfileSuccess={(response) => {
            console.log('Get Profile Success!');
            console.log('name: ', response.name);
          }}
        >
          <FacebookButtonContent>
            <img
              src={images.facebook}
              alt=""
              style={{
                position: 'relative',
                left: '-5px',
                transition: 'filter 0.3s',
              }}
            />
            Login with Facebook
          </FacebookButtonContent>
        </FacebookLoginButton>
      </OAuthButtons>
    </>
  );
}
