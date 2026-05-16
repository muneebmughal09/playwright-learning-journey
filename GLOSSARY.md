# 📖 Playwright Glossary

## A

### **Assertions**
- **What:** Checking if something is true or false in your test
- **Example:**
  ```js
  await expect(page).toHaveTitle('Expected Title');
  ```
- **Why It Matters:** Without assertions, you don't know if your test passed or failed

### **Automation**
- **What:** Making a computer do repetitive tasks automatically
- **Example:** Logging into 100 websites and checking prices
- **In Playwright:** We automate browser interactions

---

## B

### **Browser**
- **What:** The application you use to view websites (Chrome, Firefox, Safari)
- **Types:**
  - Chromium (Chrome, Edge, Brave)
  - Firefox
  - WebKit (Safari)
- **In Playwright:** We control the browser programmatically

### **Headless Mode**
- **What:** Running browser without showing a window
- **Fast:** ✅ Yes (no rendering overhead)
- **Good for:** Production tests, CI/CD pipelines
- **Headed Mode:** Shows the browser window (slower but good for debugging)

### **BDD (Behavior-Driven Development)**
- **What:** Writing tests in human-readable language
- **Example:** "Given I'm on the login page, When I enter credentials, Then I should see the dashboard"
- **In Playwright:** Can be done with frameworks like Cucumber

---

## C

### **Context (Browser Context)**
- **What:** An isolated browser session (like incognito mode)
- **Use Case:** Testing multiple users simultaneously
- **Example:**
  ```js
  const context1 = await browser.newContext();
  const context2 = await browser.newContext();
  // Two separate sessions, no shared cookies
  ```

### **CSS Selector**
- **What:** A way to select elements on a page using CSS patterns
- **Examples:**
  - `.button` - selects class "button"
  - `#login` - selects id "login"
  - `input[type="email"]` - selects input with type email
- **Speed:** Fast ✅

### **Click**
- **What:** Simulating a mouse click on an element
- **Example:**
  ```js
  await page.click('button');
  ```

---

## D

### **Debugging**
- **What:** Finding and fixing problems in your code
- **In Playwright:** Use `PWDEBUG=1` environment variable
- **Command:**
  ```bash
  PWDEBUG=1 node script.js
  ```
- **Result:** Opens inspector to step through code

### **DOM (Document Object Model)**
- **What:** The structure of a webpage (all HTML elements)
- **In Playwright:** We manipulate the DOM by finding and clicking elements

---

## E

### **E2E Testing (End-to-End)**
- **What:** Testing complete workflows from start to finish
- **Example:** Login → Add item to cart → Checkout → Verify order
- **Why It Matters:** Tests real user scenarios

### **Element**
- **What:** Any HTML component on a page
- **Examples:** Button, Text Box, Link, Image, Heading
- **In Playwright:** We find and interact with elements

---

## F

### **Framework**
- **What:** A tool that makes testing easier
- **Playwright Frameworks:**
  - Playwright Test (built-in)
  - Jest + Playwright
  - Cucumber + Playwright

---

## H

### **Hover**
- **What:** Moving mouse over an element
- **Example:**
  ```js
  await page.hover('.dropdown');
  ```
- **Use Case:** Trigger dropdown menus, tooltips

---

## L

### **Locator**
- **What:** A way to find elements on the page
- **Types:**
  - By CSS: `page.locator('button')`
  - By Text: `page.locator('text=Click me')`
  - By Role: `page.locator('button:has-text("Submit")')`
- **Advantage:** More readable than just selectors

---

## N

### **Navigation**
- **What:** Going to a different URL
- **Example:**
  ```js
  await page.goto('https://example.com');
  ```
- **Important:** Always wait for page to load before continuing

---

## P

### **Page**
- **What:** A single tab/window in the browser
- **Example:**
  ```js
  const page = await browser.newPage();
  ```
- **Multiple Pages:** Can have multiple pages in one browser

### **Playwright**
- **What:** An automation testing framework by Microsoft
- **Supports:** Chrome, Firefox, Safari
- **Languages:** JavaScript, Python, Java, C#
- **Best For:** E2E testing, web scraping, automation

---

## S

### **Selector**
- **What:** A pattern to find elements on a page
- **Types:**
  - CSS Selector: `.button` (fast)
  - XPath: `//button[@id='login']` (powerful)
  - Text: `text=Click Me` (human-friendly)

### **Screenshot**
- **What:** A picture of the page
- **Use Case:** Debugging, documentation, visual regression
- **Example:**
  ```js
  await page.screenshot({ path: 'screenshot.png' });
  ```

### **Synchronization**
- **What:** Waiting for things to happen before continuing
- **In Playwright:** Automatic synchronization with `waitForNavigation`, `waitForSelector`, etc.
- **Why Important:** Tests are too fast for slow websites otherwise

---

## T

### **Test**
- **What:** Code that checks if something works correctly
- **Example:**
  ```js
  test('user can login', async () => {
    // Test code here
  });
  ```

### **Timeout**
- **What:** Maximum time to wait for something
- **Default:** 30,000ms (30 seconds)
- **Example:**
  ```js
  await page.goto(url, { timeout: 60000 }); // Wait max 60 seconds
  ```
- **Why Important:** Don't want tests hanging forever

### **Type**
- **What:** Simulating keyboard typing
- **Example:**
  ```js
  await page.type('input[type="email"]', 'test@example.com');
  ```

---

## U

### **UI (User Interface)**
- **What:** What you see on the screen
- **In Automation:** We interact with the UI programmatically

---

## V

### **Viewport**
- **What:** The size of the browser window
- **Example:**
  ```js
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 }
  });
  ```
- **Use Case:** Test responsive design

### **Video Recording**
- **What:** Recording the test execution
- **Use Case:** Debugging failed tests, documentation

---

## W

### **Wait**
- **What:** Pausing execution until something happens
- **Types:**
  - `waitForNavigation` - Wait for page change
  - `waitForSelector` - Wait for element to appear
  - `waitForTimeout` - Wait fixed time (not recommended)
- **Smart Waiting:** Playwright waits automatically (usually)

### **WebKit**
- **What:** Safari's browser engine
- **Used By:** Safari, mobile browsers
- **In Playwright:** Can test Safari behavior

---

## X

### **XPath**
- **What:** Powerful way to find elements
- **Example:** `//button[@id='login']`
- **Pros:** Very powerful
- **Cons:** Complex, slower than CSS
- **Use When:** CSS selector won't work

---

## Quick Reference

### Common Terms
```
Browser > Context > Page > Locator > Action
  ↓         ↓        ↓       ↓         ↓
Chrome   Session  Tab     Button    Click
```

### Common Actions
```
await page.goto(url)          → Navigate
await page.click(selector)     → Click
await page.type(selector, text) → Type
await page.waitForSelector()   → Wait
await page.screenshot()        → Screenshot
```

---

**Last Updated:** May 2026  
**Status:** 🟢 Complete for Week 1
