import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [kpis, setKpis] = useState([])

  useEffect(() => {
    fetch('/api/dashboard').then(r => r.json()).then(d => setKpis(d.kpis || []))
  }, [])

  return (
    <section>
      <h1>Dashboard</h1>
      <div className="kpi-grid">
        {kpis.map(k => (
          <div key={k.name} className="card">
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-label">{k.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
