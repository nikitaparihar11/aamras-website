import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App