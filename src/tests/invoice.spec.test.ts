
import {expect, test} from '../fixtures/CustomFixtures';
import { invoiceData, loginData } from '../utils/testData';
import * as helpers from '../utils/helpers';
    

test.describe('Create Invoice', () => {

 

    
    
    test('Navigate to Invoice Page', async ({ loginPage, homePage, adminPage ,invoicePage}) => {
        await loginPage.adminLogin(loginData.username, loginData.password);
        await homePage.verifyHomePageIsDisplayed();
        await homePage.navigateToAdminPage();
        await adminPage.navigateToInvoices();
        await adminPage.verifyInvoicesPage();
        

        //create invoice
        await invoicePage.clickCreateInvoice();

        //enter invoice details
        await invoicePage.enterInvoiceDetails(
            invoiceData.clientName,
            invoiceData.address
        );
      
        //add course
        for (const course of invoiceData.courses) {
            await invoicePage.addCourse(course);
        }        
        
        //set due date
      //  const dueDate = helpers.getLastDayOfMonth(6); // June
       // await invoicePage.setDueDate(dueDate);

        //verify total
       // await invoicePage.verifyTotal(invoiceData.expectedTotal);

        //set status
        await invoicePage.selectStatus(invoiceData.status);


    });


});


