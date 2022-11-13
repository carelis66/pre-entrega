/// <reference types="cypress" />

import { Home } from "../support/pages/home";
import { Login } from "../support/pages/login";
import { Shop  } from "../support/pages/shop";
import { ProductsPage } from "../support/pages/products";
import { ShopingCartPage } from "../support/pages/shopingCart";

describe('pre-entrega', () => 
{
    let LoginData;
    let productsdata;
    const home = new Home();
    const login = new Login();
    const shop = new Shop();
    const productsPage = new ProductsPage();
    const shopingCartPage = new ShopingCartPage();

    
    before('Before', () => {
        cy.fixture('LoginData').then(datos => {
            LoginData = datos

        })
        cy.fixture('productsdata').then(products =>{
            productsdata = products
        })
        
    })

    it('pre-entrega', () => {

        let suma = (productsdata.productOne.Price1) + (productsdata.productTwo.Price2);
        let Name1 = productsdata.productOne.Name
        let priceOne = productsdata.productOne.Price1
        let Name2 = productsdata.productTwo.Name
        let priceTwo = productsdata.productTwo.Price2
        cy.visit('');
        home.clickButtonLogin();
        login.writingUser(LoginData.user.username);
        login.writingPass(LoginData.user.password);
        login.clickLoginButton();
        shop.clickButtonOnLineShop();
        productsPage.selectProduct(productsdata.productOne.Name);
        productsPage.clickOnClosemodal();
        productsPage.selectProduct(productsdata.productTwo.Name);
        productsPage.clickOnClosemodal();
        productsPage.clickButtonGoShoppingCart();
        shopingCartPage.checkProduct(productsdata.productOne.Name).should("have.text",Name1);
        shopingCartPage.checkDataProduct(productsdata.productOne.Name,productsdata.productOne.Price1).should("have.text",`$${priceOne}`);
        shopingCartPage.checkProduct(productsdata.productTwo.Name).should("have.text",Name2);
        shopingCartPage.checkDataProduct(productsdata.productTwo.Name,productsdata.productTwo.Price2).should("have.text",`$${priceTwo}`);
        shopingCartPage.clickOnShowTotalPrice().click();
        shopingCartPage.groupPrice().should('have.text',suma);
    });
    
});