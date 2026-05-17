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

export const test = base.extend<{
  examplePage: ExamplePage;
}>({
  examplePage: async ({ page }, use) => {
    const examplePage = new ExamplePage(page);
    await use(examplePage);
  },
});

export { expect } from '@playwright/test';
