const clock = document.querySelector("p#clockForm")
const dayform = document.querySelector("p#dayForm")

function getClock(){
    const now = new Date();
    const year = now.getFullYear()
    const month = now.getMonth()
    const date = now.getDate()
    const hour = String(now.getHours()).padStart(2, "0")
    const min = String(now.getMinutes()).padStart(2, "0")
    const sec = String(now.getSeconds()).padStart(2, "0")
    
    dayform.innerText = `${year}년 ${month}월 ${date}일`
    clock.innerText = `${hour}:${min}:${sec}`
}

getClock()
setInterval(getClock, 1000)


// ms
// setTimeout(sayHello, 5000)
