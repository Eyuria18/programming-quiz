describe('Tech Quiz E2E Test', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' });
    });
  
    it('starts the quiz when clicking the start button', () => {
        cy.get('button').contains('Start Quiz').click();
        // cy.get('.card').should('exist');
        // cy.contains('Start Quiz').click();
        cy.get('h2').should('be.visible')
    });
  
    it('allows answering questions', () => {
      cy.contains('Start Quiz').click();
      cy.get('.btn').first().click();
    });
  
    it('displays the final score at the end', () => {
      cy.contains('Start Quiz').click();
      for (let i = 0; i < 2; i++) {
        cy.get('.btn').first().click();
      }
    //   cy.get('h2').contains('Quiz Completed');
      cy.get('.alert-success').contains('Your score:');
    });
  
    it('allows restarting the quiz', () => {
      cy.contains('Start Quiz').click();
      for (let i = 0; i < 2; i++) {
        cy.get('.btn').first().click();
      }
      cy.contains('Take New Quiz').click();
    //   cy.contains('.mt-3').should('exist');
      cy.get('.mt-3').should('be.visible');
    });
  });
  