import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the homepage', () => {
  cy.visit('/');
});

Then('I see the welcome message', () => {
  cy.contains('h1', 'My Blog');
});
