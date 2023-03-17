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

  const createProjectLink = (project) => {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.innerText = project.name
    link.href = "#"
    console.log(link, project)
    li.appendChild(link)
    projectPages.appendChild(li)
  }

  const appendProjectsToNav = () => {
    projects.forEach(project => {
      createProjectLink(project)
    })
  }

  const addProject = () => {
    const projectName = projectInput.value
    if(projectName.trim() === '') return
    const newProject = new Project(projectName)
    projects.push(newProject)
    createProjectLink(newProject)
    projectInput.value = ''
    toggleProjectControlsView()
  }

  appendProjectsToNav()

  const closeNav = () => {
    nav.classList.remove('open')
  }

  closeNavBtn.addEventListener('click', closeNav)

  navLinks.forEach((link) => {
    link.addEventListener('click', navigate)
  })

  projectControlsBtn.addEventListener('click', toggleProjectControlsView)
  submitNewProjectBtn.addEventListener('click', addProject)
  closeProjectControlsBtn.addEventListener('click', toggleProjectControlsView)
}

const openNav = () => {
  nav.classList.add('open')
}

export { openNav }
