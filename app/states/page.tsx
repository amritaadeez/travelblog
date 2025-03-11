import Image from 'next/image';
import Link from 'next/link';

const STATES = [
  {
    name: "Maharashtra",
    capital: "Mumbai",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200",
    places: [
      {
        name: "Mumbai",
        type: "Metropolitan",
        description: "Financial capital with rich culture",
        image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1200",
        slug: "mumbai"
      },
      {
        name: "Pune",
        type: "Cultural City",
        description: "Oxford of the East",
        image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1200",
        slug: "pune"
      },
      {
        name: "Aurangabad",
        type: "Historical",
        description: "Gateway to Ajanta & Ellora",
        image: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200",
        slug: "aurangabad"
      }
    ]
  },
  {
    name: "Rajasthan",
    capital: "Jaipur",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200",
    places: [
      {
        name: "Jaipur",
        type: "Heritage City",
        description: "The Pink City of India",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200",
        slug: "jaipur"
      },
      {
        name: "Udaipur",
        type: "Lake City",
        description: "City of Lakes",
        image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=1200",
        slug: "udaipur"
      },
      {
        name: "Jaisalmer",
        type: "Desert City",
        description: "The Golden City",
        image: "https://images.unsplash.com/photo-1624461776145-452fc83c480f?w=1200",
        slug: "jaisalmer"
      }
    ]
  },
  {
    name: "Kerala",
    capital: "Thiruvananthapuram",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200",
    places: [
      {
        name: "Alleppey",
        type: "Backwaters",
        description: "Venice of the East",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200",
        slug: "alleppey"
      },
      {
        name: "Munnar",
        type: "Hill Station",
        description: "Tea gardens and misty hills",
        image: "https://images.unsplash.com/photo-1582531325807-cc8fb4fa6df9?w=1200",
        slug: "munnar"
      },
      {
        name: "Kochi",
        type: "Coastal City",
        description: "Historic port city",
        image: "https://images.unsplash.com/photo-1590050752117-2c9a54a2464b?w=1200",
        slug: "kochi"
      }
    ]
  },
  {
    name: "Uttar Pradesh",
    capital: "Lucknow",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200",
    places: [
      {
        name: "Varanasi",
        type: "Spiritual City",
        description: "The spiritual capital of India",
        image: "https://images.unsplash.com/photo-1567516328339-3ceebac12925?w=1200",
        slug: "varanasi"
      },
      {
        name: "Agra",
        type: "Historical",
        description: "Home to the Taj Mahal",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200",
        slug: "agra"
      },
      {
        name: "Lucknow",
        type: "Cultural",
        description: "City of Nawabs",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200",
        slug: "lucknow"
      }
    ]
  }
];

export default function StatesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[40vh] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073"
          alt="India States"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4">States of India</h1>
            <p className="font-montserrat text-xl text-gray-200">Explore the diverse cultures and traditions</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {STATES.map((state) => (
          <div key={state.name} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-playfair text-3xl font-bold">{state.name}</h2>
              <span className="text-gray-500">Capital: {state.capital}</span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {state.places.map((place) => (
                <Link 
                  key={place.slug}
                  href={`/blog/${place.slug}`}
                  className="group"
                >
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={state.image}
                        alt={place.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-blue-600 mb-2">{place.type}</div>
                      <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:text-blue-600">
                        {place.name}
                      </h3>
                      <p className="text-gray-600">{place.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}