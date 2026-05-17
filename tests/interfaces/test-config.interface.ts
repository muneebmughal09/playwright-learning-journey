/**
 * 🔧 Test Configuration Interfaces
 * Define types for test configuration and test data
 */

export interface TestUser {
  username: string;
  password: string;
  email: string;
}

export interface NavigationConfig {
  baseUrl: string;
  timeout: number;
}

export interface TestData {
  searchTerm: string;
  expectedResults: number;
}

export interface PageLoadConfig {
  waitUntil: 'load' | 'domcontentloaded' | 'networkidle';
  timeout: number;
}
