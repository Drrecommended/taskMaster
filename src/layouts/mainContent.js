import { tasks } from '../components/tasks'

export default function mainContent() {
  const content = document.getElementById('content')
  const addTaskBtn = document.getElementById('add-task-btn')
  console.log(addTaskBtn)
  if (tasks.length === 0) console.log('empty')

  addTaskBtn.addEventListener('click', console.log('seeet'))
}
