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
    dueDate: '03/02/23',
    priority: 'medium',
  },
]

function taskFactory(name, description, dueDate, priority) {
  return { name, description, dueDate, priority }
}

export function displayTasks(taskArray) {
  const taskListContainer = document.getElementById('task-list-container')

  taskListContainer.innerHTML = taskArray
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
  // resetForm(taskName, taskDescription, taskDate, taskPriority)
  displayTasks(tasks)
}

export function deleteTask() {}
export { tasks }
