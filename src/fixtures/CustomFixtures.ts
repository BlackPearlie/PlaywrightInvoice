import {test as base } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { AdminPage } from '../pages/admin.page';
import { InvoicePage } from '../pages/invoice.page';

type CustomFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    adminPage: AdminPage;
    invoicePage: InvoicePage;

};

export const test = base.extend<CustomFixtures>({
    
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    adminPage: async ({ page }, use) => {
        await use(new AdminPage(page));
    },

    invoicePage: async ({ page }, use) => {
        await use(new InvoicePage(page));
    }

});

export { expect } from '@playwright/test';