describe('ui-components: UiComponents component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uicomponents--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to UiComponents!');
    });
});
