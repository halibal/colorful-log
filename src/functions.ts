import { colors } from './colors';
import { ColorfulLog } from './types';

/**
 *
 * @param color - The color of the message with ANSI code
 * @param messages - The messages to be logged
 * @param options - Additional formatting options (bold, underline)
 *
 */
export const colorfulLog: ColorfulLog = (color, messages, options = []) => {
    let formatString = colors[color];
    if (options.length) {
        formatString =
            options.map((option) => colors[option]).join('') + formatString;
    }

    const cache = new Set();

    const messageString = messages
        .map((message) => {
            if (typeof message === 'object') {
                if (message instanceof FormData) {
                    // Handle FormData instance
                    const formDataEntries = Array.from(message.entries()).map(
                        ([key, value]) => {
                            if (value instanceof Blob) {
                                return `${key}: [Blob of type ${value.type}]`;
                            }
                            return `${key}: ${value}`;
                        }
                    );
                    return `FormData: {\n${formDataEntries.join(',\n')}\n}`;
                } else {
                    try {
                        return JSON.stringify(
                            message,
                            (_, value) => {
                                if (typeof value === 'function') {
                                    return `[Function: ${
                                        value.name || 'anonymous'
                                    }]`;
                                }
                                if (typeof value === 'symbol') {
                                    return value.toString();
                                }
                                if (
                                    typeof value === 'object' &&
                                    value !== null
                                ) {
                                    if (cache.has(value)) {
                                        return '[Circular]';
                                    }
                                    cache.add(value);
                                }
                                return value;
                            },
                            2
                        ); // Pretty print objects
                    } catch (e) {
                        return message.toString(); // Fallback if JSON.stringify fails
                    }
                }
            }
            if (message === undefined) {
                return 'undefined';
            }
            if (message === null) {
                return 'null';
            }
            return message;
        })
        .join(' ');

    console.log(formatString + '%s' + colors.reset, messageString);
};
