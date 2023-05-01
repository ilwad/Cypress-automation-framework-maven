/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I type a user name", () => {
  cy.get('input[name="username"]').type("user");
});

When("I type a password", () => {
  cy.get('input[name="password"]').type("password");
});

When("I click on the signin button", () => {
  cy.get('input[type="submit"]').click();
});

Then(
  "I should be presented with a successful contact us submission message",
  () => {
    cy.get("h1").should("have.text", "Welcome to Maven APP!");
  }
);
