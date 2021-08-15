//Deleting a project
export function DeleteProject() {
    this.parentNode.remove()
    localStorage.removeItem(this.id);
    event.stopPropagation();
    clearingView();
}

//Sets the view empty after clearing it.
export function clearingView () {
    const theTasks = document.getElementById("tasks");
    theTasks.innerHTML = "";
}

