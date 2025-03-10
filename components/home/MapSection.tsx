'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      })

      const { Map } = await loader.importLibrary('maps')
      
      if (mapRef.current) {
        new Map(mapRef.current, {
          center: { lat: 43.2965, lng: -2.3694 }, // Mundaka, Spain
          zoom: 4,
          mapTypeId: 'terrain',
          styles: [
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
            },
            // Add more custom styles as needed
          ],
        })
      }
    }

    initMap()
  }, [])

  return <div ref={mapRef} className="w-full h-full" />
} 