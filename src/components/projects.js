const projects = [
  { name: 'hey4' },
  { name: 'hey4' },
  { name: 'hey4' },
  { name: 'hey4' },
]

export default class Project {
  constructor(name) {
    this.name = name
  }

  sayName() {
    console.log(`this is the prject name: + ${this.name}`)
  }
}

export { projects }
