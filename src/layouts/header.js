import toggleForm from './mainContent'

export default function header() {
  console.log('testing')
  const openTaskFormBtn = document.getElementById('open-task-form-btn')
  openTaskFormBtn.addEventListener('click', () => toggleForm())
}
