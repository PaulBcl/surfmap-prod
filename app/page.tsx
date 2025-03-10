import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MapSection from '@/components/home/MapSection'
import FeaturesGrid from '@/components/home/FeaturesGrid'
import SearchHero from '@/components/home/SearchHero'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-waves.jpg"
            alt="Ocean waves"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Perfect Wave
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discover the best surf spots worldwide with real-time conditions
          </p>
          
          <SearchHero />

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/map"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Map
            </Link>
            <Link
              href="/spots"
              className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
            >
              View Spots
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Catch the Perfect Wave
          </h2>
          <FeaturesGrid />
        </div>
      </section>

      {/* Interactive Map Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Explore Surf Spots Worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interactive map showing real-time conditions, difficulty levels, and local information
            </p>
          </div>
          
          <div className="h-[600px] rounded-xl overflow-hidden shadow-xl">
            <Suspense fallback={<LoadingSpinner />}>
              <MapSection />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}
