import navbar from '../layouts/nav'

function startApp() {
  const initialize = () => {
    navbar()
  }

  return { initialize }
}

const app = startApp()

export default app
