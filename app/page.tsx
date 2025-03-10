import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MapSection from '@/components/home/MapSection'
import FeaturesGrid from '@/components/home/FeaturesGrid'
import SearchHero from '@/components/home/SearchHero'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center text-white py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Wave
          </h1>
          <p className="text-xl mb-8">
            Discover the best surf spots worldwide
          </p>
          
          {/* Simple Search Bar */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search surf spots..."
              className="w-full px-6 py-3 rounded-full text-gray-900"
            />
          </div>
        </div>

        {/* Featured Spots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {['Mundaka, Spain', 'Pipeline, Hawaii', 'Bells Beach, Australia'].map((spot) => (
            <div key={spot} className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{spot}</h3>
              <p className="text-gray-600">Perfect waves await you</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
