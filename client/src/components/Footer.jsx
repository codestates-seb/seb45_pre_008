import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as FooterLogo } from '../assets/images/footer-logo.svg';

const FooterComponent = styled.footer``;

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
