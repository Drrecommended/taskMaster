import header from '../layout/header'
import mainContent from '../layout/mainContent'
import navbar from '../layout/navbar'


function startApp() {
  // const content = mainContent()
  const initialize = () => {
    
    header()
    navbar()
    mainContent()
    // content.loadTasks()
    console.log('app started')
  }

  return { initialize }
}

const app = startApp()

export default app
