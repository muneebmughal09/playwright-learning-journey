/**
 * 🌐 Week 1: Navigation & Browser Tests
 */

import { test, expect } from '@playwright/test';
import { chromium, firefox, webkit } from '@playwright/test';

test.describe('Week 1: Navigation & Browsers', () => {
  test('should launch chromium browser', async () => {
    const browser = await chromium.launch();
    expect(browser).toBeTruthy();
    
    const page = await browser.newPage();
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toContain('Example');
    
    await browser.close();
    console.log('✅ Chromium test passed');
  });

  test('should launch firefox browser', async () => {
    const browser = await firefox.launch();
    expect(browser).toBeTruthy();
    
    const page = await browser.newPage();
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toContain('Example');
    
    await browser.close();
    console.log('✅ Firefox test passed');
  });

  test('should navigate and verify URL', async ({ page }) => {
    await page.goto('https://example.com');
    const url = page.url();
    expect(url).toContain('example.com');
    console.log('✅ URL verification test passed');
  });

  test('should handle browser context', async ({ browser }) => {
    const context1 = await browser!.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://example.com');
    
    const context2 = await browser!.newContext();
    const page2 = await context2.newPage();
    await page2.goto('https://github.com');
    
    const title1 = await page1.title();
    const title2 = await page2.title();
    
    expect(title1).toContain('Example');
    expect(title2).toContain('GitHub');
    
    await context1.close();
    await context2.close();
    console.log('✅ Context test passed');
  });
});
