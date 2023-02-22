import header from '../layout/header'
import mainContent from '../layout/mainContent'
import navbar from '../layout/navbar'
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
