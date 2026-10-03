async function getComments() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments",
  );
  const data = await response.json();

  let filteredComments = data.filter(
    (comment) => comment.postId === comment.id, // if postId 1 === id 1 ? true or false
  );

  filteredComments.forEach((comment) => {
    const { id, name, email } = comment;

    console.log(`Id: ${id}`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
  });
}

getComments();
