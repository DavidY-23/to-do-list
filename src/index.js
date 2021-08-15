import './style.css';
import {DeleteTask, DeleteProject} from './/delete.js';
import {clearingView} from './/views.js';

/***
 * All the adding project stuff.
 */

//Creates the sidebar. 
const sidebar = document.getElementById("sidenav");
const sideProject = document.getElementById("projects")

//Initial Delete Button.
//Uses parent node to identify where in array the task is and deletes.
const DeleteButton = document.createElement("button");
DeleteButton.innerHTML = "X";

//To change between Projects and to add tasks.
function taskView() {
    let taskArray = JSON.parse(localStorage.getItem(this.id));
    const theTasks = document.getElementById("tasks");
    let newTaskButton = document.createElement("button");
    newTaskButton.textContent = "New Task";
    newTaskButton.id = this.id;
    newTaskButton.addEventListener("click", function() {
        newTask(this.id);
    });

    let projectTitle = JSON.parse(localStorage.getItem(this.id));
    theTasks.innerHTML = projectTitle[0];
    theTasks.style.fontFamily = 'Roboto';
    theTasks.style.fontSize = '36px';
    theTasks.appendChild(newTaskButton);

    for (let x = 1; x < taskArray.length; x++) {
        let deleteButton = document.createElement("button");
        deleteButton.id = this.id;
        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", DeleteTask);
        let editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.id = this.id;
        editButton.addEventListener("click", EditTask);
        const TaskInProject = document.createElement("div");
        TaskInProject.id = x; 
        TaskInProject.innerHTML = taskArray[x];
        TaskInProject.style.fontSize = '18px';
        TaskInProject.append(editButton);
        TaskInProject.append(deleteButton);
        theTasks.append(TaskInProject);
    }
}
//Edits the task.
function EditTask() {
    let localStorageArray = JSON.parse(localStorage.getItem(this.id));
    let editTask = prompt("Edit your task", ""); 
    if (editTask == null || editTask == "") {
        return;
    } 
    localStorageArray[1] = editTask;
    let editButton = document.createElement("button");
    editButton.id = this.id;
    editButton.innerHTML = "Edit";
    editButton.addEventListener("click", EditTask);
    let newDeleteButton = document.createElement("button");
    newDeleteButton.id = this.id;
    newDeleteButton.innerHTML = "X";
    newDeleteButton.addEventListener("click", DeleteTask);

    this.parentNode.firstChild.nodeValue = editTask;
    console.log(this.parentNode.firstChild);

    localStorage.setItem(this.id, JSON.stringify(localStorageArray));
}

//Adding a new task.
function newTask(projectID) {
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
    let editButton = document.createElement("button");
    editButton.id = projectID;
    editButton.innerHTML = "Edit";
    editButton.addEventListener("click", EditTask);
    let newDeleteButton = document.createElement("button");
    newDeleteButton.id = projectID;
    newDeleteButton.innerHTML = "X";
    newDeleteButton.addEventListener("click", DeleteTask);
    addingNewTask.append(newTask);
    addingNewTask.append(editButton);
    addingNewTask.append(newDeleteButton);
    document.getElementById("tasks").append(addingNewTask);
}   

//Used when page is reloaded.
function reloadingPage() { 
    let x = 0;
    Object.keys(localStorage).forEach(function(key){
        if (key > x) {
            x = key;
        }
    });
    for (let i = 0; i < x+1; i++) {
        if (localStorage.getItem(i) != null) {
            let newProjectItem = document.createElement('div');
            let newDeleteButton = document.createElement("button");
            newDeleteButton.id = i;
            newDeleteButton.innerHTML = "X";
            newDeleteButton.style.cssFloat  = "right";
            newDeleteButton.addEventListener("click", DeleteProject);
            newProjectItem.addEventListener("click", taskView);
            newProjectItem.classList.add('project');
            let projectSide = JSON.parse(localStorage[i]);
            newProjectItem.innerHTML = projectSide[0];
            newProjectItem.id = i;
            sidebar.appendChild(newProjectItem);
            newProjectItem.appendChild(newDeleteButton);
        }
    }
}

//Adds new project to end.
function callingProjects(x) {
    let newProjectItem = document.createElement('div');
    let newDeleteButton = document.createElement("button");
    newDeleteButton.id = x;
    newDeleteButton.innerHTML = "X";
    newDeleteButton.style.cssFloat  = "right";
    newDeleteButton.addEventListener("click", DeleteProject);
    newProjectItem.addEventListener("click", taskView);
    newProjectItem.classList.add('project');
    newProjectItem.innerHTML = JSON.parse(localStorage.getItem(x));
    newProjectItem.id = x;
    sidebar.appendChild(newProjectItem);
    newProjectItem.appendChild(newDeleteButton);
}

//Adds a new project.
function AddProject(){
    let x = 0;
    let newProject = prompt("Enter your new project", "");
    if (newProject == null || newProject == "") {
        return;
    }
    let newArray = [];
    newArray.push(newProject);
    Object.keys(localStorage).forEach(function(key){
        if (key > x) {
            x = key;
        }
    });
    x++;
    localStorage.setItem(x, JSON.stringify(newArray));
    callingProjects(x)
}


//Adding new projects.
sidebar.innerHTML =`<button id="newProject">Add a new project</button><br>`;
document.getElementById("newProject").addEventListener("click", AddProject);

//Whenever the page is refreshed
reloadingPage();

//Called when page is first initalized
if (localStorage.length === 0) {
    let newArray = [];
    let firstProject = document.createElement('div');
    firstProject.classList.add('project');
    firstProject.id = "Project";
    newArray.push("Project");
    localStorage.setItem(1, JSON.stringify(newArray));
    DeleteButton.id = 1;
    DeleteButton.textContent = "X";
    DeleteButton.style.cssFloat  = "right";
    firstProject.innerHTML = JSON.parse(localStorage.getItem(1));
    firstProject.addEventListener("click", taskView);
    sidebar.appendChild(firstProject);
    firstProject.append(DeleteButton);
    document.getElementById("1").addEventListener("click", DeleteProject);
}
