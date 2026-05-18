import {test} from '@playwright/test';

test('Actions Practice', async({page}) =>{
    await page.goto('https://www.playwright.doc');
    await page.getByRole('link', {name: 'Get Started'}).click();
});

