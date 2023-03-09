export default function navbar() {
  const nav = document.getElementById('nav')

  const navLinks = document.querySelectorAll('nav a')
  const closeNavBtn = document.getElementById('close-nav_btn')

  const navigate = () => {
    
  }

  

  navLinks.forEach((link) => {
    link.addEventListener('click', navigate)
  })
}

function openNav() {
  console.log('test')
}

export { openNav }
