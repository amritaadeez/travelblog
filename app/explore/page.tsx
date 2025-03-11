import Image from 'next/image';
import Link from 'next/link';

const STATES_DATA = {
  'rajasthan': {
    name: "Rajasthan",
    description: "Land of Kings - Experience royal heritage, vibrant culture, and desert adventures",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200",
    majorCities: [
      {
        name: "Jaipur",
        type: "Heritage",
        description: "The Pink City - Royal palaces and historic forts",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200",
        slug: "jaipur",
        bestTimeToVisit: "October to March",
        rating: 4.8
      },
      {
        name: "Udaipur",
        type: "Lakes & Palaces",
        description: "City of Lakes - Romantic lakeside palaces",
        image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=1200",
        slug: "udaipur",
        bestTimeToVisit: "September to March",
        rating: 4.7
      },
      {
        name: "Jaisalmer",
        type: "Desert",
        description: "The Golden City - Sand dunes and desert culture",
        image: "https://images.unsplash.com/photo-1624461776145-452fc83c480f?w=1200",
        slug: "jaisalmer",
        bestTimeToVisit: "November to February",
        rating: 4.6
      }
    ],
    hiddenGems: [
      {
        name: "Kuldhara",
        type: "Ghost Town",
        description: "Abandoned village with mysterious history",
        image: "https://images.unsplash.com/photo-1624225761785-77a1644e7c93?w=1200",
        slug: "kuldhara",
        bestTimeToVisit: "October to March",
        rating: 4.3
      },
      {
        name: "Bundi",
        type: "Heritage",
        description: "Ancient step wells and medieval architecture",
        image: "https://images.unsplash.com/photo-1590587456714-49ab0f8a5c91?w=1200",
        slug: "bundi",
        bestTimeToVisit: "October to March",
        rating: 4.4
      }
    ]
  },
  'kerala': {
    name: "Kerala",
    description: "God's Own Country - Backwaters, beaches, and lush greenery",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200",
    majorCities: [
      {
        name: "Alleppey",
        type: "Backwaters",
        description: "Venice of the East - Houseboat experiences",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200",
        slug: "alleppey",
        bestTimeToVisit: "November to February",
        rating: 4.7
      },
      {
        name: "Munnar",
        type: "Hill Station",
        description: "Tea gardens and misty mountains",
        image: "https://images.unsplash.com/photo-1582531325807-cc8fb4fa6df9?w=1200",
        slug: "munnar",
        bestTimeToVisit: "September to March",
        rating: 4.8
      }
    ],
    hiddenGems: [
      {
        name: "Wayanad",
        type: "Wildlife",
        description: "Hidden forests and tribal culture",
        image: "https://images.unsplash.com/photo-1590050752117-2c9a54a2464b?w=1200",
        slug: "wayanad",
        bestTimeToVisit: "October to May",
        rating: 4.5
      }
    ]
  }
  // Add more states...
};

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Explore India</h1>
      
      {Object.entries(STATES_DATA).map(([stateSlug, state]) => (
        <div key={stateSlug} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold">{state.name}</h2>
            <Link 
              href={`/${stateSlug}`}
              className="text-blue-600 hover:underline"
            >
              View All
            </Link>
          </div>
          
          <p className="text-gray-600 mb-6">{state.description}</p>
          
          <h3 className="text-2xl font-semibold mb-4">Major Cities</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {state.majorCities.map((city) => (
              <Link 
                key={city.slug} 
                href={`/${stateSlug}/${city.slug}`}
                className="group"
              >
                <div className="relative h-48 mb-2 overflow-hidden rounded-lg">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="font-semibold text-lg">{city.name}</h4>
                <p className="text-sm text-gray-600">{city.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {city.type}
                  </span>
                  <span className="text-sm text-gray-600">
                    ★ {city.rating}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <h3 className="text-2xl font-semibold mb-4">Hidden Gems</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {state.hiddenGems.map((place) => (
              <Link 
                key={place.slug} 
                href={`/${stateSlug}/${place.slug}`}
                className="group"
              >
                <div className="relative h-48 mb-2 overflow-hidden rounded-lg">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h4 className="font-semibold text-lg">{place.name}</h4>
                <p className="text-sm text-gray-600">{place.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Hidden Gem
                  </span>
                  <span className="text-sm text-gray-600">
                    ★ {place.rating}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}