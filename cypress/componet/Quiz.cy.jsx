import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            url: '/api/questions/random',
        },
        { 
            fixture: 'questions.json',
            statusCode: 200
        }).as('getQuestions');
    })

  it('renders correctly', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('exist');
  });

  it('starts the quiz on button click', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    // cy.get('.card').should('exist');
    // cy.contains('Start Quiz').click();
    cy.get('.card').should('be.visible');
  });
});
