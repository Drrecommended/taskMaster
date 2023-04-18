import Project, { projects } from '../components/projects'
import mainContent from './mainContent'

// const nav = document.getElementById('nav')

// function closeNav() {
//   nav.classList.remove('open')
// }

// function openNav() {
//   nav.classList.add('open')
// }

// // LETS REFORMAT THIS TO RETURN A OBJECT THAT WE CAN PUT ALL THE METHODS IN THAT WAY ^^ THAT STUFF ISN"T OUT IN THE OPEN

// export default function navbar() {
//   const navLinks = document.querySelectorAll('nav a')
//   const closeNavBtn = document.getElementById('close-nav_btn')
//   const projectControlsBtn = document.getElementById('project-controls_btn')
//   const submitNewProjectBtn = document.getElementById('add-project_btn')
//   const closeProjectControlsBtn = document.getElementById('cancel-project_btn')
//   const projectControls = document.getElementById('project-controls')
//   const projectInput = document.getElementById('project_input')
//   const projectPages = document.getElementById('project-pages')

//   const navigate = (e) => {
//     const newContent = mainContent()
//     const { section } = e.target.dataset
//     newContent.loadTasks(section)
//     // newContent.showTasks(section)
//     closeNav()
//   }

//   const addEventToLink = (link) => {
//     link.addEventListener('click', navigate)
//   }

//   const toggleProjectControlsView = () => {
//     if (projectControls.style.display === 'block') {
//       projectControls.style.display = 'none'
//     } else {
//       projectControls.style.display = 'block'
//     }
//   }

//   const createProjectLink = (project) => {
//     const li = document.createElement('li')
//     const link = document.createElement('a')
//     link.innerText = project.name
//     link.href = `# + ${project.name}`
//     link.dataset.section = project.name
//     addEventToLink(link)
//     li.appendChild(link)
//     projectPages.appendChild(li)
//   }

//   const appendProjectsToNav = () => {
//     projects.forEach((project) => {
//       createProjectLink(project)
//     })
//   }

//   const addProject = () => {
//     const projectName = projectInput.value
//     if (projectName.trim() === '') return
//     const newProject = new Project(projectName)
//     projects.push(newProject)
//     createProjectLink(newProject)
//     projectInput.value = ''
//     toggleProjectControlsView()
//   }

//   appendProjectsToNav()

//   closeNavBtn.addEventListener('click', closeNav)

//   navLinks.forEach((link) => {
//     addEventToLink(link)
//   })

//   projectControlsBtn.addEventListener('click', toggleProjectControlsView)
//   submitNewProjectBtn.addEventListener('click', addProject)
//   closeProjectControlsBtn.addEventListener('click', toggleProjectControlsView)
// }

// export { openNav }

export default class Navbar {
  constructor() {
    this.nav = document.getElementById('nav')
    this.closeNavBtn = document.getElementById('close-nav_btn')
    this.projectControlsBtn = document.getElementById('project-controls_btn')
    this.submitNewProjectBtn = document.getElementById('add-project_btn')
    this.closeProjectControlsBtn = document.getElementById('cancel-project_btn')
    this.projectControls = document.getElementById('project-controls')
    this.projectInput = document.getElementById('project_input')
    this.projectPages = document.getElementById('project-pages')
  }

  openNav() {
    this.nav.classList.add('open')
  }

  closeNav() {
    this.nav.classList.remove('open')
  }

  navigate(e) {
    console.log(e.target, this)
  }

  createProjectLink(project) {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.innerText = project.name
    link.href = `# + ${project.name}`
    link.dataset.section = project.name
    this.addEventToLink(link)
    li.appendChild(link)
    this.projectPages.appendChild(li)
  }

  addEventToLink(link) {
    link.addEventListener('click', this.navigate)
  }

  loadProjects() {
    projects.forEach(this.createProjectLink.bind(this))
  }

  toggleProjectControlsView = () => {
    if (this.projectControls.style.display === 'block') {
      this.projectControls.style.display = 'none'
    } else {
      this.projectControls.style.display = 'block'
    }
  }

  init() {
    console.log(this.nav)
    this.loadProjects()
    this.closeNavBtn.addEventListener('click', this.closeNav.bind(this))
    this.projectControlsBtn.addEventListener(
      'click',
      this.toggleProjectControlsView
    )
    this.closeProjectControlsBtn.addEventListener(
      'click',
      this.toggleProjectControlsView
    )
  }
}
