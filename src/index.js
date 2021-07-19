import './style.css';

const sidebar = document.getElementById("sidenav");
const sideProject = document.getElementById("projects")
var projects = ['Projects'];
console.log(sidebar);
console.log(document.getElementById("content"));
console.log(sideProject);

sidebar.innerHTML += projects[0];
function AddProject(){
    let newProjectItem = document.createElement('div');
    newProjectItem.classList.add('project');
    let newProject = prompt("Enter your new project", "");
    if (newProject == null || newProject == "") {
        return;
    }
    else {
        //newProjectItem.setAttribute(newProject);
        newProjectItem.textContent = newProject;
        newProjectItem.id = newProject;
        sidebar.appendChild(newProjectItem);
    }

}
sidebar.innerHTML =`To Do List <button id="newProject">Add</button><br>`;
document.getElementById("newProject").addEventListener("click", AddProject);
