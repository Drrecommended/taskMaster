import header from '../layout/header'
import mainContent from '../layout/mainContent'
import Navbar from '../layout/navbar'

function startApp() {
  // const content = mainContent()
  const nav = new Navbar()
  const initialize = () => {
    
    header()
    nav.init()
    mainContent()
    // content.loadTasks()
    console.log('app started')
  }

  return { initialize }
}

const app = startApp()

export default app
