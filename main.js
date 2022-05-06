const btnAddNewTask = document.querySelector('.btn-add-new-task')
const inputAddNewTask = document.querySelector('.add-new-task')
const inputSearch = document.querySelector('.search')
const inputEdit = document.querySelector('.edit')
const editBtn = document.querySelector('.edit-btn')

const toDoList = new ToDoList()
toDoList.createToDoList()
toDoList.addTask(new Task("Malowanie"))

toDoList.addTask(new Task("Szpachlowanie"))

toDoList.addTask(new Task("Tapetowanie"))
toDoList.addTask(new Task("Malowanie salonu"))
toDoList.addTask(new Task("Masonry painting"));

toDoList.addTask(new Task("Skimming"));

console.log(toDoList)

const addNewTask = () => {
    toDoList.addTask(new Task(inputAddNewTask.value))
    console.log(toDoList)
}
btnAddNewTask.addEventListener('click', addNewTask)

const eventChoice = (e) => {
    const indexTask = Number(e.target.parentNode.dataset.key)
    console.log(indexTask)


    if (e.target.classList.contains('btn-task-done')) {
        // toDoList.removeTask(indexTask)
        toDoList.doneTask(indexTask)
    }
    if (e.target.classList.contains('btn-task-edit')) {
        // toDoList.removeTask(indexTask)
        toDoList.editTask(indexTask)
        editBtn.addEventListener('click',()=>{toDoList.editTask(indexTask)})
    }
    if (e.target.classList.contains('btn-task-delete')) {
        toDoList.removeTask(indexTask)
    }



}

const divContainer = document.querySelector('.task-container')
divContainer.addEventListener('click', eventChoice)
inputSearch.addEventListener('input',(e)=>  toDoList.searchTask(e))




