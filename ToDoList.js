class ToDoList {
    constructor() {
        this.toDoList = [];
    }

    doneTask(idTask) {
        this.toDoList.forEach((task) => {
            if (task.id === Number(idTask)) {
                task.setIsDone(true);
            }
        });
        this.createToDoList(this.toDoList);
    }

    addTask(task) {
        this.toDoList.push(task);
        this.createToDoList(this.toDoList);
    }

    removeTask(idTask) {
        this.toDoList.forEach((task, index) => {
            if (task.id === Number(idTask)) {
                this.toDoList.splice(index, 1);
            }
        });
        this.createToDoList(this.toDoList);
    }

    editTask(idTask) {
        this.toDoList.forEach((task) => {
            if (task.id === Number(idTask)) {
               inputEdit.value = task.content
                  const content = inputEdit.value
                task.setTask(content)

            }
        });
        this.createToDoList(this.toDoList);
    }

    searchTask(e) {
        const searchText = e.target.value.toLowerCase();
        console.log(searchText);
        this.findTask(searchText);
    }

    findTask(text) {
        console.log(text);
        const foundTask = this.toDoList.filter((task) => {
            return task.hasContent(text);
        });
        console.log(foundTask);
        this.createToDoList(foundTask);
    }

    createToDoList(taskList) {
        const taskDiv = document.querySelector('.task-container')
        taskDiv.textContent = ''
        this.toDoList.forEach((task) => {
            const {id, content, isDone} = task.getTaskInfo();
            const taskUl = document.createElement('ul')
            const taskLi = document.createElement('li')
            taskLi.textContent = content
            taskLi.setAttribute('data-key', id)
            taskDiv.append(taskUl)
            taskUl.append(taskLi)
            const taskBtnGroup = document.createElement('div')
            taskLi.append(taskBtnGroup)
            taskBtnGroup.setAttribute('data-key', id)
            const doneBtn = document.createElement('button')
            doneBtn.classList.add('btn-task-done')
            doneBtn.textContent = 'Done'
            taskBtnGroup.append(doneBtn)
            const editBtn = document.createElement('button')
            editBtn.textContent = 'Edit'
            editBtn.classList.add('btn-task-edit')
            taskBtnGroup.append(editBtn)
            const deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete'
            deleteBtn.classList.add('btn-task-delete')
            taskBtnGroup.append(deleteBtn)
            if (task.getIsDone()) taskLi.classList.add('done-task');
        })
    }

}


