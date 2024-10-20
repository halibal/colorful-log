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

export type ColorfulLogParams = {
    color?: keyof ColorfulConsole;
    message: any[] | any;
    options?: Array<keyof ColorfulConsole>;
};

export type CircularObj = {
    self?: CircularObj;
};
