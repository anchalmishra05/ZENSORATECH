const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks on page load
tasks.forEach(task => createTask(task.text, task.completed));

// Add task
addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();

    if (text === "") return;

    createTask(text, false);

    tasks.push({ text: text, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
});

// Create task element
function createTask(text, completed) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    if (completed) span.classList.add("completed");

    // Toggle complete
    span.addEventListener("click", () => {
        span.classList.toggle("completed");
        updateStorage();
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateStorage();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Update localStorage
function updateStorage() {
    const allTasks = [];

    document.querySelectorAll("li").forEach(li => {
        const text = li.querySelector("span").textContent;
        const completed = li.querySelector("span").classList.contains("completed");

        allTasks.push({ text, completed });
    });

    localStorage.setItem("tasks", JSON.stringify(allTasks));
}