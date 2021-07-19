import './style.css';

/***
 * All the adding project stuff.
 */

//Creates the sidebar. 
const sidebar = document.getElementById("sidenav");
const sideProject = document.getElementById("projects")

//Initial Delete Button.
const DeleteButton = document.createElement("button");
DeleteButton.id = "deleteButton";
DeleteButton.innerHTML = "X";

//Adding a new task.
function newTask() {
    let newTask = prompt("Enter your new task", "");
    if (newTask == null || newTask == "") {
        return;
    }
    let newTaskIdea = document.createElement('div');
    let newDeleteButton = document.createElement("button");
    let br = document.createElement("br");

    newDeleteButton.id = "deleteButton";
    newDeleteButton.innerHTML = "X";

    newDeleteButton.addEventListener("click", DeleteProject);
    //newTaskIdea.addEventListener("click", taskView);
    newTaskIdea.classList.add('task');
    newTaskIdea.textContent = newTask;
    newTaskIdea.id = newTask;
    document.getElementById("tasks").append(br);
    document.getElementById("tasks").append(newTask);
    //newTask.appendChild(newDeleteButton);

}   

//To change between Projects.
function taskView() {
    const theTasks = document.getElementById("tasks");
    let newTaskButton = document.createElement("button");
    newTaskButton.textContent = "New Task";
    newTaskButton.addEventListener("click", newTask);
    theTasks.innerHTML = this.id;
    theTasks.appendChild(newTaskButton);
}

//Adds a new project.
function AddProject(){
    let newProject = prompt("Enter your new project", "");
    if (newProject == null || newProject == "") {
        return;
    }
    let newProjectItem = document.createElement('div');
    let newDeleteButton = document.createElement("button");
    newDeleteButton.id = "deleteButton";
    newDeleteButton.innerHTML = "X";
    newDeleteButton.addEventListener("click", DeleteProject);
    newProjectItem.addEventListener("click", taskView);
    newProjectItem.classList.add('project');
    newProjectItem.textContent = newProject;
    newProjectItem.id = newProject;
    sidebar.appendChild(newProjectItem);
    newProjectItem.appendChild(newDeleteButton);
}

//Button to delete project.
function DeleteProject() {
    this.parentNode.remove();
    console.log(this);
    console.log("Parent" + this.parentNode);

}

sidebar.innerHTML =`To Do List <button id="newProject">Add</button><br>`;
 
//Initial project.
let firstProject = document.createElement('div');
firstProject.classList.add('project');
firstProject.id= "Project";
firstProject.textContent = "Project";
firstProject.addEventListener("click", taskView);
firstProject.appendChild(DeleteButton);
sidebar.appendChild(firstProject);


document.getElementById("deleteButton").addEventListener("click", DeleteProject);
document.getElementById("newProject").addEventListener("click", AddProject);







/***
 * Adding tasks.
 */