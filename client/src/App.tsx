import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard'
import ServicesList from './pages/services/ServicesList'
import ServiceDetail from './pages/services/ServiceDetail'
import AlertsList from './pages/alerts/AlertsList'
import AlertDetail from './pages/alerts/AlertDetail'
import TicketsList from './pages/tickets/TicketsList'
import TicketDetail from './pages/tickets/TicketDetail'
import TopologyList from './pages/topology/TopologyList'
import TopologyDetail from './pages/topology/TopologyDetail'
import SidebarNav from './components/SidebarNav'

export default function App() {
  return (
    <Layout>
      <SidebarNav />
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
