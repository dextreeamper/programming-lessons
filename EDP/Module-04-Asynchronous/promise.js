// console.log("Start");
// const data = fetch("https://jsonplaceholder.typicode.com/posts/1");
// console.log("End");
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json()) // -> pending
  .then((data) => {
    // console.log(data); // ->fulfilled
    const {
      name,
      username,
      email,
      address: { street, suite, city, zipcode },
    } = data;

    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log(`Address: ${street}, ${suite} ${city}, ${zipcode}`);
  })
  .catch((error) => {
    console.log(error); // ->rejected
  });
