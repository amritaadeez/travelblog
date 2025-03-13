export const CATEGORIES = [
  {
    id: 1,
    name: "Destinations",
    description: "Explore popular and hidden gem locations around the world",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&auto=format&fit=crop&q=60",
    slug: "destinations",
    count: 45,
    subcategories: [
      {
        name: "Heritage Sites",
        places: [
          {
            name: "Taj Mahal",
            location: "Agra, Uttar Pradesh",
            description: "One of the Seven Wonders of the World, this ivory-white marble mausoleum is a testament to eternal love.",
            image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200",
            bestTime: "October to March",
            rating: 4.9
          },
          {
            name: "Hampi",
            location: "Karnataka",
            description: "Ancient ruins of a vast empire, featuring stunning architecture and boulder-strewn landscapes.",
            image: "https://images.unsplash.com/photo-1628293953960-06f5fe4180c0?w=1200",
            bestTime: "November to February",
            rating: 4.7
          },
          {
            name: "Khajuraho Temples",
            location: "Madhya Pradesh",
            description: "Famous for their nagara-style architectural symbolism and erotic sculptures.",
            image: "https://images.unsplash.com/photo-1590050752117-2c9a54a2464b?w=1200",
            bestTime: "October to March",
            rating: 4.6
          }
        ]
      },
      {
        name: "Hill Stations",
        places: [
          {
            name: "Darjeeling",
            location: "West Bengal",
            description: "Famous for its tea plantations, toy train, and views of Mount Kanchenjunga.",
            image: "https://images.unsplash.com/photo-1544634076-a90160ddf434?w=1200",
            bestTime: "March to May, October to November",
            rating: 4.5
          },
          {
            name: "Shimla",
            location: "Himachal Pradesh",
            description: "Former summer capital of British India, known for its colonial architecture and Mall Road.",
            image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990fea?w=1200",
            bestTime: "March to June",
            rating: 4.6
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Travel Tips",
    description: "Expert advice and practical travel guidance",
    image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1200&auto=format&fit=crop&q=60",
    slug: "tips",
    count: 32,
    categories: [
      {
        name: "Transportation",
        guides: [
          {
            title: "Train Travel in India",
            description: "Complete guide to booking tickets, classes, and navigating Indian Railways",
            topics: ["Booking Systems", "Train Classes", "Popular Routes", "Safety Tips"]
          },
          {
            title: "Local Transportation",
            description: "Guide to using local transport in major cities",
            topics: ["Metro Systems", "Auto Rickshaws", "Local Buses", "Taxi Services"]
          }
        ]
      },
      {
        name: "Accommodation",
        guides: [
          {
            title: "Where to Stay",
            description: "From luxury hotels to budget hostels",
            topics: ["Hotel Booking", "Homestays", "Hostels", "Heritage Properties"]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Food & Culture",
    description: "Culinary adventures and cultural experiences",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=60",
    slug: "food",
    count: 28,
    sections: [
      {
        name: "Regional Cuisines",
        cuisines: [
          {
            region: "North Indian",
            dishes: [
              {
                name: "Butter Chicken",
                origin: "Delhi",
                description: "Creamy, tomato-based curry with tender chicken",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1200"
              },
              {
                name: "Dal Makhani",
                origin: "Punjab",
                description: "Creamy black lentils cooked overnight",
                image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=1200"
              }
            ]
          },
          {
            region: "South Indian",
            dishes: [
              {
                name: "Masala Dosa",
                origin: "Karnataka",
                description: "Crispy fermented crepe with spiced potato filling",
                image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=1200"
              }
            ]
          }
        ]
      },
      {
        name: "Festivals",
        events: [
          {
            name: "Diwali",
            description: "Festival of lights celebrating the victory of light over darkness",
            time: "October/November",
            traditions: ["Lighting diyas", "Rangoli making", "Traditional sweets"]
          },
          {
            name: "Holi",
            description: "Festival of colors welcoming spring",
            time: "March",
            traditions: ["Color playing", "Traditional snacks", "Folk music"]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Adventure",
    description: "Thrilling experiences and outdoor activities",
    image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&auto=format&fit=crop&q=60",
    slug: "adventure",
    count: 35,
    activities: [
      {
        type: "Trekking",
        locations: [
          {
            name: "Valley of Flowers",
            location: "Uttarakhand",
            difficulty: "Moderate",
            duration: "6-8 days",
            bestTime: "July to September",
            description: "High-altitude Himalayan valley famous for its meadows of endemic alpine flowers",
            image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1200"
          },
          {
            name: "Chadar Trek",
            location: "Ladakh",
            difficulty: "Extreme",
            duration: "9-10 days",
            bestTime: "January to February",
            description: "Trek on the frozen Zanskar River",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200"
          }
        ]
      },
      {
        type: "Water Sports",
        locations: [
          {
            name: "Rishikesh",
            location: "Uttarakhand",
            activities: ["River Rafting", "Kayaking", "Cliff Jumping"],
            bestTime: "September to June",
            description: "Adventure capital of India, offering various water sports on the Ganges",
            image: "https://images.unsplash.com/photo-1544634076-a90160ddf434?w=1200"
          },
          {
            name: "Andaman Islands",
            location: "Andaman & Nicobar",
            activities: ["Scuba Diving", "Snorkeling", "Sea Walking"],
            bestTime: "November to May",
            description: "Crystal clear waters with rich marine life",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Wildlife",
    description: "Explore India's diverse wildlife and national parks",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200",
    slug: "wildlife",
    count: 25,
    parks: [
      {
        name: "Jim Corbett National Park",
        location: "Uttarakhand",
        animals: ["Bengal Tiger", "Asian Elephant", "Leopard"],
        bestTime: "November to June",
        safariTypes: ["Jeep Safari", "Elephant Safari"],
        image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200"
      },
      {
        name: "Ranthambore National Park",
        location: "Rajasthan",
        animals: ["Bengal Tiger", "Sloth Bear", "Indian Leopard"],
        bestTime: "October to June",
        safariTypes: ["Canter Safari", "Jeep Safari"],
        image: "https://images.unsplash.com/photo-1575872235826-d894dce78fae?w=1200"
      }
    ]
  }
];