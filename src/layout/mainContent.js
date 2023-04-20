import Form from '../components/form'
import { tasks, createCard } from '../components/task'

export default class MainContent {
  constructor() {
    this.openFormBtn = document.getElementById('open-form__btn')
    this.sectionTitle = document.getElementById('section__title')
    this.taskContainer = document.getElementById('task-list__container')
    this.form = new Form(this.taskContainer)
  }

  // loadHeading() {
  //   this.sectionTitle =
  // }

  loadTasks() {
    const taskCards = tasks.map((task) => createCard(task, this.form))
    this.taskContainer.innerHTML = ''
    taskCards.forEach((card) => this.taskContainer.appendChild(card))
  }

  openTaskForm() {
    this.form.toggleFormView()
  }

  addEventListeners() {
    this.openFormBtn.addEventListener('click', this.openTaskForm.bind(this))
  }

  init() {
    this.loadTasks()
    this.addEventListeners()
  }
}
