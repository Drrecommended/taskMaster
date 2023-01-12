import resetForm from "./UI"

const tasks = [ "task", "other task"]

function taskFactory(name, description, dueDate) {
  return { name, description, dueDate }
}

export function displayTasks(taskArray) {
  const taskListContainer = document.getElementById('task-list-container')
  taskArray.forEach((task) => {
    const taskContainer = document.createElement('div')
    taskContainer.innerText = task
    taskListContainer.appendChild(taskContainer)
  })
}


/* make a function to add task but also to append task so we don't have to reload all the tasks */ 
export function addTask(e) {
  console.log('test')
  e.preventDefault()
  const taskName = document.getElementById('task-name').value
  const taskDescription = document.getElementById('task-description').value
  const taskDate = document.getElementById('task-date').value
  const newTask = taskFactory(taskName, taskDescription, taskDate)
  tasks.push(newTask)
  resetForm(taskName, taskDescription, taskDate)
  displayTasks(tasks)
}

export function deleteTask() {}
export { tasks }