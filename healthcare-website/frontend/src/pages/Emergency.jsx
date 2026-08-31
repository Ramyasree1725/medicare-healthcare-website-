import React, { useState } from 'react'

export default function Emergency() {
  const [form, setForm] = useState({ name: '', phone: '', location: '', details: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-red-600 text-white p-6 rounded-xl mb-6 text-center">
        <h1 className="text-3xl font-bold">🚨 Emergency</h1>
        <p className="mt-2">For immediate life-threatening emergencies, call 108 / 102</p>
      </div>

      {submitted ? (
        <div className="bg-green-100 p-6 rounded-xl text-center">
          <h2 className="text-xl font-bold text-green-800">Request Received</h2>
          <p className="mt-2">Our emergency team will contact you shortly. Stay calm.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
          <p className="text-gray-600">Request emergency assistance or ambulance:</p>
          <div>
            <label className="block font-medium mb-1">Your Name</label>
            <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Location / Address</label>
            <input required value={form.location} onChange={e => setForm({...form, location: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Emergency Details</label>
            <textarea rows="3" value={form.details} onChange={e => setForm({...form, details: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700">
            Request Emergency Help
          </button>
        </form>
      )}
    </div>
  )
}
// Emergency request prioritization
