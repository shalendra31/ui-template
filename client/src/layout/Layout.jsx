import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Footer from '../components/Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <div className="shell-body">
        <Sidebar />
        <main className="content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
