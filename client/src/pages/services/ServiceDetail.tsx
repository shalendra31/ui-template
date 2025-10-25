import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Badge, Button } from 'company-ui'

type Item = { id: string; name: string; owner: string; status: string }

export default function ServiceDetail() {
  const { id } = useParams()
  const [item, setItem] = useState<Item | null>(null)

  useEffect(() => { fetch(`/api/services/${id}`).then(r => r.json()).then(setItem) }, [id])

  if (!item) return <p>Loading…</p>

  return (
    <section>
      <div className="breadcrumb"><Link to="/services">← Back to Services</Link></div>
      <h1>Service: {item.name}</h1>
      <Card className="details">
        <div><strong>ID:</strong> {item.id}</div>
        <div><strong>Owner:</strong> {item.owner}</div>
        <div><strong>Status:</strong> <Badge kind={item.status.toLowerCase()}>{item.status}</Badge></div>
        <div style={{marginTop: 8}}>
          <Button onClick={() => alert('Edit flow TBD')}>Edit</Button>
        </div>
      </Card>
    </section>
  )
}
