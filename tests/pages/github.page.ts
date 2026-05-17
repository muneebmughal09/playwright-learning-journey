/**
 * 🐙 GitHub Page Object
 * For testing with https://github.com
 */

import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class GitHubPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to GitHub
   */
  async navigate(): Promise<void> {
    await this.goto('https://github.com');
  }

  /**
   * Get page title
   */
  async getPageTitle(): Promise<string> {
    return await this.getTitle();
  }

  /**
   * Check if logged in (by checking for user menu)
   */
  async isLoggedIn(): Promise<boolean> {
    try {
      await this.waitForElement('[data-testid="profile-menu-button"]');
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Search for a repository
   * @param query - Repository name to search
   */
  async searchRepository(query: string): Promise<void> {
    await this.click('button[aria-label="Search or jump to"]');
    await this.fillInput('[data-testid="query-builder-test"]', query);
  }
}
