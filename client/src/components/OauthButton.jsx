import React from 'react'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';

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

export default function OauthButton() {
  return (
    <>
      <OAuthButtons>
        <OAuthButton bgColor="#ffffff" textColor="#000000">
          Login with Google
        </OAuthButton>
        <OAuthButton bgColor="#24292e">Login with GitHub</OAuthButton>
        <OAuthButton bgColor="#314a86">Login with Facebook</OAuthButton>
      </OAuthButtons>
    </>
  );
}
