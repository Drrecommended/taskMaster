import { openNav } from './navbar'

export default function header() {
  const openNavBtn = document.getElementById('open-nav_btn')
  openNavBtn.addEventListener('click', openNav)
}
