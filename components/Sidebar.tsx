'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import SearchBar from './SearchBar'
import SpotList from './SpotList'
import FilterSection from './FilterSection'
import { SurfSpot } from '@/types'

interface SidebarProps {
  spots: SurfSpot[]
  selectedSpot?: string
  onSpotSelect: (spotId: string) => void
}

export default function Sidebar({ spots, selectedSpot, onSpotSelect }: SidebarProps) {
  const { data: session } = useSession()
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    difficulty: [] as string[],
    minRating: 0,
    amenities: [] as string[],
  })

  const filteredSpots = spots.filter(spot => {
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         spot.location.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesDifficulty = filters.difficulty.length === 0 || 
                             filters.difficulty.includes(spot.difficulty)
    
    const matchesRating = spot.rating >= filters.minRating
    
    const matchesAmenities = filters.amenities.length === 0 ||
                            filters.amenities.every(a => spot.amenities.includes(a))
    
    return matchesSearch && matchesDifficulty && matchesRating && matchesAmenities
  })

  return (
    <div className="w-96 h-screen bg-white shadow-lg flex flex-col">
      <div className="p-4 border-b">
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </div>
      
      <div className="p-4 border-b">
        <FilterSection
          filters={filters}
          onChange={setFilters}
        />
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <SpotList 
          spots={filteredSpots}
          selectedSpot={selectedSpot}
          onSpotSelect={onSpotSelect}
          isAuthenticated={!!session}
        />
      </div>
    </div>
  )
} 