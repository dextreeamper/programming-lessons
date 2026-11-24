fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json()) // -> pending
  .then((data) => {
    // console.log(data); // ->fulfilled

    //object destructuring
    const { name, username, email, address } = data;

    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Address:", address.street);
  })
  .catch((error) => {
    console.log(error); // ->rejected
  });
