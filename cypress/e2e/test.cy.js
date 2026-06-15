describe('Testes do site', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('deve carregar a página', () => {
    cy.contains('Bônus extra por tempo limitado!').should('be.visible')
  })

  it('deve exibir o contador', () => {
    cy.get('.timer-card').should('have.length', 3)
  })

  it('deve carregar o restante da página ao clicar em Pular vídeo', () => {
    cy.get('.skip-video-btn').click()

    cy.contains('Passo a passo para o Lorem Ipsum').should('be.visible')
   
    cy.contains('Por Que Escolher o lorem Ipsum?').should('be.visible')
    
    cy.contains('Nossos Cursos Destacados').should('be.visible')
    
    cy.contains('Quem Desenvolveu Este Projeto?').should('be.visible')
  })


  it('deve exibir o footer', () => {

    cy.get('.skip-video-btn').click()

    cy.contains('Links Rápidos').should('be.visible')

  })

  it('deve exibir o botão do WhatsApp', () => {

    cy.get('.skip-video-btn').click()

    cy.get('.whatsapp-button').should('exist')
  })


  it('deve exibir a seção Passo a passo para o Lorem Ipsum', () => {

    cy.get('.skip-video-btn').click()

    cy.contains('Passo a passo para o Lorem Ipsum').should('be.visible')

    cy.get('.step-card').should('have.length', 3)

  })

  it('deve exibir porque escolher o lorem ipsum?', () => {

    cy.get('.skip-video-btn').click()

    cy.contains('Por Que Escolher o lorem Ipsum?').should('be.visible')

    cy.get('.features-grid .feature-card').should('have.length', 6)

  })



  it('deve exibir a seção Coisa que o lorem ipsum faz por você', () => {

    cy.get('.skip-video-btn').click()

    cy.contains('Coisa que o lorem ipsum faz por você').should('be.visible')

    cy.get('.CanDo-card').should('have.length', 5)

  })


  it('deve exibir a seção O que nossos alunos dizem', () => {

    cy.get('.skip-video-btn').click()

    cy.contains('O que nossos alunos dizem').should('be.visible')

    cy.get('.testimonial-card').should('have.length', 3)

  })


  it('deve exibir a seção Equipe Lorem', () => {

    cy.get('.skip-video-btn').click()

    cy.contains('QUEM ESTÁ POR TRÁS DO PROJETO').should('be.visible')

    cy.contains('Equipe Lorem').should('be.visible')

    cy.get('.author-image img').should('be.visible')

  })

  it('deve exibir a seção Dúvidas Frequentes', () => {

    cy.get('.skip-video-btn').click()

    cy.contains('Dúvidas Frequentes').should('be.visible')

    cy.get('.faq-item').should('have.length', 4)

    cy.contains('Garantia de Satisfação').should('be.visible')

  })

  it('deve exibir os cursos destacados', () => {

    cy.get('.skip-video-btn').click()

    cy.contains('Nossos Cursos Destacados').should('be.visible')

    cy.get('.course-card').should('have.length', 4)

    cy.get('.course-price').should('have.length', 4)

    cy.contains('Ver Detalhes').should('be.visible')

  })


  it('deve exibir os desenvolvedores do projeto', () => {

    cy.get('.skip-video-btn').click()

    cy.contains('Quem Desenvolveu Este Projeto?').should('be.visible')

    cy.get('.developer-card').should('have.length', 2)

    cy.contains('Josef Ferreira Melcher') .should('be.visible')

    cy.contains('George Lucas Goulart de Oliveira').should('be.visible')

    cy.get('.developer-card img').should('have.length', 2)
  })

})