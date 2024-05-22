
// Get the html elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// create a task counter
let taskId = 1;

// function to add a new task

//prevents the page from refreshing
function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if(taskText !== "") {
        const taskItem = document.createElement("li");

        taskItem.innerHTML = `
        <button class="delete-btn" ></button>
        <span>${taskText}</span>
        `;

        taskList.append(taskItem);

        taskInput.value = ""; // clearing the input box.
        taskId++;

        const DeleteButton = taskItem.querySelector(".delete-btn");
        DeleteButton.addEventListener("click", deleteTask);
    }

}


function deleteTask(event) {

    const taskItem = event.target.parentElement;
    // console.log(taskItem);
    taskItem.classList.toggle("completed");

}


// function deleteTask(event) {

//     const taskItem = event.target.parentElement;
//     // console.log(taskItem);
//     taskList.removeChild(taskItem);

// }

//add event Listener
taskForm.addEventListener("submit", addTask);