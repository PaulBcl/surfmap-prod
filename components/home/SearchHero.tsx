'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchHero() {
  const router = useRouter()
  const [location, setLocation] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (location) {
      router.push(`/map?location=${encodeURIComponent(location)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
      <div className="flex gap-2 p-2 bg-white rounded-full shadow-lg">
        <input
          type="text"
          placeholder="Enter location or surf spot..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 px-6 py-3 text-lg border-none focus:outline-none rounded-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  )
} 