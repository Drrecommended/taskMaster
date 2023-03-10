const nav = document.getElementById('nav')

export default function navbar() {
  const navLinks = document.querySelectorAll('nav a')
  const closeNavBtn = document.getElementById('close-nav_btn')

  const navigate = () => {}

  const closeNav = () => {
    nav.classList.remove('open')
  }

  closeNavBtn.addEventListener('click', closeNav)

  navLinks.forEach((link) => {
    link.addEventListener('click', navigate)
  })
}

const openNav = () => {
  console.log('testing')
  nav.classList.add('open')
}

export { openNav }
