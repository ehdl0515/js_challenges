const loginForm = document.querySelector("#loginForm")
const loginInput = loginForm.querySelector("input")

const greetingForm = document.querySelector("#greetingForm")

const todoForm_ = document.querySelector("#todoForm input")

const todoList_ = document.querySelector("#todoList")

const userIdGroup = ["DONGHEE", "GUEST"]

function handler(event){
    event.preventDefault()

    const userId = loginInput.value
    if (userIdGroup.includes(userId)) {
        loginForm.classList.add("hidden")
        todoForm_.classList.remove("hidden")
        todoList_.classList.remove("hidden")
        todoList_.classList.add("todoListBox")
        
        todoForm_.classList.add("todobox")
        greetingForm.innerText = `HELLO ${userId}`
        greetingForm.classList.remove("hidden")
        localStorage.setItem("USERID", userId)
    } else {
        alert("유효한 ID가 아닙니다.")
    }
}


loginForm.addEventListener("submit", handler)