import { NavLink } from 'react-router-dom'
export default function SidebarNav() {
  const linkClass = ({ isActive }: { isActive: boolean }) => isActive ? "nav-link active" : "nav-link"
  return (
    <nav>
      <NavLink className={linkClass} to="/dashboard">Dashboard</NavLink>
      <NavLink className={linkClass} to="/services">Service Inventory</NavLink>
      <NavLink className={linkClass} to="/alerts">Alerts</NavLink>
      <NavLink className={linkClass} to="/tickets">Tickets</NavLink>
      <NavLink className={linkClass} to="/topology">Topology</NavLink>
    </nav>
  )
}
