import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Badge } from 'company-ui'

type Item = { id: string; title: string; priority: string; status: string }

export default function TicketDetail() {
  const { id } = useParams()
  const [item, setItem] = useState<Item | null>(null)
  useEffect(() => { fetch(`/api/tickets/${id}`).then(r => r.json()).then(setItem) }, [id])

  if (!item) return <p>Loading…</p>

  return (
    <section>
      <div className="breadcrumb"><Link to="/tickets">← Back to Tickets</Link></div>
      <h1>Ticket {item.id}</h1>
      <Card className="details">
        <div><strong>Title:</strong> {item.title}</div>
        <div><strong>Priority:</strong> {item.priority}</div>
        <div><strong>Status:</strong> <Badge kind={item.status.toLowerCase().replace(' ','-')}>{item.status}</Badge></div>
      </Card>
    </section>
  )
}
