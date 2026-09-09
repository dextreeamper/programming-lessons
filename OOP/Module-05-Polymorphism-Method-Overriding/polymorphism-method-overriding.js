class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} vehicle is starting...`);
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.brand} car starts with a key.`);
  }
}

class Motorcycle extends Vehicle {
  start() {
    console.log(`${this.brand} motorcycle starts with a button.`);
  }
}

// Create objects
const car = new Car("Toyota");
const motorcycle = new Motorcycle("Honda");

// Same method name, different behavior
car.start();
motorcycle.start();
