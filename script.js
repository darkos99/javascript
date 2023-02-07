const descriptionEl = document.querySelector(".description");
const footerEl = document.querySelector("#footer");
const ulEl = document.querySelector("ul");

const h1 = document.createElement("h1");
h1.innerText = "Pametni smo";

const infoDiv = document.createElement("div");
infoDiv.classList.add("info");

footerEl.parentNode.insertBefore(infoDiv, footerEl);

descriptionEl.parentNode.prepend(h1);

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  ulEl.appendChild(li);
}
