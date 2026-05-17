/**
 * 📄 Base Page Object
 * Parent class for all page objects - contains common methods
 */

import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a URL
   * @param url - Full URL or path
   */
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Fill input field
   * @param selector - Element selector
   * @param text - Text to type
   */
  async fillInput(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }

  /**
   * Click an element
   * @param selector - Element selector
   */
  async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  /**
   * Get text content
   * @param selector - Element selector
   */
  async getText(selector: string): Promise<string | null> {
    return await this.page.textContent(selector);
  }

  /**
   * Wait for element
   * @param selector - Element selector
   */
  async waitForElement(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
  }

  /**
   * Take screenshot
   * @param name - Screenshot filename
   */
  async takeScreenshot(name: string): Promise<void> {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }

  /**
   * Get page title
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Get current URL
   */
  getCurrentUrl(): string {
    return this.page.url();
  }
}
