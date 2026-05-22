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

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Cursos;