console.log("Second try")

const button = document.querySelector(".button")
const box = document.querySelector(".box")

button.onclick = () => {
    box.innerHTML += `<div>Geros dienos</div>`

}