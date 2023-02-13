const inputEl = document.querySelector(".todo__input");
const todoTasksEl = document.querySelectorAll(".todo__task");
const todoTasksList = document.querySelector(".todo__tasks");
const errorMessageEl = document.querySelector(".todo__error-message");

const tasks = [];

inputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const task = inputEl.value;

    //const elementExists = tasks.indexOf(task) === -1; provjera da li task koji želimo dodati već postoji na listi
    if (tasks.indexOf(task) === -1) {
      errorMessageEl.style.display = "none";
      tasks.push(task);
      inputEl.value = "";

      renderToDoTasks(tasks);
    } else {
      errorMessageEl.style.display = "block";
    }
  }
});

function renderToDoTasks(tasks) {
  todoTasksList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskEl = document.createElement("div");

    taskEl.className = "todo__task";

    const paragraphEl = document.createElement("p");

    //taskEl.innerText = ++index + "." + task;  1. način
    paragraphEl.innerText = `${index + 1}. ${task}`; //2 način

    const deleteEl = document.createElement("a");
    deleteEl.className = "todo__task-delete";
    deleteEl.innerText = "Delete";
    deleteEl.addEventListener("click", function (event) {
      let currentText = event.target.previousSibling.innerText;
      currentText = currentText.substring(currentText.indexOf(" ") + 1);

      tasks.splice(tasks.indexOf(currentText), 1);
      renderToDoTasks(tasks);
    });

    taskEl.appendChild(paragraphEl);
    taskEl.appendChild(deleteEl);

    todoTasksList.appendChild(taskEl);
  });
}

/*
todoTasksEl.forEach((todoTaskEl) =>
  todoTaskEl.addEventListener("click", (event) => {
    console.log(event.target);
  })
);
*/
