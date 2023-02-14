// import {resetForm} from './UI'
import { addWeeks, format, parseISO } from 'date-fns'

const todaysDate = new Date()

const tasks = [
  {
    name: '432',
    description: '423',
    dueDate: '01/02/23',
    priority: 'medium',
  },
  {
    name: '432',
    description: '423',
    dueDate: '01/02/23',
    priority: 'medium',
  },
  {
    name: '432',
    description: '423',
    dueDate: '02/15/23',
    priority: 'medium',
  },
  {
    name: '432',
    description: '423',
    dueDate: '02/14/23',
    priority: 'medium',
  },
  {
    name: 'YOU DID IT',
    description: '423',
    dueDate: '02/13/23',
    priority: 'medium',
  },
]

function taskFactory(name, description, dueDate, priority) {
  const markComplete = () => {
    console.log('marked')
  }
  const deleteTask = () => {
    console.log('deleted')
  }

  return { name, description, dueDate, priority, markComplete, deleteTask }
}

/* maybe rename to load tasks */

export function displayTasks(filteredTasks) {
  const taskListContainer = document.getElementById('task-list-container')
  const selectedTasks = filteredTasks || tasks
  taskListContainer.innerHTML = selectedTasks
    .map(
      (task, index) =>
        `<li class="flex" data-id="${index}">
          <label>
            <input id="task-radio" type="radio">
          </label>
          <p class="task-name">${task.name}</p>
          <p class="task-date">${task.dueDate}</p>
          <p class="task-priority">${task.priority}</p>
          <button>
            <i class="fa-solid fa-trash-can"></i>
          </button>
         </li>`
    )
    .join('')
}

export function displayTodaysTasks() {
  const todaysDateFormatted = format(todaysDate, 'MM/dd/yy')
  const todaysTasks = tasks.filter(
    (task) => task.dueDate === todaysDateFormatted
  )
  displayTasks(todaysTasks)
}

export function displayWeeksTasks() {
  const thisWeek = addWeeks(todaysDate, 1)
  console.log(thisWeek)
}

export function displayCompletedTasks() {
  console.log('yeeee')
}

/* make a function to add task but also to append task so we don't have to reload all the tasks */
export function addTask(e) {
  e.preventDefault()
  const taskName = document.getElementById('task-name').value
  const taskDescription = document.getElementById('task-description').value
  const taskDate = document.getElementById('task-date').value
  const taskPriority = document.querySelector(
    'input[name="task-priority"]:checked'
  ).value
  const formattedDate = format(parseISO(taskDate), 'MM/dd/yy')
  const newTask = taskFactory(
    taskName,
    taskDescription,
    formattedDate,
    taskPriority
  )
  tasks.push(newTask)
  displayTasks()
}

export { tasks }
