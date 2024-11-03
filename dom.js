const header = document.querySelector("h1");
const container = document.getElementById("container"); // document.querySelector("#container");
const allListItems = document.querySelectorAll("li");
const title = document.getElementsByClassName("title")[0]; // document.querySelector(".title");


console.log(header);

header.textContent = "Am avut 2 teste si a fost jale!";

// container.innerHTML = "<h2>Un nou titlu</h2>" +
//                         "<ul>" +
//                             "<li>1</li>"+
//                             "<li>2</li>"+
//                             "<li>3</li>"+
//                         "</ul>"; // suprascrie tot ce e in container

title.style.color = "red"
title.style.fontSize = "3em";

allListItems[0].style.color = "green";
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

