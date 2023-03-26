import form from "../components/form"

export default function mainContent() {
  // const sectionTitle = document.getElementById('section__title')
  const openFormBtn = document.getElementById('open-form__btn')
  const sectionTitle = document.getElementById('section__title')
  const newForm = form()

 
  openFormBtn.addEventListener('click', newForm.toggleFormView)
  return {
    showTasks() {
      sectionTitle.innerText = 'this works'
      console.log("allTodaysTasks")
    }, 
  }
}
