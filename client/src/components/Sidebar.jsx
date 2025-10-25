import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <NavLink className={linkClass} to="/dashboard">Dashboard</NavLink>
        <NavLink className={linkClass} to="/services">Service Inventory</NavLink>
        <NavLink className={linkClass} to="/alerts">Alerts</NavLink>
        <NavLink className={linkClass} to="/tickets">Tickets</NavLink>
        <NavLink className={linkClass} to="/topology">Topology</NavLink>
      </nav>
    </aside>
  )
}
