

export default function eventHandlers() {
  /* navigation handler */
  const nav = document.getElementById('nav')
  const navBtn = document.getElementById('nav-btn')
  const closeNavBtn = document.getElementById('close-nav-btn')
  navBtn.addEventListener('click', () => {
    nav.style.width = '250px'
  })
  closeNavBtn.addEventListener('click', () => {
    nav.style.width = '0px'
  })

  /* form handler */
  const taskForm = document.getElementById('task-form')
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
  })
}
