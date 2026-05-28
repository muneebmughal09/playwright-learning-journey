import { test } from '@playwright/test';

test('capture docs into screenshot', async({ page }) =>{
    await page.goto('https://playwright.dev/doc/intro');
    await page.screenshot({path: 'screenshots/docs-intro.png', fullPage: true });
});