//Adding a new task.
export function newTask(projectID) {
    let newTask = prompt("Enter your new task", "");
    if (newTask == null || newTask == "") {
        return;
    }
    let taskOnProject = JSON.parse(localStorage.getItem(projectID));
    taskOnProject.push(newTask);
    localStorage.setItem(projectID, JSON.stringify(taskOnProject));
    let addingNewTask = document.createElement("div");
    addingNewTask.style.fontSize = "18px";
    addingNewTask.id = taskOnProject.length-1;
    let newDeleteButton = document.createElement("button");
    newDeleteButton.id = projectID;
    newDeleteButton.innerHTML = "X";
    newDeleteButton.addEventListener("click", DeleteTask);
    addingNewTask.append(newTask);
    addingNewTask.append(newDeleteButton);
    document.getElementById("tasks").append(addingNewTask);
}   