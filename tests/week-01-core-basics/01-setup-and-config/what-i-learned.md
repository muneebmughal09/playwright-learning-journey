# 📚 Week 1: Core Basics - What I Learned

## 🎯 This Week's Focus
Setting up Playwright and understanding the fundamentals before writing actual tests.

---

## ✅ What I Discovered

### 1. **Installation & Setup** (30 minutes)

#### What It Is:
Getting Playwright installed and ready to use on your computer.

#### How I Did It:
```bash
# Step 1: Create a project folder
mkdir my-playwright-project
cd my-playwright-project

# Step 2: Initialize npm
npm init -y

# Step 3: Install Playwright
npm install @playwright/test

# Step 4: Install browser binaries
npx playwright install
```

#### Key Files Created:
- `package.json` - Lists your dependencies
- `node_modules/` - All the code Playwright needs

#### Why This Matters:
Without setup, you can't run Playwright. It's like buying a car but not putting gas in it.

---

### 2. **First Script Structure** (20 minutes)

#### Basic Template:
```js
const { chromium } = require('@playwright/test');

(async () => {
  // Create browser instance
  const browser = await chromium.launch();
  
  // Create a page/tab
  const page = await browser.newPage();
  
  // Do something!
  await page.goto('https://example.com');
  
  // Take screenshot to verify
  await page.screenshot({ path: 'screenshot.png' });
  
  // Always close!
  await browser.close();
})();
```

#### What Each Part Does:
1. **Import** - Get Playwright tools
2. **Launch Browser** - Start Chrome/Firefox/Safari
3. **Create Page** - Open a new tab
4. **Navigate** - Go to a website
5. **Do Stuff** - Click, type, take screenshot, etc.
6. **Close** - Clean up (very important!)

#### My "Aha!" Moment:
The structure is always: **Launch → Create Page → Do Stuff → Close**

---

### 3. **Browser Types** (10 minutes)

Playwright can automate 3 browsers:

#### Chromium
```js
const { chromium } = require('@playwright/test');
const browser = await chromium.launch();
```
- Used by Chrome, Edge, Brave
- Most popular
- Best testing coverage

#### Firefox
```js
const { firefox } = require('@playwright/test');
const browser = await firefox.launch();
```
- Mozilla's browser
- Different rendering engine
- Catches different bugs

#### WebKit
```js
const { webkit } = require('@playwright/test');
const browser = await webkit.launch();
```
- Safari's engine
- Mobile browser testing
- Good for iOS testing

#### My Takeaway:
Testing on all 3 ensures your website works everywhere!

---

### 4. **Headed vs Headless Mode** (15 minutes)

#### Headless Mode (Default - Faster)
```js
const browser = await chromium.launch({ headless: true });
// ✅ No window opens
// ✅ Faster execution
// ✅ Good for CI/CD
// ❌ Hard to debug
```

#### Headed Mode (Visible - For Learning)
```js
const browser = await chromium.launch({ headless: false });
// ✅ You can see what's happening
// ✅ Great for debugging
// ✅ Perfect for learning
// ❌ Slower
```

#### When to Use:
- **Headed** - While learning and debugging
- **Headless** - For production tests and CI/CD

#### My Discovery:
I use headed mode 90% of the time while learning. It helps SO much!

---

### 5. **Basic Navigation** (10 minutes)

#### Go to a Website
```js
await page.goto('https://example.com');
// Waits for page load event
```

#### Wait Strategies (IMPORTANT!)
```js
// Wait for page load
await page.goto(url, { waitUntil: 'load' });

// Wait for DOM to be ready (faster)
await page.goto(url, { waitUntil: 'domcontentloaded' });

// Wait for no network requests (BEST!)
await page.goto(url, { waitUntil: 'networkidle' });
```

#### Set Timeout (Don't Wait Forever!)
```js
await page.goto(url, { 
  waitUntil: 'networkidle',
  timeout: 30000  // Max 30 seconds
});
```

#### My Biggest Realization:
Waiting correctly = 80% of fixing test failures!

---

### 6. **Taking Screenshots** (5 minutes)

#### Save Screenshot
```js
await page.screenshot({ path: 'screenshot.png' });
```

#### Full Page Screenshot
```js
await page.screenshot({ 
  path: 'full-page.png',
  fullPage: true  // Includes scrolled content
});
```

#### Screenshot of Specific Element
```js
const element = await page.locator('.card');
await element.screenshot({ path: 'card-screenshot.png' });
```

#### My Use Case:
Screenshots are GOLD for debugging. I use them constantly!

---

### 7. **Browser Context** (10 minutes)

#### What Is It?
A separate, isolated browser session (like incognito mode).

#### Why Use It?
- Test multiple users at same time
- Clean slate each time
- No cookies/storage interference

#### Example:
```js
const context1 = await browser.newContext();
const page1 = await context1.newPage();

const context2 = await browser.newContext();
const page2 = await context2.newPage();

// page1 and page2 are completely isolated!
// Each has its own cookies, storage, etc.
```

#### My Understanding:
Browser > Context > Page (hierarchy matters!)

---

### 8. **Viewport Size** (5 minutes)

#### Set Screen Size
```js
const page = await browser.newPage({
  viewport: { width: 1280, height: 720 }
});
```

#### Mobile Viewport
```js
const page = await browser.newPage({
  viewport: { width: 375, height: 667 },
  userAgent: 'Mozilla/5.0...'  // Mobile user agent
});
```

#### My Use Case:
Testing responsive design by simulating different devices!

---

## 🚨 Problems I Ran Into

### Problem 1: "Command not found: npx"
**Solution:** Node.js wasn't installed properly. Reinstalled and it worked.

### Problem 2: "Browser failed to launch"
**Solution:** Forgot to run `npx playwright install` to download browser binaries. Rookie mistake!

### Problem 3: Script Hangs Forever
**Solution:** Forgot to add `await browser.close()`. Always close the browser!

### Problem 4: Navigation Timeout
**Solution:** Used `timeout: 0` by mistake (infinite wait). Set proper timeout value.

---

## 💡 Key Learnings This Week

✅ Playwright structure: Launch → Create → Do → Close  
✅ Headless mode for speed, headed mode for debugging  
✅ Always set timeouts (don't wait forever!)  
✅ Navigation waitUntil options matter (use 'networkidle')  
✅ Screenshots are your best friend for debugging  
✅ Always close browser to prevent memory leaks  
✅ Contexts for isolated browser sessions  
✅ Viewports for responsive design testing  

---

## 📝 Commands I'm Using

```bash
# Install Playwright
npm install @playwright/test

# Install browsers
npx playwright install

# Run a script
node script.js

# Run with debug mode
PWDEBUG=1 node script.js
```

---

## 🎯 Next Week Preview

- Learning how to find elements on the page
- Click, type, and interact with elements
- Wait strategies in depth
- First real test writing

---

## 🔗 Resources That Helped

- Official Playwright Docs: https://playwright.dev/docs/intro
- Installation Guide: https://playwright.dev/docs/intro
- API Reference: https://playwright.dev/docs/api

---

**Last Updated:** May 2026  
**Time Spent:** ~2 hours (setup included)  
**Confidence Level:** 80% ⭐⭐⭐⭐

*Next: Start understanding selectors and locators!* 🚀
