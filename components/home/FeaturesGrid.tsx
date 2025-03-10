export default function FeaturesGrid() {
  const features = [
    {
      icon: '🌊',
      title: 'Real-time Conditions',
      description: 'Get up-to-date wave heights, wind conditions, and tide information'
    },
    {
      icon: '🗺️',
      title: 'Interactive Maps',
      description: 'Explore surf spots with detailed maps and satellite imagery'
    },
    {
      icon: '📍',
      title: 'Route Planning',
      description: 'Calculate travel time, costs, and get turn-by-turn directions'
    },
    {
      icon: '📱',
      title: 'Spot Details',
      description: 'View difficulty levels, local tips, and amenities for each location'
    },
    {
      icon: '⭐',
      title: 'Favorites',
      description: 'Save your favorite spots for quick access'
    },
    {
      icon: '📊',
      title: 'Forecasts',
      description: 'Check multi-day forecasts to plan your sessions'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  )
} 