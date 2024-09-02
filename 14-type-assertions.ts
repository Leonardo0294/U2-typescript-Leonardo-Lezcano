// Declara una variable de tipo any con un valor numérico y usa una aserción de tipo
// para tratarla como un string. Usa la propiedad “.length” en esta variable.
let value: any = 12345;
let stringValue: string = value as string;

console.log(`Length of the string value: ${stringValue.length}`);
