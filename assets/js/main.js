var x;
var y;
const button = document.querySelector(".box__button--agree");
function randomNumber() {
  x = Math.round(Math.random() * 800);
  y = Math.round(Math.random() * 500);
  document.documentElement.style.setProperty("--x", x + "px");
  document.documentElement.style.setProperty("--y", y + "px");
}
button.addEventListener("mouseenter", randomNumber);
