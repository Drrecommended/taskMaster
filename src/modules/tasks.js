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
  console.log(tasks)
}

export function deleteTask() {

}