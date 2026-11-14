# Playwright Automation Testing Project

## Project Overview

This project demonstrates end-to-end web application automation testing using **Playwright with JavaScript** on the SauceDemo e-commerce application.

The objective is to automate critical user workflows, validate application functionality, identify defects, and improve test reliability through reusable automation components.

## Application Under Test

- Application: SauceDemo
- URL: https://www.saucedemo.com/
- Application Type: E-commerce Web Application

## Technologies & Tools

| Technology | Purpose |
|---|---|
| Playwright | Web automation |
| JavaScript (ES6) | Programming language |
| Node.js | JavaScript runtime |
| VS Code | Development environment |
| Git | Version control |
| GitHub | Source code management |
| GitHub Actions | CI/CD workflow |

## Project Structure

```text
Playwright-Automation-Testing/
│
├── .github/
│   └── workflows/
│
├── fixtures/
│
├── pages/
│
├── test-data/
│
├── tests/
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## Testing Scope

The project focuses on automating important e-commerce workflows.

### 1. Login Testing
- Login with valid credentials.
- Login with invalid credentials.
- Validate error messages.
- Verify locked-out user behavior.

### 2. Product & Inventory Testing
- Verify inventory page.
- Validate product visibility.
- Verify product interactions.
- Test sorting functionality where implemented.

### 3. Cart Testing
- Add products to cart.
- Verify cart item count.
- Remove products from cart.
- Validate cart contents.

### 4. Checkout Testing
- Enter customer information.
- Validate checkout details.
- Complete checkout.
- Verify order confirmation.

*Note: Keep this coverage list aligned with the test cases actually implemented in the repository.*

## Installation & Setup

### Prerequisites
- Node.js installed
- Git installed
- Visual Studio Code

### Step 1: Clone the repository

```bash
git clone https://github.com/attareramnaaz-lgtm/Playwright-Automation-Testing.git
```

### Step 2: Navigate to the project

```bash
cd Playwright-Automation-Testing
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Install Playwright browsers

```bash
npx playwright install
```

## Execution Commands

Run all test cases:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests in Chromium:

```bash
npx playwright test --project=chromium
```

Run tests in Firefox:

```bash
npx playwright test --project=firefox
```

Run tests in WebKit:

```bash
npx playwright test --project=webkit
```

Run a specific test file:

```bash
npx playwright test tests/day16.spec.js
```

View HTML test report:

```bash
npx playwright show-report
```

## Test Reporting

Playwright HTML Reporter is configured to generate execution reports.

The report provides:
- Test execution status
- Passed and failed test cases
- Execution details
- Failure information
- Debugging information

## Automation Framework Concepts

The repository includes dedicated folders for:
- Page Object Model (POM)
- Reusable fixtures
- Test data management
- Browser configuration
- Cross-browser testing

## Future Enhancements

- Expand positive and negative test coverage.
- Improve reusable Page Object Model implementation.
- Add API automation testing.
- Integrate automated execution with GitHub Actions.
- Add screenshots and execution evidence.
- Enhance test reporting and failure analysis.

## Author

**Automation QA Engineer**

Skills: Manual Testing | Automation Testing | Playwright | JavaScript | Selenium | Python | API Testing | Jira

## Repository

GitHub: https://github.com/attareramnaaz-lgtm/Playwright-Automation-Testing

