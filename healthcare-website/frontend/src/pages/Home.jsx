import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
  const [stats, setStats] = useState({ doctors: 0, patients: 0, departments: 0 })
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get('/api/health').then(() => {}).catch(() => {})
    axios.get('/api/doctors').then(r => setStats(s => ({...s, doctors: r.data.data?.length || 50}))).catch(() => setStats(s => ({...s, doctors: 50})))
    axios.get('/api/articles').then(r => setArticles((r.data.data || []).slice(0, 3))).catch(() => {})
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Your Health, Our Priority</h1>
          <p className="text-xl mb-8 text-blue-100">Book appointments with top doctors, get health advice, and manage your care — all in one place.</p>
          <div className="flex justify-center gap-4">
            <Link to="/appointments" className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">Book Appointment</Link>
            <Link to="/doctors" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700">Find Doctors</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-xl bg-blue-50">
            <div className="text-4xl font-bold text-blue-700">{stats.doctors}+</div>
            <div className="text-gray-600">Expert Doctors</div>
          </div>
          <div className="p-6 rounded-xl bg-green-50">
            <div className="text-4xl font-bold text-green-700">1000+</div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
          <div className="p-6 rounded-xl bg-purple-50">
            <div className="text-4xl font-bold text-purple-700">30+</div>
            <div className="text-gray-600">Departments</div>
          </div>
          <div className="p-6 rounded-xl bg-orange-50">
            <div className="text-4xl font-bold text-orange-700">24/7</div>
            <div className="text-gray-600">Emergency Support</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Online Consultation', desc: 'Consult with specialists from the comfort of your home via video call.', icon: '💻' },
              { title: 'Lab Tests at Home', desc: 'Book lab tests and get sample collection at your doorstep.', icon: '🧪' },
              { title: 'Medicine Delivery', desc: 'Order medicines online and get them delivered quickly.', icon: '💊' },
              { title: 'Health Records', desc: 'Securely store and access your medical history anytime.', icon: '📋' },
              { title: 'Symptom Checker', desc: 'Check your symptoms and get guidance on next steps.', icon: '🔍' },
              { title: 'Emergency Care', desc: 'Immediate support and ambulance booking for emergencies.', icon: '🚑' },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Health Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.length > 0 ? articles.map(a => (
              <div key={a.id} className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{a.content?.slice(0,150)}...</p>
              </div>
            )) : (
              <p className="col-span-3 text-center text-gray-500">Loading articles... (Start backend to load)</p>
            )}
          </div>
          <div className="text-center mt-8">
            <Link to="/articles" className="text-blue-600 font-semibold hover:underline">View All Articles →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
