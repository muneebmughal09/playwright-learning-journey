import { test, expect } from '@playwright/test';

// test('capture docs into screenshot', async({ page }) =>{
//     await page.goto('https://playwright.dev/docs/intro');
//     await page.screenshot({path: 'screenshots/docs-intro.png', fullPage: true });

// });

test('capture docs into screenshot', async({ page }) =>{
    await page.goto('https://playwright.dev/docs/intro');
    await expect(page).toHaveScreenshot('docs-intro.png');
});