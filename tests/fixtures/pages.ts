/**
 * 🔧 Page Fixtures
 * 
 * Usage in tests:
 * import { test, expect } from '../fixtures/pages';
 * 
 * test('example', async ({ examplePage }) => {
 *   await examplePage.navigate();
 * });
 */

import { test as base } from '@playwright/test';
import { ExamplePage } from '../pages/example.page';
import { GitHubPage } from '../pages/github.page';

export const test = base.extend<{
  examplePage: ExamplePage;
  githubPage: GitHubPage;
}>({
  examplePage: async ({ page }, use) => {
    const examplePage = new ExamplePage(page);
    await use(examplePage);
  },

  githubPage: async ({ page }, use) => {
    const githubPage = new GitHubPage(page);
    await use(githubPage);
  },
});

export { expect } from '@playwright/test';
