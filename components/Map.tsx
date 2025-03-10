'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { SurfSpot } from '@/types'
import SpotInfoWindow from './SpotInfoWindow'

interface MapProps {
  spots: SurfSpot[]
  selectedSpot?: string
  onSpotSelect: (spotId: string) => void
}

export default function Map({ spots, selectedSpot, onSpotSelect }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null)
  const markersRef = useRef<{ [key: string]: google.maps.Marker }>({})

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: 'weekly',
        libraries: ['places'],
      })

      const { Map } = await loader.importLibrary('maps')
      
      if (mapRef.current) {
        const mapInstance = new Map(mapRef.current, {
          center: { lat: 43.2965, lng: -2.3694 },
          zoom: 12,
          mapTypeId: 'terrain',
          styles: [
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
            },
            // Add more custom styles here
          ],
        })
        setMap(mapInstance)
        setInfoWindow(new google.maps.InfoWindow())
      }
    }

    initMap()
  }, [])

  useEffect(() => {
    if (!map || !spots.length) return

    // Clear existing markers
    Object.values(markersRef.current).forEach(marker => marker.setMap(null))
    markersRef.current = {}

    // Add markers for each spot
    spots.forEach(spot => {
      const marker = new google.maps.Marker({
        position: spot.coordinates,
        map,
        title: spot.name,
        icon: {
          url: `/markers/${spot.difficulty.toLowerCase()}.png`,
          scaledSize: new google.maps.Size(32, 32),
        },
      })

      marker.addListener('click', () => {
        onSpotSelect(spot.id)
      })

      markersRef.current[spot.id] = marker
    })
  }, [map, spots, onSpotSelect])

  useEffect(() => {
    if (!map || !infoWindow || !selectedSpot) return

    const spot = spots.find(s => s.id === selectedSpot)
    if (!spot) return

    const marker = markersRef.current[selectedSpot]
    if (!marker) return

    infoWindow.setContent(SpotInfoWindow({ spot }))
    infoWindow.open(map, marker)

    map.panTo(spot.coordinates)
  }, [selectedSpot, map, infoWindow, spots])

  return <div ref={mapRef} className="w-full h-full" />
} 