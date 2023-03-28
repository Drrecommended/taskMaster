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

export default function createTask(name, description, date) {
  const task = new Task(name, description, date)
  tasks.push(task)
  console.log(tasks)
}

export { tasks }
