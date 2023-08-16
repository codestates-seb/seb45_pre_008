import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer.jsx';
import Nav from '../components/Nav.jsx';

const MainContainer = styled.main`
  width: 100%;
  max-width: 1264px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  max-width: 1100px;
  width: calc(100% - 164px);
  border-radius: 0;
  border: 1px solid hsl(210, 8%, 85%);
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: 24px;
`;

const LeftAside = styled.aside`
  position: sticky;
  width: auto;
  margin-bottom: 8px;
  overflow-y: auto;
  top: 56px;
  max-height: calc(100vh - 56px);
  position: sticky;
  min-width: 164px;
  padding-top: 24px;
`;

const RightAside = styled.aside`
  height: 100%;
  display: block;

  ul {
    width: 300px;
    padding: 0;
    display: block;
    text-align: left;
    align-items: center;
    height: auto;
    background-color: hsl(47, 87%, 94%);
    border-radius: 3px;
    border: 1px solid hsl(47, 65%, 84%);
    box-shadow:
      0 1px 2px hsla(0, 0%, 0%, 0.05),
      0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);

    > li {
      width: 100%;
      padding: 0 15px;
      margin: 12px 0;
      font-size: 13px;
      list-style-type: disc;
      list-style-position: inside;
    }

    .widget-header {
      width: 100%;
      height: 41px;
      padding: 15px;
      font-weight: 700;
      font-size: 12px;
      background-color: hsl(47, 83%, 91%);
      border-bottom: 1px solid hsl(47, 65%, 84%);
      list-style-type: none;
      margin: 0;
    }

    .widget-header:nth-child(4) {
      border-top: 1px solid var(--yellow-200);
    }
  }
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <LeftAside>
          <Nav />
        </LeftAside>
        <Content>
          <Outlet />
          <RightAside>
            <ul>
              <li className="widget-header">The Overflow Blog</li>
              <li>Why everyone should be an AppSec specialist (Ep. 598)</li>
              <li className="widget-header">Featured on Meta</li>
              <li>Moderation strike: Results of negotiations</li>
              <li>
                Our Design Vision for Stack Overflow and the Stack Exchange
                network
              </li>
              <li>Temporary policy: Generative AI (e.g., ChatGPT) is banned</li>
              <li>Preview of Search and Question-Asking Powered by GenAI</li>
              <li>
                Collections: A New Feature for Collectives on Stack Overflow
              </li>
              <li className="widget-header">Hot Meta Posts</li>
              <li>
                Should code-only answers that promote the author&apos;s library
                be flagged?
              </li>
              <li>
                May old questions be repeated for new version of language
                standard?
              </li>
            </ul>
          </RightAside>
        </Content>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Main;
