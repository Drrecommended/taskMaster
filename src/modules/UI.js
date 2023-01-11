export function resetForm() {
  document.getElementById('task-form').reset()
}

export function displayTasks(tasks) {
  const taskList = document.getElementById('task-list')
  tasks.forEach((task) => {
    const taskContainer = document.createElement('div')
    taskContainer.innerText = task
    taskList.appendChild(taskContainer)
  })
}
