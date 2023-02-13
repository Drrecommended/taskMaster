import { displayTodaysTasks } from '../components/tasks'

export default function navbar() {
  const navLinks = document.querySelectorAll('nav a')

  const navigate = (e) => {
    const page = e.target.dataset.section

    switch (page) {
      case 'todays':
        displayTodaysTasks()
        break
      default:
    }
  }
  navLinks.forEach((link) => {
    link.addEventListener('click', navigate)
  })
}
