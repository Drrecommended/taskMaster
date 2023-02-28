import { tasks } from '../components/tasks'

export default function mainContent() {
  const content = document.getElementById('content')
  const openFormBtns = document.querySelectorAll('#open-form__btn')
  const form = document.getElementById('task-form')

  const toggleFormButtonVisibility = () => {
    if (tasks.length === 0) {
      openFormBtns[0].classList.remove('visibility')
    }
  }

  const toggleForm = () => {
    form.classList.toggle('open')
    toggleFormButtonVisibility()
  }

  if (tasks.length > 0) {
    openFormBtns[0].classList.add('visibility')
  }

  openFormBtns.forEach((button) =>
    button.addEventListener('click', () => toggleForm())
  )
}
