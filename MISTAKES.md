# ❌ Mistakes I Made (So You Don't)

## Installation & Setup Mistakes

### Mistake 1: Forgetting `npx playwright install`
**What I Did:**
```bash
npm install @playwright/test
node script.js  # ❌ Browser fails to launch!
```

**Why It Failed:**
- `npm install` only installs Node packages
- Doesn't download Chrome, Firefox, Safari binaries

**Solution:**
```bash
npm install @playwright/test
npx playwright install  # ✅ Download browsers
node script.js
```

**Lesson:** Always run both commands in order!

---

### Mistake 2: Installing Only One Browser
**What I Did:**
```bash
npx playwright install chromium  # Only Chrome
```

**Why It's a Problem:**
My scripts worked on Chrome but failed on Firefox. Didn't know why until I realized I never installed Firefox.

**Solution:**
```bash
npx playwright install  # Install all 3 browsers
```

**Lesson:** Install all browsers for cross-browser testing

---

## Code Structure Mistakes

### Mistake 3: Forgetting `await browser.close()`
**What I Did:**
```js
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('https://example.com');
// ❌ Forgot to close!
```

**What Happened:**
- Script ended but browser process stayed running
- Wasted memory
- Had to kill process manually

**Solution:**
```js
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('https://example.com');
await browser.close();  // ✅ Always close!
```

**Lesson:** Always close resources. Use try/finally if needed:
```js
try {
  // Your code
} finally {
  await browser.close();
}
```

---

### Mistake 4: Not Wrapping Code in Async Function
**What I Did:**
```js
const browser = await chromium.launch();  // ❌ Syntax Error!
```

**Why It Failed:**
Can't use `await` outside async function

**Solution:**
```js
(async () => {
  const browser = await chromium.launch();  // ✅ Inside async
})();
```

**Lesson:** Always wrap Playwright code in async function

---

## Navigation Mistakes

### Mistake 5: Using `timeout: 0`
**What I Did:**
```js
await page.goto(url, { timeout: 0 });  // ❌ Infinite wait!
```

**What Happened:**
Script hung forever if page took too long.

**Solution:**
```js
await page.goto(url, { timeout: 30000 });  // ✅ 30 seconds max
```

**Lesson:** Always set reasonable timeouts

---

### Mistake 6: Using Wrong `waitUntil` Strategy
**What I Did:**
```js
await page.goto(url, { waitUntil: 'load' });
// ✅ Works but slow (waits for all resources)
```

**What Happened:**
Tests took forever because I waited for every image, font, script to load.

**Better Solution:**
```js
await page.goto(url, { waitUntil: 'networkidle' });
// ✅ Faster - waits for network to be quiet
```

**Best Solution:**
```js
await page.goto(url, { waitUntil: 'domcontentloaded' });
// ✅ Fastest - waits for DOM to be ready
```

**Lesson:** Use `networkidle` for most cases, `domcontentloaded` for speed

---

## Selector Mistakes

### Mistake 7: Using Hard-to-Maintain Selectors
**What I Did:**
```js
await page.click('div > div > div > button');  // ❌ Fragile!
```

**Why It's Bad:**
- If HTML changes slightly, selector breaks
- Hard to read
- Maintenance nightmare

**Better Solution:**
```js
await page.click('button.submit-btn');  // ✅ Clear intent
```

**Best Solution:**
```js
await page.click('button:has-text("Submit")');  // ✅ Human-readable
```

**Lesson:** Use specific, maintainable selectors

---

### Mistake 8: Selecting by Index When Content is Dynamic
**What I Did:**
```js
await page.click('button:nth-child(3)');  // ❌ What if order changes?
```

**What Happened:**
When buttons reordered, I clicked the wrong one!

**Solution:**
```js
await page.click('button:has-text("Delete")');  // ✅ Specific
```

**Lesson:** Select by content, not position

---

## Waiting Mistakes

### Mistake 9: Using Fixed Delays Instead of Smart Waits
**What I Did:**
```js
await page.goto(url);
await page.waitForTimeout(5000);  // ❌ Always wait 5 seconds
await page.click('button');
```

