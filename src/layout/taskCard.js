export default class TaskCard {
  constructor(task) {
    this.task = task
    this.form = null
  }

  addForm(form) {
    this.form = form
  }

  render() {
    const card = document.createElement('div')
    card.classList.add('card')
    const title = document.createElement('h3')
    title.classList.add('task__title')
    title.innerText = this.task.name
    const date = document.createElement('p')
    date.classList.add('task__date')
    date.innerText = this.task.date
    const priorty = document.createElement('p')
    priorty.classList.add('task__priority')
    priorty.innerText = this.task.priority
    const description = document.createElement('p')
    description.classList.add('task__description')
    description.innerText = this.task.description
    const btnContainer = document.createElement('div')
    btnContainer.classList.add('btn__container')
    const editBtn = document.createElement('button')
    editBtn.innerText = '\u{270D}'
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = '\u{2718}'
    const completeBtn = document.createElement('button')
    completeBtn.innerText = '\u{2714}'
    completeBtn.addEventListener('click', this.task.markComplete.bind(this))
    editBtn.addEventListener('click', () => {
      this.form.toggleFormView(this.task)
    })
    deleteBtn.addEventListener('click', () => {
      console.log('getting there')
    })
    btnContainer.append(completeBtn, editBtn, deleteBtn)
    card.append(title, date, priorty, description, btnContainer)
    return card
  }
}
