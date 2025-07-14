/// <reference types="cypress"/>

describe ('Funcionalidade login',() => [

it ('Deve fazer login com sucesso', () => 
    
    { cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')  
        cy.get ('#username') .type ('tiago.testebac01@teste.com.br')
    cy.get('#password') . type ('123459')
     cy.get('.woocommerce-form > .button').click ()     
     cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain' , 'Olá, tiago.testebac01 (não é tiago.testebac01? Sair)')              } )


] )