


export default function form() {
  const taskName = document.getElementById('task-name')
  const taskDescription = document.getElementById('task-description')
  const taskDate = document.getElementById('task-date')
  const taskPriority = document.getElementById('priority')
  const form = document.getElementById('task-form')


  console.log('test 3 ')
  return {
    toggleFormView() {
      console.log('test 2')
      if (form.style.display === 'block') {
        form.style.display = 'none'
      } else {
        form.style.display = 'block'
      }
    },
  }
}
