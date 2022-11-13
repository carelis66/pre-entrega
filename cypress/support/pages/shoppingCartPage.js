export class ShopingCartPage{
    constructor()
    {
        this.showtotal = ('//button[text()="Show total price"]');
        this.total = "#price";
    }
    checkProduct(checkproduct)
    {
        return cy.get(`p[name='${checkproduct}']`);
    }
    checkDataProduct(Name,Price){
        return cy.xpath(`//p[@name='${Name}']//following-sibling::p[@name=${Price}]`);

    }
    clickOnShowTotalPrice(){
        return cy.xpath(this.showtotal);
    }
    groupPrice(){
        return cy.get(this.total);
    }
}
