import { NextResponse } from 'next/server'
import { Client } from '@googlemaps/google-maps-services-js'

const client = new Client({})

export async function POST(request: Request) {
  try {
    const { origin, destination } = await request.json()

    const directions = await client.directions({
      params: {
        origin,
        destination,
        key: process.env.GOOGLE_MAPS_API_KEY!,
      },
    })

    const route = directions.data.routes[0]
    const leg = route.legs[0]

    // Calculate costs (simplified example)
    const fuelCost = calculateFuelCost(leg.distance.value)
    const tollsCost = await calculateTollsCost(route)

    return NextResponse.json({
      distance: leg.distance.text,
      duration: leg.duration.text,
      fuelCost,
      tollsCost,
    })
  } catch (error) {
    console.error('Route calculation error:', error)
    return NextResponse.json(
      { error: 'Failed to calculate route' },
      { status: 500 }
    )
  }
}

function calculateFuelCost(distanceMeters: number): number {
  const distanceKm = distanceMeters / 1000
  const fuelConsumptionPerKm = 0.08 // liters per km
  const fuelPricePerLiter = 1.5 // example price
  return distanceKm * fuelConsumptionPerKm * fuelPricePerLiter
}

async function calculateTollsCost(route: any): Promise<number> {
  // Implement toll calculation logic here
  return 0
} 