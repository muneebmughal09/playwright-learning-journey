# 🎭 Playwright Learning Journey

> I'm learning Playwright from scratch. Follow my journey as I master automation testing from basics to advanced patterns.
>
> **What is this?**
> - Daily practice code and learnings
> - Comprehensive notes on every concept
> - Real problems I solve along the way
> - Resources that actually help
> - Mistakes I made (so you don't)
>
> **Who should follow?**
> - People starting their Playwright journey
> - Anyone learning automation testing
> - Visual learners who like step-by-step examples
> - People who want to see learning in public

---

## 📊 Learning Progress

| Day | Focus | Status | File |
|-----|-------|--------|------|
| 01 | Basic Navigation & Assertions | ✅ | `01-basic-navigation.spec.ts` |

---

## 📁 Repository Structure

```
playwright-learning-journey/
├── README.md                    # This file
├── DAILY_NOTES.md               # Daily practice log with plain English notes
├── GLOSSARY.md                  # Playwright terms explained
├── MISTAKES.md                  # Errors I made & solutions
├── resources.md                 # Helpful links & tutorials
├── package.json                 # Dependencies & scripts
├── playwright.config.ts         # Playwright configuration
│
├── tests/
│   ├── specs/                   # All test files (.spec.ts) numbered by day
│   │   ├── 01-basic-navigation.spec.ts
│   │   └── ...more daily tests
│   │
│   ├── pages/                   # Page Objects
│   │   ├── base.page.ts         # Base class with common methods
│   │   ├── example.page.ts      # Example page object
│   │   └── ...more page objects
│   │
│   ├── fixtures/                # Test fixtures
│   │   └── pages.ts             # Custom fixtures with page objects
│   │
│   └── interfaces/              # TypeScript interfaces
│       └── test-config.interface.ts
│
└── playwright.config.ts         # Global test configuration
```

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/muneebmughal09/playwright-learning-journey.git
cd playwright-learning-journey
```

### 2. Install Dependencies
```bash
npm install
npx playwright install
```

### 3. Run Tests
```bash
# Run all tests
npm run test

# Run with headed browser (see the browser)
npm run headed

# Debug mode
npm run debug

# Run specific test
npx playwright test tests/specs/01-basic-navigation.spec.ts
```

---

## 📚 How Tests Are Organized

### Daily Test Files (`tests/specs/`)
Each day has a numbered test file:
- `01-basic-navigation.spec.ts` - Day 1 learnings

Each test includes:
- **Description** - What I'm testing
- **Plain English comments** - "WHAT I DID:" explains each action
- **Assertions** - Verify the behavior

### Page Objects (`tests/pages/`)
- `base.page.ts` - Common methods (navigate, click, getText, etc.)
- `*.page.ts` - Specific page objects extending BasePage

### Fixtures (`tests/fixtures/`)
- Import and extend custom page objects
- Reuse page objects across multiple tests

### Interfaces (`tests/interfaces/`)
- Define types for test data and configuration

---

## 🎯 Key Files to Check Out

### For Daily Learning:
- **[Daily Notes](./DAILY_NOTES.md)** - Track daily practice in plain English
- **[Tests](./tests/specs/)** - All test files numbered by day

### For Reference:
- **[Glossary](./GLOSSARY.md)** - Playwright terms explained
- **[Mistakes](./MISTAKES.md)** - Errors I made & solutions
- **[Resources](./resources.md)** - Official docs, tutorials, communities

### For Implementation:
- **[Base Page Object](./tests/pages/base.page.ts)** - Common methods all pages use
- **[Fixtures](./tests/fixtures/pages.ts)** - Custom test fixtures with page objects
- **[Interfaces](./tests/interfaces/)** - TypeScript types for tests

---

## 💡 Current Focus

**Daily Practice Structure:**
- Each day = one `.spec.ts` file in `tests/specs/`
- Tests have plain English comments explaining what I learned
- Page objects abstract away implementation details
- Fixtures provide reusable page objects

**Today's Status:** Mastering Day 01 - Basic Navigation & Assertions  
**Total Tests:** 2 passing ✅  
**Learning Streak:** 🔥 Focused  

---

## ✨ Best Practices in This Project

1. **One Test = One Behavior** - Each test verifies one specific thing
2. **Page Objects Pattern** - Hide selectors and implementation details
3. **Clear Naming** - Test names describe exactly what they test
4. **Plain English Explanations** - Every test is explained in simple terms
5. **Reusable Fixtures** - Page objects are injected as fixtures
6. **Type Safety** - TypeScript interfaces for configuration
7. **Base Classes** - Common methods in BasePage reduce duplication

---

## 📖 My Learning Journey

✅ Daily test files keep me organized
✅ Page objects keep code clean
✅ Fixtures make tests reusable
✅ Plain English comments help me remember
✅ Each day builds on the last

---

## 🤝 Questions?

This is a learning project! If you have questions or want to learn Playwright too:
- Open an issue
- Check out the DAILY_NOTES.md
- Look at the test files in `tests/specs/`

---

**Last Updated:** May 17, 2026  
**Status:** 🟢 Actively Learning  
**Author:** [@muneebmughal09](https://github.com/muneebmughal09)
