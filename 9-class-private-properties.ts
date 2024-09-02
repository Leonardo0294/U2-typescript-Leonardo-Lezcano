// Modifica la clase Car para que la propiedad make sea privada.
// Añade un método getMake() que devuelva el valor de make.
class Car {
    private make: string;

    constructor(make: string) {
        this.make = make;
    }

    drive(): void {
        console.log(`Driving a ${this.make}`);
    }

    getMake(): string {
        return this.make;
    }
}

const myCar = new Car('Ford');
myCar.drive();
console.log(`Car make is ${myCar.getMake()}`);
