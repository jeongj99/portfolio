import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          Jeong
        </h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.linkedin.com/in/jeongj99/" className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin" />
          </a>
          <a href="https://facebook.com/jaeyun0616" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook" />
          </a>
          <a href="https://www.instagram.com/jj.alex99" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram" />
          </a>
        </div>
        <span className="footer__copy">&#169; Jae Yun Jeong. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;