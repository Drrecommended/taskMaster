import Project, { projects } from '../components/projects'

const nav = document.getElementById('nav')

function closeNav() {
  nav.classList.remove('open')
}

function openNav() {
  nav.classList.add('open')
}

export default function navbar() {
  const navLinks = document.querySelectorAll('nav a')
  const closeNavBtn = document.getElementById('close-nav_btn')
  const projectControlsBtn = document.getElementById('project-controls_btn')
  const submitNewProjectBtn = document.getElementById('add-project_btn')
  const closeProjectControlsBtn = document.getElementById('cancel-project_btn')
  const projectControls = document.getElementById('project-controls')
  const projectInput = document.getElementById('project_input')
  const projectPages = document.getElementById('project-pages')

  const navigate = (e) => {
    const { section } = e.target.dataset
    console.log(section)
    
    closeNav()
  }

  const addEventToLink = (link) => {
    link.addEventListener('click', navigate)
  }

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
    link.href = `# + ${project.name}`
    link.dataset.section = project.name
    addEventToLink(link)
    li.appendChild(link)
    projectPages.appendChild(li)
  }

  const appendProjectsToNav = () => {
    projects.forEach((project) => {
      createProjectLink(project)
    })
  }

  const addProject = () => {
    const projectName = projectInput.value
    if (projectName.trim() === '') return
    const newProject = new Project(projectName)
    projects.push(newProject)
    createProjectLink(newProject)
    projectInput.value = ''
    toggleProjectControlsView()
  }

  appendProjectsToNav()

  closeNavBtn.addEventListener('click', closeNav)

  navLinks.forEach((link) => {
    addEventToLink(link)
  })

  projectControlsBtn.addEventListener('click', toggleProjectControlsView)
  submitNewProjectBtn.addEventListener('click', addProject)
  closeProjectControlsBtn.addEventListener('click', toggleProjectControlsView)
}

export { openNav }
