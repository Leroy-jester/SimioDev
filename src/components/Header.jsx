import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="container nav">
        <Link to="/" className="logo">
          <div className="logo-icon">S</div>
          <span>SimioDev</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Início</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/cursos" className="btn">Comece Agora</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;