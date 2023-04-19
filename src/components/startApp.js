import header from '../layout/header'
import MainContent from '../layout/mainContent'
import Navbar from '../layout/navbar'

function startApp() {
  // const content = mainContent()
  const nav = new Navbar()
  const content = new MainContent()
  const initialize = () => {
    
    header()
    nav.init()
    content.init()
    // content.loadTasks()
    console.log('app started')
  }

  return { initialize }
}

const app = startApp()

export default app
