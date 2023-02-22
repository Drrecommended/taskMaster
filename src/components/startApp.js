import mainContent from '../layouts/mainContent'
import navbar from '../layouts/navbar'
// import eventHandlers from './eventsHandlers'
import { displayTasks } from './tasks'

function startApp() {
  const initialize = () => {
    navbar()
    mainContent()
    displayTasks()
    // eventHandlers()
  }

  return { initialize }
}

const app = startApp()

export default app
