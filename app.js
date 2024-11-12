var tasks = [];
var submitButton = document.getElementById('btn');
var inputField = document.getElementById('input');
var taskList = document.getElementById('task-list')

submitButton.addEventListener('click', addTask);


function addTask(){
    var newTask = inputField.value.trim();
    if(!newTask) return;
    tasks.push(newTask);
    inputField.value = '';

    var li = document.createElement('li');
    li.textContent = newTask;
    li.setAttribute('data-index', index);
    taskList.appendChild(li);

    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    li.appendChild(editButton);
    
    var deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete';
    li.appendChild(deleteButton);

    editButton.addEventListener('click', editTask(index));
    deleteButton.addEventListener('click', deleteTask(index));
}

function editTask(){

}

function deleteTask(){
    tasks.slice(index, 1)
}
