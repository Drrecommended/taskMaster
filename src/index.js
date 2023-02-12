import './styles/main.scss'
import { tasks, displayTasks } from './components/tasks'
import app from './components/startApp'

app.initialize()

displayTasks(tasks)
