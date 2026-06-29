import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class InvoicePage extends BasePage {

    createInvoiceButton: Locator;
    clientNameTextbox: Locator;
    addressTextbox: Locator;
    //addCourseButton: Locator;
    totalLabel: Locator;
    dueDateTextbox: Locator;
    statusDropdown: Locator;
    submitButton: Locator;
    successMessage: Locator;

    modal: Locator;

    constructor(page: Page) {
        super(page);

        // MODAL CONTAINER
        this.modal = page.locator('.invoice-modal').filter({ visible: true });
        // MAIN BUTTONS
        this.createInvoiceButton = page.getByRole('button', { name: /New Invoice/i });
        //this.addCourseButton = this.modal.getByRole('button', { name: /Add Course/i });
        this.submitButton = this.modal.getByRole('button', { name: /Create Invoice/i });

        // INPUTS 
        this.clientNameTextbox = this.modal.getByPlaceholder('Type client name or email');
        this.addressTextbox    = this.modal.getByPlaceholder('Enter client address');

        this.dueDateTextbox    = this.modal.locator('input[type="date"]');

        // STATUS DROPDOWN
        this.statusDropdown = this.modal.locator('select').filter({ hasText: /pending|paid/i }).first();


        // TOTAL LABEL (based on screenshot structure)
        this.totalLabel        = this.modal.getByRole('heading', { name: /Total:/i }).locator('span').first();

        // SUCCESS MESSAGE
        this.successMessage    = page.locator('.alert-success');
    }

    /**
     * Open Create Invoice screen
     */
    async clickCreateInvoice() {
        await this.createInvoiceButton.click({ force: true });

        // Wait for modal animation
        await expect(this.modal).toBeVisible();

        // Confirm heading inside modal
        await expect(this.modal.getByRole('heading', { name: /Create New Invoice/i })).toBeVisible();
    }

    /**
     * Fill invoice details
     */
    async enterInvoiceDetails(clientName: string, address: string) {
            await this.fill(this.clientNameTextbox, clientName);
            await this.fill(this.addressTextbox, address);
}

    /**
     * Add a course 
     */
     async addCourse(course: string, rowIndex: number) {
    // Click Add Course once via JS
    await this.page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const btn = buttons.find(b => /add course/i.test(b.textContent || ''));
        btn?.click();
    });

    // Wait for the new row to appear (rowIndex + 1 selects with 'Select course')
    await this.page.waitForFunction((expectedCount) => {
        const selects = Array.from(document.querySelectorAll('select'));
        return selects.filter(s =>
            s.options[0]?.text.toLowerCase().includes('select course')
        ).length >= expectedCount;
    }, rowIndex + 1, { timeout: 10000 });

    // Target the specific row by index
    const courseDropdown = this.modal
        .locator('select')
        .filter({ hasText: 'Select course' })
        .nth(rowIndex);

    await expect(courseDropdown).toBeVisible();

    // Select by partial text match
    await courseDropdown.evaluate((s: HTMLSelectElement, val) => {
        const opt = Array.from(s.options).find(o =>
            o.text.toLowerCase().includes(val.toLowerCase())
        );
        if (opt) {
            s.value = opt.value;
            s.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }, course);
}
   
    /**
     * Verify total
     */
    async verifyTotal(expectedTotal: string) {
        await this.totalLabel.scrollIntoViewIfNeeded();
        await expect(this.totalLabel).toHaveText(expectedTotal);
    }

    /**
     * Set due date
     */
     async setDueDate(date: string) {
    await this.dueDateTextbox.scrollIntoViewIfNeeded();
    await this.fill(this.dueDateTextbox, date);
   }

    /**
     * Select invoice status
     */
    async selectStatus(status: string) {
    // Scroll the status dropdown into view within the modal
    await this.statusDropdown.scrollIntoViewIfNeeded();
    await this.statusDropdown.evaluate((s: HTMLSelectElement, val) => {
        s.value = val;
        s.dispatchEvent(new Event('change', { bubbles: true }));
    }, status.toLowerCase());
    }

    /**
     * Submit invoice
     */
    async createInvoice() {
        await this.submitButton.click({ force: true });
        await this.waitForPageLoad();
    }

    /**
     * Verify invoice created
     */
    async verifyInvoiceCreated() {
        await expect(this.successMessage).toBeVisible();
    }
}

