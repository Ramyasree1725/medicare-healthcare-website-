import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Appointments({ user }) {
  const [appointments, setAppointments] = useState([])
  const [form, setForm] = useState({ doctorId: '', date: '', time: '', reason: '', type: 'in-person' })
  const [doctors, setDoctors] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('/api/doctors').then(r => setDoctors(r.data.data || [])).catch(() => {
      setDoctors([
        { id: '1', firstName: 'Rajesh', lastName: 'Sharma', specialization: 'Cardiology' },
        { id: '2', firstName: 'Priya', lastName: 'Reddy', specialization: 'Pediatrics' },
      ])
    })
    axios.get('/api/appointments').then(r => setAppointments(r.data.data || [])).catch(() => {})
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/appointments', { ...form, patientId: user?.id || 'guest' })
      setMessage('Appointment booked successfully! (Demo mode)')
      setForm({ doctorId: '', date: '', time: '', reason: '', type: 'in-person' })
    } catch {
      setMessage('Appointment request submitted (backend may be offline - demo)')
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book Appointment</h1>
      
      {message && <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">{message}</div>}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <div>
          <label className="block font-medium mb-1">Select Doctor</label>
          <select required value={form.doctorId} onChange={e => setForm({...form, doctorId: e.target.value})} className="w-full border rounded-lg px-3 py-2">
            <option value="">Choose a doctor</option>
            {doctors.map(d => (
              <option key={d.id} value={d.id}>Dr. {d.firstName} {d.lastName} - {d.specialization}</option>
            ))}
          </select>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Date</label>
            <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Time</label>
            <input type="time" required value={form.time} onChange={e => setForm({...form, time: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1">Type</label>
          <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="w-full border rounded-lg px-3 py-2">
            <option value="in-person">In-Person</option>
            <option value="video">Video Consultation</option>
            <option value="phone">Phone Consultation</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Reason / Symptoms</label>
          <textarea value={form.reason} onChange={e => setForm({...form, reason: e.target.value})} className="w-full border rounded-lg px-3 py-2" rows="3" placeholder="Describe your concern..."></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
          Book Appointment
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Recent Appointments</h2>
        {appointments.length === 0 ? (
          <p className="text-gray-500">No appointments yet. Book one above!</p>
        ) : (
          <div className="space-y-3">
            {appointments.slice(0,5).map(a => (
              <div key={a.id} className="bg-white p-4 rounded-lg shadow flex justify-between">
                <span>{a.title || 'Appointment'}</span>
                <span className="text-sm text-gray-500">{a.status}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
