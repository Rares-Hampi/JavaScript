const header = document.querySelector("h1");
const container = document.getElementById("container"); // document.querySelector("#container");
const allListItems = document.querySelectorAll("li");
const title = document.getElementsByClassName("title")[0];


console.log(header);

header.textContent = "Maine am 2 teste si e jale!";

// container.innerHTML = "<h2>Un nou titlu</h2>"; // suprascrie tot ce e in container

title.style.color = "red"
title.style.fontSize = "3em";

allListItems[0].style.color = "blue";
allListItems[2].style.fontSize = "2em";


container.classList.add("mere");


let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Butonul a fost apăsat!");
});

title.addEventListener("mouseover", function(e) {
    console.log(e);
    title.style.color = "green";
})

document.addEventListener("keydown", function(e) {
    console.log(e.key);
    if (e.key === "Enter") {
        alert("Ai apăsat Enter!");
    }
})

