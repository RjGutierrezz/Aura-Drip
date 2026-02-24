import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

// render the components here
function App() {

  return (
    <main className="app-shell">
      {/* components are going here */}
      <Sidebar />
      <section className="content">
        <Dashboard />
      </section>
    </main>
  )
}

export default App
