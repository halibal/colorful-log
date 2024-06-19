# Colorful Log Package

A simple and customizable colorful console logger for Node.js applications written in TypeScript. This package allows you to log messages with different colors and formatting options such as bold and underline.

## Installation

You can install this package using npm:

```sh
npm install colorful-log
```

## Usage

Import the `colorfulLog` function and use it to log messages with different colors and formatting options.

```tsx
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

colorfulLog('green', ['Operation successful:', nestedObject], ['underline']);
colorfulLog(
    'red',
    ['Error occurred:', { message: 'Something went wrong', code: 500 }],
    ['bold']
);
colorfulLog('blue', ['This is an info message'], ['bold', 'underline']);
colorfulLog('purple', ['This is a regular message with no extra formatting']);
```

## Available Colors

The following colors are available for logging:

-   Black
-   Red
-   Green
-   Yellow
-   Blue
-   Purple
-   White

## Available Colors

The following colors are available for logging:

-   ![Black](https://i.imgur.com/sNSFHmr.jpeg)
-   ![Red](https://imgur.com/bCutWpG.jpeg)
-   ![Green](https://imgur.com/wtP79e5.jpeg)
-   ![Yellow](https://imgur.com/aMJiuUu.jpeg)
-   ![Blue](https://imgur.com/sPCq9pI.jpeg)
-   ![Purple](https://imgur.com/tLXCnDI.jpeg)
-   ![White](https://imgur.com/pZNKTB1.jpeg)

## Formatting Options

In addition to colors, you can also add formatting options:

-   ![Bold](https://imgur.com/he2flDN.jpeg)
-   ![Underlined](https://imgur.com/xUfCQ9o.jpeg)
-   ![Bold & Underlined](https://imgur.com/O675lAB.jpeg)

## License

This project is licensed under the MIT License.
