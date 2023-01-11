import './styles/main.scss'
import eventHandlers from './modules/eventsHandlers'
import { displayTasks } from './modules/UI'
import { tasks } from './modules/tasks'

function component() {
  const element = document.createElement('div')

  element.innerText = 'something soon'
  return element
}

displayTasks(tasks)
eventHandlers()


document.body.appendChild(component())
