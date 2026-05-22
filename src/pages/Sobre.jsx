const Sobre = () => {
  return (
    <>
      <section className="courses-header">
        <div className="container">
          <div className="section-title">
            <h2>Sobre o SimioDev</h2>
            <p>Conheça nossa história, metodologia e o que nos torna únicos no ensino de programação</p>
          </div>
        </div>
      </section>

      <section className="features">
    
        <div className="container">
          <div className="about-content">

            <div className="about-section">
              <h3>O Que Você Vai Aprender</h3>
              <ul className="about-section-list">
                <li>
                  <div className="about-section-icon">📚</div>
                  <div>
                    <h4>HTML5 Semântico e Acessível</h4>
                    <p>Estruture páginas web modernas com as melhores práticas de semântica e acessibilidade</p>
                  </div>
                </li>
                <li>
                  <div className="about-section-icon">🎨</div>
                  <div>
                    <h4>CSS3 Avançado</h4>
                    <p>Domine Flexbox, Grid, variáveis CSS, animações e técnicas profissionais de estilização</p>
                  </div>
                </li>
                <li>
                  <div className="about-section-icon">💻</div>
                  <div>
                    <h4>JavaScript Moderno</h4>
                    <p>Do básico ao avançado: ES6+, DOM manipulation, APIs assíncronas e muito mais</p>
                  </div>
                </li>
                <li>
                  <div className="about-section-icon">🛠️</div>
                  <div>
                    <h4>Práticas Profissionais</h4>
                    <p>Git, GitHub, depuração, testes e boas práticas de código usadas no mercado</p>
                  </div>
                </li>
                <li>
                  <div className="about-section-icon">🌐</div>
                  <div>
                    <h4>Deploy e Performance</h4>
                    <p>Publique suas aplicações e otimize para máxima performance e experiência do usuário</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="about-section">
              <h3>Para Quem É Este Curso</h3>
              <ul className="about-section-list">
                <li>
                  <div className="about-section-icon">🎯</div>
                  <div>
                    <h4>Iniciantes Absolutos</h4>
                    <p>Nenhuma experiência prévia necessária - começamos do absoluto zero</p>
                  </div>
                </li>
                <li>
                  <div className="about-section-icon">🎨</div>
                  <div>
                    <h4>Designers e Criativos</h4>
                    <p>Profissionais de design que querem aprender a codar suas próprias criações</p>
                  </div>
                </li>
                <li>
                  <div className="about-section-icon">🔄</div>
                  <div>
                    <h4>Transição de Carreira</h4>
                    <p>Profissionais de outras áreas buscando entrar no mundo da tecnologia</p>
                  </div>
                </li>
                <li>
                  <div className="about-section-icon">📖</div>
                  <div>
                    <h4>Estudantes e Profissionais</h4>
                    <p>Quem quer aprimorar habilidades ou se manter atualizado com as tecnologias web</p>
                  </div>
                </li>
                <li>
                  <div className="about-section-icon">💼</div>
                  <div>
                    <h4>Empreendedores</h4>
                    <p>Quem quer criar seus próprios sites e aplicações para negócios pessoais ou profissionais</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Nossa Metodologia de Ensino</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>Aprendizado Baseado em Projetos</h3>
              <p>Cada conceito é ensinada através da construção de projetos reais do portfólio</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Progressão Gradual</h3>
              <p>Conteúdo organizado do básico ao avançado, construindo sobre o que você já aprendeu</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Suporte Personalizado</h3>
              <p>Dúvidas respondidas rapidamente por instrutores experientes e comunidade ativa</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Avaliação Contínua</h3>
              <p>Quizzes, desafios e projetos para garantir que você está realmente aprendendo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Pronto para Começar Sua Jornada?</h2>
          <p>Join thousands of students who have successfully launched their web development careers with SimioDev</p>
          <a href="/cursos" className="btn btn-primary">Começar Agora</a>
        </div>
      </section>

    </>
  );
};

export default Sobre;