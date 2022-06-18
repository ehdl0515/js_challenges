const bg = document.querySelector("#greetingForm")
const bgImage = document.createElement("img")

bgImage.classList.add("wrap")
bgImage.classList.add("image")

bgGroup = ["img/bg1.png", "img/bg2.jpg", "img/bg3.jpg", "img/bg4.jpg"]

bgImage.src = bgGroup[Math.floor(Math.random() * bgGroup.length)]
bgImage.id = "bg"
bgImage.classList.add("container")
document.body.appendChild(bgImage)


