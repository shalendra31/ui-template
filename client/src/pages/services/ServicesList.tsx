import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Badge } from 'company-ui'

type Row = { id: string; name: string; owner: string; status: string }

export default function ServicesList() {
  const [rows, setRows] = useState<Row[]>([])

  useEffect(() => { fetch('/api/services').then(r => r.json()).then(setRows) }, [])

  return (
    <section>
      <h1>Service Inventory</h1>
      <Table
        columns={[
          { key: 'id', header: 'Service ID', render: (r: Row) => <Link to={`/services/${r.id}`}>{r.id}</Link> },
          { key: 'name', header: 'Name' },
          { key: 'owner', header: 'Owner' },
          { key: 'status', header: 'Status', render: (r: Row) => <Badge kind={r.status.toLowerCase().replace(' ','-')}>{r.status}</Badge> }
        ]}
        data={rows}
      />
    </section>
  )
}
