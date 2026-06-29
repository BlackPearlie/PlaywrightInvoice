import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
     async openNdosiPage() {
        await this.navigate('/');

    }

    async navigateToLoginPage() {
        await this.click(this.page.getByRole('button', { name: 'Login' }));
        await expect(this.page.locator('#login-email')).toBeVisible();
    }

    async userLogin(username: string, password: string) {
        await this.fill(this.page.locator('#login-email'), username);
        await this.fill(this.page.locator('#login-password'), password);
        await this.click(this.page.locator('xpath=//button[contains(.,"Login")]'));
    }

    async adminLogin(username: string, password: string) {
        await this.navigate('/');
        await this.navigateToLoginPage();
        await this.userLogin(username, password);
    }

    /**
     * Verify login was successful
     */
 

}