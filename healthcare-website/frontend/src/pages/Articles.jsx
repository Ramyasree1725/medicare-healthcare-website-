import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Articles() {
  const [articles, setArticles] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    axios.get('/api/articles')
      .then(r => setArticles(r.data.data || []))
      .catch(() => {
        setArticles([
          { id: 1, title: 'Understanding Hypertension', content: 'High blood pressure is a common condition...', author: 'Dr. Sharma', category: 'Cardiology' },
          { id: 2, title: 'Managing Diabetes Type 2', content: 'Lifestyle changes and medication help control blood sugar...', author: 'Dr. Reddy', category: 'Endocrinology' },
          { id: 3, title: 'Importance of Mental Health', content: 'Taking care of your mind is as important as physical health...', author: 'Dr. Patel', category: 'Psychiatry' },
        ])
      })
  }, [])

  if (selected) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button onClick={() => setSelected(null)} className="text-blue-600 mb-4">← Back to articles</button>
        <h1 className="text-3xl font-bold mb-2">{selected.title}</h1>
        <p className="text-gray-500 mb-6">By {selected.author} | {selected.category}</p>
        <div className="prose max-w-none bg-white p-6 rounded-xl shadow">
          <p>{selected.content}</p>
          <p className="mt-4">This is a sample health article. In a full system, detailed medical information, references, and related articles would appear here.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Health Articles & Tips</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(a => (
          <div key={a.id} onClick={() => setSelected(a)} className="bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-xl transition">
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{a.category || 'Health'}</span>
            <h3 className="font-bold text-lg mt-2 mb-2">{a.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-3">{(a.content || '').slice(0, 120)}...</p>
            <p className="text-sm text-gray-400 mt-3">By {a.author || 'MediCare Team'}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
