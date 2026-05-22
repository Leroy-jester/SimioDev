const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon">S</div>
            <span>SimioDev</span>
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

          <div className="footer-social">
            <h3>Nos Siga</h3>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 SimioDev. Todos os direitos reservados.</p>
          <p>Feito com ❤️ para desenvolvedores</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;