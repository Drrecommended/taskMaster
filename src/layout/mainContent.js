import form from '../components/form'
import { tasks, createCard } from '../components/task'

export default class MainContent {
  constructor() {
    this.openFormBtn = document.getElementById('open-form__btn')
    this.sectionTitle = document.getElementById('section__title')
    this.taskContainer = document.getElementById('task-list__container')
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
  }

  addEventListeners() {
    console.log(this)
  }

  init() {
    this.loadTasks()
    this.addEventListeners()
  }
}
