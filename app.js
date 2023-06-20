let size = 16;
let container = document.querySelector(".container");
let wrap = document.querySelector(".wrap");

for (let i = 0; i < size * size; i++) {
  //add the particles
  let newDiv = document.createElement("div");
  newDiv.classList.add("part");
  wrap.appendChild(newDiv);
}
let pixel = `${700 / size}px`;
document.documentElement.style.setProperty("--pixelSize", `${pixel}`);
parts = document.querySelectorAll(".part");
parts.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("touched");
  });
});

let btn = document.createElement("button");
btn.classList.add("btn");
btn.textContent = "set size:";
container.appendChild(btn);

btn.addEventListener("click", () => {
  let parts = document.querySelectorAll(".part");
  //remove previous parts
  parts.forEach((element) => {
    element.remove();
  });
  size = prompt("enter size: (max:100)");
  //add the parts
  for (let i = ; i < size * size; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("part");
    wrap.appendChild(newDiv);
  }
  let pixel = `${700 / size}px`;
  document.documentElement.style.setProperty("--pixelSize", `${pixel}`);
  parts = document.querySelectorAll(".part");
  parts.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("touched");
    });
  });
});

/* parts.forEach((element) => {
  element.addEventListener("onmousedown", () => {
    element.style.backgroundColor = "black";
  });
}); */
/* 
parts.forEach((element) => {
  element.addEventListener("onmousedown", () => {
    console.log("done");
  });
}); */
/* 
parts.addEventListener("onmousedown", () => {
  console.log("done");
}); */