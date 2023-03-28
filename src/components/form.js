import createTask from './task'

export default function form() {
  const taskName = document.getElementById('task-name')
  const taskDescription = document.getElementById('task-description')
  const taskDate = document.getElementById('task-date')
  // const taskPriority = document.getElementById('priority')
  const closeForm = document.getElementById('close-form__btn')
  const thisForm = document.getElementById('task-form')

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(taskName.value, taskDescription.value, taskDate.value)
    console.log('yeah baby yea')
  }

  const toggleFormView = () => {
    if (thisForm.style.display === 'block') {
      thisForm.style.display = 'none'
    } else {
      thisForm.style.display = 'block'
    }
  }

  thisForm.addEventListener('submit', handleSubmit)
  closeForm.addEventListener('click', toggleFormView)

  return {
    toggleFormView,
  }
}
