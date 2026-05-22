import './sobre.css'
import {
  FaBook,
  FaPaintBrush,
  FaCode,
  FaTools,
  FaGlobe,
  FaBullseye,
  FaSyncAlt,
  FaGraduationCap,
  FaBriefcase,
} from 'react-icons/fa'


const Sobre = () => {
  return (
    <>
      <section className="about-header">
        <div className="sobre-container">
          <h2>Sobre o SimioDev</h2>
          <p>
            Conheça nossa história, metodologia e o que nos torna únicos no ensino de programação
          </p>
        </div>
      </section>

       <section className="about">
        <div className="sobre-container">

          <div className="about-grid">

            <div className="about-box">
              <h3>O Que Você Vai Aprender</h3>

              <ul>
                <li>
                  <span><FaBook /></span>
                  <div>
                    <h4>HTML5 Semântico e Acessível</h4>
                    <p>Estruture páginas web modernas com boas práticas</p>
                  </div>
                </li>

                <li>
                  <span><FaPaintBrush /></span>
                  <div>
                    <h4>CSS3 Avançado</h4>
                    <p>Flexbox, Grid, animações e técnicas profissionais</p>
                  </div>
                </li>

                <li>
                  <span><FaCode /></span>
                  <div>
                    <h4>JavaScript Moderno</h4>
                    <p>ES6+, APIs, DOM e mais</p>
                  </div>
                </li>

                <li>
                  <span><FaTools /></span>
                  <div>
                    <h4>Práticas Profissionais</h4>
                    <p>Git, GitHub, testes e boas práticas</p>
                  </div>
                </li>

                <li>
                  <span><FaGlobe /></span>
                  <div>
                    <h4>Deploy e Performance</h4>
                    <p>Publicação e otimização de aplicações</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="about-box">
              <h3>Para Quem É Este Curso</h3>

              <ul>
                <li>
                  <span><FaBullseye /></span>
                  <div>
                    <h4>Iniciantes</h4>
                    <p>Começando do absoluto zero</p>
                  </div>
                </li>

                <li>
                  <span><FaPaintBrush /></span>
                  <div>
                    <h4>Designers</h4>
                    <p>Que querem aprender a programar</p>
                  </div>
                </li>

                <li>
                  <span><FaSyncAlt /></span>
                  <div>
                    <h4>Mudança de carreira</h4>
                    <p>Entrada no mercado de tecnologia</p>
                  </div>
                </li>

                <li>
                  <span><FaGraduationCap /></span>
                  <div>
                    <h4>Estudantes</h4>
                    <p>Atualização e prática constante</p>
                  </div>
                </li>

                <li>
                  <span><FaBriefcase /></span>
                  <div>
                    <h4>Empreendedores</h4>
                    <p>Criação de sites e sistemas próprios</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      <section className="methodology">
        <div className="container">

          <h2>Nossa Metodologia de Ensino</h2>

          <div className="grid">
            <div className="card">
              <span>📖</span>
              <h3>Projetos reais</h3>
              <p>Aprenda construindo aplicações reais</p>
            </div>

            <div className="card">
              <span>🔄</span>
              <h3>Progressão gradual</h3>
              <p>Do básico ao avançado sem pular etapas</p>
            </div>

            <div className="card">
              <span>💬</span>
              <h3>Suporte</h3>
              <p>Ajuda rápida e comunidade ativa</p>
            </div>

            <div className="card">
              <span>📊</span>
              <h3>Avaliação</h3>
              <p>Quizzes e desafios constantes</p>
            </div>
          </div>

        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Pronto para começar?</h2>
          <p>Inicie sua jornada como desenvolvedor web</p>
          <a href="/cursos">Começar Agora</a>
        </div>
      </section>
    </>
  );
};

export default Sobre;