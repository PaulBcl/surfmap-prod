import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

const MapInterface = dynamic(() => import('@/components/MapInterface'), {
  ssr: false,
})

export default function MapPage() {
  return (
    <div className="h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <MapInterface />
      </Suspense>
    </div>
  )
} 