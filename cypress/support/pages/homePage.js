export class Home {
    constructor() {
        this.buttonLogin = "#registertoggle";
    }

    clickButtonLogin() {
        cy.get(this.buttonLogin).dblclick();
    }



}
