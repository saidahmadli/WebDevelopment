let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let clearButton = document.querySelector('.clearButton');

addToDoButton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
        paragraph.style.textDecorationColor="black";
        paragraph.style.opacity="0.7";
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
    clearButton.addEventListener('click',function(){
        toDoContainer.removeChild(paragraph)
    })
})

