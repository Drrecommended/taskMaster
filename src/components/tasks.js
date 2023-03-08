// import {resetForm} from './UI'
import { addWeeks, format, parseISO } from 'date-fns'
/* make a function to handle all the dates and formatting and put it in another file */
const todaysDate = format(new Date(), 'MM/dd/yy')

const tasks = [
  {
    name: '432',
    description: '423',
    dueDate: '01/20/23',
    priority: 'medium',
    complete: true,
  },
]

class Task {
 constructor(name) {
  this.name = name
 }

 markComplete() {
  return this.name
 }
}

// function changeTaskStatus(target) {
//   console.log(target.classList)
// }

export function displayTasks() {
  console.log('test')
}
 
export function displayTodaysTasks() {
  const todaysTasks = tasks.filter((task) => task.dueDate === todaysDate)
  displayTasks(todaysTasks)
}

export function displayWeeksTasks() {
  const thisWeek = format(addWeeks(new Date(), 1), 'MM/dd/yy')
  const thisWeeksTasks = tasks.filter(
    (task) => task.dueDate <= thisWeek && task.dueDate >= todaysDate
  )
  displayTasks(thisWeeksTasks)
}

export function displayCompletedTasks() {
  const completedTasks = tasks.filter((task) => task.complete)
  console.log(completedTasks)
  displayTasks(completedTasks)
}

/* make a function to add task but also to append task so we don't have to reload all the tasks */
export function addTask(e) {
  e.preventDefault()
  const taskName = document.getElementById('task-name').value
  const taskDescription = document.getElementById('task-description').value
  const taskDueDate = document.getElementById('task-date').value
  const taskPriority = document.querySelector(
    'input[name="task-priority"]:checked'
  ).value
  const formattedDate = format(parseISO(taskDueDate), 'MM/dd/yy')
  const newTask = new Task(
    taskName,
    taskDescription,
    formattedDate,
    taskPriority
  )
  tasks.push(newTask)
  displayTasks()
}

export { tasks }
