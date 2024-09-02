// Modifica la interfaz Person del ejercicio anterior para que la propiedad lastName sea opcional.
// Declara un objeto que solo incluya firstName.
interface Person {
    firstName: string;
    lastName?: string;  // Propiedad opcional
}

const person: Person = {
    firstName: 'John'
};

console.log(`First Name: ${person.firstName}`);
console.log(`Last Name: ${person.lastName ? person.lastName : 'Not provided'}`);
