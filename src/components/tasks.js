// import {resetForm} from './UI'
const tasks = []

function taskFactory(name, description, dueDate, priority) {
  return { name, description, dueDate, priority }
}

export function displayTasks(taskArray) {
  const taskListContainer = document.getElementById('task-list-container')
  // taskArray.forEach((task) => {
  //   const taskContainer = document.createElement('li')
  //   taskContainer.classList.add('task-container')
  //   const taskTitle = document.createElement('p')
  //   taskTitle.innerText = task
  //   taskContainer.innerText = task
  //   taskListContainer.appendChild(taskContainer)
  // })
  taskListContainer.innerHTML = taskArray
    .map(
      (task, index) =>
        `<li class="flex" data-id="${index}"><p>${task.name}</p><p>${task.dueDate}</p><p>${task.priority}</p></li>`
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
  const newTask = taskFactory(taskName, taskDescription, taskDate, taskPriority)
  tasks.push(newTask)
  console.log(newTask)
  // resetForm(taskName, taskDescription, taskDate, taskPriority)
  displayTasks(tasks)
}

export function deleteTask() {}
export { tasks }
