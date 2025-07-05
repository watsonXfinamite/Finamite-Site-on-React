import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cancellation from './pages/Cancellation'
import Products from './pages/Products'
import TaskManagement from './pages/TaskManagement'
import InventoryManagement from './pages/InventoryManagement'
import LeadManagement from './pages/LeadManagement'
import CRM from './pages/CRM'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light-color">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cancellation" element={<Cancellation />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/task-management" element={<TaskManagement />} />
            <Route path="/products/inventory-management" element={<InventoryManagement />} />
            <Route path="/products/lead-management" element={<LeadManagement />} />
            <Route path="/products/crm" element={<CRM />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App