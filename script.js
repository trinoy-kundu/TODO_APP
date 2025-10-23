let todoList;
let todoListStr = localStorage.getItem('todoList');
console.log(todoListStr);

todoList = todoListStr ? JSON.parse(todoListStr) :  [
    {
        todoItem: 'Build TODO Project',
        dueDate: '10/23/2025'
    }
];

function saveTodoItem() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

displayTodoItem();

document.querySelector('.add-todo').addEventListener('click', addTodo)

function addTodo() {
    let inputElement = document.querySelector('.todo-input');
    let dateinputElement = document.querySelector('.todo-date');
    let inputValue = inputElement.value;
    let dateValue = dateinputElement.value;
    if (inputValue === '' || dateValue === '') {
        alert('Please fill out both the task and the date.');
        return; // This exits the function early
    }
    todoList.push({todoItem: inputValue, dueDate: dateValue});
    inputElement.value = '';
    dateinputElement.value ='';
    saveTodoItem();
    displayTodoItem();
}

function displayTodoItem() {
    let todoContainer = document.querySelector('.todo-container');
    let innerHtml = '';
    for(let i = 0; i < todoList.length; i++) {
        let {todoItem, dueDate} = todoList[i];
         innerHtml += `
            <span>${todoItem}</span>
            <span>${dueDate}</span>
            <button class= "delete-todo" onclick="todoList.splice(${i}, 1);
             saveTodoItem();
             displayTodoItem();"
            >Delete</button>`
    }
    todoContainer.innerHTML = innerHtml;
}


