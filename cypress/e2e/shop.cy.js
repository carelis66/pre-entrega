/// <reference types="cypress" />

import { LoginPage } from '../support/pages/loginPage'
import { NavbarPage } from '../support/pages/navbarPage'
import { HomePage } from '../support/pages/homePage'
import { ProductsPage } from '../support/pages/productsPage'
import { ShoppingCartPage } from '../support/pages/shoppingCartPage'


describe('Pre-Entrega', () => {
    let datosLogin;
    let productsData;
    const loginPage = new LoginPage();
    const navbarPage = new NavbarPage();
    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();


    before("Datos", () => {
        cy.fixture('loginData').then(data => {
            datosLogin = data;
        });
        cy.fixture('productsData').then(products => {
            productsData = products;
        });
    });

    beforeEach("Ingreso", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick();
        
    });

    it("Agregar 2 ventas", () => {
        let nameOne = productsData.product1.Name;
        let nameTwo = productsData.product2.Name;
        let price = (productsData.product1.Price1) + (productsData.product2.Price2);
        loginPage.writeUser(datosLogin.userShop.username);
        loginPage.writePass(datosLogin.userShop.password);
        loginPage.clickButtonLogin();
        navbarPage.returnUser(datosLogin.userShop.username).should('be.visible');
        homePage.clickOnLineShopLink();
        productsPage.addCup();
        productsPage.clickSelection();
        productsPage.addSweter();
        productsPage.clickSelection();
        productsPage.clickCar();
        shoppingCartPage.verifyProduct(productsData.product1.Name).should("have.text",nameOne);
        shoppingCartPage.verifyPrices1();
        shoppingCartPage.verifyProduct(productsData.product2.Name).should("have.text",nameTwo);
        shoppingCartPage.verifyPrices2();
        cy.get("button").contains("Show total price").click();
        shoppingCartPage.checkAddition(price);
        
        
         
      });

    
});