import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as QuestionIcon } from '../assets/images/question.svg';
import styled from 'styled-components';

const Navigation = styled.nav`
  width: 100%;
`;

const NavItem = styled.li`
  &.nav-public {
    padding: 0;
    margin: 16px 0 4px 8px;
    color: #6a737c;
    font-size: 11px;
  }
`;

const NavLink = styled(Link)`
  padding: ${(props) => props.padding || '4px 4px 4px 30px'};
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #525960;
  fill: #525960;
  .question-icon {
    margin-left: -1px;
    margin-right: 4px;
    width: 18px;
    height: 18px;
  }
  &.clicked {
    fill: currentColor;
    background: #f1f2f3;
    font-weight: bold;
    color: #0c0d0e;
    border-right: 3px solid rgb(244, 130, 37);
  }
`;

const NavBox = styled.div`
  display: flex;
  align-items: center;
  box-sizing: inherit;
`;

const NavBoxItem = styled.div`
  line-height: 26px;
`;

const Nav = () => {
  const location = useLocation();

  return (
    <Navigation>
      <ul>
        <NavItem>
          <NavLink
            className={location.pathname === '/' ? 'clicked' : ''}
            padding={'4px 4px 4px 8px'}
            to="/"
          >
            <NavBox>
              <NavBoxItem>Home</NavBoxItem>
            </NavBox>
          </NavLink>
        </NavItem>
        <NavItem className="nav-public">PUBLIC</NavItem>
        <NavItem>
          <NavLink
            className={
              location.pathname === '/questions' ||
              location.pathname === '/search'
                ? 'clicked'
                : ''
            }
            padding={'4px 4px 4px 8px'}
            to="/questions"
          >
            <QuestionIcon className="question-icon" />
            <NavBox>
              <NavBoxItem>Questions</NavBoxItem>
            </NavBox>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={location.pathname === '/tags' ? 'clicked' : ''}
            to="/tags"
          >
            <NavBox>
              <NavBoxItem>Tags</NavBoxItem>
            </NavBox>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={location.pathname === '/users' ? 'clicked' : ''}
            to="/users"
          >
            <NavBox>
              <NavBoxItem>Users</NavBoxItem>
            </NavBox>
          </NavLink>
        </NavItem>
      </ul>
    </Navigation>
  );
};

export default Nav;
