/**
 * 📅 Day 02: GitHub Page Interactions
 * 
 * What I learned today:
 * - How to interact with multiple pages
 * - How to verify page loading states
 * - How to use selectors effectively
 * - Different page objects for different websites
 */

import { test, expect } from '../fixtures/pages';

test.describe('Day 02: GitHub Interactions', () => {
  test('GitHub page loads correctly', async ({ githubPage }) => {
    // WHAT I DID:
    // 1. Navigate to GitHub
    // 2. Verify the page title

    await githubPage.navigate();

    const title = await githubPage.getPageTitle();
    expect(title).toContain('GitHub');
  });

  test('GitHub page is accessible', async ({ githubPage, page }) => {
    // WHAT I DID:
    // - Navigate to GitHub
    // - Check if the page URL is correct

    await githubPage.navigate();

    const url = githubPage.getCurrentUrl();
    expect(url).toContain('github.com');
  });
});
