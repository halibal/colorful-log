import { colorfulLog } from './functions';
import { CircularObj } from './types';

// Scenario 1: Log simple strings
console.group('Scenario 1: Log simple strings');
colorfulLog({
    color: 'green',
    message: ['This is a simple message']
});
console.groupEnd();

// Scenario 2: Log numbers
console.group('Scenario 2: Log numbers');
colorfulLog({
    message: [42, 3.14, -100],
    options: ['bold']
});
console.groupEnd();

// Scenario 3: Log booleans
console.group('Scenario 3: Log booleans');
colorfulLog({
    color: 'red',
    message: [true, false],
    options: ['underline']
});
console.groupEnd();

// Scenario 4: Log an array of mixed simple data types
console.group('Scenario 4: Log an array of mixed simple data types');
colorfulLog({
    color: 'yellow',
    message: ['Hello', 123, true]
});
console.groupEnd();

// Scenario 5: Log nested objects
console.group('Scenario 5: Log nested objects');
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
colorfulLog({
    color: 'purple',
    message: nestedObject
});
console.groupEnd();

// Scenario 6: Log a single string message without using an array
console.group('Scenario 6: Log a single string message without using an array');
colorfulLog({
    message: 'This is a simple log message'
});
console.groupEnd();

// Scenario 7: Log a single object message without using an array
console.group('Scenario 7: Log a single object message without using an array');
colorfulLog({
    message: { status: 'ok', details: 'Some details here' }
});
console.groupEnd();

// Scenario 8: Log multiple message (array of message)
console.group('Scenario 8: Log multiple message (array of message)');
colorfulLog({
    message: ['Message 1', 'Message 2', { status: 'ok' }]
});
console.groupEnd();

// Scenario 9: Log FormData with Text Inputs
console.group('Scenario 9: Log FormData with Text Inputs');
const formData1 = new FormData();
formData1.append('username', 'testUser');
formData1.append('email', 'test@example.com');
colorfulLog({
    color: 'green',
    message: formData1
});
console.groupEnd();

// Scenario 10: Log FormData with Multiple Types of Data
console.group('Scenario 10: Log FormData with Multiple Types of Data');
const formData2 = new FormData();
formData2.append('username', 'anotherUser');
formData2.append('age', '30');
formData2.append(
    'file',
    new Blob(['file content'], { type: 'text/plain' }),
    'test.txt'
);
colorfulLog({
    message: formData2,
    options: ['bold', 'underline']
});
console.groupEnd();

// Scenario 11: Log a mix of strings, objects, and FormData
console.group('Scenario 11: Log a mix of strings, objects, and FormData');
const formData5 = new FormData();
formData5.append('token', '12345');
colorfulLog({
    color: 'purple',
    message: [
        'User data:',
        { name: 'Alice', age: 25 },
        'Session data:',
        formData5
    ]
});
console.groupEnd();

// Scenario 12: Log FormData with Nested Objects (converted to strings)
console.group(
    'Scenario 12: Log FormData with Nested Objects (converted to strings)'
);
const formData6 = new FormData();
formData6.append('config', JSON.stringify({ theme: 'dark', layout: 'grid' }));
colorfulLog({ color: 'red', message: formData6 });
console.groupEnd();

// Scenario 13: Log an object with circular references
console.group('Scenario 13: Log an object with circular references');
const circularObj: CircularObj = {};
circularObj.self = circularObj;
colorfulLog({ color: 'green', message: circularObj });
console.groupEnd();

// Scenario 14: Log a large array
console.group('Scenario 14: Log a large array');
const itemCount = 50; // you can change this value to see more or fewer items
const largeArray = Array.from({ length: itemCount }, (_, i) => i + 1);
colorfulLog({ message: largeArray });
console.groupEnd();

// Scenario 15: Log an object with functions and symbols
console.group('Scenario 15: Log an object with functions and symbols');
const objWithFuncAndSymbols = {
    func: function exampleFunc() {},
    sym: Symbol('exampleSymbol')
};
colorfulLog({ color: 'red', message: objWithFuncAndSymbols });
console.groupEnd();

// Scenario 16: Log undefined and null values
console.group('Scenario 16: Log undefined and null values');
colorfulLog({ color: 'yellow', message: [undefined, null] });
console.groupEnd();
