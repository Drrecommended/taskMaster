import resetForm from "./UI"

const tasks = []

function taskFactory(name, description, dueDate) {
  return { name, description, dueDate }
}

export function addTask(e) {
  e.preventDefault()
  const taskName = document.getElementById('task-name').value
  const taskDescription = document.getElementById('task-description').value
  const taskDate = document.getElementById('task-date').value
  const newTask = taskFactory(taskName, taskDescription, taskDate)
  tasks.push(newTask)
  resetForm(taskName, taskDescription, taskDate)
  console.log(tasks)
}

export function deleteTask() {

}