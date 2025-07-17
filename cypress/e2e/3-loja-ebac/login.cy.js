/// <reference types="cypress"/>


describe('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });
     
    afterEach(() => {
        cy.screenshot()
    });


    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('tiago.testebac01@teste.com.br');
        cy.get('#password').type('123459');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
          .should('contain', 'Olá, tiago.testebac01 (não é tiago.testebac01? Sair)');
    });

    it('Deve exibir mensagem de erro com usuário inválido', () => {
        cy.get('#username').type('usuario@invalido.com');
        cy.get('#password').type('senhaerrada');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error')
          .should('contain', 'Endereço de e-mail desconhecido');
    });

    it('Deve inserir uma mensagem de erro ao inserir uma senha invalida ', () => {
        cy.get('#username').type('tiago.testebac01@teste.com.br');
        cy.get('#password').type('senhaerrada');
        cy.get('.woocommerce-form > .button').click();
        cy.get('.woocommerce-error').should('contain', 'A senha fornecida para o e-mail tiago.testebac01@teste.com.br está incorreta. Perdeu a senha?');
        cy.get('.woocommerce-error').should ('exist')
        

    });

});










