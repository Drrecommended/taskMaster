// import {resetForm} from './UI'
import { addWeeks, format, parseISO } from 'date-fns'
/* make a function to handle all the dates and formatting and put it in another file */
const todaysDate = format(new Date(), 'MM/dd/yy')

const tasks = [
  // {
  //   name: '432',
  //   description: '423',
  //   dueDate: '01/20/23',
  //   priority: 'medium',
  //   complete: true,
  // },
  // {
  //   name: '432',
  //   description: '423',
  //   dueDate: '01/19/23',
  //   priority: 'medium',
  //   complete: true,
  // },
  // {
  //   name: '432',
  //   description: '423',
  //   dueDate: '02/18/23',
  //   priority: 'medium',
  //   complete: false,
  // },
  // {
  //   name: '432',
  //   description: '423',
  //   dueDate: '02/17/23',
  //   priority: 'medium',
  //   complete: true,
  // },
  // {
  //   name: 'YOU',
  //   description: '423',
  //   dueDate: '02/17/23',
  //   priority: 'medium',
  //   complete: false,
  // },
]

function taskFactory(name, description, dueDate, priority) {
  const complete = false
  const markComplete = () => console.log(this.complete)

  const deleteTask = () => {
    console.log('deleted')
  }

  return { name, description, dueDate, priority, complete, markComplete, deleteTask }
}

// function changeTaskStatus(target) {
//   console.log(target.classList)
// }

function attachTaskHandlers() {
  const completeTaskbuttons = document.getElementById('complete-task')
  // completeTaskbuttons.forEach((button) => button.addEventListener('click', (e) => ))
  console.log(completeTaskbuttons)
}

export function displayTasks(filteredTasks) {
  const taskListContainer = document.getElementById('task-list-container')
  const selectedTasks = filteredTasks || tasks
  taskListContainer.innerHTML = selectedTasks
    .map(
      (task, index) =>
        `<li class="flex task-card" data-id="${index}">
          <p class="task-name">${task.name}</p>
          <p class="task-date">${task.dueDate}</p>
          <p class="task-priority">${task.priority}</p>
          <button id="delete-task">
            <i class="fa-solid fa-trash-can"></i>
          </button>
          <button id="complete-task">
            complete
         </button>
        </li>`
    )
    .join('')
    attachTaskHandlers()
}

export function displayTodaysTasks() {
  const todaysTasks = tasks.filter((task) => task.dueDate === todaysDate)
  console.log(todaysTasks)
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
