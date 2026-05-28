import {test, expect} from '@playwright/test';

test('getByRole', async({page})=>{
    await page.goto('https://playwright.dev');
    const link = page.getByRole('link', {name: /Get Started/i});
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/docs\/intro/);
});
