import React, { useState, useEffect } from 'react'
import axios from 'axios'

const COMMON_SYMPTOMS = [
  'Fever', 'Cough', 'Headache', 'Fatigue', 'Nausea', 'Dizziness',
  'Chest Pain', 'Shortness of Breath', 'Abdominal Pain', 'Joint Pain',
  'Rash', 'Sore Throat', 'Back Pain', 'Insomnia', 'Anxiety'
]

export default function Symptoms() {
  const [selected, setSelected] = useState([])
  const [result, setResult] = useState(null)
  const [symptoms, setSymptoms] = useState(COMMON_SYMPTOMS)

  useEffect(() => {
    axios.get('/api/symptoms').then(r => {
      if (r.data.data?.length) setSymptoms(r.data.data.map(s => s.name))
    }).catch(() => {})
  }, [])

  const toggle = (s) => {
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  }

  const check = () => {
    if (selected.length === 0) {
      setResult({ message: 'Please select at least one symptom.', level: 'info' })
      return
    }
    // Simple rule-based demo
    let advice = 'Based on your symptoms, we recommend consulting a general physician.'
    let level = 'moderate'
    if (selected.includes('Chest Pain') || selected.includes('Shortness of Breath')) {
      advice = '⚠️ These symptoms may require urgent medical attention. Please visit Emergency or call ambulance.'
      level = 'urgent'
    } else if (selected.includes('Fever') && selected.includes('Cough')) {
      advice = 'Possible respiratory infection. Rest, hydrate, and consider consulting a doctor if symptoms persist.'
      level = 'moderate'
    } else if (selected.includes('Headache') && selected.includes('Nausea')) {
      advice = 'Could be migraine or other causes. Track frequency and consult if severe or frequent.'
      level = 'mild'
    }
    setResult({ message: advice, level, symptoms: selected })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Symptom Checker</h1>
      <p className="text-gray-600 mb-6">Select the symptoms you are experiencing. This is for guidance only and not a diagnosis.</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {symptoms.map(s => (
          <button
            key={s}
            onClick={() => toggle(s)}
            className={`px-4 py-2 rounded-full border transition ${selected.includes(s) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-blue-50'}`}
          >
            {s}
          </button>
        ))}
      </div>

      <button onClick={check} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mb-6">
        Check Symptoms
      </button>

      {result && (
        <div className={`p-6 rounded-xl ${result.level === 'urgent' ? 'bg-red-100 border border-red-300' : result.level === 'moderate' ? 'bg-yellow-50 border border-yellow-300' : 'bg-blue-50 border border-blue-200'}`}>
          <h3 className="font-bold mb-2">Result</h3>
          <p>{result.message}</p>
          <p className="text-sm mt-4 text-gray-600">Selected: {result.symptoms?.join(', ')}</p>
          <p className="text-xs mt-2 text-gray-500">Disclaimer: This tool does not provide medical advice. Always consult a qualified healthcare professional.</p>
        </div>
      )}
    </div>
  )
}
// Advanced symptom analysis rules
