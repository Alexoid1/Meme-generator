/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://alexoid1.github.io/Meme-generator/')
  })

  it('should disply the form', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
  
    cy.get('.meme-form').should('be.visible');
   
  })

  it('the form have a inputs', () => {
    // We'll store our item text in a variable so we can reuse it

    cy.get('[name=topText]').should('be.visible');
    cy.get('[name=bottomText]').should('be.visible');

    cy.get('[name=topText]').should('have.attr', 'placeholder', 'Top Text');
    cy.get('[name=bottomText]').should('have.attr', 'placeholder', 'Bottom Text')
    const newItem = 'WTF'

    cy.get('[name=topText]').type(`${newItem}{enter}`)

   
  })

  it('should write on the inputs', () => {
    const newItem = 'Bro'
    const newItem2 = 'WTF'

    cy.get('[name=topText]').type(`${newItem}{enter}`)
    cy.get('[name=bottomText]').type(`${newItem2}{enter}`)
   
  })

  it('should display image', () => {
   
    const image=cy.get('img').invoke('attr', 'src')
    cy.get('button').should('be.visible');
    cy.get('button').click();

    cy.get('img').invoke('attr', 'src').then((fi)=>{
      if(fi!==image){
        console.log('image change')
      }
      
    })
  
   
  })
  it('should click on the submit button', () => {
   
    cy.get('button').should('be.visible');
    cy.get('button').click();
   
  })

})