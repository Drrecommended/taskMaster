const nav = () => {
  //NAV CONTROLS TO OPEN AND CLOSE
  const nav = document.getElementById('nav')
  const navBtn = document.getElementById('nav-btn')
  const closeNavBtn = document.getElementById('close-nav-btn')
  navBtn.addEventListener('click', () => (nav.style.width = '250px'))
  closeNavBtn.addEventListener('click', () => (nav.style.width = '0px'))


}

export default nav
