import form from '../components/form'
import { tasks } from '../components/task'

function renderTo(container) {
  return function createTaskCard(task) {
    const taskCard = document.createElement('div')
    taskCard.classList.add('card')
    const taskTitle = document.createElement('h3')
    taskTitle.classList.add('task__title')
    const taskDescription = document.createElement('p')
    const taskDate = document.createElement('p')
    const deleteBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    editBtn.innerText = 'edit'
    deleteBtn.innerText = 'delete'
    taskTitle.innerText = task.name
    taskDescription.innerText = task.description
    taskDate.innerText = task.date
    taskCard.append(taskTitle, taskDescription, taskDate, editBtn, deleteBtn)
    container.appendChild(taskCard)
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
