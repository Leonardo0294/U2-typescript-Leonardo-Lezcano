
interface Person {
    firstName: string;
    lastName?: string;  
}

const person: Person = {
    firstName: 'John'
};

console.log(`First Name: ${person.firstName}`);
console.log(`Last Name: ${person.lastName ? person.lastName : 'Not provided'}`);
