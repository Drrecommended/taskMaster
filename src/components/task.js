import Project from './projects'

const tasks = [
  {
    name: '43',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore vitae animi. Soluta, rem quae aut ab veritatis officia consequuntur quidem perspiciatis ad laboriosam laudantium? Assumenda fuga consequatur eveniet facilis.',
    priority: 'high',
    date: '2023-03-01',
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

// function createTaskCard(task, container) {
//   const taskCard = document.createElement('div')
//   taskCard.classList.add('card__grid')
//   const taskTitle = document.createElement('h3')
//   taskTitle.classList.add('task__title')
//   const taskDescription = document.createElement('p')
//   const taskDate = document.createElement('p')
//   const deleteBtn = document.createElement('button')
//   const editBtn = document.createElement('button')
//   editBtn.innerText = 'edit'
//   deleteBtn.innerText = 'delete'
//   taskTitle.innerText = task.name
//   taskDescription.innerText = task.description
//   taskDate.innerText = task.date
//   taskCard.append(taskTitle, taskDescription, taskDate, editBtn, deleteBtn)
//   container.appendChild(taskCard)
// }

export function createTask(name, date, priority, description) {
  const task = new Task(name, date, priority, description)
  tasks.push(task)
  console.log(task)
}

export { tasks }
