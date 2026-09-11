class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} is starting...`);
  }
}

class Car extends Vehicle {
  drive() {
    console.log(`${this.brand} car is driving.`);
  }
}
class Motorcycle extends Vehicle {
  ride() {
    console.log(`${this.brand} motorcycle is riding.`);
  }
}

// Create objects
const car = new Car("Toyota");
const motorcycle = new Motorcycle("Honda");

// Inherited method
car.start();
motorcycle.start();

// Child-specific methods
car.drive();
motorcycle.ride();
