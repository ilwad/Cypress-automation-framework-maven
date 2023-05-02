/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`I type a username {}`, (username) => {
  cy.get('input[name="username"]').type(username);
});

When(`I type a password {}`, (password) => {
  cy.get('input[name="password"]').type(password);
});

When("I click on the login button", () => {
  cy.get('input[type="submit"]').click();
});

Then(
  "I should be presented with an alert box which contains text {string}",
  (expectedAlertText) => {
    if (expectedAlertText === "Welcome to Maven APP!") {
      cy.get("h1").should("have.text", expectedAlertText);
    } else {
      cy.get("div").contains(expectedAlertText).should("be.visible");
    }
  }
);
