import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class InvoicePage extends BasePage {

    // ==========================
    // Locators
    // ==========================

     createInvoiceButton: Locator;
   

     clientNameTextbox: Locator;

     addressTextbox: Locator;

     addCourseButton: Locator;

    courseDropdown: Locator;
    

     totalLabel: Locator;

     dueDateTextbox: Locator;

     statusDropdown: Locator;

     submitButton: Locator;

     successMessage: Locator;

    constructor(page: Page) {

        super(page);

        // Replace these with your application's locators

        this.createInvoiceButton = page.getByRole('button', { name: 'New Invoice' });


        this.clientNameTextbox = page.locator('//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[1]/input');

        this.addressTextbox = page.locator('//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[2]/textarea');

       // this.addCourseButton = page.getByRole('button', { name: '➕ Add Course' });
       this.addCourseButton = page.locator('//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[3]/div[1]/div/button[2]');
        this.courseDropdown = page.locator(
         'xpath=//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[3]/div[2]/table/tbody/tr/td[1]/select'
        );

        //this.selectedCourse = page.
        this.totalLabel = page.locator('//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[4]/div[2]/div[4]/span[2]');

        this.dueDateTextbox = page.locator('//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[4]/div[1]/div[1]/input');

        this.statusDropdown = page.locator('//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[4]/div[1]/div[2]/select');

        this.submitButton = page.getByRole('button', { name: 'Create Invoice' });

        this.successMessage = page.locator('.alert-success');
    }

    /**
     * Open Create Invoice screen
     */
    async clickCreateInvoice() {

        await this.click(this.createInvoiceButton);
        await expect(this.page.getByRole('heading', { name: /Create New Invoice/i })).toBeVisible();
      //  await expect(this.addCourseButton).toBeVisible();

    }

    /**
     * Complete invoice details
     */
    async enterInvoiceDetails(
      //  recipient: string,
        clientName: string,
        address: string
    ) {


        await this.fill(this.clientNameTextbox, clientName);

        await this.fill(this.addressTextbox, address);

    }

    /**
     * Add one course
     */
    async addCourse( course: string )
     {

       // await expect(this.addCourseButton).toBeVisible();
        //await expect(this.addCourseButton).toBeEnabled();
        //await this.addCourseButton.click({ force: true });

        //await expect(this.courseDropdown).toBeVisible();
       // await this.selectOption(this.courseDropdown, course);

        
        await this.verifyVisible(this.addCourseButton);
        if (await this.addCourseButton.isVisible() && await this.addCourseButton.isEnabled()) { 
        console.log('Add Course button is visible and ready to click.');
        console.log(this.addCourseButton.textContent());
        }
        await this.addCourseButton.click();

        // Wait for the new course row to appear
        await expect(this.courseDropdown).toBeVisible();
        if (await this.courseDropdown.isVisible()) {
            console.log('Course dropdown is visible.');
        }
       await this.courseDropdown.selectOption(course);
    }
        

    

    /**
     * Verify invoice total
     */
    async verifyTotal(expectedTotal: string) {

        await expect(this.totalLabel)
            .toHaveText(expectedTotal);

    }

    /**
     * Set due date
     */
    async setDueDate(date: string) {

        await this.fill(
            this.dueDateTextbox,
            date
        );

    }

    /**
     * Select invoice status
     */
    async selectStatus(status: string) {

        await this.selectOption(
            this.statusDropdown,
            status
        );

    }

    /**
     * Submit invoice
     */
    async createInvoice() {

        await this.click(this.submitButton);

        await this.waitForPageLoad();

    }

    /**
     * Verify invoice created successfully
     */
    async verifyInvoiceCreated() {

        await this.verifyVisible(this.successMessage);

    }

}