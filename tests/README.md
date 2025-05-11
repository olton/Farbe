# Farbe Library Tests

This directory contains tests for the Farbe color manipulation library using the Latte testing framework.

## Test Files

- **color.test.js**: Tests for the core color manipulation functions in routines.js
- **palette.test.js**: Tests for the color palettes (StandardColorPalette and MetroColorPalette)
- **primitives.test.js**: Tests for the color primitive classes (RGB, RGBA, HSV, HSL, HSLA, CMYK)
- **farbe.test.js**: Tests for the main Farbe class
- **context7.test.js**: Integration tests using a shared test context

## Running Tests

To run all tests:

```bash
npm test
```

This will execute the Latte testing framework and run all test files in this directory.

## Test Context

The context7.test.js file demonstrates the use of a shared test context to organize and share test data across multiple test cases. The context includes:

1. A set of predefined colors
2. Farbe instances for each color
3. Color schemes created from these colors

This approach allows for more comprehensive integration testing of the library's components.

## Coverage

The Latte testing framework provides built-in coverage reporting. To run tests with coverage:

```bash
npx latte --coverage
```

This will generate coverage reports in the coverage directory.