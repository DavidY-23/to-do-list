//Deleting a task
export function DeleteTask() {
    let localStorageArray = JSON.parse(localStorage.getItem(this.id));
    localStorageArray.splice(this.parentNode.id, 1);
    localStorage.setItem(this.id, JSON.stringify(localStorageArray));
    this.parentNode.innerHTML = "";
}

//Deleting a project
export function DeleteProject() {
    this.parentNode.remove()
    localStorage.removeItem(this.id);
    event.stopPropagation();
    clearingView();
}
