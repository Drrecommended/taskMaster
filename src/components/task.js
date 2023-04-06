import Project from './projects'


const tasks = [
  {
    name: '43',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore vitae animi. Soluta, rem quae aut ab veritatis officia consequuntur quidem perspiciatis ad laboriosam laudantium? Assumenda fuga consequatur eveniet facilis.',
    priority: 'high',
    date: '08/23/89',
    complete: false,
  },
]

class Task extends Project {
  constructor(name, date, priority, description) {
    super()
    this.name = name
    this.date = date
    this.priorty = priority
    this.description = description
    this.complete = false
  }

  markComplete() {
    console.log(this.complete)
  }
}



export function renderTaskto(container) {
  console.log(container)
  return function createTaskCard(task) {
    const card = document.createElement('div')
    card.classList.add('card')
    const title = document.createElement('h3')
    title.classList.add('task__title')
    title.innerText = task.name
    const date = document.createElement('p')
    date.classList.add('task__date')
    date.innerText = task.date
    const priorty = document.createElement('p')
    priorty.classList.add('task__priority')
    priorty.innerText = task.priority
    const description = document.createElement('p')
    description.classList.add('task__description')
    description.innerText = task.description
    const btnContainer = document.createElement('div')
    btnContainer.classList.add('btn__container')
    const editBtn = document.createElement('button')
    editBtn.innerText = '\u{270D}'
    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = '\u{2718}'
    const completeBtn = document.createElement('button')
    completeBtn.innerText = '\u{2714}'
    btnContainer.append(completeBtn, editBtn, deleteBtn)
    card.append(title, date, priorty, description, btnContainer)
    container.appendChild(card)
  }
}

export function createTask(name, date, priority, description, container) {
  const task = new Task(name, date, priority, description)
  tasks.push(task)
  const renderTask = renderTaskto(container)
  renderTask(task)
}

export { tasks }
