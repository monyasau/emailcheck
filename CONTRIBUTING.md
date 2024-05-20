# Contributing to emailcheck

Thank you for considering contributing to emailcheck! Your help is greatly appreciated. This document outlines the guidelines for contributing to this project.

## Table of Contents

1. [How Can I Contribute?](#how-can-i-contribute)
    - [Reporting Bugs](#reporting-bugs)
    - [Suggesting Enhancements](#suggesting-enhancements)
    - [Submitting Pull Requests](#submitting-pull-requests)
2. [Code of Conduct](#code-of-conduct)
3. [Development Guidelines](#development-guidelines)
    - [Setting Up the Environment](#setting-up-the-environment)
    - [Code Style](#code-style)
    - [Testing](#testing)

## How Can I Contribute?

### Reporting Bugs

If you encounter a bug in the project, please open an issue on GitHub. Be sure to include as much detail as possible:

- A clear and descriptive title.
- A description of the steps to reproduce the bug.
- Any relevant screenshots or error messages.
- Your environment details (OS, Node.js version, etc.).

### Suggesting Enhancements

We welcome suggestions for new features or enhancements. To suggest an enhancement:

- Open an issue on GitHub with the title prefixed by `[Feature Request]`.
- Describe the enhancement in detail.
- Explain why you believe this enhancement would be useful.
- Include any relevant examples or ideas.

### Submitting Pull Requests

If you want to contribute code to the project, follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top of this repository.
2. **Clone your fork**: 
    ```sh
    git clone https://github.com/your-username/emailcheck.git
    ```
3. **Create a new branch**:
    ```sh
    git checkout -b feature/your-feature-name
    ```
4. **Make your changes**: Ensure your changes adhere to the project's code style and include necessary tests.
5. **Commit your changes**:
    ```sh
    git commit -m "Add feature: your-feature-name"
    ```
6. **Push to your fork**:
    ```sh
    git push origin feature/your-feature-name
    ```
7. **Open a pull request**: Go to the original repository on GitHub and click "New Pull Request". Fill out the template provided, describing your changes in detail.

## Code of Conduct

Please read and adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) to ensure a welcoming environment for all contributors.

## Development Guidelines

### Setting Up the Environment

To set up a development environment, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/monyasau/emailcheck.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd emailcheck
    ```
3. **Install dependencies**:
    ```sh
    npm install
    ```

### Code Style

Maintaining a consistent code style helps keep the project readable and maintainable. Follow these guidelines:

- Use meaningful variable and function names.
- Include comments and documentation where necessary.

### Testing

Write tests for new features and bug fixes to ensure the project remains stable. To run tests:

```sh
npm test
