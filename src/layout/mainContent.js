import Form from '../components/form'
import { tasks, createCard } from '../components/task'

export default class MainContent {
  constructor() {
    this.openFormBtn = document.getElementById('open-form__btn')
    this.sectionTitle = document.getElementById('section__title')
    this.taskContainer = document.getElementById('task-list__container')
    this.form = new Form()
  }

  // loadHeading() {
  //   this.sectionTitle =
  // }

  loadTasks(section) {
    console.log(section)
    const taskCards = tasks.map(createCard)
    this.taskContainer.innerHTML = ''
    taskCards.forEach((card) => this.taskContainer.appendChild(card))
  }

  openTaskForm() {
    console.log(this)
    this.form.toggleFormView(this.taskContainer)
  }

  addEventListeners() {
    this.openFormBtn.addEventListener('click', this.openTaskForm.bind(this))
  }

  init() {
    this.loadTasks()
    this.addEventListeners()
  }
}
