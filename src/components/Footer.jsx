import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-content">

          <div className="footer-logo">
            <div className="logo-icon">L</div>
            <span>Lorem Ipsum</span>
          </div>

          <div className="footer-links">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/cursos">Cursos</a></li>
              <li><a href="/sobre">Sobre</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Cursos Populares</h3>
            <ul>
              <li><a href="#">HTML5 Completo</a></li>
              <li><a href="#">CSS3 Avançado</a></li>
              <li><a href="#">JavaScript Moderno</a></li>
              <li><a href="#">Full Stack Developer</a></li>
            </ul>
          </div>

          <div>
            <h3>Nos siga</h3>

            <div className="footer-social">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Lorem Ipsum. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para desenvolvedores</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;