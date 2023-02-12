import './styles/main.scss'
import { tasks, displayTasks } from './components/tasks'
import eventHandlers from './components/eventsHandlers'
import app from './app/startApp'

app.initialize()

eventHandlers()
displayTasks(tasks)

