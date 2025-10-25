import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function TopologyDetail() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  useEffect(() => { fetch(`/api/topology/${id}`).then(r => r.json()).then(setItem) }, [id])

  if (!item) return <p>Loading…</p>

  return (
    <section>
      <div className="breadcrumb"><Link to="/topology">← Back to Topology</Link></div>
      <h1>Node {item.id}</h1>
      <div className="details">
        <div><strong>Role:</strong> {item.role}</div>
        <div><strong>Site:</strong> {item.site}</div>
        <div><strong>Status:</strong> {item.status}</div>
      </div>
    </section>
  )
}
