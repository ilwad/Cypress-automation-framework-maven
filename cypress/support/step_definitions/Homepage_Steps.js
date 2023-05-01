/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "http://localhost:8074/";

Given(`I navigate to the springbootapp homepage`, () => {
    cy.visit(url);
})

When(`I click on the here link`, () => {
    cy.get("a[href='/hello']").invoke("removeAttr", "target").click();
})