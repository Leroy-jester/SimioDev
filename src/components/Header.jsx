import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <Link to="/" className="logo">
          <div className="logo-icon">S</div>
          <span>SimioDev</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/cursos" className="nav-link">Cursos</Link>
          <Link to="/sobre" className="nav-link">Sobre</Link>
          <Link to="/contato" className="nav-link">Contato</Link>
          <Link to="/cursos" className="btn btn-outline">Comece Agora</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;