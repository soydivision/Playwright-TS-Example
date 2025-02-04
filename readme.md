# Test Automation Project

This project contains automated tests written in Playwright TypeScript to validate the functionality of various web applications and search engines. The tests are structured using modern testing frameworks to ensure reliability and maintainability.

## Directory Structure

- **amazon_search_test.spec.ts**: Tests the search functionality on Amazon.
- **sauce_demo_test.spec.ts**: Tests key functionalities of the Sauce Demo application, including login and product interactions.
- **bing_search_test.spec.ts**: Tests the search functionality on Bing.

## Prerequisites

Ensure you have the following installed on your system:

1. **Node.js** (version 14 or later)
2. **npm** or **yarn**
3. A modern web browser (e.g., Chrome or Firefox)

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. Install deps  
   ```bash 
   npm install
3. Run tests
   ```bash 
   npx playwright test
