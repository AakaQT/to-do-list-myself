let inputText = document.querySelector(".text-input");
let addButton = document.querySelector("button");
const list = document.querySelector("ul");
const span = document.querySelector("span");

function addTask(){
    const list = document.createElement("li");
    const span = document.createElement("span");

    list.innerText = inputText.value;
    span.innerText = "X";

    document.querySelector(".list").appendChild(list).appendChild(span);
    inputText.value = "";
}

list.addEventListener("click",(ev) => {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
})

list.addEventListener("click", (ev) => {
    if (ev.target.tagName === "SPAN"){
        ev.target.parentElement.remove();
    }
})

