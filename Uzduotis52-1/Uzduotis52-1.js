console.log("Second try")

const button = document.querySelector("button")
const box = document.querySelector(".box")

button.onclick = () => {
    box.innerHTML += `<h4>Geros dienos</h4>`
}