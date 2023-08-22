import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginActions } from '../store/login.js';

const TopbarContainer = styled.div`
  z-index: 999;
  position: absolute;
  text-align: left;
  background-color: white;
  border-left: 1px solid hsl(210, 8%, 90%);
  border-right: 1px solid hsl(210, 8%, 90%);
  border-bottom: 1px solid hsl(210, 8%, 90%);
  box-shadow:
    0 1px 2px hsla(0, 0, 0, 0.05),
    0 1px 4px hsla(0, 0, 0, 0.05),
    0 2px 8px hsla(0, 0, 0, 0.05);
  display: block;
  top: 52px;
  right: calc((100% - 1264px + 24px) / 2);
  max-width: calc(100% - calc((100% - 1264px + 24px) / 2));
  width: 375px;
  overflow-y: scroll;
  overflow-x: hidden;
  min-height: 390px;
  max-height: 390px;
  color: hsl(210, 8%, 25%);
  font-size: 12px;
`;

const TopbarHeader = styled.div`
  background-color: #f1f2f3;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding: 8px 10px;
  align-items: center;
  clear: both;
  h3 {
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    display: inline-block;
    line-height: 1.3;
    margin: 0 0 1em;
    margin-bottom: 0;
    a {
      color: #0074cc;
      &:hover {
        color: #0a95ff;
      }
    }
  }
`;

const TopbarContentWrapper = styled.div`
  width: 100%;
  max-height: 300px;
  position: relative;
`;

const TopbarContent = styled.div`
  display: flex;
  padding: 2px 7px 0 7px;
  line-height: 1.3;
  &:hover {
    background-color: #e1ecf4;
  }
`;

const ContentBox = styled.div`
  padding: 8px;
  a {
    color: #0074cc;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      color: #0a95ff;
    }
    &.home {
      display: flex;
      margin: 0;
    }
    span {
      margin: 0 4px;
    }
  }
  &.go-home {
    flex: 1 auto;
    font-weight: bold;
  }

  &.log-out {
    white-space: nowrap;
  }
`;

const IconBox = styled.svg`
  width: 16px;
  height: 16px;
  flex: none;
  vertical-align: top;
  margin: 0 4px;
  padding: 0;
`;

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    dispatch(loginActions.logoutUser());

    navigate('/');
  };

  return (
    <TopbarContainer>
      <TopbarHeader>
        <h3>
          <Link to="/">current community</Link>
        </h3>
      </TopbarHeader>
      <TopbarContentWrapper>
        <TopbarContent>
          <ContentBox className="go-home">
            <Link to="/" className="home">
              <IconBox aria-hidden="true" viewBox="0 0 32 37">
                <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
                <path
                  d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                  fill="#F48024"
                ></path>
              </IconBox>
              <span>Stack Overflow</span>
            </Link>
          </ContentBox>
          <ContentBox className="log-out">
            <Link to="/help">help</Link>
            <Link to="/chat">chat</Link>
            <Link to="/" onClick={handleLogoutClick}>
              log out
            </Link>
          </ContentBox>
        </TopbarContent>
      </TopbarContentWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
