// Imports
import { lectures } from "./data/data.js";
import { renderItems } from "./modules/htmlRenderer.js";
// Variables
const inputSearchEl = document.querySelector(".search-input");

// Functions that are executed on body load
renderItems(lectures);

// Event listeners
inputSearchEl.addEventListener("keyup", (event) => {
  const searchTerm = event.target.value;

  const filteredResults = lectures.filter((lecture) =>
    lecture.lectureName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  renderItems(
    filteredResults,
    "There are no lessons according to the entered term"
  );
});
