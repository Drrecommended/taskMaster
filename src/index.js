import './styles/main.scss'
import { tasks, displayTasks } from './components/tasks'
import eventHandlers from './components/eventsHandlers'
import dashboard from './dashboard/dashboard'

function component() {
  const element = document.createElement('div')

  element.innerText = 'something soon'
  return element
}


eventHandlers()
displayTasks(tasks)
dashboard.loadDashBoard()

document.body.appendChild(component())
