// export default function form(container) {
//   const taskName = document.getElementById('task-name')
//   const taskDate = document.getElementById('task-date')
//   const taskPriorityRadios = document.getElementsByName('task-priority')
//   const taskDescription = document.getElementById('task-description')
//   const closeForm = document.getElementById('close-form__btn')
//   const thisForm = document.getElementById('task-form')
//   console.log(container)
//   let radioValue

//   const getRadioValue = (e) => {
//     radioValue = e.target.value
//     return radioValue
//   }

//   const toggleFormView = () => {
//     const taskContainer = container
//     if (thisForm.style.display === 'block') {
//       thisForm.style.display = 'none'
//       taskContainer.style.display = 'block'
//     } else {
//       thisForm.style.display = 'block'
//       taskContainer.style.display = 'none'
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const name = taskName.value.trim()
//     const date = taskDate.value.trim()
//     const priority = radioValue
//     const description = taskDescription.value.trim()
//     console.log(priority, radioValue)
//     createTask(name, date, priority, description, tasks, container)
//     toggleFormView()
//   }

//   thisForm.addEventListener('submit', handleSubmit)
//   closeForm.addEventListener('click', toggleFormView)
//   taskPriorityRadios.forEach((radio) =>
//     radio.addEventListener('click', getRadioValue)
//   )
//   return {
//     toggleFormView,
//   }
// }

export default class Form {
  constructor(container) {
    this.taskName = document.getElementById('task-name')
    this.taskDate = document.getElementById('task-date')
    this.taskPriorityRadios = document.getElementsByName('task-priority')
    this.taskDescription = document.getElementById('task-description')
    this.closeForm = document.getElementById('close-form__btn')
    this.container = container
    this.form = document.getElementById('task-form')
    this.radio = null
  }

  // add function to clear form

  set formTaskData(task) {
    const currentDate = new Date(task.date)
    const dateString = currentDate.toISOString().slice(0, 10)
    this.taskName.value = task.name
    this.taskDate.value = dateString
    this.taskPriorityRadios.forEach(radio => {
      if(radio.value === task.priority) {
        this.radio = radio
        this.radio.checked = true
      }
    })
    this.taskDescription.value = task.description
  }

  handleSubmit(e) {
    e.preventDefault()
    const name = this.taskName.value.trim()
    const date = this.taskDate.value.trim()
    const priority = this.radioValue
    const description = this.taskDescription.value.trim()
    console.log(priority, radioValue)
    createTask(name, date, priority, description, tasks, container)
    toggleFormView()
  }
 



  toggleFormView = (task) => {
    const taskContainer = this.container
    if (this.form.style.display === 'block') {
      this.form.reset()
      this.form.style.display = 'none'
      taskContainer.style.display = 'block'
    } else {
      this.form.style.display = 'block'
      taskContainer.style.display = 'none'
    }
    if (task) {
      this.formTaskData = task
    }
  }
}
