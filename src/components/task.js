const tasks = [
  {
    name: '43',
    description: '42',
    date: '2023-03-01',
    complete: false,
  },
]

class Task {
  constructor(name, description, date) {
    this.name = name
    this.description = description
    this.date = date
    this.complete = false
  }

  markComplete() {
    console.log(this.complete)
  }
}

function createTaskCards() {

}

export function createTask(name, description, date) {
  const task = new Task(name, description, date)
  tasks.push(task)
}

export function displayTaskCards(container) {
  console.log(container)
  return tasks.forEach((task) => {
    const taskCard = document.createElement('div')
    taskCard.innerText = task.name
    container.appendChild(taskCard)
  })
}

export { tasks }
