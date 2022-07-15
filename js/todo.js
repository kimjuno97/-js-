const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
    const delLi = event.target.parentElement;
    delLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(delLi.id));
    saveToDos();
}

function paintToDo(newTodo){
    const showLi = document.createElement("li");
    showLi.id = newTodo.id;
    const showSpan = document.createElement("span");
    showSpan.innerText = newTodo.text;
    const showButton = document.createElement("button");
    showButton.innerText ="del"
    showButton.addEventListener("click", deleteToDo);
    showLi.appendChild(showSpan);
    showLi.appendChild(showButton);
    toDoList.appendChild(showLi);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}



toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}