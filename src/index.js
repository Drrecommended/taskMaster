import './styles/main.scss'
import eventHandlers from './modules/eventsHandlers'

function component() {
  const element = document.createElement('div')

  element.innerText = 'something soon'
  return element
}


eventHandlers()


console.log(1, 2, 3)

document.body.appendChild(component())
