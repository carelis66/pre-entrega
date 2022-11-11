export class ProductsPage {
    constructor() {
        this.cup = '#redcup';
        this.sweter = '#pinksweater';
        this.select = '#closeModal';
        this.goCar= '#goShoppingCart';
    };

    addCup(product1) {
        cy.get(this.cup).click(product1);
    };

    clickSelection(){
        cy.get(this.select).click;
    }

    addSweter(product2) {
        cy.get(this.sweter).click(product2);
    };
    

    clickSelection(){
        cy.get(this.select).click();
    }

    clickCar(){
        cy.get(this.goCar).click();
    }

            
   
};