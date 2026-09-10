// async function getUser() {
//   try {
//     console.log("PENDING...");
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1",
//     );
//     const data = await response.json();
//     //object destructuring
//     const {
//       name,
//       username,
//       email,
//       address: { street, suite, city, zipcode },
//     } = data;

//     console.log("FULFILLED...");

//     console.log("name:", name);
//     console.log("username:", username);
//     console.log("email:", email);
//     console.log(`address: ${street}, ${suite}, ${city}, ${zipcode}`);
//   } catch (error) {
//     console.log("REJECTED...");
//     console.log("Erroooor: ", error);
//   }
// }
// getUser();

async function getComments() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments",
    );
    const data = await response.json();
    data.forEach((comment) => {
      const { name, email, body } = comment;
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Body: ", body);
      console.log("==========================");
    });
  } catch (error) {
    console.log(error);
  }
}
getComments();

// class Vehicle {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }
//   start() {
//     console.log("starting from parent class");
//   }
// }
// class Car extends Vehicle {
//   start() {
//     console.log(`${this.brand} starting from parent class`);
//   }
// }
// class Motorcycle extends Vehicle {
//   start() {
//     console.log(`${this.brand} starting from parent class`);
//   }
// }

// const car = new Car("Hyundai");
// const motorcycle = new Motorcycle("Honda");

// const vehicles = [car, motorcycle];
// for (const vehicle of vehicles) {
//   vehicle.start();
// }
