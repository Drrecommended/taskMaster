import form from '../components/form'
import { tasks, renderTaskto } from '../components/task'



export default function mainContent() {
  // const sectionTitle = document.getElementById('section__title')
  const openFormBtn = document.getElementById('open-form__btn')
  const sectionTitle = document.getElementById('section__title')
  const taskContainer = document.getElementById('task-list__container')
  const renderTask = renderTaskto(taskContainer, sectionTitle)
  const thisForm = form(taskContainer)
  // const loadTasks = (section) => {
  //   sectionTitle.innerText = section || 'All Tasks'
  //   displayTaskCards(taskContainer)
  //   // const taskCards = displayTaskCards()
  //   // console.log(taskContainer, taskCards())
  //   // taskContainer.appendChild(taskCards)
  // }

  tasks.forEach(renderTask)


  openFormBtn.addEventListener('click', thisForm.toggleFormView)

}
