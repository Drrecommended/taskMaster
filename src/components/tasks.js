// import {resetForm} from './UI'
import { addWeeks, format, parseISO } from 'date-fns'
/* make a function to handle all the dates and formatting and put it in another file */
const todaysDate = format(new Date(), 'MM/dd/yy')

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
  const todaysTasks = tasks.filter((task) => task.dueDate === todaysDate)
  displayTasks(todaysTasks)
}

export function displayWeeksTasks() {
  const thisWeek = format(addWeeks(new Date(), 1), 'MM/dd/yy')
  // console.log(typeof todaysDate, thisWeek)
  const thisWeeksTasks = tasks.filter(
    (task) => task.dueDate <= thisWeek && task.dueDate >= todaysDate
  )
  displayTasks(thisWeeksTasks)
}

export function displayCompletedTasks() {
  console.log('yeeee')
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
  console.log(formattedDate)
  const newTask = taskFactory(
    taskName,
    taskDescription,
    taskDueDate,
    taskPriority
  )
  tasks.push(newTask)
  displayTasks()
}

export { tasks }
