import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Badge } from 'company-ui'

type Row = { id: string; title: string; priority: string; status: string }

export default function TicketsList() {
  const [rows, setRows] = useState<Row[]>([])
  useEffect(() => { fetch('/api/tickets').then(r => r.json()).then(setRows) }, [])

  return (
    <section>
      <h1>Tickets</h1>
      <Table
        columns={[
          { key: 'id', header: 'Ticket ID', render: (r: Row) => <Link to={`/tickets/${r.id}`}>{r.id}</Link> },
          { key: 'title', header: 'Title' },
          { key: 'priority', header: 'Priority' },
          { key: 'status', header: 'Status', render: (r: Row) => <Badge kind={r.status.toLowerCase().replace(' ','-')}>{r.status}</Badge> }
        ]}
        data={rows}
      />
    </section>
  )
}
