import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as HeaderLogo } from '../assets/images/header-logo.svg';
import { Button } from './Button.jsx';
import Search from './Search.jsx';

const HeaderComponent = styled.header`
  width: 100%;
  position: fixed;
  /* top: 0; */
  margin-top: -56px;
  z-index: 1000;
  height: 56px;
  border-top: 3px solid hsl(27, 90%, 55%);
  background-color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0 1px 2px hsla(0, 0%, 0%, 0.05),
    0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;
const HeaderContainer = styled.div`
  width: 1264px;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  height: 100%;
  margin: 0;
  padding: 0 8px;
  display: flex;
  align-items: center;
  background-color: transparent;
  &:hover {
    background-color: hsl(210, 8%, 90%);
  }
`;

const LogoImage = styled(HeaderLogo)`
  display: block;
  width: 150px;
  height: 30px;
  margin-top: -4px;
  margin-left: 0;
`;

const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  padding: 2px 0;
  margin: -2px;
  color: var(--black-600);
  font-size: 13px;

  li {
    cursor: pointer;
    border-radius: 1000px;
    padding: 6px 12px;
    margin: 2px;
    &:hover {
      background-color: hsl(210, 8%, 90%);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <HeaderComponent>
      <HeaderContainer>
        <LogoLink to="/">
          <LogoImage />
        </LogoLink>
        <NavigationList>
          <li>About</li>
          <li>Products</li>
          <li>For Teams</li>
        </NavigationList>
        <Search />
        <ButtonContainer>
          <Button
            color={'#39739D'}
            backColor={'#E1ECF4'}
            hoverColor={'#B3D3EA'}
          >
            <Link to="/login">Log in</Link>
          </Button>
          <Button margin={'0 0 0 4px'}>
            <Link to="/signup">Sign up</Link>
          </Button>
        </ButtonContainer>
      </HeaderContainer>
    </HeaderComponent>
  );
};

export default Header;
