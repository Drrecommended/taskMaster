import form from '../components/form'
import { tasks, loadTasks } from '../components/task'



export default function mainContent(section) {
  const openFormBtn = document.getElementById('open-form__btn')
  const sectionTitle = document.getElementById('section__title')
  const contentContainer = document.getElementById('task-list__container')
  const newForm = form(contentContainer)

  loadTasks(tasks)

  openFormBtn.addEventListener('click', newForm.toggleFormView)
  return {
    loadTasks,
  }
}
