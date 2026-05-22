const Cursos = () => {
  return (
    <>
      <section className="courses-header">
        <div className="container">
          <div className="section-title">
            <h2>Nossos Cursos</h2>
            <p>Escolha o curso que melhor se adapta aos seus objetivos de carreira</p>
          </div>
          <div className="course-slider">
            <div className="course-card">
              <div className="course-image">
                <img src="https://via.placeholder.com/400x200?fullstack" alt="Curso Completo" />
              </div>
              <div className="course-content">
                <h3>Curso Completo: HTML, CSS e JavaScript</h3>
                <p>Domine as três tecnologias essenciais para desenvolvimento web com projetos práticos do mundo real</p>
                <div className="course-footer">
                  <span className="course-price">R$ 299,90</span>
                  <a href="#" className="btn btn-outline">Inscrever-se</a>
                </div>
              </div>
            </div>

            {/* Apenas HTML */}
            <div className="course-card">
              <div className="course-image">
                <img src="https://via.placeholder.com/400x200?html5" alt="Curso de HTML" />
              </div>
              <div className="course-content">
                <h3>Curso de HTML5</h3>
                <p>Aprenda a estruturar páginas web com semântica, acessibilidade e boas práticas modernas</p>
                <div className="course-footer">
                  <span className="course-price">R$ 99,90</span>
                  <a href="#" className="btn btn-outline">Inscrever-se</a>
                </div>
              </div>
            </div>

            {/* Apenas CSS */}
            <div className="course-card">
              <div className="course-image">
                <img src="https://via.placeholder.com/400x200?css3" alt="Curso de CSS" />
              </div>
              <div className="course-content">
                <h3>Curso de CSS3 Avançado</h3>
                <p>Domine Flexbox, Grid, variáveis CSS, animações e técnicas profissionais de estilização</p>
                <div className="course-footer">
                  <span className="course-price">R$ 99,90</span>
                  <a href="#" className="btn btn-outline">Inscrever-se</a>
                </div>
              </div>
            </div>

            <div className="course-card">
              <div className="course-image">
                <img src="https://via.placeholder.com/400x200?javascript" alt="Curso de JavaScript" />
              </div>
              <div className="course-content">
                <h3>Curso de JavaScript Moderno</h3>
                <p>Do básico ao avançado: ES6+, DOM, APIs, assíncrono e muito mais com projetos práticos</p>
                <div className="course-footer">
                  <span className="course-price">R$ 149,90</span>
                  <a href="#" className="btn btn-outline">Inscrever-se</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" style={{ padding: '5rem 0', background: 'var(--light)' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '3rem' }}>
            <h2>Por Que Nossos Cursos São Diferentes?</h2>
          </div>
          <div className="features-grid" style={{ gap: '2rem' }}>
            <div className="feature-card" style={{ textAlign: 'left' }}>
              <div className="feature-icon">🎯</div>
              <h3>Aprendizado Prático</h3>
              <p>Cada módulo inclui projetos reais que você pode adicionar ao seu portfólio imediatamente</p>
            </div>
            <div className="feature-card" style={{ textAlign: 'left' }}>
              <div className="feature-icon">📚</div>
              <h3>Material Atualizado</h3>
              <p>Conteúdo constantemente revisado com as últimas tecnologias e melhores práticas do mercado</p>
            </div>
            <div className="feature-card" style={{ textAlign: 'left' }}>
              <div className="feature-icon">💬</div>
              <h3>Suporte Dedicado</h3>
              <p>Equipe de mentores disponível para tirar dúvidas e revisar seus códigos</p>
            </div>
            <div className="feature-card" style={{ textAlign: 'left' }}>
              <div className="feature-icon">🚀</div>
              <h3>Carreira Acelerada</h3>
              <p>Orientação de carreira, revisão de currículo e preparação para entrevistas técnicas</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cursos;