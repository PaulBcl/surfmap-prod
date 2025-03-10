import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MapSection from '@/components/home/MapSection'
import FeaturesGrid from '@/components/home/FeaturesGrid'
import SearchHero from '@/components/home/SearchHero'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Surf Map</h1>
      <div className="h-[400px] w-full">
        <MapSection />
      </div>
    </main>
  )
}
