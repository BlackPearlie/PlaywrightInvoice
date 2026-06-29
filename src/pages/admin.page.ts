import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class AdminPage extends BasePage {

    // ========= Locators =========

     

     invoicesMenuBtn: Locator;

     invoiceSubHeader: Locator;

    constructor(page: Page) {

        super(page);

      //  this.invoicesMenuBtn = page.locator('xpath=//span[contains(.,"Invoices")]');
      this.invoicesMenuBtn = page.getByRole('button', { name: 'Invoices' });

        this.invoiceSubHeader= page.getByText('Create and manage client invoices');
    }

  

    /**
     * Navigate to Invoices page
     */
    async navigateToInvoices() {
        const sidebar = this.page.locator('#app-root > div > div.admin-sidebar');

        await sidebar.evaluate((element) => {
           element.scrollTop = element.scrollHeight;
        });

        await this.invoicesMenuBtn.scrollIntoViewIfNeeded();

        await expect(this.invoicesMenuBtn).toBeVisible();
        await this.click(this.invoicesMenuBtn);
        await this.page.waitForLoadState('networkidle');

    }

    /**
     * Verify Invoices page is displayed
     */
    async verifyInvoicesPage() {

        await this.verifyVisible(this.invoiceSubHeader);
        expect(await this.getText(this.invoiceSubHeader)).toBe('Create and manage client invoices');
    }

}