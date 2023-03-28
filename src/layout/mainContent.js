import form from '../components/form'
import { tasks } from '../components/task'

export default function mainContent() {
  // const sectionTitle = document.getElementById('section__title')
  const openFormBtn = document.getElementById('open-form__btn')
  const sectionTitle = document.getElementById('section__title')
  const newForm = form()

  const showTasks = () => {
    sectionTitle.innerText = 'this works'
    console.log('allTodaysTasks')
    tasks.forEach((task) => console.log(`${task.name} + is the name`))
  }

  openFormBtn.addEventListener('click', newForm.toggleFormView)
  return {
    showTasks,
  }
}
