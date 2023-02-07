/* 1. U folderu /Pocetno se nalaze html i js file kao pocetna tocka.
2. Uključite script.js u html dokument.
2. HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
	- se na početak doda h1 element
	- ispod diva sa klasom "description" se umetne novi div sa klasom "info"
	- lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata */

const descriptionEl = document.querySelector(".description");
const footerEl = document.querySelector("#footer");
const ulEl = document.querySelector("ul");

const h1 = document.createElement("h1");
h1.innerText = "Dodan H1";

const infoDiv = document.createElement("div");
infoDiv.classList.add("info");

footerEl.parentNode.insertBefore(infoDiv, footerEl);

descriptionEl.parentNode.prepend(h1);

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  ulEl.appendChild(li);
}
