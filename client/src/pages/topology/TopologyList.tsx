import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Badge } from 'company-ui'

type Row = { id: string; role: string; site: string; status: string }

export default function TopologyList() {
  const [rows, setRows] = useState<Row[]>([])
  useEffect(() => { fetch('/api/topology').then(r => r.json()).then(setRows) }, [])

  return (
    <section>
      <h1>Topology</h1>
      <Table
        columns={[
          { key: 'id', header: 'Node ID', render: (r: Row) => <Link to={`/topology/${r.id}`}>{r.id}</Link> },
          { key: 'role', header: 'Role' },
          { key: 'site', header: 'Site' },
          { key: 'status', header: 'Status', render: (r: Row) => <Badge kind={r.status.toLowerCase()}>{r.status}</Badge> }
        ]}
        data={rows}
      />
    </section>
  )
}
