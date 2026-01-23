let heading = document.getElementById("heading");
heading.innerText = heading.innerText + " from Ambuj Tiwari";

let boxes = document.getElementsByClassName("box");

boxes[0].innerText = "This is Box 1";
boxes[1].innerText = "This is Box 2";
boxes[2].innerText = "This is Box 3";


// create button
let btn = document.createElement("button");

// add text
btn.innerText = "click me";

// add styles
btn.style.backgroundColor = "red";
btn.style.color = "white";

// insert as first element in body
document.body.prepend(btn);

let para = document.querySelector(".para");
para.classList.add("newClass");

let btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    btn.innerText = "Enable Light Mode";
  } else {
    btn.innerText = "Enable Dark Mode";
  }
});


