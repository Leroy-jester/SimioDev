import './contato.css'

<<<<<<< Updated upstream
=======
import {
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
  FaGlobe,
} from 'react-icons/fa'


>>>>>>> Stashed changes
const Contato = () => {
  return (
    <>
      <section className="courses-header">
        <div className="container">
          <div className="section-title">
            <h2>Fale Conosco</h2>
            <p>Tire suas dúvidas, compartilhe sugestões ou simplesmente diga oi</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Envie uma Mensagem</h2>
          <p>Responderemos em até 24 horas úteis.</p>

          <form className="form">
            <label>
              Nome completo
              <input type="text" required />
            </label>

            <label>
              E-mail
              <input type="email" required />
            </label>

            <label>
              Assunto
              <input type="text" required />
            </label>

            <label>
              Mensagem
              <textarea rows="6" required></textarea>
            </label>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>



<<<<<<< Updated upstream
      <section className="contact-options">
=======
       <section className="contact-options">
>>>>>>> Stashed changes
        <div className="container">
          <h2>Outras Formas de Contato</h2>

          <div className="grid">
<<<<<<< Updated upstream
            <div className="card email">
              <span>📧</span>
=======

            <div className="card email">
              <span><FaEnvelope /></span>
>>>>>>> Stashed changes
              <h3>E-mail</h3>
              <p>contato@simio.dev</p>
            </div>

            <div className="card whatsapp">
<<<<<<< Updated upstream
              <span>💬</span>
=======
              <span><FaWhatsapp /></span>
>>>>>>> Stashed changes
              <h3>WhatsApp</h3>
              <p>(11) 99999-9999</p>
            </div>

            <div className="card telegram">
<<<<<<< Updated upstream
              <span>📱</span>
=======
              <span><FaTelegramPlane /></span>
>>>>>>> Stashed changes
              <h3>Telegram</h3>
              <p>@simio_dev</p>
            </div>

            <div className="card social">
<<<<<<< Updated upstream
              <span>🌐</span>
              <h3>Redes Sociais</h3>
              <p>@simiodev</p>
            </div>
=======
              <span><FaGlobe /></span>
              <h3>Redes Sociais</h3>
              <p>@simiodev</p>
            </div>

>>>>>>> Stashed changes
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;