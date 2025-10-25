import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function AlertsList() {
  const [rows, setRows] = useState([])
  useEffect(() => { fetch('/api/alerts').then(r => r.json()).then(setRows) }, [])

  return (
    <section>
      <h1>Alerts</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Alert ID</th>
            <th>Severity</th>
            <th>Source</th>
            <th>Message</th>
            <th>Time (UTC)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td><Link to={`/alerts/${r.id}`}>{r.id}</Link></td>
              <td><span className={`badge ${r.severity.toLowerCase()}`}>{r.severity}</span></td>
              <td>{r.source}</td>
              <td>{r.message}</td>
              <td>{new Date(r.time).toISOString().replace('T',' ').replace('Z','')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
