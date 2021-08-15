//Deleting a task
export function DeleteTask() {
    let localStorageArray = JSON.parse(localStorage.getItem(this.id));
    let index = localStorageArray.indexOf(this.parentNode.id);
    localStorageArray.splice(index, 1);
    localStorage.setItem(this.id, JSON.stringify(localStorageArray));
    this.parentNode.innerHTML = "";
}

