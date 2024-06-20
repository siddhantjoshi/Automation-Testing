# Cypress BDD Framework with Page Object Model

## Overview

This project is a Cypress automation framework using the BDD approach with Cucumber and implementing the Page Object Model (POM) design pattern. The framework includes utility functions for logging, reporting, and taking screenshots after each test step.

## Features

- **BDD with Cucumber**: Write tests in Gherkin syntax.
- **Page Object Model**: Organized and reusable page classes.
- **Dynamic Locators**: Use JSON for storing and retrieving element locators.
- **Logging and Reporting**: Custom logging and reporting functions.
- **Screenshot Capture**: Automatically take screenshots after each test step.

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

### Steps

1. **Clone the Repository**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Run Cypress Tests**
    ```bash
    npx cypress open
    ```
   Or to run tests in headless mode:
    ```bash
    npx cypress run
    ```
