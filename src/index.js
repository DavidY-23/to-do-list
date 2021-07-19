import './style.css';

/***
 * All the adding project stuff.
 * 
 */

//Creates the sidebar. 
const sidebar = document.getElementById("sidenav");
const sideProject = document.getElementById("projects")

//Initial Delete Button.
const DeleteButton = document.createElement("button");
DeleteButton.id = "deleteButton";
DeleteButton.innerHTML = "X";

//Adds a new project.
function AddProject(){
    let newProjectItem = document.createElement('div');
    let newDeleteButton = document.createElement("button");
    newDeleteButton.id = "deleteButton";
    newDeleteButton.innerHTML = "X";
    newDeleteButton.addEventListener("click", DeleteProject);
    newProjectItem.classList.add('project');
    let newProject = prompt("Enter your new project", "");
    if (newProject == null || newProject == "") {
        return;
    }
    else {
        newProjectItem.textContent = newProject;
        newProjectItem.id = newProject;
        sidebar.appendChild(newProjectItem);
        newProjectItem.appendChild(newDeleteButton);
        console.log(newDeleteButton.id);

    }
}

//Button to delete a project.
function DeleteProject() {
    this.parentNode.remove()
}


sidebar.innerHTML =`To Do List <button id="newProject">Add</button><br>`;
 
//Initial project.
let firstProject = document.createElement('div');
firstProject.classList.add('project');
firstProject.id= "firstProject";
firstProject.textContent = "Project";
firstProject.appendChild(DeleteButton);
sidebar.appendChild(firstProject);

document.getElementById("newProject").addEventListener("click", AddProject);
document.getElementById("deleteButton").addEventListener("click", DeleteProject);





/***
 * Adding tasks.
 */