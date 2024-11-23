// setTimeout(() => {
//   console.log("Primul pas");
//   setTimeout(() => {
//     console.log("Al doilea pas");
//     setTimeout(() => {
//       console.log("Al treilea pas");
//     }, 1000);
//   }, 1000);
// }, 1000);

// const asteapta = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// asteapta(1000)
//   .then(() => {
//     console.log("Primul pas");
//     return asteapta(1000);
//   })
//   .then(() => {
//     console.log("Al doilea pas");
//     return asteapta(1000);
//   })
//   .then(() => console.log("Al treilea pas"));

// const asteapta = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const executaPasii = async () => {
//   await asteapta(1000);
//   console.log("Primul pas");
//   await asteapta(1000);
//   console.log("Al doilea pas");
//   await asteapta(1000);
//   console.log("Al treilea pas");
// };

// executaPasii();

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
// xhr.onload = function () {
//   if (xhr.status === 200) {
//     console.log(JSON.parse(xhr.responseText));
//   } else {
//     console.error("Eroare:", xhr.status);
//   }
// };
// xhr.send();

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Eroare: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Eroare:", error));

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Titlu nou",
//     body: "Acesta este un conținut.",
//     userId: 1,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log("Post creat:", data))
//   .catch((error) => console.error("Eroare:", error));

// fetch("https://jsonplaceholder.typicode.com/invalid-url")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .catch((error) => console.error("Eroare capturată:", error));

document.getElementById("fetchPosts").addEventListener("click", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts);
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = posts
      .slice(0, 5) // afișăm doar primele 5 posturi
      .map((post) => `<h3>${post.title}</h3><p>${post.body}</p>`)
      .join("");
  } catch (error) {
    console.error("Eroare la încărcarea posturilor:", error);
  }
});
