var resault = document.getElementById("counter");
var up = document.querySelector(".plus");
var down = document.querySelector(".min");
var counter = 0;

function plus() {
  console.log("hi");
  counter++;
  resault.innerHTML = counter;
}

function min() {
  if (counter > 0) {
    counter--;
    resault.innerHTML = counter;
  } else return null;
}

up.addEventListener("click", plus);
down.addEventListener("click", min);
