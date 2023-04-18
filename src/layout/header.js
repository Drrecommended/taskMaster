import Navbar from "./navbar"

export default function header() {
  const openNavBtn = document.getElementById('open-nav_btn')
  const navbar = new Navbar()
  openNavBtn.addEventListener('click', navbar.openNav.bind(navbar))
}
