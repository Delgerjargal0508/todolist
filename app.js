const tasks = [];
const submitButton = document.getElementById('btn');
const inputField = document.getElementById('input');
const taskList = document.getElementById('task-list')

submitButton.addEventListener('click', addTask);
inputField.addEventListener('keyup', (event) =>{
    if (event.key === 'Enter'){
        addTask();
    }
})

function addTask(){
    let newTask = inputField.value.trim();
    if(!newTask) return;
    tasks.push(newTask);
    inputField.value = '';
    let li = document.createElement('li');
    let spanText = document.createElement('span');
    spanText.textContent = newTask;
    li.appendChild(spanText);
    let currentIndex = tasks.length - 1;
    li.setAttribute('data-index', currentIndex);
    taskList.appendChild(li);
    li.addEventListener('click', ()=>{
        spanText.classList.toggle('completed');
    })
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.setAttribute('id', 'editButtonId')
    li.appendChild(editButton);
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('id', 'deleteButtonId')
    li.appendChild(deleteButton);
    editButton.addEventListener('click', ()=> editTask(li));
    deleteButton.addEventListener('click', ()=> deleteTask(li));
}

function editTask(li) {
    const index = li.getAttribute('data-index');
    const input = document.createElement('input');
    const editButtonInvisible = li.querySelector('#editButtonId');
    const deleteButtonInvisible = li.querySelector('#deleteButtonId')
    const saveButton = document.createElement('button');

    saveButton.textContent = 'Save';
    saveButton.setAttribute('id', 'saveButtonId');
    editButtonInvisible.style.display = 'none';
    deleteButtonInvisible.style.display = 'none';
    li.appendChild(saveButton);

    const originalSpan = li.querySelector('span');
    input.value = tasks[index];
    li.replaceChild(input, originalSpan);

    input.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') saveEdit();
    });
    saveButton.addEventListener('click', saveEdit);

    function saveEdit() {
        tasks[index] = input.value;
        const newSpan = document.createElement('span');
        newSpan.textContent = input.value;
        li.replaceChild(newSpan, input);
        editButtonInvisible.style.display = 'inline-block';
        deleteButtonInvisible.style.display = 'inline-block';
        saveButton.remove();
        
        newSpan.addEventListener('click', () => {
            newSpan.classList.toggle('completed');
        });
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