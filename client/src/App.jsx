import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ServicesList from './pages/services/ServicesList.jsx'
import ServiceDetail from './pages/services/ServiceDetail.jsx'
import AlertsList from './pages/alerts/AlertsList.jsx'
import AlertDetail from './pages/alerts/AlertDetail.jsx'
import TicketsList from './pages/tickets/TicketsList.jsx'
import TicketDetail from './pages/tickets/TicketDetail.jsx'
import TopologyList from './pages/topology/TopologyList.jsx'
import TopologyDetail from './pages/topology/TopologyDetail.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/services" element={<ServicesList />} />
        <Route path="/services/:id" element={<ServiceDetail />} />

        <Route path="/alerts" element={<AlertsList />} />
        <Route path="/alerts/:id" element={<AlertDetail />} />

        <Route path="/tickets" element={<TicketsList />} />
        <Route path="/tickets/:id" element={<TicketDetail />} />

        <Route path="/topology" element={<TopologyList />} />
        <Route path="/topology/:id" element={<TopologyDetail />} />
      </Routes>
    </Layout>
  )
}
