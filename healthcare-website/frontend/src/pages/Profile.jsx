import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Profile({ user, setUser }) {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({ name: user?.name || '', phone: user?.phone || '', bloodGroup: '' })

  if (!user) {
    return (
      <div className="text-center py-16">
        <p>Please <Link to="/login" className="text-blue-600">login</Link> to view profile.</p>
      </div>
    )
  }

  const save = () => {
    setUser({ ...user, ...form })
    localStorage.setItem('medicare_user', JSON.stringify({ ...user, ...form }))
    setEditing(false)
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="bg-white p-6 rounded-xl shadow">
        {editing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Blood Group</label>
              <select value={form.bloodGroup} onChange={e => setForm({...form, bloodGroup: e.target.value})} className="w-full border rounded px-3 py-2">
                <option value="">Select</option>
                {['A+','A-','B+','B-','O+','O-','AB+','AB-'].map(b => <option key={b}>{b}</option>)}
              </select>
            </div>
            <div className="flex gap-2">
              <button onClick={save} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
              <button onClick={() => setEditing(false)} className="border px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <p><strong>Name:</strong> {user.name || '-'}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone || '-'}</p>
            <p><strong>Role:</strong> {user.role || 'patient'}</p>
            <button onClick={() => setEditing(true)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  )
}
