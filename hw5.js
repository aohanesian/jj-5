`use strict`;

//task 1

let user = {};

user.name = `John`;
user.surname = `Smith`;
user.name = `Pete`;
delete user.name;

//task 2
const user2 = {
    name: 'John'
};
console.log(user2);
// это будет работать?
user2.name = 'Pete';
console.log(user2);

//task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

const propertyValues = Object.values(salaries);

let total = 0;
for (let i in propertyValues) {
    total += propertyValues[i];
}
console.log(total);
