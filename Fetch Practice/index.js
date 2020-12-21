"use stric";

const getNombre = (idPost) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then((res) => res.json())
    .then((post) => {
      console.log(post.id);
      fetch(`https://jsonplaceholder.typicode.com/users/${post.id}`)
        .then((res) => res.json())
        .then((user) => {
          console.log(user.name);
        });
    });
};

getNombre(8);

const getNombreAsync = async (idPost) => {
  try {
    const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);

    const post = await resPost.json();

    const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.id}`);

    const user = await resUser.json();

    console.log(user)

  } catch (error) {
    console.log(error);
  }
};

getNombreAsync(8);
