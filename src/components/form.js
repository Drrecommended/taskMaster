import createTask from './tasks'

export default function form() {
  const taskName = document.getElementById('task-name')
  const taskDescription = document.getElementById('task-description').value
  const taskDate = document.getElementById('task-date').value
  // const taskPriority = document.getElementById('priority').value
  const closeForm = document.getElementById('close-form__btn')
  const form = document.getElementById('task-form')

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(taskName, taskDescription, taskDate)
    console.log('yeah baby yea')
  }

  function toggleFormView() {
    console.log('test 2')
    if (form.style.display === 'block') {
      form.style.display = 'none'
    } else {
      form.style.display = 'block'
    }
  }

  console.log('test 3 ')
  form.addEventListener('submit', handleSubmit)
  closeForm.addEventListener('click', toggleFormView)
  return {
    toggleFormView,
  }
}
