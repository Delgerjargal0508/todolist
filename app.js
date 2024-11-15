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
    var currentIndex = tasks.length - 1;
    li.setAttribute('data-index', currentIndex);
    taskList.appendChild(li);

    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    li.appendChild(editButton);
    
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    li.appendChild(deleteButton);

    editButton.addEventListener('click', ()=> editTask(li));
    deleteButton.addEventListener('click', ()=> deleteTask(li));
}

function editTask(li) {
    const index = li.getAttribute('data-index');
    const input = document.createElement('input');
    input.value = tasks[index];
    const originalText = li.firstChild;
    li.replaceChild(input, originalText);
    input.focus();

    input.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') saveEdit();
    });
    input.addEventListener('blur', saveEdit);

    function saveEdit() {
        tasks[index] = input.value;
        li.replaceChild(document.createTextNode(input.value), input);
    }
}

function deleteTask(li) {
    const index = parseInt(li.getAttribute('data-index'));
    tasks.splice(index, 1);
    li.remove();
    const remainingLis = taskList.querySelectorAll('li');
    remainingLis.forEach((element, newIndex) => {
        element.setAttribute('data-index', newIndex);
    });
}