import { createTask } from './task'

export default function form(container) {
  const taskName = document.getElementById('task-name')
  const taskDate = document.getElementById('task-date')
  const taskPriority = document.querySelectorAll(
    '#task-priority input[type=radio]'
  )
  const taskDescription = document.getElementById('task-description')
  const closeForm = document.getElementById('close-form__btn')
  const thisForm = document.getElementById('task-form')


  const getPriorityValue = (e) => {
    taskPriority.value = e.target.value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(
      taskName.value,
      taskDate.value,
      taskPriority.value,
      taskDescription.value
    )
  }

  const toggleFormView = () => {
    const taskContainer = container
    if (thisForm.style.display === 'block') {
      thisForm.style.display = 'none'
      taskContainer.style.display = 'block'
    } else {
      thisForm.style.display = 'block'
      taskContainer.style.display = 'none'

    }
  }

  thisForm.addEventListener('submit', handleSubmit)
  closeForm.addEventListener('click', toggleFormView)
  taskPriority.forEach((priority) =>
    priority.addEventListener('click', getPriorityValue)
  )
  return {
    toggleFormView,
  }
}
