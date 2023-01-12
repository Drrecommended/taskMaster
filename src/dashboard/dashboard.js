import nav from "../layouts/nav"

const dashboard = () => {
  const loadDashboard = () => {
    nav.navigate()
  }
  return {
    loadDashboard
  }
}

export default dashboard 