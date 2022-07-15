const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const Quoter = document.querySelector('#quote');

const HIDDEN_CLASSNAME = "hidden";
const SAVED_NAME = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //윈도우 기본 클릭 동작 정지
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(SAVED_NAME, loginInput.value);
    paintGreetings();
}
// hidden 제거
function paintGreetings() {
    let username = localStorage.getItem(SAVED_NAME);
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    Quoter.classList.remove(HIDDEN_CLASSNAME);
}

const savedName = localStorage.getItem(SAVED_NAME);   

if(savedName ===null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedName);
}
