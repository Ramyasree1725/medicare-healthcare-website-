import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DEPTS = [
  'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology',
  'Dermatology', 'Gastroenterology', 'Endocrinology', 'Pulmonology',
  'Nephrology', 'Urology', 'Gynecology', 'Ophthalmology', 'ENT',
  'Psychiatry', 'Rheumatology', 'Emergency Medicine', 'General Surgery'
]

export default function Departments() {
  const [departments, setDepartments] = useState(DEPTS.map((d,i) => ({ id: i, name: d, description: `Specialized care in ${d}` })))

  useEffect(() => {
    axios.get('/api/departments').then(r => {
      if (r.data.data?.length) setDepartments(r.data.data)
    }).catch(() => {})
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Departments</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {departments.map(d => (
          <div key={d.id || d.name} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-3xl mb-2">🏥</div>
            <h3 className="font-semibold">{d.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{d.description || ''}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
