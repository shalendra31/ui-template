import { Header, Sidebar, Footer, LayoutShell } from 'company-ui'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <LayoutShell>
      <Header />
      <div className="shell-body">
        <Sidebar />
        <main className="content">
          {children}
        </main>
      </div>
      <Footer />
    </LayoutShell>
  )
}
