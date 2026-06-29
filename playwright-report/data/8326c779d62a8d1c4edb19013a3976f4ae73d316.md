# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: invoice.spec.test.ts >> Create Invoice >> Navigate to Invoice Page
- Location: src\tests\invoice.spec.test.ts:13:9

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.click: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('//button[contains(.,"➕ Add Course")]')
    - locator resolved to <button type="button">➕ Add Course</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div></div> from <div>…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div></div> from <div>…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    158 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - <div></div> from <div>…</div> subtree intercepts pointer events
      - retrying click action
        - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]:
        - heading "🔧 Admin Panel" [level=2] [ref=e8]
        - paragraph [ref=e9]: Ndosi Automation
      - navigation [ref=e10]:
        - button "📊 Overview" [ref=e11] [cursor=pointer]:
          - generic [ref=e12]: 📊
          - text: Overview
        - button "👥 Users" [ref=e13] [cursor=pointer]:
          - generic [ref=e14]: 👥
          - text: Users
        - button "✅ Approvals" [ref=e15] [cursor=pointer]:
          - generic [ref=e16]: ✅
          - text: Approvals
        - button "📁 Groups" [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: 📁
          - text: Groups
        - button "🎓 Enrollments" [ref=e19] [cursor=pointer]:
          - generic [ref=e20]: 🎓
          - text: Enrollments
        - button "📋 Timetable" [ref=e21] [cursor=pointer]:
          - generic [ref=e22]: 📋
          - text: Timetable
        - button "📚 Courses" [ref=e23] [cursor=pointer]:
          - generic [ref=e24]: 📚
          - text: Courses
        - button "📢 Announcements" [ref=e25] [cursor=pointer]:
          - generic [ref=e26]: 📢
          - text: Announcements
        - button "⭐ Testimonials" [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: ⭐
          - text: Testimonials
        - button "✏️ Tasks" [ref=e29] [cursor=pointer]:
          - generic [ref=e30]: ✏️
          - text: Tasks
        - button "📹 Recordings" [ref=e31] [cursor=pointer]:
          - generic [ref=e32]: 📹
          - text: Recordings
        - button "💳 Payments" [ref=e33] [cursor=pointer]:
          - generic [ref=e34]: 💳
          - text: Payments
        - button "💰 Earnings" [ref=e35] [cursor=pointer]:
          - generic [ref=e36]: 💰
          - text: Earnings
        - button "🧾 Invoices" [ref=e37] [cursor=pointer]:
          - generic [ref=e38]: 🧾
          - text: Invoices
        - button "🐙 GitHub Collaborators" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 🐙
          - text: GitHub Collaborators
      - button "← Back to Website" [ref=e42] [cursor=pointer]
    - generic [ref=e44]:
      - generic [ref=e45]:
        - generic [ref=e46]:
          - heading "🧾 Invoices" [level=1] [ref=e47]
          - paragraph [ref=e48]: Create and manage client invoices
        - button "➕ New Invoice" [ref=e49] [cursor=pointer]
      - textbox "🔍 Search invoices..." [ref=e51]
      - generic [ref=e52]:
        - table [ref=e53]:
          - rowgroup [ref=e54]:
            - 'row "Invoice # Client Amount Due Date Status Actions" [ref=e55]':
              - 'columnheader "Invoice #" [ref=e56]'
              - columnheader "Client" [ref=e57]
              - columnheader "Amount" [ref=e58]
              - columnheader "Due Date" [ref=e59]
              - columnheader "Status" [ref=e60]
              - columnheader "Actions" [ref=e61]
          - rowgroup
        - generic [ref=e62]:
          - generic [ref=e63]: 🧾
          - paragraph [ref=e64]: No invoices found. Create your first invoice!
      - generic [ref=e66]:
        - generic [ref=e67]:
          - heading "➕ Create New Invoice" [level=2] [ref=e68]
          - button "✕" [ref=e69] [cursor=pointer]
        - generic [ref=e70]:
          - generic [ref=e71]:
            - generic [ref=e72]: Client *
            - textbox "Type client name or email..." [ref=e73]: Mpho Pty Ltd
            - generic [ref=e75]: No matching users. Name will be used as-is.
          - generic [ref=e77]:
            - generic [ref=e78]: Client Address (Optional)
            - textbox "Enter client address..." [active] [ref=e79]: 123 Fake Street
          - generic [ref=e80]:
            - generic [ref=e81]:
              - generic [ref=e82]: Invoice Items
              - generic [ref=e83]:
                - button "➕ Add Item" [ref=e84] [cursor=pointer]
                - button "➕ Add Course" [ref=e85] [cursor=pointer]
            - paragraph [ref=e87]: No items added. Click "Add Item" for generic items or "Add Course" for course-related items.
          - generic [ref=e88]:
            - generic [ref=e89]:
              - generic [ref=e90]:
                - generic [ref=e91]: Due Date
                - textbox [ref=e92]: 2026-07-28
              - generic [ref=e93]:
                - generic [ref=e94]: Payment Status
                - combobox [ref=e95] [cursor=pointer]:
                  - option "⏳ Pending" [selected]
                  - option "✅ Paid"
              - generic [ref=e96]:
                - generic [ref=e97]: Notes
                - textbox "Additional notes..." [ref=e98]
            - generic [ref=e99]:
              - generic [ref=e100]:
                - generic [ref=e101]: "Subtotal:"
                - generic [ref=e102]: R 0,00
              - generic [ref=e103]:
                - generic [ref=e104]: "Tax (%):"
                - spinbutton [ref=e105]: "0"
              - generic [ref=e106]:
                - generic [ref=e107]: "Discount (R):"
                - spinbutton [ref=e108]: "0"
              - generic [ref=e109]:
                - generic [ref=e110]: "Total:"
                - generic [ref=e111]: R 0,00
          - generic [ref=e112]:
            - button "Cancel" [ref=e113] [cursor=pointer]
            - button "✅ Create Invoice" [ref=e114] [cursor=pointer]
  - button "🧪 Test" [ref=e115] [cursor=pointer]
```

# Test source

```ts
  9   | 
  10  |      createInvoiceButton: Locator;
  11  |    
  12  | 
  13  |      clientNameTextbox: Locator;
  14  | 
  15  |      addressTextbox: Locator;
  16  | 
  17  |      addCourseButton: Locator;
  18  | 
  19  |     courseDropdown: Locator;
  20  |     
  21  | 
  22  |      totalLabel: Locator;
  23  | 
  24  |      dueDateTextbox: Locator;
  25  | 
  26  |      statusDropdown: Locator;
  27  | 
  28  |      submitButton: Locator;
  29  | 
  30  |      successMessage: Locator;
  31  | 
  32  |     constructor(page: Page) {
  33  | 
  34  |         super(page);
  35  | 
  36  |         // Replace these with your application's locators
  37  | 
  38  |         this.createInvoiceButton = page.getByRole('button', { name: 'New Invoice' });
  39  | 
  40  | 
  41  |         this.clientNameTextbox = page.locator('//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[1]/input');
  42  | 
  43  |         this.addressTextbox = page.locator('//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[2]/textarea');
  44  | 
  45  |        // this.addCourseButton = page.getByRole('button', { name: '➕ Add Course' });
  46  |        this.addCourseButton = page.locator('//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[3]/div[1]/div/button[2]');
  47  |         this.courseDropdown = page.locator(
  48  |          'xpath=//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[3]/div[2]/table/tbody/tr/td[1]/select'
  49  |         );
  50  | 
  51  |         //this.selectedCourse = page.
  52  |         this.totalLabel = page.locator('//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[4]/div[2]/div[4]/span[2]');
  53  | 
  54  |         this.dueDateTextbox = page.locator('//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[4]/div[1]/div[1]/input');
  55  | 
  56  |         this.statusDropdown = page.locator('//*[@id="app-root"]/div/div[3]/div/div[4]/div/form/div[4]/div[1]/div[2]/select');
  57  | 
  58  |         this.submitButton = page.getByRole('button', { name: 'Create Invoice' });
  59  | 
  60  |         this.successMessage = page.locator('.alert-success');
  61  |     }
  62  | 
  63  |     /**
  64  |      * Open Create Invoice screen
  65  |      */
  66  |     async clickCreateInvoice() {
  67  | 
  68  |         await this.click(this.createInvoiceButton);
  69  |         await expect(this.page.getByRole('heading', { name: /Create New Invoice/i })).toBeVisible();
  70  |       //  await expect(this.addCourseButton).toBeVisible();
  71  | 
  72  |     }
  73  | 
  74  |     /**
  75  |      * Complete invoice details
  76  |      */
  77  |     async enterInvoiceDetails(
  78  |       //  recipient: string,
  79  |         clientName: string,
  80  |         address: string
  81  |     ) {
  82  | 
  83  | 
  84  |         await this.fill(this.clientNameTextbox, clientName);
  85  | 
  86  |         await this.fill(this.addressTextbox, address);
  87  | 
  88  |     }
  89  | 
  90  |     /**
  91  |      * Add one course
  92  |      */
  93  |     async addCourse( course: string )
  94  |      {
  95  | 
  96  |        // await expect(this.addCourseButton).toBeVisible();
  97  |         //await expect(this.addCourseButton).toBeEnabled();
  98  |         //await this.addCourseButton.click({ force: true });
  99  | 
  100 |         //await expect(this.courseDropdown).toBeVisible();
  101 |        // await this.selectOption(this.courseDropdown, course);
  102 | 
  103 |         
  104 |         await this.verifyVisible(this.addCourseButton);
  105 |         if (await this.addCourseButton.isVisible() && await this.addCourseButton.isEnabled()) { 
  106 |         console.log('Add Course button is visible and ready to click.');
  107 |         console.log(this.addCourseButto);
  108 |         }
> 109 |         await this.addCourseButton.click();
      |                                    ^ Error: locator.click: Test timeout of 120000ms exceeded.
  110 | 
  111 |         // Wait for the new course row to appear
  112 |         await expect(this.courseDropdown).toBeVisible();
  113 |         if (await this.courseDropdown.isVisible()) {
  114 |             console.log('Course dropdown is visible.');
  115 |         }
  116 |        await this.courseDropdown.selectOption(course);
  117 |     }
  118 |         
  119 | 
  120 |     
  121 | 
  122 |     /**
  123 |      * Verify invoice total
  124 |      */
  125 |     async verifyTotal(expectedTotal: string) {
  126 | 
  127 |         await expect(this.totalLabel)
  128 |             .toHaveText(expectedTotal);
  129 | 
  130 |     }
  131 | 
  132 |     /**
  133 |      * Set due date
  134 |      */
  135 |     async setDueDate(date: string) {
  136 | 
  137 |         await this.fill(
  138 |             this.dueDateTextbox,
  139 |             date
  140 |         );
  141 | 
  142 |     }
  143 | 
  144 |     /**
  145 |      * Select invoice status
  146 |      */
  147 |     async selectStatus(status: string) {
  148 | 
  149 |         await this.selectOption(
  150 |             this.statusDropdown,
  151 |             status
  152 |         );
  153 | 
  154 |     }
  155 | 
  156 |     /**
  157 |      * Submit invoice
  158 |      */
  159 |     async createInvoice() {
  160 | 
  161 |         await this.click(this.submitButton);
  162 | 
  163 |         await this.waitForPageLoad();
  164 | 
  165 |     }
  166 | 
  167 |     /**
  168 |      * Verify invoice created successfully
  169 |      */
  170 |     async verifyInvoiceCreated() {
  171 | 
  172 |         await this.verifyVisible(this.successMessage);
  173 | 
  174 |     }
  175 | 
  176 | }
```