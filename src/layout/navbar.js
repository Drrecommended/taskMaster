import {
  displayCompletedTasks,
  displayTasks,
  displayTodaysTasks,
  displayWeeksTasks,
} from '../components/tasks'

const nav = document.getElementById('nav')
const closeNavBtn = document.getElementById('close-nav_btn')

export default function navbar() {
  const navLinks = document.querySelectorAll('nav a')

  const navigate = (e) => {
    const page = e.target.dataset.section
    switch (page) {
      case 'tasks':
        displayTasks()
        break
      case 'todays':
        displayTodaysTasks()
        break
      case 'weeks':
        displayWeeksTasks()
        break
      case 'completed':
        displayCompletedTasks()
        break
      default:
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', navigate)
  })
}

export function toggleNav() {
  console.log('testing')
  nav.classList.toggle('open')
}

closeNavBtn.addEventListener('click', () => toggleNav())
