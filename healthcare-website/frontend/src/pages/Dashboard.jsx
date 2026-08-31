import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard({ user }) {
  if (!user) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Please Login</h1>
        <Link to="/login" className="text-blue-600">Go to Login</Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Welcome, {user.name || user.email}!</h1>
      <p className="text-gray-600 mb-8">Your healthcare dashboard</p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-gray-500">Upcoming Appointments</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">0</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-gray-500">Prescriptions</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">0</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-gray-500">Lab Reports</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">0</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link to="/appointments" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100">📅 Book Appointment</Link>
            <Link to="/doctors" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100">👨‍⚕️ Find Doctors</Link>
            <Link to="/pharmacy" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100">💊 Order Medicines</Link>
            <Link to="/symptoms" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100">🔍 Check Symptoms</Link>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Health Tips</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Drink at least 8 glasses of water daily</li>
            <li>• Aim for 30 minutes of exercise</li>
            <li>• Get 7-8 hours of sleep</li>
            <li>• Eat more fruits and vegetables</li>
            <li>• Manage stress with meditation</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
