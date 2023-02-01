import './styles/main.scss'
import { tasks, displayTasks } from './components/tasks'
import eventHandlers from './components/eventsHandlers'

function component() {
  const element = document.createElement('div')

  element.innerText = 'something soon'
  return element
}

eventHandlers()
displayTasks(tasks)


document.body.appendChild(component())
