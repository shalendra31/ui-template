import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function TopologyList() {
  const [rows, setRows] = useState([])
  useEffect(() => { fetch('/api/topology').then(r => r.json()).then(setRows) }, [])

  return (
    <section>
      <h1>Topology</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Node ID</th>
            <th>Role</th>
            <th>Site</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td><Link to={`/topology/${r.id}`}>{r.id}</Link></td>
              <td>{r.role}</td>
              <td>{r.site}</td>
              <td><span className={`badge ${r.status.toLowerCase()}`}>{r.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
