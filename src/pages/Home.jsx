import { useEffect, useState } from 'react'
import './home.css'
import STOCKIMAGE from '../assets/stockImage.jpg'
import josef from '../assets/josef.png'
import george from '../assets/george.jpg'
import { WhatsAppButton } from '../components/Whatssap'
import videoApresentacao from '../assets/'

const Home = () => {

  const [videoFinished, setVideoFinished] = useState(false)

  useEffect(() => {
    document.body.style.overflow = videoFinished ? 'auto' : ''

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [videoFinished])

  // Função para testes
  const skipVideo = () => {
    setVideoFinished(true)
  }

  const replayVideo = () => {
    setVideoFinished(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!videoFinished) {
    return (       
      <section className="hero">
        <div className="hero-content"> 
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className='hero-video-lock'>
            <video
              autoPlay
              controls={false}
              disablePictureInPicture
              controlsList="nodownload noplaybackrate nofullscreen"
              onEnded={() => setVideoFinished(true)}
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={videoApresentacao} type="video/mp4" />
            </video>
          </div>
          

          <div className="hero-buttons">
            {/* BOTÃO APENAS PARA TESTES */}
          
          </div>
        </div>

        <button className="skip-video-btn" onClick={skipVideo}>
            ⏭️ Pular vídeo (teste)
          </button>
      </section>

      
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className='hero-video'>
            <video
              controls
              controlsList="nodownload noplaybackrate nofullscreen"
            >
              <source src={videoApresentacao} type="video/mp4" />
            </video>
          </div>

          <div className="hero-buttons">
            <a href="/" className="btn btn-primary">
              Começar Agora
            </a>

            <a href="/" className="btn btn-outline">
              Saiba Mais
            </a>

            <button
              className="btn btn-outline"
              onClick={replayVideo}
            >
              🎥 Ver Vídeo Novamente
            </button>
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

      {/* steps section */}
      <section className='steps'>
        <div className='container'>
          <div className='section-title'>
            <h2>Passo a passo para o Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className='steps-grid'>
            <div className='step-card'>
              <div className='feature-card'>
                <h3>1. Cadastro</h3>
                <p>Crie sua conta.</p>
              </div>
              <span className='step-arrow'>→</span>
            </div>

            <div className='step-card'>
              <div className='feature-card'>
                <h3>2. Escolha</h3>
                <p>Selecione um curso.</p>
              </div>
              <span className='step-arrow'>→</span>
            </div>

            <div className='step-card'>
              <div className='feature-card'>
                <h3>3. Aprenda</h3>
                <p>Comece a estudar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>Por Que Escolher o lorem Ipsum?</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta optio repellat nemo quasi, iste a omnis</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Aprendizado lorem ipsum</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta optio repellat nemo quasi, iste a omnis</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Lorem ipsum Reais</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta optio repellat nemo quasi, iste a omnis</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>lorem ipsum em Carreira</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta optio repellat nemo quasi, iste a omnis</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Comunidade lorem ipsum</h3>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta optio repellat nemo quasi, iste a omnis</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>lorem ipsum dentro do seu quarto</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta optio repellat nemo quasi, iste a omnis</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👀</div>
              <h3>Uma vez lorem ipsum sempre lorem ipsum</h3>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta optio repellat nemo quasi, iste a omnis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CanDo Section */}
      <section className='CanDo'>
        <div className='container'>
          <div className="section-title">
            <h2>Coisa que o lorem ipsum faz por você</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi necessitatibus quos repudiandae harum</p>
          </div>
          <div className='CanDo-box'>
            <div className='CanDo-card'>
              <div className='CanDo-icon'> ✓</div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>
            <div className='CanDo-card'>
              <div className='CanDo-icon'> ✓</div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>
            <div className='CanDo-card'>
              <div className='CanDo-icon'> ✓</div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>
            <div className='CanDo-card'>
              <div className='CanDo-icon'> ✓</div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>
            <div className='CanDo-card'>
              <div className='CanDo-icon'> ✓</div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials Section */}

      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>O que nossos alunos dizem</h2>
            <p>
              Veja algumas avaliações de estudantes que utilizaram nossa plataforma.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, reprehenderit."
              </p>
              <div className="testimonial-user">
                <strong>João Silva</strong>
                <span>Ocultista</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, accusamus."
              </p>
              <div className="testimonial-user">
                <strong>Maria Oliveira</strong>
                <span>Universitária</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, aspernatur."
              </p>
              <div className="testimonial-user">
                <strong>Carlos Souza</strong>
                <span>Aluno de LI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dono Section */}

      <section className="about-author">
        <div className="container">
          <div className="author-wrapper">

            <div className="author-image">
              <img src={STOCKIMAGE} alt="Equipe" />
            </div>

            <div className="author-content">
              <span className="author-tag">
                QUEM ESTÁ POR TRÁS DO PROJETO
              </span>
    
              <h2>Equipe Lorem</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam magni cumque. Atque vero autem voluptates dolorum magnam asperiores fugiat id. Quas ipsam ea voluptates sed sunt assumenda recusandae? Sapiente.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium beatae vitae quis possimus provident porro consequuntur obcaecati explicabo perspiciatis quas, repellat tempora exercitationem consequatur itaque saepe dignissimos velit. Voluptatum.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* faq Section */}
      <section className="faq">
        <div className="container">

          <div className="section-title">
            <h2>Dúvidas Frequentes</h2>
            <p>
              Encontre respostas para as perguntas mais comuns sobre nossa solução.
            </p>
          </div>

          <div className="faq-container">

            <div className="faq-item">
              <h3>❓ Como funciona o Lorem Ipsum?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, molestias.
              </p>
            </div>

            <div className="faq-item">
              <h3>❓ Preciso instalar algum programa?</h3>
              <p>
                Não. A plataforma funciona diretamente pelo navegador.
              </p>
            </div>

            <div className="faq-item">
              <h3>❓ Posso acessar pelo celular?</h3>
              <p>
                Sim. O sistema é totalmente responsivo.
              </p>
            </div>

            <div className="faq-item">
              <h3>❓ Posso cancelar quando quiser?</h3>
              <p>
                Sim. Você pode interromper o uso a qualquer momento.
              </p>
            </div>

          </div>

          <div className="guarantee-card">
            <div className="guarantee-icon">
              🛡️
            </div>

            <div>
              <h3>Garantia de Satisfação</h3>

              <p>
                Caso a solução não atenda suas expectativas,
                oferecemos uma política de arrependimento
                e reembolso em até 7 dias após a contratação.
              </p>
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
                <img src={STOCKIMAGE} alt="HTML5 Course" />
              </div>
              <div className="course-content">
                <h3>Curso 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nesciunt quos officia autem voluptatibus minima nam molestias, quae dolorem perspiciatis.</p>
              </div>
              <div className="course-footer">
                <span className="course-price">R$ 99,90</span>
                <a href="/" className="btn btn-outline">Ver Detalhes</a>
              </div>
            </div>

            {/* CSS Course */}
            <div className="course-card">
              <div className="course-image">
                <img src={STOCKIMAGE} alt="CSS3 Course" />
              </div>
              <div className="course-content">
                <h3>Curso 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nesciunt quos officia autem voluptatibus minima nam molestias, quae dolorem perspiciatis.</p>
              </div>
              <div className="course-footer">
                <span className="course-price">R$ 99,90</span>
                <a href="/" className="btn btn-outline">Ver Detalhes</a>
              </div>
            </div>

            {/* JavaScript Course */}
            <div className="course-card">
              <div className="course-image">
                <img src={STOCKIMAGE} alt="JavaScript Course" />
              </div>
              <div className="course-content">
                <h3>Curso 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nesciunt quos officia autem voluptatibus minima nam molestias, quae dolorem perspiciatis.</p>
              </div>
              <div className="course-footer">
                <span className="course-price">R$ 149,90</span>
                <a href="/" className="btn btn-outline">Ver Detalhes</a>
              </div>
            </div>

            {/* Full Stack Course */}
            <div className="course-card">
              <div className="course-image">
                <img src={STOCKIMAGE} alt="Full Stack Course" />
              </div>
              <div className="course-content">
                <h3>Curso 4</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nesciunt quos officia autem voluptatibus minima nam molestias, quae dolorem perspiciatis.</p>
              </div>
              <div className="course-footer">
                <span className="course-price">R$ 299,90</span>
                <a href="/" className="btn btn-outline">Ver Detalhes</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* developers Section */}

      <section className="developers">
        <div className="container">

          <div className="section-title">
            <h2>Quem Desenvolveu Este Projeto?</h2>
            <p>
              Trabalho desenvolvido para a disciplina de Desenvolvimento Web.
            </p>
          </div>

          <div className="developers-grid">

            <div className="developer-card">
              <img src={josef} alt="Josef" />

              <h3>Josef Ferreira Melcher</h3>

              <p className="course">
                🎓 Tecnologia em Sistemas para Internet
              </p>

              <span className="role">
                DESENVOLVEDOR FRONTEND E BACKEND
              </span>
            </div>

            <div className="developer-card">
              <img src={george} alt="George" />

              <h3>George Lucas Goulart de Oliveira</h3>

              <p className="course">
                🎓 Tecnologia em Sistemas para Internet
              </p>

              <span className="role">
                DESENVOLVEDOR FRONTEND E BACKEND
              </span>
            </div>

          </div>

        </div>
      </section>
      <WhatsAppButton />
    </>
  );
};

export default Home;
