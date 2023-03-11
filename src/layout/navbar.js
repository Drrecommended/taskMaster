const nav = document.getElementById('nav')

export default function navbar() {
  const navLinks = document.querySelectorAll('nav a')
  const closeNavBtn = document.getElementById('close-nav_btn')
  const projectControlsBtn = document.getElementById('project-controls_btn')
  const projectControls = document.getElementById('project-controls')
  const navigate = () => {}

  const closeNav = () => {
    nav.classList.remove('open')
  }

  const toggleProjectControlsView = () => {
    console.log(projectControls.style.display)
    if (projectControls === 'none') {
      projectControls.style.display = 'block'
    } else {
      projectControls.style.display = 'none'
    }
  }

  closeNavBtn.addEventListener('click', closeNav)

  navLinks.forEach((link) => {
    link.addEventListener('click', navigate)
  })

  projectControlsBtn.addEventListener('click', toggleProjectControlsView)
}

const openNav = () => {
  nav.classList.add('open')
}

export { openNav }
