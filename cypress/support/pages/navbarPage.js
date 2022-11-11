export class NavbarPage{

    returnUser(user) {
        return cy.get(`[id^='user_${user}']`);
    };
};