**Why It's Bad:**
- Sometimes page loads in 1 second (4 wasted)
- Sometimes needs 6 seconds (test fails)
- Tests are slow

**Solution:**
```js
await page.goto(url);
await page.waitForSelector('button');  // ✅ Wait until button appears
await page.click('button');
```

**Lesson:** Use specific waits, not arbitrary delays

---

### Mistake 10: Not Waiting for Navigation After Click
**What I Did:**
```js
await page.click('link');  // Click navigates to new page
console.log(await page.title());  // ❌ Still on old page!
```

**What Happened:**
Got wrong page title because new page hadn't loaded yet.

**Solution:**
```js
await Promise.all([
  page.waitForNavigation(),
  page.click('link')  // This triggers navigation
]);
console.log(await page.title());  // ✅ Now on new page
```

**Lesson:** Wait for navigation after clicks that change pages

---

## Debugging Mistakes

### Mistake 11: No Error Handling
**What I Did:**
```js
await page.click('button');
// ❌ If element not found, whole script crashes
```

**Solution:**
```js
try {
  await page.click('button');
} catch (error) {
  console.log('Button not found:', error.message);
  await page.screenshot({ path: 'error.png' });
}
```

**Lesson:** Always have try/catch blocks

---

### Mistake 12: Not Taking Screenshots on Failure
**What I Did:**
```js
if (!title.includes('Expected')) {
  console.log('Test failed!');
  process.exit(1);
}
```

**Why It's Bad:**
No visual evidence of what went wrong

**Solution:**
```js
if (!title.includes('Expected')) {
  await page.screenshot({ path: 'failure.png' });
  console.log('Test failed! See failure.png');
  process.exit(1);
}
```

**Lesson:** Screenshot failures for debugging

---

### Mistake 13: Using `PWDEBUG` Without Knowing
**What I Did:**
Stuck on problem, didn't know how to debug.

**Solution:**
```bash
PWDEBUG=1 node script.js  # ✅ Opens inspector
```

**Result:**
- Inspector opens
- Can step through code
- Can see page state
- Can inspect elements

**Lesson:** Use `PWDEBUG=1` for debugging!

---

## Context Mistakes

### Mistake 14: Sharing Cookies Between Test Sessions
**What I Did:**
```js
const page1 = await browser.newPage();
const page2 = await browser.newPage();
// Both pages share cookies ❌
```

**What Happened:**
Logged in as user1 in page1, but page2 also had user1's session. Can't test multiple users!

**Solution:**
```js
const context1 = await browser.newContext();
const page1 = await context1.newPage();

const context2 = await browser.newContext();
const page2 = await context2.newPage();
// Completely isolated sessions ✅
```

**Lesson:** Use contexts for isolated sessions

---

## Performance Mistakes

### Mistake 15: Running Tests One by One
**What I Did:**
```js
// Test 1
const page = await browser.newPage();
await page.goto(url);
// ... test code ...
await page.close();

// Test 2
const page2 = await browser.newPage();
await page2.goto(url);
// ... test code ...
await page2.close();
// Very slow! ❌
```

**Solution:**
```js
const context1 = await browser.newContext();
const page1 = await context1.newPage();

const context2 = await browser.newContext();
const page2 = await context2.newPage();

// Both run simultaneously ✅
Promise.all([
  runTest1(page1),
  runTest2(page2)
]);
```

**Lesson:** Run tests in parallel when possible

---

## Checklist: What I've Learned

✅ Always `npm install` + `npx playwright install`  
✅ Always `await browser.close()`  
✅ Wrap code in async function  
✅ Set reasonable timeouts  
✅ Use smart wait strategies  
✅ Use specific, readable selectors  
✅ Wait for navigation after page changes  
✅ Use error handling and try/catch  
✅ Take screenshots on failure  
✅ Use `PWDEBUG=1` for debugging  
✅ Use contexts for isolated sessions  
✅ Run tests in parallel  

---

**Last Updated:** May 2026  
**Mistakes Made:** 15+  
**Lessons Learned:** ∞  
**Current Status:** Still making new mistakes! 🚀
