import form from '../components/form'
import { tasks } from '../components/task'

function renderTo(container) {
  return function createTaskCard(task) {
    const card = document.createElement('div')
    card.classList.add('card')
    const title = document.createElement('h3')
    title.classList.add('task__title')
    title.innerText = task.name
    const date = document.createElement('p')
    date.classList.add('task__date')
    date.innerText = task.date
    const priorty = document.createElement('p')
    priorty.classList.add('task__priority')
    priorty.innerText = task.priority
    const description = document.createElement('p')
    description.classList.add('task__description')
    description.innerText = task.description
    const btnContainer = document.createElement('div')
    btnContainer.classList.add('btn__container')
    const editBtn = document.createElement('button')
    editBtn.innerText = 'edit'
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'delete'
    btnContainer.append(editBtn, deleteBtn)
    card.append(title, date, priorty, description, btnContainer)
    container.appendChild(card)
  }
}

export default function mainContent() {
  // const sectionTitle = document.getElementById('section__title')
  const openFormBtn = document.getElementById('open-form__btn')
  const sectionTitle = document.getElementById('section__title')
  const taskContainer = document.getElementById('task-list__container')
  const renderTask = renderTo(taskContainer, sectionTitle)
  const thisForm = form()
  console.log('test')
  // const loadTasks = (section) => {
  //   sectionTitle.innerText = section || 'All Tasks'
  //   displayTaskCards(taskContainer)
  //   // const taskCards = displayTaskCards()
  //   // console.log(taskContainer, taskCards())
  //   // taskContainer.appendChild(taskCards)
  // }

  tasks.forEach(renderTask)

  const contentAPI = {
    renderTask,
  }

  openFormBtn.addEventListener('click', thisForm.toggleFormView)
  return contentAPI
}
