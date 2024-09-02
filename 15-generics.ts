// Escribe una función genérica identity que tome un argumento de tipo T y devuelva
// el mismo valor. Usa esta función con diferentes tipos de datos.
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>('Hello'));
console.log(identity<number>(123));
console.log(identity<boolean>(true));
