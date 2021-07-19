import './style.css';

/***
 * All the adding project stuff.
 * 
 */

//Creates the sidebar. 
const sidebar = document.getElementById("sidenav");
const sideProject = document.getElementById("projects")

//Delete Button.
const DeleteButton = document.createElement("button");
DeleteButton.innerHTML = "X";

//Adds a new project.
function AddProject(){
    let newProjectItem = document.createElement('div');
    newProjectItem.classList.add('project');
    let newProject = prompt("Enter your new project", "");
    if (newProject == null || newProject == "") {
        return;
    }
    else {
        newProjectItem.textContent = newProject;
        newProjectItem.id = newProject;
        sidebar.appendChild(newProjectItem);
        newProjectItem.appendChild(DeleteButton);

    }
}

//Button to delete a project.
function DeleteProject() {
    this.parentNode.remove()
}

DeleteButton.addEventListener("click", DeleteProject);

sidebar.innerHTML =`To Do List <button id="newProject">Add</button><br>`;
 
//Initial project.
let firstProject = document.createElement('div');
firstProject.classList.add('project');
firstProject.id= "firstProject";
firstProject.textContent = "Project";
firstProject.appendChild(DeleteButton);
sidebar.appendChild(firstProject);

document.getElementById("newProject").addEventListener("click", AddProject);





/***
 * Adding tasks.
 */

