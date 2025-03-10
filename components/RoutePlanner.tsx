'use client'

import { useState } from 'react'
import { RouteInfo, SurfSpot } from '@/types'

interface RoutePlannerProps {
  spot: SurfSpot
}

export default function RoutePlanner({ spot }: RoutePlannerProps) {
  const [origin, setOrigin] = useState('')
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null)
  const [loading, setLoading] = useState(false)

  const calculateRoute = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/route', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          origin,
          destination: `${spot.coordinates.lat},${spot.coordinates.lng}`,
        }),
      })
      const data = await response.json()
      setRouteInfo(data)
    } catch (error) {
      console.error('Failed to calculate route:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Plan Your Trip</h3>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter your starting point"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />

        <button
          onClick={calculateRoute}
          disabled={loading || !origin}
          className="w-full bg-blue-500 text-white py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Calculating...' : 'Get Directions'}
        </button>

        {routeInfo && (
          <div className="space-y-2 text-sm">
            <p>Distance: {routeInfo.distance}</p>
            <p>Duration: {routeInfo.duration}</p>
            <p>Estimated Fuel Cost: ${routeInfo.fuelCost.toFixed(2)}</p>
            <p>Tolls: ${routeInfo.tollsCost.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  )
} 