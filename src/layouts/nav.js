const nav = () => {
  const navLinks = document.querySelectorAll('nav a')
  console.log(navLinks)
  navLinks.forEach((link) => {
    console.log(link)
  })
  return {
    test() {
      console.log('test e')
    }
  }
}

export default nav
