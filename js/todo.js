const todoForm = document.querySelector("#todoForm")
const todoList = document.getElementById("todoList")
const todoInput = todoForm.querySelector("input")

let toDos = []

function handler(event){
    event.preventDefault()
    const todo = todoInput.value
    todoInput.value = ""
    const newTodoObj = {text: todo, id: Date.now()}
    toDos.push(newTodoObj)
    PaintTodo(newTodoObj)
    saveToDos()
}

function deleteTodo(event){
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id))
    saveToDos()
}

function saveToDos() {
    localStorage.setItem("TODOS", JSON.stringify(toDos))
}

function PaintTodo(newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id


    const todoDelete = document.createElement("button")
    todoDelete.innerText = "❌"

    const span = document.createElement("span")
    span.innerText = `${newTodo.text}  `

    todoDelete.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(todoDelete)
    todoList.appendChild(li)
}



todoForm.addEventListener("submit", handler)

const savedTodos = localStorage.getItem("TODOS")
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos)
    // parsedTodos.forEach((item) => PaintTodo(item))
    toDos = parsedTodos
    parsedTodos.forEach(PaintTodo)
}

