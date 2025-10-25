import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function TicketsList() {
  const [rows, setRows] = useState([])
  useEffect(() => { fetch('/api/tickets').then(r => r.json()).then(setRows) }, [])

  return (
    <section>
      <h1>Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td><Link to={`/tickets/${r.id}`}>{r.id}</Link></td>
              <td>{r.title}</td>
              <td>{r.priority}</td>
              <td><span className={`badge ${r.status.toLowerCase().replace(' ','-')}`}>{r.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
