export class ShoppingCartPage {

    constructor()
    {
        this.showtotal = ('//button[text()="Show total price"]');
        this.confirm1 = ':nth-child(2) > .css-1l5ko5i > #productPrice';
        this.confirm2 = ':nth-child(3) > .css-1l5ko5i > #productPrice';
        this.total = "#price";
        
    }
    verifyProduct(verifyproduct)
    {
        return cy.get(`p[name='${verifyproduct}']`);
    }
    verifyPrices1(){
        cy.get(this.confirm1).click();
        

    }
    verifyPrices2(){
        cy.get(this.confirm2).click();
        
    }
    checkAddition(){
        return cy.get(this.total);
    }
    
};
