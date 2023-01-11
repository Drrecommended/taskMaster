import './styles/main.scss'
import { tasks, displayTasks } from './modules/tasks'

function component() {
  const element = document.createElement('div')

  element.innerText = 'something soon'
  return element
}

displayTasks(tasks)


document.body.appendChild(component())
