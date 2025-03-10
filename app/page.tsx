import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MapSection from '@/components/home/MapSection'
import FeaturesGrid from '@/components/home/FeaturesGrid'
import SearchHero from '@/components/home/SearchHero'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-white text-xl font-bold">🏄‍♂️ SurfMap</div>
            <div className="flex gap-4">
              <button className="text-white hover:text-blue-100">About</button>
              <button className="text-white hover:text-blue-100">Login</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect Wave
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Discover and explore the best surf spots worldwide. Real-time conditions, local tips, and everything you need to catch the perfect wave.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search surf spots..."
                className="w-full px-6 py-4 rounded-full shadow-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Featured Spots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Mundaka',
                location: 'Basque Country, Spain',
                difficulty: 'Advanced'
              },
              {
                name: 'Pipeline',
                location: 'North Shore, Hawaii',
                difficulty: 'Expert'
              },
              {
                name: 'Bells Beach',
                location: 'Victoria, Australia',
                difficulty: 'Intermediate'
              }
            ].map((spot) => (
              <div key={spot.name} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{spot.name}</h3>
                <p className="text-gray-600 mb-2">{spot.location}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  spot.difficulty === 'Expert' ? 'bg-red-100 text-red-800' :
                  spot.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {spot.difficulty}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-white/80 text-sm">
            © 2024 SurfMap. Find your perfect wave.
          </div>
        </div>
      </footer>
    </main>
  )
}
