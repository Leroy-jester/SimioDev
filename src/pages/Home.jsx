import './home.css'
import './cursos.css'
import CSS3 from '../assets/CSS3.png'
import HTML5 from '../assets/HTML5.png'
import JS from '../assets/javascript.png'
import fullstack from '../assets/FullStack2.png'
import { YoutubeVideo } from '../components/Youtube'

const Home = () => {
  return (
    <>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Aprenda Programação do Zero ao Avançado</h1>
          <p>Domine HTML, CSS e JavaScript com projetos práticos e torne-se um desenvolvedor web completo</p>
          <YoutubeVideo videoId="AD7eifiEiJ8"/>
          <div className="hero-buttons">
            <a href="/cursos" className="btn btn-primary">Começar Agora</a>
            <a href="/sobre" className="btn btn-outline">Saiba Mais</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">10k+</div>
              <div className="stat-label">Alunos Formados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Horas de Conteúdo</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9</div>
              <div className="stat-label">Avaliação Média</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Suporte Dedicado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Por Que Escolher o SimioDev?</h2>
            <p>Nosso método único combina teoria sólida com prática intensiva para garantir seu sucesso</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Aprendizado Estruturado</h3>
              <p>Cursos organizados em módulos progressivos que guiam seu desenvolvimento do básico ao avançado</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Projetos Reais</h3>
              <p>Aprenda construindo projetos do portfólio que você pode mostrar para recrutadores</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Foco em Carreira</h3>
              <p>Preparação específica para o mercado de trabalho com dicas de entrevistas e portfólio</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Comunidade Ativa</h3>
              <p>Acesse nossa comunidade exclusiva para tirar dúvidas e networkear com outros desenvolvedores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="courses">
        <div className="container">
          <div className="section-title">
            <h2>Nossos Cursos Destacados</h2>
            <p>Escolha o caminho que melhor se adapta aos seus objetivos</p>
          </div>
          <div className="course-slider">
            {/* HTML Course */}
            <div className="course-card">
              <div className="course-image">
                <img src={HTML5} alt="HTML5 Course" />
              </div>
              <div className="course-content">
                <h3>HTML5 Semântico e Acessível</h3>
                <p>Aprenda a estruturar páginas web modernas com as melhores práticas de semântica e acessibilidade</p>
              </div>
              <div className="course-footer">
                <span className="course-price">R$ 99,90</span>
                <a href="/cursos" className="btn btn-outline">Ver Detalhes</a>
              </div>
            </div>

            {/* CSS Course */}
            <div className="course-card">
              <div className="course-image">
                <img src={CSS3} alt="CSS3 Course" />
              </div>
              <div className="course-content">
                <h3>CSS3 Avançado: Flexbox, Grid & Animações</h3>
                <p>Domine técnicas modernas de estilização para criar layouts responsivos e efeitos visuais impressionantes</p>
              </div>
              <div className="course-footer">
                <span className="course-price">R$ 99,90</span>
                <a href="/cursos" className="btn btn-outline">Ver Detalhes</a>
              </div>
            </div>

            {/* JavaScript Course */}
            <div className="course-card">
              <div className="course-image">
                <img src={JS} alt="JavaScript Course" />
              </div>
              <div className="course-content">
                <h3>JavaScript Moderno: ES6+ & DOM Manipulation</h3>
                <p>Aprenda a criar aplicações interativas e dinâmicas com o linguagem mais utilizada da web</p>
              </div>
              <div className="course-footer">
                <span className="course-price">R$ 149,90</span>
                <a href="/cursos" className="btn btn-outline">Ver Detalhes</a>
              </div>
            </div>

            {/* Full Stack Course */}
            <div className="course-card">
              <div className="course-image">
                <img src={fullstack} alt="Full Stack Course" />
              </div>
              <div className="course-content">
                <h3>Curso Completo: HTML, CSS & JavaScript</h3>
                <p>O pacote definitivo para se tornar um desenvolvedor web completo do zero ao avançado</p>
              </div>
              <div className="course-footer">
                <span className="course-price">R$ 299,90</span>
                <a href="/cursos" className="btn btn-outline">Ver Detalhes</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;