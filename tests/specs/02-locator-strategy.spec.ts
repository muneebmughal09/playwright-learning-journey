import {test, expect} from '@playwright/test';

// Practice for getByRole locators

test('getByRole', async({page})=>{
    await page.goto('https://playwright.dev');
    const link = page.getByRole('link', {name: /Get Started/i});
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/docs\/intro/);
});

test('getByRole', async({page})=>{
    await page.goto('https://playwright.dev/docs/intro');
    const link = page.getByRole('link', {name: /Trace Viewer/i});
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/trace-viewer-intro/i);
});

// Practice for getByText locators

test('getByText', async({page})=>{
    await page.goto('https://playwright.dev/docs/intro');
    await expect(page.getByText(/Playwright Test is an end-to-end test/i)).toBeVisible();
});

// Practice for getByLabel locators

test('getByLabel', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/locators');
  await page.getByRole('button', { name: /Search/i }).click();
  await expect(page.getByLabel(/Search docs/i)).toBeVisible();
});