import styled from 'styled-components';
import { ReactComponent as InboxIcon } from '../assets/images/user-inbox.svg';
import { ReactComponent as TrophyIcon } from '../assets/images/user-trophy.svg';
import { ReactComponent as HelpIcon } from '../assets/images/user-help.svg';
import { ReactComponent as MenuIcon } from '../assets/images/user-menu.svg';
import Topbar from './Topbar.jsx';
import { useState } from 'react';

const UserNav = styled.nav`
  height: 53px;
  display: block;
`;

const UserNavContainer = styled.ul`
  overflow-x: auto;
  padding-right: 12px;
  margin-left: auto;
  height: 100%;
  display: flex;
`;

const UserNavContent = styled.li`
  display: inline-flex;
  fill: #525960;
  background-color: ${(props) => props.backColor || 'transparent'};
  &:hover {
    background-color: hsl(210, 8%, 90%);
    fill: currentColor;
  }
`;

const ContentWrapper = styled.a`
  display: inline-flex;
  color: #525960;
  align-items: center;
  padding: 0 10px;
  position: relative;
  white-space: nowrap;
  cursor: pointer;
`;

const UserMenu = () => {
  const [isDrop, setIsDrop] = useState(false);

  const handleDrop = () => {
    setIsDrop(!isDrop);
  };

  return (
    <UserNav>
      <UserNavContainer>
        <UserNavContent></UserNavContent>
        <UserNavContent>
          <ContentWrapper>
            <InboxIcon />
          </ContentWrapper>
        </UserNavContent>
        <UserNavContent>
          <ContentWrapper>
            <TrophyIcon />
          </ContentWrapper>
        </UserNavContent>
        <UserNavContent>
          <ContentWrapper>
            <HelpIcon />
          </ContentWrapper>
        </UserNavContent>
        <UserNavContent
          onClick={handleDrop}
          backColor={!isDrop ? null : 'hsl(210, 8%, 90%)'}
        >
          <ContentWrapper>
            <MenuIcon />
          </ContentWrapper>
        </UserNavContent>
      </UserNavContainer>
      {isDrop && <Topbar />}
    </UserNav>
  );
};

export default UserMenu;
