export interface SurfSpot {
  id: string
  name: string
  location: string
  coordinates: {
    lat: number
    lng: number
  }
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  rating: number
  conditions: SurfConditions
  amenities: string[]
}

export interface SurfConditions {
  waveHeight: number
  windSpeed: number
  windDirection: string
  temperature: number
  swellDirection: string
  swellPeriod: number
  tide: 'Low' | 'Mid' | 'High'
  timestamp: string
}

export interface User {
  id: string
  name: string
  email: string
  favorites: string[]
}

export interface RouteInfo {
  distance: string
  duration: string
  tollsCost: number
  fuelCost: number
} 