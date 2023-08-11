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
    padding: 6px 12px;
    margin: 2px;
  }
`;

const SearchbarContainer = styled.div`
  position: relative;
  flex-grow: 1;
  margin: 0;
`;

const SearchboxInput = styled.input`
  width: 100%;
  padding: 7.8px 9.1px 7.8px 32px;
  display: block;
  line-height: calc((13 + 2) / 13);
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const ActionButton = styled.button`
  padding: 8px 10px;
`;

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => () => {
    navigate(path);
  };

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
        <SearchbarContainer>
          <SearchboxInput
            className="searchbox"
            type="text"
            placeholder="Search..."
          />
        </SearchbarContainer>
        <ButtonContainer>
          <ActionButton onClick={handleNavigation('/login')}>
            Log in
          </ActionButton>
          <ActionButton onClick={handleNavigation('/signup')}>
            Sign up
          </ActionButton>
        </ButtonContainer>
      </HeaderContainer>
    </HeaderComponent>
  );
};

export default Header;
