describe('login-page: FormLogin component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=formlogin--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to FormLogin!');
    });
});
