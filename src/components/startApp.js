import navbar from '../layouts/nav'
import eventHandlers from './eventsHandlers'

function startApp() {
  const initialize = () => {
    navbar()
    eventHandlers()
  }

  return { initialize }
}

const app = startApp()

export default app
