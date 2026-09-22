async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments",
    );
    const data = await response.json();
    let comments = data;

    // comments.forEach((comment) => {
    //   const { name, email, body } = comment;

    //   console.log("name: ", name);
    //   console.log("email: ", email);
    //   console.log("body: ", body);
    //   console.log("=====================");
    // });

    let findById = comments.find((comment) => comment.id === 1);
    const { name, email, body } = findById;
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("body: ", body);
  } catch (error) {
    console.log("Errooor: ", error);
  }
}
getUser();

// class Vehicle {
//   constructor(brand) {
//     this.brand = brand;
//   }
//   start() {
//     console.log("starting from parent class");
//   }
// }
// class Car extends Vehicle {
//   start() {
//     console.log(`${this.brand} starting from child class`);
//   }
// }
// class Motorcycle extends Vehicle {
//   start() {
//     console.log(`${this.brand} starting from child class`);
//   }
// }
// // parameter -> property -> arguments

// const car = new Car("Hyundai");
// const motorcycle = new Motorcycle("Rusi");
// const vehicles = [car, motorcycle];

// for (const vehicle of vehicles) {
//   vehicle.start();
// }
