export const renderItems = (lectures, fallbackMessage = "No results") => {
  const gridEl = document.querySelector(".grid");
  const alertEl = document.querySelector(".alert");

  gridEl.innerHTML = "";

  if (lectures.length) {
    alertEl.classList.remove("alert_visible");

    lectures.forEach((lecture) => {
      const cardEl = document.createElement("div");
      cardEl.className = "card";

      const cardTitleEl = document.createElement("h2");
      cardTitleEl.className = "card__title";
      cardTitleEl.innerText = lecture.lectureName;

      const cardLengthEl = document.createElement("p");
      cardLengthEl.className = "card__length";
      cardLengthEl.innerText = lecture.lectureLength + " min";

      cardEl.appendChild(cardTitleEl);
      cardEl.appendChild(cardLengthEl);

      gridEl.appendChild(cardEl);
    });
  } else {
    alertEl.classList.add("alert_visible");
    alertEl.innerText = fallbackMessage;
  }
};
