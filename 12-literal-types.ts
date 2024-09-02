// Crea una variable direction que solo pueda tener uno de los siguientes valores: "up", "down", "left", "right".
type Direction = 'up' | 'down' | 'left' | 'right';

let direction: Direction;

direction = 'up';    // Valid
direction = 'left';  // Valid
// direction = 'north'; // Error: 'north' is not assignable to type 'Direction'

console.log(`Direction: ${direction}`);
