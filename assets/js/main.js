var x;
var y;
const button_agree = document.querySelector(".box__button--agree");
const button_disagree = document.querySelector(".box__button--disagree");
const img = document.querySelector(".img");
const body = document.querySelector(".body");
function randomNumber(minNum, maxNum) {
  return Math.random() * maxNum + minNum;
}
button_disagree.addEventListener("click", function (e) {
  img.classList.add("qwerty");
});
button_agree.addEventListener("mouseenter", function (e) {
  button_agree.classList.add("qwerty1");
  x = randomNumber(0, body.scrollWidth - button_agree.scrollWidth);
  y = randomNumber(0, body.scrollHeight - button_agree.scrollHeight);
  document.documentElement.style.setProperty("--x", x + "px");
  document.documentElement.style.setProperty("--y", y + "px");
  console.log(x, y);
});
