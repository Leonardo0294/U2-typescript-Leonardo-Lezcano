// Crea una interfaz Person con las propiedades firstName (string) y lastName (string).
// Declara una variable person de tipo Person y asígnale un objeto con tu nombre y apellido.
interface Person {
    firstName: string;
    lastName: string;
}

const person: Person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(`First Name: ${person.firstName}`);
console.log(`Last Name: ${person.lastName}`);
