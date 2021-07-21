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
    newTaskIdea.classList.add('task');
    newTaskIdea.textContent = newTask;
    newTaskIdea.id = newTask;
    document.getElementById("tasks").append(br);
    document.getElementById("tasks").append(newTask);
}   

//Sets the view empty after clearing it.
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
            console.log(localStorage.getItem(i));  
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
    newProjectItem.innerHTML = localStorage.getItem(x);
    newProjectItem.id = localStorage.getItem(x);
    console.log('ID'+ localStorage.getItem(x));
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
    Object.keys(localStorage).forEach(function(key){
        if (key > x) {
            x = key;
        }
    });
    x++;
    localStorage.setItem(x, newProject);
    callingProjects(x)
}



sidebar.innerHTML =`To Do List <button id="newProject">Add</button><br>`;
//Initial project.


//Called when page is first initalized and refreshed

reloadingPage();
if (localStorage.length === 0) {
    let firstProject = document.createElement('div');
    firstProject.classList.add('project');
    firstProject.id = "Project";
    localStorage.setItem(1, "Project")
    DeleteButton.id = 1;
    DeleteButton.textContent = "X";
    DeleteButton.style.cssFloat  = "right";
    firstProject.innerHTML = localStorage.getItem(1);
    firstProject.addEventListener("click", taskView);
    sidebar.appendChild(firstProject);
    firstProject.append(DeleteButton);
}
document.getElementById("newProject").addEventListener("click", AddProject);
document.getElementById("1").addEventListener("click", DeleteProject);

