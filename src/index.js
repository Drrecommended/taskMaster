import './styles/main.scss'
import interFace from './UI'


function component() {
    const element = document.createElement('div')

    element.innerText = 'something soon'
    return element
}

interFace()

const taskForm = (() => {
    const form = document.getElementById('task-form')
})()



console.log(1, 2, 3)

document.body.appendChild(component())