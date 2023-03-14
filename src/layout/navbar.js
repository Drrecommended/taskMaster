const nav = document.getElementById('nav')

export default function navbar() {
  const navLinks = document.querySelectorAll('nav a')
  const closeNavBtn = document.getElementById('close-nav_btn')
  const projectControlsBtn = document.getElementById('project-controls_btn')
  const closeProjectControlsBtn = document.getElementById('cancel-project_btn')
  const projectControls = document.getElementById('project-controls')
  const navigate = () => {}

  const closeNav = () => {
    nav.classList.remove('open')
  }

  const toggleProjectControlsView = () => {
    if (projectControls.style.display === 'block') {
      projectControls.style.display = 'none'
    } else {
      projectControls.style.display = 'block'
    }
  }

  closeNavBtn.addEventListener('click', closeNav)

  navLinks.forEach((link) => {
    link.addEventListener('click', navigate)
  })

  projectControlsBtn.addEventListener('click', toggleProjectControlsView)
  closeProjectControlsBtn.addEventListener('click', toggleProjectControlsView)
}

const openNav = () => {
  nav.classList.add('open')
}

export { openNav }
