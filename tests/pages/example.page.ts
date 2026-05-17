/**
 * 🎭 Example Page Object
 * For testing with https://example.com
 */

import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ExamplePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to example.com
   */
  async navigate(): Promise<void> {
    await this.goto('https://example.com');
  }

  /**
   * Get the h1 text
   */
  async getMainHeading(): Promise<string | null> {
    return await this.getText('h1');
  }

  /**
   * Check if page loaded
   */
  async isPageLoaded(): Promise<boolean> {
    try {
      await this.waitForElement('h1');
      return true;
    } catch {
      return false;
    }
  }
}
