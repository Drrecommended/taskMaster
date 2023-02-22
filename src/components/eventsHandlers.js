import { addTask } from './tasks'
import userInterface from './UI'

export default function eventHandlers() {
  const openFormBtn = document.getElementById('open-form-btn')
  const closeFormBtn = document.getElementById('close-form-btn')
  const addProjectBtn = document.getElementById('add-project-btn')
  const formRadios = document.querySelectorAll('input[type="radio"]')
  const taskForm = document.getElementById('task-form')
  /* add project */
  addProjectBtn.addEventListener('click', () => {
    const projectElem = document.createElement('div')
    projectElem.addClass('project-elem')
    const editNameBtn = document.createElement('button')
    editNameBtn.innerText('test')
    const trashProjectBtn = document.createElement('button')
    trashProjectBtn.innerText('test')
  })

  /* form handler maybe bind isnt needed */
  openFormBtn.addEventListener('click', userInterface.toggleForm.bind(taskForm))
  closeFormBtn.addEventListener('click', userInterface.toggleForm.bind(taskForm))
  taskForm.addEventListener('submit', addTask)

  /* form radios */
  formRadios.forEach((radio) => {
    radio.addEventListener('click', () =>
      userInterface.changeRadioButtonColor(radio, formRadios)
    )
  })
}
