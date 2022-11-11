export class HomePage{
    constructor() {
        this.onLineShopLink = '#onlineshoplink'; 
    };

    clickOnLineShopLink(){
        cy.get(this.onLineShopLink).click();
    };

    
};