import {test, expect} from '@playwright/test';

test('Title Assertion', async({page})=>{
    await page.goto('https://www.playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);
});

test('URL Assertion', async({page})=>{
    await page.goto('https://www.playwright.dev');
    await page.getByRole('link', {name: 'Get Started'}).click();
    await expect(page).toHaveURL(/docs\/intro/);
});

test('H1 Assertion', async({page})=>{
    await page.goto('https://www.playwright.dev');
    await page.getByRole('link', {name: 'Get Started'}).click();
    await expect(page).toHaveURL(/docs\/intro/);
    await expect(page.getByRole('heading', { level:1 })).toBeVisible();
});

test('Text Assertion', async({page}) =>{
    await page.goto('https://www.playwright.dev');
    await expect(page.getByText(/Playwright enables/)).toBeVisible();
});

test('Link Visibility with Chained Locators', async({page}) =>{
    await page.goto('https://www.playwright.dev');
    const link = page.getByRole('link', {name: 'Get Started'}).getByText('Get Started');
    await expect(link).toBeVisible();

});

test("practice", async({page}) => {
    await page.goto('https://www.playwright.dev');
});
