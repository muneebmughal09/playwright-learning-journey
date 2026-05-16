// 🎭 Playwright First Script - Your Starting Point!
// This is the basic template you'll use for every Playwright script

const { chromium } = require('@playwright/test');

(async () => {
  // Step 1: Launch Browser
  console.log('🚀 Launching browser...');
  const browser = await chromium.launch({ headless: false }); // Change to true for headless
  
  // Step 2: Create a new page (tab)
  console.log('📄 Creating new page...');
  const page = await browser.newPage();
  
  // Step 3: Navigate to a website
  console.log('🌐 Navigating to example.com...');
  await page.goto('https://example.com', {
    waitUntil: 'networkidle',  // Wait for network to be quiet
    timeout: 30000              // Max 30 seconds
  });
  
  // Step 4: Get page title
  const title = await page.title();
  console.log('📋 Page title:', title);
  
  // Step 5: Get page URL
  const url = page.url();
  console.log('🔗 Page URL:', url);
  
  // Step 6: Take a screenshot
  console.log('📸 Taking screenshot...');
  await page.screenshot({ 
    path: 'screenshot-example.png',
    fullPage: true  // Capture entire page
  });
  console.log('✅ Screenshot saved as: screenshot-example.png');
  
  // Step 7: Wait a bit so you can see the browser (optional)
  console.log('⏳ Waiting 3 seconds...');
  await page.waitForTimeout(3000);
  
  // Step 8: Close browser (IMPORTANT!)
  console.log('🔒 Closing browser...');
  await browser.close();
  
  console.log('✅ Script completed successfully!');
})();

// ==================================
// 🎓 LEARNING NOTES:
// ==================================
// 
// Async/Await: All Playwright actions are async (take time)
// Always use 'await' before Playwright functions
//
// Browser Lifecycle:
// 1. Launch browser
// 2. Create page(s)
// 3. Interact with page
// 4. Close browser (clean up)
//
// Headed vs Headless:
// - headless: false  → You see the browser (for learning)
// - headless: true   → No window (for production/CI-CD)
//
// WaitUntil Options:
// - 'load': Waits for load event (slow)
// - 'domcontentloaded': Waits for DOM (faster)
// - 'networkidle': Waits for network quiet (best for most cases)
//
// Always Remember:
// ✅ Always close the browser to avoid memory leaks
// ✅ Set reasonable timeouts
// ✅ Use try/catch for error handling
// ✅ Take screenshots for debugging
//
// Next Steps:
// 1. Run this script: node code.js
// 2. Check screenshot-example.png
// 3. Modify it to navigate to different websites
// 4. Try clicking buttons (next week!)
