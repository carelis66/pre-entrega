export class LoginPage {
    constructor() {
        this.userInput = "#user";
        this.passInput = "#pass";
        this.buttonLogin = "#submitForm";
    }

    writeUser(user) {
        cy.get(this.userInput).type(user);
    };

    writePass(password) {
        cy.get(this.passInput).type(password);
    };

    clickButtonLogin() {
        cy.get(this.buttonLogin).click();
    };
};

