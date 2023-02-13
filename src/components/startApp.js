import navbar from '../layouts/nav'
import eventHandlers from './eventsHandlers'
import { displayTasks } from './tasks'

function startApp() {
  const initialize = () => {
    navbar()
    displayTasks()
    eventHandlers()
  }

  return { initialize }
}

const app = startApp()

export default app
