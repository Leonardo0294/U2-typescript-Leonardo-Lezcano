 con el color.
enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue'
}

function getColorMessage(color: Color): string {
    return `The color is ${color}`;
}

console.log(getColorMessage(Color.Red));
