/*
1. U folderu /Pocetno se nalaze html i js file kao pocetna tocka.
2. Stil elemenata treba promijeniti pomocu JS i HTML DOM API-ja tako da:
	- umjesto circle buleta na elementima liste prikažu redne brojke
	- div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
	- saznajte margin-left izračunati stil koji je primijenjen na body elementu
	- animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji (edited) 
	*/

// 1 ZADATAK
function myFunction() {
  document.getElementById("myList").style.listStyle = "decimal inside";
}

// 2 ZADATAK
let info = document.querySelector(".info");
info.classList.add("hide");

// 3 ZADATAK
var element = document.querySelector("#my-element");
var style = element.currentStyle || window.getComputedStyle(element);

console.log("margin-left:   " + parseInt(style.marginLeft));

var element = document.getElementById("my-element");

/*
setTimeout(function () {
  element.style.webkitTransitionDuration = "3s";
  element.style.webkitTransitionTimingFunction = "ease-in-out";
  element.style.webkitTransform = "translate3d(30px, 0, 0)";
}, 0); */

//Query selectory - sample
/*
const bodyEl = document.querySelector("body");
const liElement = (document.querySelector = "li");
const liElements = document.querySelectorAll("li");

console.log(liElement);
console.log(liElements);  */

// 2 ZADATAK
const bodyEl = document.querySelector("body");
const bodyStyles = window.getComputedStyle(bodyEl);
const bodyMargin = bodyStyles.getPropertyValue("margin");

let bodyMarginValue = parseInt(bodyMargin);
let isReverse = false;

setInterval(() => {
  if (isReverse) {
    bodyMarginValue--;
  } else {
    bodyMarginValue++;
  }
  if (bodyMarginValue === 300) {
    isReverse = true;
  }

  if (bodyMarginValue === 0) {
    isReverse = false;
  }

  bodyEl.style.margin = bodyMarginValue + "px";
}, 10);
