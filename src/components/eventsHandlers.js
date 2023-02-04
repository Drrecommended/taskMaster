import { addTask } from './tasks'
import { changeRadioButtonColor, userInterface } from './UI'


export default function eventHandlers() {
  const nav = document.getElementById('nav')
  const openNavBtn = document.getElementById('nav-btn')
  const closeNavBtn = document.getElementById('close-nav-btn')
  const addProjectBtn = document.getElementById('add-project-btn')
  const formRadios = document.querySelectorAll('input[type="radio"]')
  const taskForm = document.getElementById('task-form')

  openNavBtn.addEventListener('click', () => {
    nav.style.width = '250px'
    nav.style.paddingLeft = '20px'
    console.log(userInterface)
    userInterface.openNav()
  })
  closeNavBtn.addEventListener('click', () => {
    nav.style.width = '0px'
    nav.style.paddingLeft = '0px'
  })
  /* add project */
  addProjectBtn.addEventListener('click', () => {
    const projectElem = document.createElement('div')
    projectElem.addClass('project-elem')
    const editNameBtn = document.createElement('button')
    editNameBtn.innerText('test')
    const trashProjectBtn = document.createElement('button')
    trashProjectBtn.innerText('test')
  })

  /* form handler */
  taskForm.addEventListener('submit', addTask)

  /* form radios */
  formRadios.forEach((radio) => {
    radio.addEventListener('click', () => {
      changeRadioButtonColor(radio, formRadios)
    })
    console.log(radio.checked)
  })
}
