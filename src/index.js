import './styles/main.scss'
import nav from './modules/nav'
import eventHandlers from './modules/eventsHandlers'

function component() {
  const element = document.createElement('div')

  element.innerText = 'something soon'
  return element
}


eventHandlers()
nav()

const taskForm = (() => {
  const form = document.getElementById('task-form')
})()

console.log(1, 2, 3)

document.body.appendChild(component())
