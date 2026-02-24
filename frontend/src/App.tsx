import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import DashboardPage from './components/pages/Dashboard'
import WardrobePage from './components/pages/WardrobePage'
import OutfitPage from './components/pages/OutfitPage'
import FavoritePage from './components/pages/FavoritePage'

function App() {
  return (
    <BrowserRouter>
      <main className="app-shell">
        <Sidebar />
        <div className="content">
          <Routes>
            
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/wardrobe" element={<WardrobePage />} />
            <Route path="/outfit" element={<OutfitPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App