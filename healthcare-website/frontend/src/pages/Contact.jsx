import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      {sent ? (
        <div className="bg-green-100 text-green-800 p-6 rounded-xl">Thank you! We will get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea required rows="5" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full border rounded-lg px-3 py-2" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Send Message</button>
        </form>
      )}
      <div className="mt-8 bg-gray-50 p-6 rounded-xl">
        <h3 className="font-bold mb-2">Other ways to reach us</h3>
        <p>📧 support@medicare.pro</p>
        <p>📞 1800-123-4567 (Toll Free)</p>
        <p>📍 Hyderabad, Telangana, India</p>
      </div>
    </div>
  )
}
