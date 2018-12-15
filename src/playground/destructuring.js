//
//Object Destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 28,
//     location: {
//         city: 'New York',
//         temp: 92
//     }
// };

// const {name, age} = person;
// console.log(`${name} is ${age}.`);

// const {city, temp} = person.location;
// console.log(`It is ${temp} in ${city}`);

// const book = {
//     name: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self Publish'} = book.publisher;
// console.log(publisherName);

//
// Array Destructuring
//

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, ,medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);