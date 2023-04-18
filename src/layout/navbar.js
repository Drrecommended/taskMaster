import Project, { projects } from '../components/projects'
import mainContent from './mainContent'

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

  addProject() {
    console.log(this.projectInput)
    const projectName = this.projectInput.value
    console.log(projectName)
    if (projectName.trim() === '') return
    const newProject = new Project(projectName)
    projects.push(newProject)
    this.createProjectLink(newProject)
    this.projectInput.value = ''
    this.toggleProjectControlsView()
  }

  loadProjects() {
    projects.forEach(this.createProjectLink.bind(this))
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

  toggleProjectControlsView = () => {
    if (this.projectControls.style.display === 'block') {
      this.projectControls.style.display = 'none'
    } else {
      this.projectControls.style.display = 'block'
    }
  }

  addEventListeners() {
    this.closeNavBtn.addEventListener('click', this.closeNav.bind(this))
    this.projectControlsBtn.addEventListener(
      'click',
      this.toggleProjectControlsView
    )
    this.closeProjectControlsBtn.addEventListener(
      'click',
      this.toggleProjectControlsView
    )
    this.submitNewProjectBtn.addEventListener(
      'click',
      this.addProject.bind(this)
    )
  }

  init() {
    this.loadProjects()
    this.addEventListeners()
  }
}
