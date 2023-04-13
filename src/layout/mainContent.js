import form from '../components/form'
import { taskLoader } from '../components/task'

export default function mainContent(section) {
  // const sectionTitle = document.getElementById('section__title')
  const openFormBtn = document.getElementById('open-form__btn')
  const sectionTitle = document.getElementById('section__title')
  const contentContainer = document.getElementById('task-list__container')
  const thisForm = form(contentContainer)
  
  const loadTasks = taskLoader(contentContainer, sectionTitle, section)
  loadTasks()
  
  openFormBtn.addEventListener('click', thisForm.toggleFormView)
  return {
    loadTasks
  }
}
