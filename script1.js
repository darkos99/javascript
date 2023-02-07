function sendEmail() {
  const alertMessageEl = document.querySelector(".alert-message");

  alertMessageEl.style.display = "block";

  setTimeout(() => {
    alertMessageEl.style.display = "none";
  }, 3000);
}
