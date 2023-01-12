const navbar = () => {
  const navLinks = document.querySelectorAll('nav a')
  console.log(navLinks, "works")
  navLinks.forEach((link) => {
    console.log(link)
  })
  return {
    navigate() {
      console.log('test e')
    }
  }
}

export default navbar
