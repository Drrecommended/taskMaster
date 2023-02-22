import { tasks } from '../components/tasks'

export default function mainContent() {
  const content = document.getElementById('content')
  console.log(content)
  if (tasks.length === 0) console.log('empty')
}


