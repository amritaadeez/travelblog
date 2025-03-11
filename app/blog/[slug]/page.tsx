'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const CITY_THEMES = {
  'mumbai': {
    primaryColor: 'from-yellow-600 to-red-600',
    accentColor: 'text-yellow-500',
    headerImage: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1200',
    culturalSpots: [
      {
        name: "Gateway of India",
        description: "Historic arch monument built in 20th century",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200"
      },
      {
        name: "Marine Drive",
        description: "The Queen's Necklace - Mumbai's iconic waterfront",
        image: "https://images.unsplash.com/photo-1580581096469-8afb38d3dbd9?w=1200"
      },
      {
        name: "Dharavi",
        description: "One of the largest urban settlements, showcasing entrepreneurial spirit",
        image: "https://images.unsplash.com/photo-1488181356925-f62276544340?w=1200"
      }
    ],
    festivals: ["Ganesh Chaturthi", "Diwali", "Gudi Padwa"],
    cuisine: [
      {
        name: "Vada Pav",
        description: "Mumbai's favorite street food",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1200"
      },
      {
        name: "Pav Bhaji",
        description: "Iconic street food dish",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1200"
      }
    ]
  },
  'jaipur': {
    primaryColor: 'from-pink-600 to-orange-600',
    accentColor: 'text-pink-500',
    headerImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200',
    culturalSpots: [
      {
        name: "Hawa Mahal",
        description: "Palace of Winds, an iconic landmark",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200"
      },
      {
        name: "Amber Fort",
        description: "Majestic fort complex showcasing Rajput architecture",
        image: "https://images.unsplash.com/photo-1624225761785-77a1644e7c93?w=1200"
      },
      {
        name: "City Palace",
        description: "Royal residence and museum",
        image: "https://images.unsplash.com/photo-1590587456714-49ab0f8a5c91?w=1200"
      }
    ],
    festivals: ["Teej", "Gangaur", "Kite Festival"],
    cuisine: [
      {
        name: "Dal Baati Churma",
        description: "Traditional Rajasthani dish",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=1200"
      },
      {
        name: "Laal Maas",
        description: "Spicy meat curry",
        image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=1200"
      }
    ]
  },
  'varanasi': {
    primaryColor: 'from-orange-600 to-yellow-600',
    accentColor: 'text-orange-500',
    headerImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200',
    culturalSpots: [
      {
        name: "Dashashwamedh Ghat",
        description: "Famous for its spectacular Ganga Aarti ceremony",
        image: "https://images.unsplash.com/photo-1567516328339-3ceebac12925?w=1200"
      },
      {
        name: "Kashi Vishwanath Temple",
        description: "One of the most famous Hindu temples",
        image: "https://images.unsplash.com/photo-1627894006066-b45796ade85d?w=1200"
      },
      {
        name: "Sarnath",
        description: "Buddhist pilgrimage site",
        image: "https://images.unsplash.com/photo-1623677375459-4268f864d0c6?w=1200"
      }
    ],
    festivals: ["Dev Deepawali", "Ganga Mahotsav", "Bharat Milap"],
    cuisine: [
      {
        name: "Banarasi Paan",
        description: "Traditional betel leaf delicacy",
        image: "https://images.unsplash.com/photo-1628100525753-947aa11d0925?w=1200"
      },
      {
        name: "Kachori Sabzi",
        description: "Popular breakfast dish",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200"
      }
    ]
  },
  'kerala': {
    primaryColor: 'from-green-600 to-emerald-600',
    accentColor: 'text-green-500',
    headerImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200',
    culturalSpots: [
      {
        name: "Alleppey Backwaters",
        description: "Serene waterways and houseboats",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200"
      },
      {
        name: "Munnar Tea Gardens",
        description: "Vast tea plantations in the hills",
        image: "https://images.unsplash.com/photo-1582531325807-cc8fb4fa6df9?w=1200"
      },
      {
        name: "Fort Kochi",
        description: "Historic coastal area with Chinese fishing nets",
        image: "https://images.unsplash.com/photo-1590050752117-2c9a54a2464b?w=1200"
      }
    ],
    festivals: ["Onam", "Thrissur Pooram", "Vishu"],
    cuisine: [
      {
        name: "Kerala Fish Curry",
        description: "Traditional fish curry with coconut",
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=1200"
      },
      {
        name: "Appam with Stew",
        description: "Popular breakfast combination",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=1200"
      }
    ]
  }
  // Add more cities
};

export default function BlogPost() {
  const { slug } = useParams();
  const cityTheme = CITY_THEMES[slug as keyof typeof CITY_THEMES];

  return (
    <div className="min-h-screen">
      {/* Hero Section with City-specific Theme */}
      <div className={`relative h-[60vh] bg-gradient-to-r ${cityTheme?.primaryColor || 'from-blue-600 to-purple-600'}`}>
        <Image
          src={cityTheme?.headerImage || ''}
          alt={`${slug} cityscape`}
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 font-playfair">{slug}</h1>
            <p className="text-xl">Discover the soul of {slug}</p>
          </div>
        </div>
      </div>

      {/* Cultural Spots Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-playfair">Cultural Heritage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cityTheme?.culturalSpots.map((spot, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
                  <p className="text-gray-600">{spot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-playfair">Festivals & Celebrations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cityTheme?.festivals.map((festival, index) => (
              <div key={index} className={`p-6 rounded-lg ${cityTheme.accentColor}`}>
                <h3 className="text-xl font-semibold">{festival}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Cuisine Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-playfair">Local Cuisine</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cityTheme?.cuisine.map((dish, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}