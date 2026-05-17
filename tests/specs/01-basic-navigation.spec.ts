/**
 * 📅 Day 01: Basic Navigation and Page Assertions
 * 
 * What I learned today:
 * - How to navigate to a URL using Playwright
 * - How to verify page title and content
 * - How to use page objects for cleaner code
 * - Basic assertions with expect()
 */

import { test, expect } from '../fixtures/pages';

test.describe('Day 01: Basic Navigation', () => {
  test('Example page loads correctly', async ({ examplePage }) => {
    // WHAT I DID:
    // 1. Navigate to example.com
    // 2. Verify the page title contains "Example"
    // 3. Get the main heading text

    await examplePage.navigate();

    const title = await examplePage.getTitle();
    expect(title).toContain('Example');

    const heading = await examplePage.getMainHeading();
    expect(heading).toBe('Example Domain');
  });

  test('Page is loaded and accessible', async ({ examplePage }) => {
    // WHAT I DID:
    // - Verify the page loads successfully using a custom method

    const isLoaded = await examplePage.isPageLoaded();
    expect(isLoaded).toBe(true);
  });
});
