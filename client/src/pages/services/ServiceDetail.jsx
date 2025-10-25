import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ServiceDetail() {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    fetch(`/api/services/${id}`).then(r => r.json()).then(setItem)
  }, [id])

  if (!item) return <p>Loading…</p>

  return (
    <section>
      <div className="breadcrumb"><Link to="/services">← Back to Services</Link></div>
      <h1>Service: {item.name}</h1>
      <div className="details">
        <div><strong>ID:</strong> {item.id}</div>
        <div><strong>Owner:</strong> {item.owner}</div>
        <div><strong>Status:</strong> {item.status}</div>
      </div>
    </section>
  )
}
