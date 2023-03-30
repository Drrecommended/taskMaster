import form from '../components/form'
import { displayTaskCards } from '../components/task'

export default function mainContent() {
  // const sectionTitle = document.getElementById('section__title')
  const openFormBtn = document.getElementById('open-form__btn')
  const sectionTitle = document.getElementById('section__title')
  const taskContainer = document.getElementById('task-list__container')
  const newForm = form()

  const loadTasks = (section) => {
    sectionTitle.innerText = section
    displayTaskCards(taskContainer)
    // const taskCards = displayTaskCards()
    // console.log(taskContainer, taskCards())
    // taskContainer.appendChild(taskCards)
  }

  const contentAPI = {
    loadTasks,
  }

  openFormBtn.addEventListener('click', newForm.toggleFormView)
  return contentAPI
}
