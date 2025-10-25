import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ServicesList() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch('/api/services').then(r => r.json()).then(setRows)
  }, [])

  return (
    <section>
      <h1>Service Inventory</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Name</th>
            <th>Owner</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td><Link to={`/services/${r.id}`}>{r.id}</Link></td>
              <td>{r.name}</td>
              <td>{r.owner}</td>
              <td><span className={`badge ${r.status.toLowerCase()}`}>{r.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
