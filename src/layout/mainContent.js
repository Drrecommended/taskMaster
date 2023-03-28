import form from '../components/form'
import { displayTasks } from '../components/task'


export default function mainContent() {
  // const sectionTitle = document.getElementById('section__title')
  const openFormBtn = document.getElementById('open-form__btn')
  const sectionTitle = document.getElementById('section__title')
  const newForm = form()

  const showTasks = (section) => {
    sectionTitle.innerText = section
    displayTasks()
  }

  openFormBtn.addEventListener('click', newForm.toggleFormView)
  return {
    showTasks,
  }
}
