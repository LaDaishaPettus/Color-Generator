const colorBtn = document.querySelector(".colorBtn");
bodyBcg = document.querySelector("body");

const colors = ["yellow", "Purple", "green", "red", "pink"];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.background = colors[random];
}
