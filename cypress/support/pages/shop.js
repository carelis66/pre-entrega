export class Shop {
    constructor() {
        this.buttonOnLineShop = "#onlineshoplink";
    }

    clickButtonOnLineShop() {
        cy.get(this.buttonOnLineShop).click();
    }



}