import React from 'react'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About MediCare Pro</h1>
      <div className="bg-white p-8 rounded-xl shadow space-y-4 text-gray-700">
        <p>MediCare Pro is a comprehensive healthcare platform designed to make quality medical care accessible to everyone.</p>
        <p>We connect patients with experienced doctors, enable online consultations, lab test bookings, medicine delivery, and provide reliable health information.</p>
        <h2 className="text-xl font-bold mt-6">Our Mission</h2>
        <p>To democratize healthcare by leveraging technology for better access, affordability, and outcomes.</p>
        <h2 className="text-xl font-bold mt-6">Why Choose Us</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Verified and experienced doctors</li>
          <li>Secure and private health records</li>
          <li>24/7 emergency support</li>
          <li>Affordable consultation fees</li>
          <li>Multi-language support</li>
        </ul>
      </div>
    </div>
  )
}
