export type ColorfulConsole = {
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    purple: string;
    white: string;
    reset: string;
    bold: string;
    underline: string;
};

export type ColorfulLog = (
    color: keyof ColorfulConsole,
    messages: any[],
    options?: Array<keyof ColorfulConsole>
) => void;

export type CircularObj = {
    self?: CircularObj;
};