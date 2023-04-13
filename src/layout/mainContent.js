import form from '../components/form'
import { tasks, taskLoader } from '../components/task'

export default function mainContent(section) {
  console.log(tasks)
  const openFormBtn = document.getElementById('open-form__btn')
  const sectionTitle = document.getElementById('section__title')
  const contentContainer = document.getElementById('task-list__container')
  const thisForm = form(contentContainer)
  
  const loadTasks = taskLoader(contentContainer, sectionTitle, section)
  loadTasks(tasks)
  
  openFormBtn.addEventListener('click', thisForm.toggleFormView)
  return {
    loadTasks
  }
}
