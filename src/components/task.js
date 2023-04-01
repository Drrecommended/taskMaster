import Project from "./projects"

const tasks = [
  {
    name: '43',
    description: '42',
    date: '2023-03-01',
    complete: false,
  },
]

class Task extends Project {
  constructor(name, description, date) {
    super()
    this.name = name
    this.description = description
    this.date = date
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

export function createTask(name, description, date) {
  const task = new Task(name, description, date)
  tasks.push(task)
}


export { tasks }
