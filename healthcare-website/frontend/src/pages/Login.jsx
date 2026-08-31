import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await axios.post('/api/auth/login', { email, password })
      onLogin(res.data.user || { email, name: email.split('@')[0] })
      navigate('/dashboard')
    } catch {
      // Demo login
      if (email && password) {
        onLogin({ email, name: email.split('@')[0], role: 'patient' })
        navigate('/dashboard')
      } else {
        setError('Please enter email and password')
      }
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login to MediCare</h1>
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border rounded-lg px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border rounded-lg px-3 py-2" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Login</button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account? <Link to="/register" className="text-blue-600">Register</Link>
        </p>
        <p className="text-center mt-2 text-xs text-gray-400">Demo: any email/password works</p>
      </div>
    </div>
  )
}
