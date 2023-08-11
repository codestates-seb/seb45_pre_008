import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as HeaderLogo } from '../assets/images/header-logo.svg';

const HeaderComponent = styled.header`
  width: 100%;
  position: sticky;
  z-index: 10;
  height: 56px;
  border-top: 3px solid hsl(27, 90%, 55%);
  background-color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: center;
  box-shadow:
    0 1px 2px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  .header-container {
    width: 1264px;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: 100%;
      margin: 0;
      padding: 0 8px;
      display: flex;
      align-items: center;
      background-color: transparent;

      .logo-img {
        display: block;
        width: 150px;
        height: 30px;
        margin-top: -4px;
        margin-left: 0;
      }
    }

    .gnb {
      display: flex;
      align-items: center;
      padding: 2px 0;
      margin: -2px;
      color: var(--black-600);
      font-size: 13px;

      li {
        padding: 6px 12px;
        margin: 2px;
      }
    }

    .button-container {
      display: flex;
    }

    .button-container button {
      padding: 8px 10px;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <HeaderComponent>
      <div className="header-container">
        <span className="logo">
          <Link to="/">
            <HeaderLogo className="logo-img" />
          </Link>
        </span>
        <ul className="gnb">
          <li>About</li>
          <li>Products</li>
          <li>For Teams</li>
        </ul>
        <div className="button-container">
          <button onClick={handleLogin} border="var(--powder-500)">
            Log in
          </button>
          <button onClick={handleSignup}>Sign up</button>
        </div>
      </div>
    </HeaderComponent>
  );
};

export default Header;
