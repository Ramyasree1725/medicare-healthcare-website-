import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Pharmacy() {
  const [meds, setMeds] = useState([])
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('/api/pharmacy').then(r => setMeds(r.data.data || [])).catch(() => {
      setMeds([
        { id: 1, name: 'Paracetamol 500mg', price: 30, stock: 100 },
        { id: 2, name: 'Amoxicillin 250mg', price: 80, stock: 50 },
        { id: 3, name: 'Cetirizine 10mg', price: 25, stock: 200 },
        { id: 4, name: 'Omeprazole 20mg', price: 60, stock: 80 },
        { id: 5, name: 'Metformin 500mg', price: 45, stock: 150 },
      ])
    })
  }, [])

  const filtered = meds.filter(m => !search || m.name.toLowerCase().includes(search.toLowerCase()))

  const addToCart = (m) => setCart(c => [...c, m])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Online Pharmacy</h1>
      <input
        type="text"
        placeholder="Search medicines..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full max-w-md mb-6"
      />
      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map(m => (
          <div key={m.id} className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{m.name}</h3>
              <p className="text-blue-600 font-bold">₹{m.price}</p>
              <p className="text-xs text-gray-500">Stock: {m.stock}</p>
            </div>
            <button onClick={() => addToCart(m)} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Add</button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white shadow-xl rounded-xl p-4 border">
          <p className="font-bold">Cart: {cart.length} items</p>
          <p>Total: ₹{cart.reduce((s, m) => s + (m.price || 0), 0)}</p>
          <button className="mt-2 w-full bg-green-600 text-white py-1 rounded">Checkout (Demo)</button>
        </div>
      )}
    </div>
  )
}
// Pharmacy cart and order flow
