import generateJoke from "./generateJoke"
import './styles/main.scss'

function component() {
    const element = document.createElement('div')

    element.innerText = generateJoke()
    return element
}

console.log(1, 2, 3)

document.body.appendChild(component())