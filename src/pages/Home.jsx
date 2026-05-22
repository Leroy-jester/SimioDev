const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Aprenda Programação do Zero ao Avançado</h1>
          <p>Domine HTML, CSS e JavaScript com projetos práticos e torne-se um desenvolvedor web completo</p>
          <div className="hero-buttons">
            <a href="/cursos" className="btn btn-primary">Começar Agora</a>
            <a href="/sobre" className="btn btn-outline">Saiba Mais</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;