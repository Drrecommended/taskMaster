import { addTask } from './tasks'

export default function eventHandlers() {
  /* navigation handler */
  const nav = document.getElementById('nav')
  const navBtn = document.getElementById('nav-btn')
  const closeNavBtn = document.getElementById('close-nav-btn')
  navBtn.addEventListener('click', () => {
    nav.style.width = '250px'
    nav.style.paddingLeft = '20px'
  })
  closeNavBtn.addEventListener('click', () => {
    nav.style.width = '0px'
    nav.style.paddingLeft = '0px'
  })

  /* form handler */
  const taskForm = document.getElementById('task-form')
  taskForm.addEventListener('submit', addTask)
}
