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

    const messageString = messages
        .map((message) => {
            if (typeof message === 'object') {
                try {
                    return JSON.stringify(message, null, 2); // Pretty print objects
                } catch (e) {
                    return message.toString(); // Fallback if JSON.stringify fails
                }
            }
            return message;
        })
        .join(' ');

    console.log(formatString + '%s' + colors.reset, messageString);
};
