import { colors } from './colors';
import { ColorfulLogParams } from './types';

/**
 *
 * @param color - The color of the message with ANSI code
 * @param message - The message to be logged
 * @param options - Additional formatting options (bold, underline)
 *
 */

function colorfulLog({
    color = 'blue',
    message,
    options = []
}: ColorfulLogParams) {
    let formatString = colors[color];

    const normalizedMessages = Array.isArray(message) ? message : [message];

    if (options.length) {
        formatString = `${options
            .map((option) => colors[option])
            .join('')}${formatString}`;
    }

    const messageString = normalizedMessages
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
                    return safeStringify(message);
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
}

function safeStringify(obj: any) {
    const cache = new Set();
    try {
        return JSON.stringify(
            obj,
            (_, value) => {
                if (typeof value === 'function') {
                    return `[Function: ${value.name || 'anonymous'}]`;
                }
                if (typeof value === 'symbol') {
                    return value.toString();
                }
                if (typeof value === 'object' && value !== null) {
                    if (cache.has(value)) {
                        return '[Circular]';
                    }
                    cache.add(value);
                }
                return value;
            },
            2
        );
    } catch (e) {
        return obj.toString(); // Fallback if JSON.stringify fails
    }
}

export { colorfulLog };
