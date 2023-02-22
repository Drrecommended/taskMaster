import {
  displayCompletedTasks,
  displayTasks,
  displayTodaysTasks,
  displayWeeksTasks,
} from '../components/tasks'

export default function navbar() {
  const navLinks = document.querySelectorAll('nav a')

  const navigate = (e) => {
    const page = e.target.dataset.section
    console.log(page)
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
