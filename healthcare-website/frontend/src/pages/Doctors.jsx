import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Doctors() {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')
  const [dept, setDept] = useState('')

  useEffect(() => {
    axios.get('/api/doctors')
      .then(res => {
        setDoctors(res.data.data || [])
        setLoading(false)
      })
      .catch(() => {
        // Fallback demo data
        setDoctors([
          { id: 1, firstName: 'Rajesh', lastName: 'Sharma', specialization: 'Cardiology', experienceYears: 15, consultationFee: 800, rating: 4.8 },
          { id: 2, firstName: 'Priya', lastName: 'Reddy', specialization: 'Pediatrics', experienceYears: 10, consultationFee: 600, rating: 4.9 },
          { id: 3, firstName: 'Amit', lastName: 'Patel', specialization: 'Orthopedics', experienceYears: 12, consultationFee: 700, rating: 4.7 },
          { id: 4, firstName: 'Sneha', lastName: 'Kumar', specialization: 'Dermatology', experienceYears: 8, consultationFee: 550, rating: 4.6 },
          { id: 5, firstName: 'Vikram', lastName: 'Singh', specialization: 'Neurology', experienceYears: 18, consultationFee: 1200, rating: 4.9 },
        ])
        setLoading(false)
      })
  }, [])

  const filtered = doctors.filter(d => {
    const matchSearch = !filter || `${d.firstName} ${d.lastName} ${d.specialization}`.toLowerCase().includes(filter.toLowerCase())
    const matchDept = !dept || d.specialization === dept || d.department === dept
    return matchSearch && matchDept
  })

  const departments = [...new Set(doctors.map(d => d.specialization || d.department).filter(Boolean))]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Doctors</h1>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <input
          type="text"
          placeholder="Search doctors..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="border rounded-lg px-4 py-2 flex-1 min-w-[200px]"
        />
        <select value={dept} onChange={e => setDept(e.target.value)} className="border rounded-lg px-4 py-2">
          <option value="">All Specialties</option>
          {departments.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      {loading ? (
        <div className="text-center py-20">Loading doctors...</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(doc => (
            <div key={doc.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">👨‍⚕️</div>
                <div>
                  <h3 className="font-bold text-lg">Dr. {doc.firstName} {doc.lastName}</h3>
                  <p className="text-blue-600">{doc.specialization || doc.department}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>⭐ {doc.rating || 4.5} rating</p>
                <p>🩺 {doc.experienceYears || 10}+ years experience</p>
                <p>💰 ₹{doc.consultationFee || 500} consultation</p>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
