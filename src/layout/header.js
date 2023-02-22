import { toggleNav } from "./navbar"

const openNavBtn = document.getElementById('open-nav_btn')

export default function header() {
  openNavBtn.addEventListener('click', () => toggleNav())
}
