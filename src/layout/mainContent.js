import { tasks } from '../components/tasks'

export default function mainContent() {
  const content = document.getElementById('content')
  const openFormBtns = document.querySelectorAll('#open-form__btn')
  const form = document.getElementById('task-form')

  const toggleFormButtonVisibility = () => {}

  const toggleForm = () => {
    form.classList.toggle('open')
    toggleFormButtonVisibility()
  }

  console.log(content)
  if (tasks.length === 0) console.log('empty')

  openFormBtns.forEach((button) =>
    button.addEventListener('click', () => toggleForm())
  )
}
