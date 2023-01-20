import { addTask } from './tasks'

export default function eventHandlers() {
  /* navigation handler */
  const nav = document.getElementById('nav')
  const navBtn = document.getElementById('nav-btn')
  const closeNavBtn = document.getElementById('close-nav-btn')

  const addProjectBtn = document.getElementById('add-project-btn')
  navBtn.addEventListener('click', () => {
    nav.style.width = '250px'
    nav.style.paddingLeft = '20px'
  })
  closeNavBtn.addEventListener('click', () => {
    nav.style.width = '0px'
    nav.style.paddingLeft = '0px'
  })
  /* add project */
  addProjectBtn.addEventListener('click', () => {
    console.log('hello')
  })


  /* form handler */
  const taskForm = document.getElementById('task-form')
  taskForm.addEventListener('submit', addTask)
}
