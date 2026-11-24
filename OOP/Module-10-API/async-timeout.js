fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json()) // -> pending
  .then((data) => {
    const {
      name,
      email,
      username,
      address: {
        street,
        suite,
        geo: { lat, lng },
      },
    } = data;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("username:", username);
    console.log("address:", street);
    console.log("suite:", suite);
    console.log("city:", city);
  })
  .catch((error) => {
    console.error("Error fetching posts:", error);
  });
