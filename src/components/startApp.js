import header from '../layouts/header'
import mainContent from '../layouts/mainContent'
import navbar from '../layouts/navbar'
// import eventHandlers from './eventsHandlers'
import { displayTasks } from './tasks'


function startApp() {
  const initialize = () => {
    header()
    navbar()
    mainContent()
    displayTasks()
    // eventHandlers()
  }

  return { initialize }
}

const app = startApp()

export default app
