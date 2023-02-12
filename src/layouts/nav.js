import { displayTasks } from '../components/tasks'

export default function navbar() {
  const navLinks = document.querySelectorAll('nav a')

  const navigate = (e) => {
    const { page } = e.target.dataset.section
    displayTasks(page)
  }
  navLinks.forEach((link) => {
    link.addEventListener('click', navigate)
  })
}
