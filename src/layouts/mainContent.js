import { tasks } from '../components/tasks'

export default function mainContent() {
  const content = document.getElementById('content')

  if (tasks.length === 0) console.log('empty')
}

export function toggleForm() {
  console.log('working')
  const form = this
  form.classList.toggle('open')
}
