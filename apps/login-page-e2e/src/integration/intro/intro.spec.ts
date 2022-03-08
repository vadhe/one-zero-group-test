describe('login-page: Intro component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=intro--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Intro!');
    });
});
