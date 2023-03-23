export default function mainContent() {
  const sectionTitle = document.getElementById('section__title')
  const form = document.getElementById('task-form')
  const openFormBtn = document.getElementById('open-form__btn')

  const toggleFormView = () => {
    if (form.style.display === 'block') {
      form.style.display = 'none'
    } else {
      form.style.display = 'block'
    }
  }

  openFormBtn.addEventListener('click', toggleFormView)
}
