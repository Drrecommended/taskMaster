import Project, { projects } from '../components/projects'

const nav = document.getElementById('nav')


export default function navbar() {
  const navLinks = document.querySelectorAll('nav a')
  const closeNavBtn = document.getElementById('close-nav_btn')
  const projectControlsBtn = document.getElementById('project-controls_btn')
  const submitNewProjectBtn = document.getElementById('add-project_btn')
  const closeProjectControlsBtn = document.getElementById('cancel-project_btn')
  const projectControls = document.getElementById('project-controls')
  const projectInput = document.getElementById('project_input')
  const projectPages = document.getElementById('project-pages')

  const navigate = () => {}

  const toggleProjectControlsView = () => {
    if (projectControls.style.display === 'block') {
      projectControls.style.display = 'none'
    } else {
      projectControls.style.display = 'block'
    }
  }

  const addProjectToNav = () => {
    const projectName = projectInput.value
    const newProject = new Project(projectName)
    newProject.sayName()
    projects.push(newProject)
    console.log(projects)
    projectInput.value = ''
    toggleProjectControlsView()
  }

  const closeNav = () => {
    nav.classList.remove('open')
  }

  const projectLinks = projects.forEach(project => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.innerText = project.name
    li.appendChild(link)
    console.log(projectPages)
    projectPages.appendChild(li)
  })

  closeNavBtn.addEventListener('click', closeNav)

  navLinks.forEach((link) => {
    link.addEventListener('click', navigate)
  })

  projectControlsBtn.addEventListener('click', toggleProjectControlsView)
  submitNewProjectBtn.addEventListener('click', addProjectToNav)
  closeProjectControlsBtn.addEventListener('click', toggleProjectControlsView)
}

const openNav = () => {
  nav.classList.add('open')
}

export { openNav }
