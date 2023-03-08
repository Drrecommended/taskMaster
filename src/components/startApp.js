import header from '../layout/header'
import mainContent from '../layout/mainContent'
import navbar from '../layout/navbar'


function startApp() {
  const initialize = () => {
    
    header()
    navbar()
    mainContent()
    console.log('app started')
  }

  return { initialize }
}

const app = startApp()

export default app
