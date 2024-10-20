# Colorful Log Package

A simple and customizable colorful console logger for Node.js applications written in TypeScript. This package allows you to log message with different colors and formatting options such as bold and underline.

## Changelog

### Update 0.0.3

-   Now you can `colorfulLog` the `FormData` types, too.
-   `functions` and `symbols` converted to strings.
-   `undefined` and `null` values are explicitly converted to string.
-   special objects:
    -   `Blob` is handled.
-   added basic test scenarios

### Update 0.0.4

-   Improved separation of production and test builds.
-   Added separate output directories for test files.
-   Updated how the `colorfulLog` function receives parameters. It now accepts an object with `color`, `message`, and `options` for clearer usage.
    -   Default `color` value is set to be `blue`, passing it is optional.
    -   `message` is required and can be a single message or an array of messages.
    -   Default `options` value is set to be an empty array, passing it is optional.

## Installation

You can install this package using npm or pnpm:

### npm:

```sh
npm install @halibal/colorful-log
```

### pnpm:

```sh
pnpm add @halibal/colorful-log
```

## Running Tests

To run the test build and execute the tests:

```sh
pnpm test
```

This will generate test files in the `dist/tests/` directory and run them.

## Build and Production

To build the package for production:

```sh
pnpm build
```

For test builds:

```sh
pnpm build:test
```

This separates production files into the `dist/` folder and test files into the `dist/tests/` folder.

## Usage

The `colorfulLog` function accepts both a single message or an array of messages, providing flexibility for different logging needs.

The `colorfulLog` function now accepts an object with `color`, `message`, and `options` parameters:

-   `color`: (optional) Defaults to `blue` if not specified.
-   `options`: (optional) Defaults to an empty array, allowing for additional formatting like bold or underline.

### TypeScript:

```ts
import { colorfulLog } from 'colorful-log';

const nestedObject = {
    status: 'ok',
    details: {
        user: 'john',
        roles: ['admin', 'user'],
        metadata: {
            lastLogin: new Date(),
            preferences: {
                theme: 'dark',
                notifications: true
            }
        }
    }
};

colorfulLog({
    message: 'Logging a simple message'
});

colorfulLog({
    color: 'green',
    message: ['Operation successful:', { status: 'ok' }]
});

colorfulLog({
    message: ['Operation successful:', nestedObject],
    options: ['underline']
});

colorfulLog({
    color: 'red',
    message: [
        'Error occurred:',
        { message: 'Something went wrong', code: 500 }
    ],
    options: ['bold']
});

colorfulLog({
    message: [
        'This is an default blue message with bold and underline formatting'
    ],
    options: ['bold', 'underline']
});

colorfulLog({
    color: 'purple',
    message: ['This is a regular message with no extra formatting']
});
```

### Parameters:

-   `color`: (optional) The color of the log, such as `'green'`, `'red'`, etc. Defaults to `'blue'` if not provided
-   `message`: (required) Accepts either a single message (string, object, etc.) or an array of messages.
-   `options`: (optional) Defaults to an empty array. Can include `'bold'`, `'underline'`, etc.

## Available Colors

The following colors are available for logging:

-   Black
-   Red
-   Green
-   Yellow
-   Blue
-   Purple
-   White

## Formatting Options

In addition to colors, you can also add formatting options:

-   Bold
-   Underlined
-   Bold & Underlined

## License

This project is licensed under the MIT License.

## Contributing

We welcome contributions! Please fork the repository, create a branch, and submit a pull request with your improvements.
