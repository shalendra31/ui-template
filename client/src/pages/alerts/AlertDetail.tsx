import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Badge } from 'company-ui'

type Item = { id: string; severity: string; source: string; message: string; time: string }

export default function AlertDetail() {
  const { id } = useParams()
  const [item, setItem] = useState<Item | null>(null)
  useEffect(() => { fetch(`/api/alerts/${id}`).then(r => r.json()).then(setItem) }, [id])

  if (!item) return <p>Loading…</p>

  return (
    <section>
      <div className="breadcrumb"><Link to="/alerts">← Back to Alerts</Link></div>
      <h1>Alert {item.id}</h1>
      <Card className="details">
        <div><strong>Severity:</strong> <Badge kind={item.severity.toLowerCase()}>{item.severity}</Badge></div>
        <div><strong>Source:</strong> {item.source}</div>
        <div><strong>Message:</strong> {item.message}</div>
        <div><strong>Time:</strong> {item.time}</div>
      </Card>
    </section>
  )
}
