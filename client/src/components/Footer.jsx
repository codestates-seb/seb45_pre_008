import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as FooterLogo } from '../assets/images/footer-logo.svg';

const FooterComponent = styled.footer`
  width: 100%;
  background-color: hsl(210, 8%, 15%);
  color: hsl(210, 8%, 60%);

  .footer-container {
    max-width: 1264px;
    width: 100%;
    margin: 0 auto;
    padding: 32px 12px 12px;
    display: flex;
    flex-flow: row wrap;
    @media screen and (max-width: 980px) {
      flex-direction: column;
      padding: 24px;
    }

    .footer-logo {
      flex: 0 0 64px;
      margin: -12px 0 32px;
      @media screen and (max-width: 980px) {
        flex: auto;
      }
    }

    .footer-menu--container {
      display: flex;
      flex: 2 1 auto;
      @media screen and (max-width: 980px) {
        flex-direction: column;
      }
      > ul {
        flex: 1 0 auto;
        padding: 0 12px 24px 0;
        > h5 {
          margin: 0 0 12px;
          color: hsl(210, 8%, 75%);
        }
        > li {
          line-height: 2;
          font-size: 13px;
          @media screen and (max-width: 980px) {
            float: left;
            padding-right: 12px;
          }
        }
      }
    }

    .api-menu {
      margin-top: 16px;
      @media screen and (max-width: 980px) {
        margin: 0;
      }
    }

    .sns-copyright {
      display: flex;
      flex-direction: column;
      flex: 1 1 150px;
      font-size: 11px;
      @media screen and (max-width: 980px) {
        margin-top: 24px;
        flex: 1 1 auto;
      }

      .sns-container {
        > ul {
          padding: 0;
          display: flex;
          > li {
            margin-left: 12px;
            padding: 4px 0;

            &:first-child {
              margin: 0;
            }
          }
        }
      }

      .copyright-container {
        margin: auto 0 24px;
        @media screen and (max-width: 980px) {
          margin: 0;
        }
        > p {
          > span {
            > a {
              text-decoration: underline;
              color: inherit;
            }
          }
        }
      }

      .revision {
        display: block;
        @media screen and (max-width: 980px) {
          display: contents;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterComponent>
      <section className="footer-container">
        <div className="footer-logo">
          <Link to={'/'}>
            <FooterLogo />
          </Link>
        </div>
        <div className="footer-menu--container">
          <ul>
            <h5>
              <Link to={'/'}>STACK OVERFLOW</Link>
            </h5>
            <li>
              {/* 연결 추후에 질문 게시판으로 바꿔야 함 */}
              <Link to={'/'}>Questions</Link>
            </li>
            <li>Help</li>
          </ul>
          <ul>
            <h5>PRODUCTS</h5>
            <li>Teams</li>
            <li>Advertising</li>
            <li>Collectives</li>
            <li>Talent</li>
          </ul>
          <ul>
            <h5>COMPANY</h5>
            <li>About</li>
            <li>Press</li>
            <li>Work Here</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
            <li>Cookie Settings</li>
            <li>Cookie Policy</li>
          </ul>
          <ul>
            <h5>STACK EXCHANGE NETWORK</h5>
            <li>Technology</li>
            <li>Culture & recreation</li>
            <li>Life & arts</li>
            <li>Science</li>
            <li>Professional</li>
            <li>Business</li>
            <li className="api-menu">API</li>
            <li>Data</li>
          </ul>
        </div>
        <div className="sns-copyright">
          <div className="sns-container">
            <ul>
              <li>
                <a href="https://stackoverflow.blog/?blb=1">Blog</a>
              </li>
              <li>
                <a href="https://www.facebook.com/officialstackoverflow/">
                  FaceBook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/stackoverflow">Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/stack-overflow">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/thestackoverflow/">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright-container">
            <p>
              Site design / logo © 2023 Stack Exchange Inc; user contributions
              licensed under&nbsp;
              <span>
                <a href="https://stackoverflow.com/help/licensing">CC BY-SA</a>
              </span>
              .<span className="revision">rev 2023.8.9.43572</span>
            </p>
          </div>
        </div>
      </section>
    </FooterComponent>
  );
};

export default Footer;
