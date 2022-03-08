describe('login-page: LoginPage component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=loginpage--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LoginPage!');
    });
});
