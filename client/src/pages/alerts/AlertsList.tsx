import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Badge } from 'company-ui'

type Row = { id: string; severity: string; source: string; message: string; time: string }

export default function AlertsList() {
  const [rows, setRows] = useState<Row[]>([])
  useEffect(() => { fetch('/api/alerts').then(r => r.json()).then(setRows) }, [])

  return (
    <section>
      <h1>Alerts</h1>
      <Table
        columns={[
          { key: 'id', header: 'Alert ID', render: (r: Row) => <Link to={`/alerts/${r.id}`}>{r.id}</Link> },
          { key: 'severity', header: 'Severity', render: (r: Row) => <Badge kind={r.severity.toLowerCase()}>{r.severity}</Badge> },
          { key: 'source', header: 'Source' },
          { key: 'message', header: 'Message' },
          { key: 'time', header: 'Time (UTC)', render: (r: Row) => new Date(r.time).toISOString().replace('T',' ').replace('Z','') }
        ]}
        data={rows}
      />
    </section>
  )
}
