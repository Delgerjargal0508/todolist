let Submit = document.getElementById('SubmitButton');
let toDoContainer = document.getElementById('taskContainer');
let inputField = document.getElementById('inputField');

Submit.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerHTML=inputField.value
    toDoContainer.appendChild(paragraph);
    inputField.value = ""
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})