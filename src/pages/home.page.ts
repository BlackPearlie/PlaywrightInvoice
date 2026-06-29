import { Locator} from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {

    get verifyHomePageHeading(): Locator {
        // return this.page.getByRole('heading', { name: /Welcome\s*back123/i }); //regex  for case insensitive match and to ignore any whitespace between "Welcome" and "back"
        return this.page.getByRole('heading', { name: /Welcome\s*back/i }); //Restore working regex
    }

    async verifyHomePageIsDisplayed() {
        await this.verifyVisible(this.verifyHomePageHeading);    
    }

    async navigateToAdminPage() {
        await this.click(this.page.locator('xpath=//button//span[text() = "Menu"]'));

        await this.click(this.page.locator('xpath=//span[contains(.,"Admin Panel")]').first());   

    }

  

    

}
