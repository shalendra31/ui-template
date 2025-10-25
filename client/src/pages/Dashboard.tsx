import { useEffect, useState } from 'react'
import { Card } from 'company-ui'

type Kpi = { name: string; value: number }

export default function Dashboard() {
  const [kpis, setKpis] = useState<Kpi[]>([])

  useEffect(() => {
    fetch('/api/dashboard').then(r => r.json()).then(d => setKpis(d.kpis || []))
  }, [])

  return (
    <section>
      <h1>Dashboard</h1>
      <div className="kpi-grid">
        {kpis.map(k => (
          <Card key={k.name} className="card">
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-label">{k.name}</div>
          </Card>
        ))}
      </div>
    </section>
  )
}
