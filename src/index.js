import './styles/main.scss'
import { tasks, displayTasks } from './components/tasks'
import nav from './layouts/nav'
import eventHandlers from './components/eventsHandlers'

function component() {
  const element = document.createElement('div')

  element.innerText = 'something soon'
  return element
}


eventHandlers()
displayTasks(tasks)
nav().test()

document.body.appendChild(component())
