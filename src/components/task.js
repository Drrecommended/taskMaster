import Project from './projects'
import TaskCard from '../layout/taskCard'
import Form from './form'

const tasks = [
  {
    name: '43',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolore vitae animi. Soluta, rem quae aut ab veritatis officia consequuntur quidem perspiciatis ad laboriosam laudantium? Assumenda fuga consequatur eveniet facilis.',
    priority: 'high',
    date: '08/23/89',
    complete: false,
    markComplete() {
      console.log(this.complete, this.name)
      this.complete = true
    },
    editTask(form) {
      console.log(this)

      form.toggleFormView()
    },
  },
]

class Task extends Project {
  constructor(name, date, priority, description) {
    super()
    this.name = name
    this.date = date
    this.priority = priority
    this.description = description
    this.complete = false
  }

  markComplete() {
    console.log(this)
    this.complete = true
    console.log(this.complete)
  }

  editTask(form) {
    console.log(this)

    form.toggleFormView()
  }
}

export function createCard(task, form) {
  const card = new TaskCard(task)
  card.addForm(form)
  return card.render()
}

// function deleteTask(task) {
//   console.log(task)
//   const index = tasks.findIndex((x) => x.name === task.name)
//   if (index > -1) {
//     tasks.splice(index, 1)
//   }
//   loadTasks()
// }

// export function taskLoader(container, title, section = 'tasks') {
//   const thisContainer = container
//   console.log('test', thisContainer)
//   return function loadCards () {
//     thisContainer.innerHTML = ''
//     taskCards.forEach((card) => thisContainer.append(card))
//   }
// }

export function createTask(name, date, priority, description, taskList) {
  console.log(priority)
  const task = new Task(name, date, priority, description)
  taskList.push(task)
  loadTasks()
}

export { tasks }
