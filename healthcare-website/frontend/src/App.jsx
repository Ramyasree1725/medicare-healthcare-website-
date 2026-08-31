import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments'
import Articles from './pages/Articles'
import Symptoms from './pages/Symptoms'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import About from './pages/About'
import Departments from './pages/Departments'
import Pharmacy from './pages/Pharmacy'
import Emergency from './pages/Emergency'
import Profile from './pages/Profile'

function Navbar({ user, setUser }) {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            🏥 MediCare Pro
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/doctors" className="hover:text-blue-200">Doctors</Link>
            <Link to="/appointments" className="hover:text-blue-200">Appointments</Link>
            <Link to="/departments" className="hover:text-blue-200">Departments</Link>
            <Link to="/articles" className="hover:text-blue-200">Health Articles</Link>
            <Link to="/symptoms" className="hover:text-blue-200">Symptom Checker</Link>
            <Link to="/pharmacy" className="hover:text-blue-200">Pharmacy</Link>
            <Link to="/emergency" className="hover:text-red-300 font-semibold">Emergency</Link>
            <Link to="/about" className="hover:text-blue-200">About</Link>
            <Link to="/contact" className="hover:text-blue-200">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
                <Link to="/profile" className="hover:text-blue-200">Profile</Link>
                <button onClick={() => setUser(null)} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-blue-200">Login</Link>
                <Link to="/register" className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-blue-100">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MediCare Pro</h3>
            <p className="text-gray-400">Your trusted healthcare partner. Quality care, anytime, anywhere.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/doctors">Find Doctors</Link></li>
              <li><Link to="/appointments">Book Appointment</Link></li>
              <li><Link to="/departments">Departments</Link></li>
              <li><Link to="/pharmacy">Online Pharmacy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Telemedicine</li>
              <li>Lab Tests</li>
              <li>Health Checkups</li>
              <li>Emergency Care</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-gray-400">📧 support@medicare.pro</p>
            <p className="text-gray-400">📞 1800-123-4567</p>
            <p className="text-gray-400">📍 Hyderabad, India</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          © 2024-2026 MediCare Pro. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('medicare_user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('medicare_user', JSON.stringify(userData))
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar user={user} setUser={setUser} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointments" element={<Appointments user={user} />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/symptoms" element={<Symptoms />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onLogin={handleLogin} />} />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
