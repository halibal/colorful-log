import { colorfulLog } from './functions';
import { CircularObj } from './types';

// Scenario 1: Log simple strings
colorfulLog('green', ['This is a simple message']);

// Scenario 2: Log numbers
colorfulLog('blue', [42, 3.14, -100], ['bold']);

// Scenario 3: Log booleans
colorfulLog('red', [true, false], ['underline']);

// Scenario 4: Log an array of mixed simple data types
colorfulLog('yellow', ['Hello', 123, true]);

// Scenario 5: Log nested objects
const nestedObject = {
    name: 'Alice',
    details: {
        age: 30,
        address: {
            street: '123 Main St',
            city: 'Wonderland'
        }
    }
};
colorfulLog('purple', [nestedObject]);

// Scenario 6: Log an array of objects
const arrayOfObjects = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
colorfulLog('white', [arrayOfObjects]);

// Scenario 7: Log FormData with Text Inputs
const formData1 = new FormData();
formData1.append('username', 'testUser');
formData1.append('email', 'test@example.com');
colorfulLog('green', [formData1]);

// Scenario 8: Log FormData with Multiple Types of Data
const formData2 = new FormData();
formData2.append('username', 'anotherUser');
formData2.append('age', '30');
formData2.append(
    'file',
    new Blob(['file content'], { type: 'text/plain' }),
    'test.txt'
);
colorfulLog('blue', [formData2], ['bold', 'underline']);

// Scenario 9: Log Multiple Messages Including FormData
const formData3 = new FormData();
formData3.append('search', 'query');
colorfulLog('red', [
    'Starting search with parameters:',
    formData3,
    'Search complete.'
]);

// Scenario 10: Log FormData with No Entries
const formData4 = new FormData();
colorfulLog('yellow', [formData4]);

// Scenario 11: Log a mix of strings, objects, and FormData
const formData5 = new FormData();
formData5.append('token', '12345');
colorfulLog('purple', [
    'User data:',
    { name: 'Alice', age: 25 },
    'Session data:',
    formData5
]);

// Scenario 12: Log FormData with Nested Objects (converted to strings)
const formData6 = new FormData();
formData6.append('config', JSON.stringify({ theme: 'dark', layout: 'grid' }));
colorfulLog('white', [formData6]);

// Scenario 13: Log an object with circular references

const circularObj: CircularObj = {};
circularObj.self = circularObj;
colorfulLog('green', [circularObj]);

// Scenario 14: Log a large array
const itemCount = 50; // you can change this value to see more or fewer items
const largeArray = Array.from({ length: itemCount }, (_, i) => i + 1);
colorfulLog('blue', [largeArray]);

// Scenario 15: Log an object with functions and symbols
const objWithFuncAndSymbols = {
    func: function exampleFunc() {},
    sym: Symbol('exampleSymbol')
};
colorfulLog('red', [objWithFuncAndSymbols]);

// Scenario 16: Log undefined and null values
colorfulLog('yellow', [undefined, null]);

// Additional scenarios:
// - upcoming...
