// import {resetForm} from './UI'
import { format, parseISO } from 'date-fns'

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
    dueDate: '01/02/23',
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
  return { name, description, dueDate, priority }
}

/* maybe rename to load tasks */

export function displayTasks(filteredTasks) {
  const taskListContainer = document.getElementById('task-list-container')
  const selectedTasks = filteredTasks || tasks
  console.log(selectedTasks)
  taskListContainer.innerHTML = selectedTasks
    .map(
      (task, index) =>
        `<li class="flex" data-id="${index}">
          <label>
            <input type="radio">
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
  const todaysDate = new Date()
  const todaysDateFormatted = format(todaysDate, 'MM/dd/yy')
  const todaysTasks = tasks.filter(
    (task) => task.dueDate === todaysDateFormatted
  )
  displayTasks(todaysTasks)
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

export function deleteTask() {}
export { tasks }
