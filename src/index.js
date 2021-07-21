import './style.css';

/***
 * All the adding project stuff.
 */

//Creates the sidebar. 
const sidebar = document.getElementById("sidenav");
const sideProject = document.getElementById("projects")

//Initial Delete Button.
const DeleteButton = document.createElement("button");
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
function clearingView () {
    const theTasks = document.getElementById("tasks");
    theTasks.innerHTML = "";
}
//Button to delete project.
function DeleteProject() {
    this.parentNode.remove()
    localStorage.removeItem(this.id);
    event.stopPropagation();
    clearingView();
    

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
let x = localStorage.length;

function reloadingPage() { 
    if (localStorage.length === 1) {
        return;
    }
    for (let i = 2; i < localStorage.length+1; i++) {
        console.log("Inside the for loop: " + i);
        let newProjectItem = document.createElement('div');
        let newDeleteButton = document.createElement("button");
        newDeleteButton.id = i;
        newDeleteButton.innerHTML = "X";
        newDeleteButton.style.cssFloat  = "right";
        newDeleteButton.addEventListener("click", DeleteProject);
        newProjectItem.addEventListener("click", taskView);
        newProjectItem.classList.add('project');
        newProjectItem.innerHTML = localStorage.getItem(i);
        newProjectItem.id = localStorage.getItem(i);
        console.log('ID: '+ localStorage.getItem(i));
        sidebar.appendChild(newProjectItem);
        newProjectItem.appendChild(newDeleteButton);
    }

}

function callingProjects() {
    console.log("The value of x " + x);
    let newProjectItem = document.createElement('div');
    let newDeleteButton = document.createElement("button");
    newDeleteButton.id = x;
    newDeleteButton.innerHTML = "X";
    newDeleteButton.style.cssFloat  = "right";
    newDeleteButton.addEventListener("click", DeleteProject);
    newProjectItem.addEventListener("click", taskView);
    newProjectItem.classList.add('project');
    newProjectItem.innerHTML = localStorage.getItem(x);
    newProjectItem.id = localStorage.getItem(x);
    console.log('ID'+ localStorage.getItem(x));
    sidebar.appendChild(newProjectItem);
    newProjectItem.appendChild(newDeleteButton);
    console.log("CALLINGPROJECTS");

}
//Adds a new project.
function AddProject(){
    let newProject = prompt("Enter your new project", "");
    if (newProject == null || newProject == "") {
        return;
    }
    x++;
    localStorage.setItem(x, newProject);
    console.log('ADDPROJECT'+ newProject);
    callingProjects()
}



sidebar.innerHTML =`To Do List <button id="newProject">Add</button><br>`;
//Initial project.
let firstProject = document.createElement('div');
firstProject.classList.add('project');
firstProject.id = "Project";
localStorage.setItem(1, "Project")
DeleteButton.id = 1;
firstProject.innerHTML = localStorage.getItem(1);
firstProject.addEventListener("click", taskView);
//firstProject.appendChild(DeleteButton);
sidebar.appendChild(firstProject);
console.log("Length of x: " + x);
//When page gets refreshed.
reloadingPage();

document.getElementById("newProject").addEventListener("click", AddProject);
//document.getElementById("1").addEventListener("click", DeleteProject);






/***
 * Adding tasks.
 */