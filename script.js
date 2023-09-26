document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // Add task to the list
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            const taskLabel = document.createElement("label");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", toggleTask);
            taskLabel.appendChild(checkbox);
            taskLabel.appendChild(document.createTextNode(taskText));
            listItem.appendChild(taskLabel);

            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.addEventListener("click", deleteTask);
            listItem.appendChild(deleteButton);

            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    }

    // Toggle task completion status
    function toggleTask(event) {
        const listItem = event.target.closest("li");
        if (listItem) {
            listItem.classList.toggle("completed");
        }
    }

    // Delete a task
    function deleteTask(event) {
        const listItem = event.target.closest("li");
        if (listItem) {
            taskList.removeChild(listItem);
        }
    }

    // Add task when the "Add Task" button is clicked
    addTaskButton.addEventListener("click", addTask);

    // Add task when the Enter key is pressed
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
