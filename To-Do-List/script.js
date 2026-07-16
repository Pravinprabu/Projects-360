
// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");
let total = 0;
let completed = 0;
function updateTaskCounter() {
    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingTasks.textContent = total - completed;
}
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;

    }
    console.log("Task Added:", taskText);
    // Create List Item
    const listItem = document.createElement("li");
    // Task Text
    const taskName = document.createElement("span");
    taskName.textContent = taskText;
    // Button Container
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("task-buttons");
    // Complete Button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add("complete-btn");
    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    completeButton.addEventListener("click", function () {
        if (!taskName.classList.contains("completed")) {
            taskName.classList.add("completed");
            completeButton.textContent = "Completed";
            completeButton.disabled = true;
            completed++;
            updateTaskCounter();
            console.log("Task Completed:", taskText);

        }
    });

    deleteButton.addEventListener("click", function () {
        if (taskName.classList.contains("completed")) {
            completed--;
        }

        total--;
        updateTaskCounter();
        listItem.remove();
        console.log("Task Deleted:", taskText);
    });

    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);
    listItem.appendChild(taskName);
    listItem.appendChild(buttonContainer);
    taskList.appendChild(listItem);
    total++;
    updateTaskCounter();
    taskInput.value = "";
    taskInput.focus();
}
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
updateTaskCounter();
console.log("To-Do List App Loaded Successfully.");