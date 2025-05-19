# Selenium-Cucumber VS Code Extension

The **Selenium-Cucumber** extension helps developers generate step definitions for Selenium Java from Cucumber feature files. It automates step creation, saving time and reducing manual effort.

## Features

- Automatically generates **step definitions** from Cucumber feature files.
- Supports **Java-based Selenium Cucumber frameworks**.
- Provides **auto-completion** and **error detection** for step definitions.
- Easily integrates with existing Selenium-Cucumber projects.

## Requirements

- **Node.js** must be installed.
- **VS Code 1.60.0 or later** is recommended.
- Ensure your project has **Selenium, Cucumber, and JUnit** configured.

## Installation

1. Open **VS Code**.
2. Go to **Extensions (`Ctrl+Shift+X`)**.
3. Search for **"Selenium-Cucumber"**.
4. Click **Install**.

## Usage

1. Open a `.feature` file.
2. Write Your feature codes.
3. Press ctrl+shift+p and select **"Generate Selenium Step Definitions"**.
4. The corresponding Java steps will be auto-generated and automatic copied to the clipboard.

## Release Notes

### 0.0.1
- Initial release with step definition generation.

### 0.0.2
- Added the underscore feature instead of camel case.

### 0.0.3
- Added the error handling functionality.

### 0.0.4
- Now its totally functional and work in correct way and error free. It can also handle the edge case and boundary condition.

## Known Issues

- Currently supports **Java only**.
- Some complex regex patterns may not be auto-generated correctly.

For bug reports or feature requests, visit our [GitHub Repository](https://github.com/GyanaprakashKhandual/selenium-cucumber-extension).

---

