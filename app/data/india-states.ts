export interface City {
  name: string;
  type: string;
  description: string;
  image: string;
  slug: string;
  bestTimeToVisit: string;
  rating: number;
  famousFor?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface State {
  name: string;
  description: string;
  capital: string;
  image: string;
  slug: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'Northeast' | 'Union Territory';
  majorCities: City[];
  hiddenGems: City[];
}

export const INDIA_STATES: State[] = [
  {
    name: "Andhra Pradesh",
    description: "Land of ancient temples, pristine beaches, and rich cultural heritage",
    capital: "Amaravati",
    image: "https://i.pinimg.com/736x/7a/01/2e/7a012ea7a6a233161a18ef84467a8929.jpg",
    slug: "andhra-pradesh",
    region: "South",
    majorCities: [
      {
        name: "Visakhapatnam",
        type: "Coastal City",
        description: "Major port city known for its beaches and industrial harbor",
        image: "https://i.pinimg.com/736x/c8/44/dc/c844dc8a778947e24db06f7c75d43dd6.jpg",
        slug: "visakhapatnam",
        bestTimeToVisit: "October to March",
        rating: 4.5,
        famousFor: ["RK Beach", "Submarine Museum", "Kailasagiri"]
      },
      {
        name: "Tirupati",
        type: "Spiritual",
        description: "Famous temple town and major pilgrimage center",
        image: "https://i.pinimg.com/736x/d2/8a/65/d28a65f34100b6cd92f271400f127852.jpg",
        slug: "tirupati",
        bestTimeToVisit: "September to March",
        rating: 4.7,
        famousFor: ["Tirumala Temple", "Sri Venkateswara Temple", "ISKCON Temple"]
      }
    ],
    hiddenGems: [
      {
        name: "Araku Valley",
        type: "Hill Station",
        description: "Scenic valley known for coffee plantations and tribal culture",
        image: "https://i.pinimg.com/736x/d7/8a/84/d78a84ac0c63cdc5cfa56fc7cf0d0b08.jpg",
        slug: "araku-valley",
        bestTimeToVisit: "October to March",
        rating: 4.3
      }
    ]
  },
  {
    name: "Arunachal Pradesh",
    description: "Land of the Rising Sun",
    capital: "Itanagar",
    image: "https://i.pinimg.com/736x/e0/8f/ba/e08fbaa3d8b4fc6058c5d9a5b0751862.jpg",
    slug: "arunachal-pradesh",
    region: "Northeast",
    majorCities: [
      {
        name: "Itanagar",
        type: "Capital",
        description: "Gateway to Arunachal",
        image: "https://i.pinimg.com/736x/24/1f/b8/241fb8d3b7f843eb1ff94e85102ef63a.jpg",
        slug: "itanagar",
        bestTimeToVisit: "October to March",
        rating: 4.3,
        famousFor: ["Ita Fort", "Gompa Buddhist Temple", "State Museum"]
      },
      {
        name: "Tawang",
        type: "Spiritual",
        description: "Buddhist Cultural Center",
        image: "https://i.pinimg.com/736x/d0/e6/90/d0e690857cc6b8081691806336d949cb.jpg",
        slug: "tawang",
        bestTimeToVisit: "March to October",
        rating: 4.8,
        famousFor: ["Tawang Monastery", "War Memorial", "Sela Pass"]
      }
    ],
    hiddenGems: [
      {
        name: "Ziro Valley",
        type: "Cultural",
        description: "Home to Apatani Tribe",
        image: "https://i.pinimg.com/736x/60/e6/8d/60e68d00c36e3cc00b1770a52c22c888.jpg",
        slug: "ziro",
        bestTimeToVisit: "September to March",
        rating: 4.6
      }
    ]
  },
  {
    name: "Assam",
    description: "Land of tea gardens, one-horned rhinos, and the mighty Brahmaputra",
    capital: "Dispur",
    image: "https://i.pinimg.com/736x/67/2a/5b/672a5b610c2205cfaea9bfc1d52d9f3e.jpg",
    slug: "assam",
    region: "Northeast",
    majorCities: [
      {
        name: "Guwahati",
        type: "Metropolitan",
        description: "Gateway to Northeast India with ancient temples",
        image: "https://i.pinimg.com/736x/dc/2f/d2/dc2fd2f8316fbdab6b868f40379a8233.jpg",
        slug: "guwahati",
        bestTimeToVisit: "October to March",
        rating: 4.4,
        famousFor: ["Kamakhya Temple", "Brahmaputra River", "Umananda Temple"]
      },
      {
        name: "Kaziranga",
        type: "Wildlife",
        description: "Home to two-thirds of world's one-horned rhinoceros",
        image: "https://i.pinimg.com/736x/8b/8c/63/8b8c63daf97add3cf2be57e41040c149.jpg",
        slug: "kaziranga",
        bestTimeToVisit: "November to April",
        rating: 4.8,
        famousFor: ["One-horned Rhinoceros", "Tiger Reserve", "Bird Sanctuary"]
      }
    ],
    hiddenGems: [
      {
        name: "Majuli",
        type: "Cultural",
        description: "World's largest river island with unique Assamese culture",
        image: "https://i.pinimg.com/736x/86/53/7f/86537fb5e1b56360065bbb0e71f0653b.jpg",
        slug: "majuli",
        bestTimeToVisit: "October to March",
        rating: 4.5
      }
    ]
  },
  {
    name: "Bihar",
    description: "Ancient land of spirituality and knowledge",
    capital: "Patna",
    image: "https://i.pinimg.com/736x/4f/ba/8a/4fba8a877c85de8a6ed3d791986fc7cc.jpg",
    slug: "bihar",
    region: "East",
    majorCities: [
      {
        name: "Bodh Gaya",
        type: "Spiritual",
        description: "Place where Buddha attained enlightenment",
        image: "https://i.pinimg.com/736x/9a/14/bc/9a14bc9751e32c31c8d7aea0aad2dfd4.jpg",
        slug: "bodh-gaya",
        bestTimeToVisit: "October to March",
        rating: 4.7,
        famousFor: ["Mahabodhi Temple", "Great Buddha Statue", "Thai Temple"]
      },
      {
        name: "Chapra",
        type: "Historical",
        description: "Historic city known for its cultural heritage and Chhath celebrations",
        image: "https://i.pinimg.com/736x/91/40/d8/9140d856e5bf15ca9083e1764aea5cbe.jpg", // Replace with actual Pinterest image of Chapra Ghat
        slug: "chapra",
        bestTimeToVisit: "October to March",
        rating: 4.2,
        famousFor: ["Chhath Ghat", "Maharaji Darbar", "Ambedkar Park"]
      }
    ],
    hiddenGems: [
      {
        name: "Rajgir",
        type: "Historical",
        description: "Ancient capital with hot springs and Buddhist sites",
        image: "https://i.pinimg.com/736x/7c/59/2b/7c592b623e07cb7645b1822c39a28cd3.jpg",
        slug: "rajgir",
        bestTimeToVisit: "October to March",
        rating: 4.3
      }
    ]
  },
  {
    name: "Chhattisgarh",
    description: "Rich in natural resources and tribal culture",
    capital: "Raipur",
    image: "https://i.pinimg.com/736x/7a/29/ef/7a29ef8c69467de382e7e74e12f73fc5.jpg",
    slug: "chhattisgarh",
    region: "Central",
    majorCities: [
      {
        name: "Raipur",
        type: "Industrial",
        description: "Modern city with rich cultural heritage",
        image: "https://i.pinimg.com/736x/79/61/b6/7961b60df414b3009d0a7af422548e0a.jpg",
        slug: "raipur",
        bestTimeToVisit: "October to March",
        rating: 4.2,
        famousFor: ["Mahant Ghasidas Museum", "Purkhouti Muktangan", "Nandan Van"]
      },
      {
        name: "Jagdalpur",
        type: "Cultural",
        description: "Gateway to Bastar region and tribal culture",
        image: "https://i.pinimg.com/736x/13/b6/59/13b659afde8d64de17c84621a5a8a8ce.jpg",
        slug: "jagdalpur",
        bestTimeToVisit: "October to March",
        rating: 4.3,
        famousFor: ["Chitrakote Falls", "Bastar Palace", "Anthropological Museum"]
      }
    ],
    hiddenGems: [
      {
        name: "Tirathgarh Falls",
        type: "Natural",
        description: "Multi-tiered waterfall in serene surroundings",
        image: "https://i.pinimg.com/736x/f1/80/ab/f180ab2d25bc3bd7de6d4a0a3de2a663.jpg",
        slug: "tirathgarh-falls",
        bestTimeToVisit: "July to March",
        rating: 4.4
      }
    ]
  },
  {
    name: "Goa",
    description: "India's beach paradise with Portuguese heritage",
    capital: "Panaji",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    slug: "goa",
    region: "West",
    majorCities: [
      {
        name: "Panaji",
        type: "Capital",
        description: "Cultural capital with Portuguese architecture",
        image: "https://i.pinimg.com/736x/16/2f/15/162f156c1882ef45285c9f081c491b26.jpg",
        slug: "panaji",
        bestTimeToVisit: "November to February",
        rating: 4.5,
        famousFor: ["Church of Our Lady of Immaculate Conception", "Fontainhas", "Casino Cruises"]
      },
      {
        name: "Calangute",
        type: "Beach",
        description: "Popular beach destination known as the 'Queen of Beaches'",
        image: "https://i.pinimg.com/736x/7c/36/7f/7c367f3b73b2b93604219530631e271b.jpg",
        slug: "calangute",
        bestTimeToVisit: "November to February",
        rating: 4.3,
        famousFor: ["Calangute Beach", "Water Sports", "Nightlife"]
      }
    ],
    hiddenGems: [
      {
        name: "Divar Island",
        type: "Cultural",
        description: "Peaceful island with Portuguese-era churches",
        image: "https://i.pinimg.com/736x/e1/21/fd/e121fd9cdc793cdab02200bf2e599eb5.jpg",
        slug: "divar-island",
        bestTimeToVisit: "November to February",
        rating: 4.2
      }
    ]
  },
  {
    name: "Gujarat",
    description: "Vibrant culture and rich heritage",
    capital: "Gandhinagar",
    image: "https://i.pinimg.com/736x/23/57/e6/2357e6c402df38539713f52ffc56b48c.jpg",
    slug: "gujarat",
    region: "West",
    majorCities: [
      {
        name: "Ahmedabad",
        type: "Metropolitan",
        description: "First UNESCO World Heritage City in India",
        image: "https://i.pinimg.com/736x/f5/79/7f/f5797f9e3c1cb37057e8d3683db2459b.jpg",
        slug: "ahmedabad",
        bestTimeToVisit: "October to March",
        rating: 4.6,
        famousFor: ["Sabarmati Ashram", "Sidi Saiyyed Mosque", "Adalaj Stepwell"]
      },
      {
        name: "Vadodara",
        type: "Cultural",
        description: "Cultural Capital of Gujarat",
        image: "https://i.pinimg.com/736x/47/50/c4/4750c4bca1e2e3d296b19dd8c279df9e.jpg",
        slug: "vadodara",
        bestTimeToVisit: "October to March",
        rating: 4.4,
        famousFor: ["Laxmi Vilas Palace", "Sayaji Gardens", "Kirti Mandir"]
      }
    ],
    hiddenGems: [
      {
        name: "Dholavira",
        type: "Archaeological",
        description: "Ancient Indus Valley Civilization site",
        image: "https://i.pinimg.com/736x/6c/cd/f9/6ccdf930311899328604d8f0d104aba5.jpg",
        slug: "dholavira",
        bestTimeToVisit: "October to March",
        rating: 4.5
      }
    ]
  },
  {
    name: "Haryana",
    description: "Land of agriculture and industrial growth",
    capital: "Chandigarh",
    image: "https://i.pinimg.com/736x/51/65/cb/5165cb7a56866d151fddd41e714dbca4.jpg",
    slug: "haryana",
    region: "North",
    majorCities: [
      {
        name: "Gurugram",
        type: "Metropolitan",
        description: "Technology and business hub",
        image: "https://i.pinimg.com/736x/3c/3d/10/3c3d10029c38098b94966a62a3cfa3a0.jpg",
        slug: "gurugram",
        bestTimeToVisit: "October to March",
        rating: 4.5,
        famousFor: ["Cyber Hub", "Kingdom of Dreams", "Ambience Mall"]
      },
      {
        name: "Kurukshetra",
        type: "Historical",
        description: "Ancient battlefield of Mahabharata",
        image: "https://i.pinimg.com/736x/5e/38/ff/5e38ff442f05e068ca8e299d59a2636c.jpg",
        slug: "kurukshetra",
        bestTimeToVisit: "October to March",
        rating: 4.3,
        famousFor: ["Brahma Sarovar", "Krishna Museum", "Jyotisar"]
      }
    ],
    hiddenGems: [
      {
        name: "Morni Hills",
        type: "Natural",
        description: "Only hill station in Haryana",
        image: "https://i.pinimg.com/736x/96/e0/78/96e078c6814a539a5350ddce3e7494bb.jpg",
        slug: "morni-hills",
        bestTimeToVisit: "October to March",
        rating: 4.1
      }
    ]
  },
  {
    name: "Himachal Pradesh",
    description: "Land of snow-capped mountains and adventure",
    capital: "Shimla",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    slug: "himachal-pradesh",
    region: "North",
    majorCities: [
      {
        name: "Shimla",
        type: "Hill Station",
        description: "Former summer capital of British India",
        image: "https://i.pinimg.com/736x/36/d8/74/36d874809e17991213e45b57645f91fd.jpg",
        slug: "shimla",
        bestTimeToVisit: "March to June",
        rating: 4.7,
        famousFor: ["The Ridge", "Mall Road", "Jakhu Temple"]
      },
      {
        name: "Manali",
        type: "Adventure",
        description: "Popular tourist destination for adventure sports",
        image: "https://i.pinimg.com/736x/22/1d/94/221d9472a1b9e7ee21d1d5936b9686c0.jpg",
        slug: "manali",
        bestTimeToVisit: "October to June",
        rating: 4.8,
        famousFor: ["Rohtang Pass", "Hadimba Temple", "Solang Valley"]
      }
    ],
    hiddenGems: [
      {
        name: "Chitkul",
        type: "Remote Village",
        description: "Last inhabited village near Indo-Tibet border",
        image: "https://i.pinimg.com/736x/21/5c/14/215c143cbe5f5729dedc7dd10e3676b5.jpg",
        slug: "chitkul",
        bestTimeToVisit: "April to October",
        rating: 4.6
      }
    ]
  },
  {
    name: "Karnataka",
    description: "Land of royal heritage and technology hub",
    capital: "Bengaluru",
    image: "https://i.pinimg.com/736x/08/f0/28/08f028fa553a538ecbec84d8e6c21e5e.jpg",
    slug: "karnataka",
    region: "South",
    majorCities: [
      {
        name: "Bengaluru",
        type: "Metropolitan",
        description: "Silicon Valley of India",
        image: "https://i.pinimg.com/736x/55/06/0b/55060bd7671ef829512aba802b9b6b06.jpg",
        slug: "bengaluru",
        bestTimeToVisit: "October to February",
        rating: 4.7,
        famousFor: ["Cubbon Park", "MG Road", "Lalbagh Botanical Garden"]
      },
      {
        name: "Mysuru",
        type: "Heritage",
        description: "City of Palaces",
        image: "https://i.pinimg.com/736x/df/6b/b0/df6bb0867220d1f6ba22c23f2995da06.jpg",
        slug: "mysuru",
        bestTimeToVisit: "October to February",
        rating: 4.6,
        famousFor: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"]
      }
    ],
    hiddenGems: [
      {
        name: "Hampi",
        type: "Historical",
        description: "Ancient ruins of Vijayanagara Empire",
        image: "https://i.pinimg.com/736x/0f/48/43/0f48434ca2c9c608972730d5551e77d8.jpg",
        slug: "hampi",
        bestTimeToVisit: "October to March",
        rating: 4.8
      }
    ]
  },
  {
    name: "Kerala",
    description: "God's Own Country",
    capital: "Thiruvananthapuram",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    slug: "kerala",
    region: "South",
    majorCities: [
      {
        name: "Kochi",
        type: "Metropolitan",
        description: "Queen of Arabian Sea",
        image: "https://i.pinimg.com/736x/66/58/f2/6658f20a13fa2af60591b36db7706f47.jpg",
        slug: "kochi",
        bestTimeToVisit: "October to March",
        rating: 4.7,
        famousFor: ["Chinese Fishing Nets", "Fort Kochi", "Mattancherry Palace"]
      },
      {
        name: "Munnar",
        type: "Hill Station",
        description: "Tea Garden Hill Station",
        image: "https://i.pinimg.com/736x/99/ba/bd/99babd708b8e575f36bbdd233f630f1b.jpg",
        slug: "munnar",
        bestTimeToVisit: "September to March",
        rating: 4.8,
        famousFor: ["Tea Gardens", "Eravikulam National Park", "Top Station"]
      }
    ],
    hiddenGems: [
      {
        name: "Wayanad",
        type: "Natural",
        description: "Green Paradise",
        image: "https://i.pinimg.com/736x/57/c2/16/57c2161248f72da97544a43a9a5ee457.jpg",
        slug: "wayanad",
        bestTimeToVisit: "October to May",
        rating: 4.6
      }
    ]
  },
  {
    name: "Maharashtra",
    description: "Land of diverse culture and economic powerhouse",
    capital: "Mumbai",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
    slug: "maharashtra",
    region: "West",
    majorCities: [
      {
        name: "Mumbai",
        type: "Metropolitan",
        description: "Financial capital of India",
        image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445",
        slug: "mumbai",
        bestTimeToVisit: "October to February",
        rating: 4.8,
        famousFor: ["Gateway of India", "Marine Drive", "Bollywood"]
      },
      {
        name: "Pune",
        type: "Educational Hub",
        description: "Oxford of the East",
        image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1",
        slug: "pune",
        bestTimeToVisit: "October to February",
        rating: 4.6,
        famousFor: ["Shaniwar Wada", "Aga Khan Palace", "Osho Ashram"]
      }
    ],
    hiddenGems: [
      {
        name: "Lonar Crater",
        type: "Natural",
        description: "World's third-largest meteorite crater",
        image: "https://i.pinimg.com/736x/a5/5b/62/a55b6201396d1b5815de6a0e9e83d314.jpg",
        slug: "lonar-crater",
        bestTimeToVisit: "October to March",
        rating: 4.4
      }
    ]
  },
  {
    name: "Rajasthan",
    description: "Land of Kings and vibrant desert culture",
    capital: "Jaipur",
    image: "https://i.pinimg.com/736x/7c/f9/a4/7cf9a4e798828e604ba5bc7f3ef2bec4.jpg",
    slug: "rajasthan",
    region: "North",
    majorCities: [
      {
        name: "Jaipur",
        type: "Metropolitan",
        description: "The Pink City",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
        slug: "jaipur",
        bestTimeToVisit: "October to March",
        rating: 4.8,
        famousFor: ["Hawa Mahal", "Amber Fort", "City Palace"]
      },
      {
        name: "Udaipur",
        type: "Historical",
        description: "City of Lakes",
        image: "https://i.pinimg.com/736x/16/66/fd/1666fd7fc9d47153c61582bc2b0fa029.jpg",
        slug: "udaipur",
        bestTimeToVisit: "October to March",
        rating: 4.7,
        famousFor: ["Lake Palace", "City Palace", "Lake Pichola"]
      }
    ],
    hiddenGems: [
      {
        name: "Bundi",
        type: "Historical",
        description: "Town of stepwells and palaces",
        image: "https://i.pinimg.com/736x/6c/13/de/6c13defdb65e006fc944b3edf3cbfadb.jpg",
        slug: "bundi",
        bestTimeToVisit: "October to March",
        rating: 4.3
      }
    ]
  },
  {
    name: "Tamil Nadu",
    description: "Land of temples and rich cultural heritage",
    capital: "Chennai",
    image: "https://i.pinimg.com/736x/ec/50/20/ec50201edee5fe7b6425c98db6fe8806.jpg",
    slug: "tamil-nadu",
    region: "South",
    majorCities: [
      {
        name: "Chennai",
        type: "Metropolitan",
        description: "Gateway to South India",
        image: "https://i.pinimg.com/736x/19/cd/8e/19cd8ee682d04d2e6e7e9f114d919de6.jpg",
        slug: "chennai",
        bestTimeToVisit: "November to February",
        rating: 4.5,
        famousFor: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"]
      },
      {
        name: "Madurai",
        type: "Temple City",
        description: "City of Temples",
        image: "https://i.pinimg.com/736x/0e/f1/e7/0ef1e749b75f4367dcc21427820bc91e.jpg",
        slug: "madurai",
        bestTimeToVisit: "October to March",
        rating: 4.7,
        famousFor: ["Meenakshi Temple", "Thirumalai Nayakkar Palace", "Gandhi Museum"]
      }
    ],
    hiddenGems: [
      {
        name: "Chettinad",
        type: "Cultural",
        description: "Region famous for architecture and cuisine",
        image: "https://i.pinimg.com/736x/e2/4c/42/e24c42baf1bdd056fa98d00f78829923.jpg",
        slug: "chettinad",
        bestTimeToVisit: "October to March",
        rating: 4.3
      }
    ]
  },
  {
    name: "Telangana",
    description: "Land of rich history and technological advancement",
    capital: "Hyderabad",
    image: "https://i.pinimg.com/736x/b8/d0/6d/b8d06d9cea5a9831857e093f3403de37.jpg",
    slug: "telangana",
    region: "South",
    majorCities: [
      {
        name: "Hyderabad",
        type: "Metropolitan",
        description: "City of Pearls and Technology Hub",
        image: "https://i.pinimg.com/736x/5a/98/d8/5a98d84ce6039606075313cf3780049c.jpg",
        slug: "hyderabad",
        bestTimeToVisit: "October to February",
        rating: 4.7,
        famousFor: ["Charminar", "Golconda Fort", "Ramoji Film City"]
      },
      {
        name: "Warangal",
        type: "Historical",
        description: "Ancient capital of Kakatiya Dynasty",
        image: "https://i.pinimg.com/736x/66/88/7f/66887f360621b2fe80768ea4985762ce.jpg",
        slug: "warangal",
        bestTimeToVisit: "October to March",
        rating: 4.4,
        famousFor: ["Warangal Fort", "Thousand Pillar Temple", "Ramappa Temple"]
      }
    ],
    hiddenGems: [
      {
        name: "Nagarjuna Sagar",
        type: "Dam",
        description: "World's largest masonry dam",
        image: "https://i.pinimg.com/736x/28/cf/48/28cf48b3710e12193cc46d23e6ac7b20.jpg",
        slug: "nagarjuna-sagar",
        bestTimeToVisit: "July to March",
        rating: 4.3
      }
    ]
  },
  {
    name: "Uttar Pradesh",
    description: "Heart of Indian culture and spirituality",
    capital: "Lucknow",
    image: "https://i.pinimg.com/736x/07/f4/ab/07f4ab0f8d622bbedd6817994e3f1847.jpg",
    slug: "uttar-pradesh",
    region: "North",
    majorCities: [
      {
        name: "Agra",
        type: "Historical",
        description: "City of the Taj Mahal",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
        slug: "agra",
        bestTimeToVisit: "October to March",
        rating: 4.8,
        famousFor: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"]
      },
      {
        name: "Varanasi",
        type: "Spiritual",
        description: "Oldest living city in the world",
        image: "https://i.pinimg.com/736x/5d/3d/e0/5d3de097a14814f33c35a752ce8406fd.jpg",
        slug: "varanasi",
        bestTimeToVisit: "October to March",
        rating: 4.7,
        famousFor: ["Ghats", "Kashi Vishwanath Temple", "Evening Aarti"]
      }
    ],
    hiddenGems: [
      {
        name: "Chitrakoot",
        type: "Spiritual",
        description: "Associated with Lord Ram's exile",
        image: "https://i.pinimg.com/736x/65/4e/9c/654e9ce5f797cd1010810fb79199e51b.jpg",
        slug: "chitrakoot",
        bestTimeToVisit: "October to March",
        rating: 4.2
      }
    ]
  },
  {
    name: "West Bengal",
    description: "Cultural capital of India with rich heritage",
    capital: "Kolkata",
    image: "https://i.pinimg.com/736x/69/61/ea/6961eab3ac242dded7565be086c2c414.jpg",
    slug: "west-bengal",
    region: "East",
    majorCities: [
      {
        name: "Kolkata",
        type: "Metropolitan",
        description: "City of Joy",
        image: "https://i.pinimg.com/736x/8f/c0/53/8fc05302e38e2dc425c42a4741744a4e.jpg",
        slug: "kolkata",
        bestTimeToVisit: "October to March",
        rating: 4.6,
        famousFor: ["Victoria Memorial", "Howrah Bridge", "Park Street"]
      },
      {
        name: "Darjeeling",
        type: "Hill Station",
        description: "Queen of Hills",
        image: "https://i.pinimg.com/736x/cf/e1/3a/cfe13a1c4a31c9d4e93e5a649519c6e6.jpg",
        slug: "darjeeling",
        bestTimeToVisit: "March to May",
        rating: 4.7,
        famousFor: ["Tea Gardens", "Toy Train", "Tiger Hill"]
      }
    ],
    hiddenGems: [
      {
        name: "Sundarbans",
        type: "Natural",
        description: "Largest mangrove forest in the world",
        image: "https://i.pinimg.com/736x/43/80/09/43800936a0f99d7ee545e5893700d846.jpg",
        slug: "sundarbans",
        bestTimeToVisit: "October to March",
        rating: 4.5
      }
    ]
  },
  {
    name: "Delhi",
    description: "Capital territory blending old and new India",
    capital: "New Delhi",
    image: "https://i.pinimg.com/736x/28/47/2c/28472c4f2b5bd35d9d9fa8dc9c59206a.jpg",
    slug: "delhi",
    region: "Union Territory",
    majorCities: [
      {
        name: "New Delhi",
        type: "Capital",
        description: "Heart of India",
        image: "https://i.pinimg.com/736x/05/3c/30/053c307c9d887899adb15eee1a75bc2e.jpg",
        slug: "new-delhi",
        bestTimeToVisit: "October to March",
        rating: 4.6,
        famousFor: ["India Gate", "Qutub Minar", "Red Fort"]
      },
      {
        name: "Old Delhi",
        type: "Historical",
        description: "Ancient walled city of Shahjahanabad",
        image: "https://i.pinimg.com/736x/24/ac/a0/24aca02590195b2c7304f81faed03cf5.jpg",
        slug: "old-delhi",
        bestTimeToVisit: "October to March",
        rating: 4.7,
        famousFor: [
          "Chandni Chowk",
          "Jama Masjid",
          "Paranthe Wali Gali",
          "Spice Market",
          "Kinari Bazaar"
        ]
      }
    ],
    hiddenGems: [
      {
        name: "Mehrauli Archaeological Park",
        type: "Historical",
        description: "Ancient ruins spanning multiple dynasties",
        image: "https://i.pinimg.com/736x/df/80/f9/df80f9ef9e510295b26e9010c8959c31.jpg",
        slug: "mehrauli",
        bestTimeToVisit: "October to March",
        rating: 4.2
      }
    ]
  },
  {
    name: "Meghalaya",
    description: "Abode of Clouds",
    capital: "Shillong",
    image: "https://i.pinimg.com/736x/7e/f3/d4/7ef3d4f66098a67a72da1f699a24c353.jpg",
    slug: "meghalaya",
    region: "Northeast",
    majorCities: [
      {
        name: "Shillong",
        type: "Capital",
        description: "Scotland of the East",
        image: "https://i.pinimg.com/736x/cf/3d/82/cf3d82258f1572d7843e74a5c4fb6530.jpg",
        slug: "shillong",
        bestTimeToVisit: "September to May",
        rating: 4.6,
        famousFor: ["Ward's Lake", "Don Bosco Museum", "Elephant Falls"]
      },
      {
        name: "Cherrapunji",
        type: "Natural",
        description: "One of the wettest places on Earth",
        image: "https://i.pinimg.com/736x/1d/15/69/1d1569c96878276c35c880c52dfcf7cf.jpg",
        slug: "cherrapunji",
        bestTimeToVisit: "September to May",
        rating: 4.7,
        famousFor: ["Living Root Bridges", "Nohkalikai Falls", "Seven Sisters Falls"]
      }
    ],
    hiddenGems: [
      {
        name: "Mawlynnong",
        type: "Village",
        description: "Asia's Cleanest Village",
        image: "https://i.pinimg.com/736x/e4/74/de/e474de415a919b6d48424539372de1b1.jpg",
        slug: "mawlynnong",
        bestTimeToVisit: "March to June",
        rating: 4.5
      }
    ]
  },
  {
    name: "Madhya Pradesh",
    description: "Heart of Incredible India",
    capital: "Bhopal",
    image: "https://i.pinimg.com/736x/20/f5/3c/20f53c0303f0ce3dff1bd3dc6e264957.jpg",
    slug: "madhya-pradesh",
    region: "Central",
    majorCities: [
      {
        name: "Bhopal",
        type: "Capital",
        description: "City of Lakes",
        image: "https://i.pinimg.com/736x/f8/1d/95/f81d958541cab90d1270091371bdad41.jpg",
        slug: "bhopal",
        bestTimeToVisit: "October to March",
        rating: 4.4,
        famousFor: ["Upper Lake", "Sanchi Stupa", "Van Vihar National Park"]
      },
      {
        name: "Khajuraho",
        type: "Historical",
        description: "Temple City",
        image: "https://i.pinimg.com/736x/72/62/b5/7262b55d419ddb63f5f4621f5922700a.jpg",
        slug: "khajuraho",
        bestTimeToVisit: "October to March",
        rating: 4.8,
        famousFor: ["Khajuraho Temples", "Archaeological Museum", "Raneh Falls"]
      }
    ],
    hiddenGems: [
      {
        name: "Orchha",
        type: "Historical",
        description: "Medieval City",
        image: "https://i.pinimg.com/736x/1c/aa/32/1caa321007c87d6b5abfc8eca15ddc85.jpg",
        slug: "orchha",
        bestTimeToVisit: "October to March",
        rating: 4.6
      }
    ]
  },
  {
    name: "Sikkim",
    description: "Small but Beautiful",
    capital: "Gangtok",
    image: "https://i.pinimg.com/736x/ae/91/d0/ae91d0eef3a95eb882ebf1fd7df3bf62.jpg",
    slug: "sikkim",
    region: "Northeast",
    majorCities: [
      {
        name: "Gangtok",
        type: "Capital",
        description: "Clean and Green City",
        image: "https://i.pinimg.com/736x/cb/ba/6b/cbba6ba0adda41b89721706b607c603d.jpg",
        slug: "gangtok",
        bestTimeToVisit: "March to May",
        rating: 4.7,
        famousFor: ["MG Marg", "Rumtek Monastery", "Tsomgo Lake"]
      },
      {
        name: "Pelling",
        type: "Hill Station",
        description: "Gateway to Kanchenjunga",
        image: "https://i.pinimg.com/736x/ac/b3/b8/acb3b8f6fbe933724791a098751b20c0.jpg",
        slug: "pelling",
        bestTimeToVisit: "September to May",
        rating: 4.6,
        famousFor: ["Kanchenjunga Falls", "Pemayangtse Monastery", "Rabdentse Ruins"]
      }
    ],
    hiddenGems: [
      {
        name: "Zuluk",
        type: "Scenic",
        description: "Ancient Silk Route Location",
        image: "https://i.pinimg.com/736x/47/8d/51/478d511f679dc540c96a5bde36d30592.jpg",
        slug: "zuluk",
        bestTimeToVisit: "March to May",
        rating: 4.4
      }
    ]
  },
  {
    name: "Manipur",
    description: "Jewel of India",
    capital: "Imphal",
    image: "https://i.pinimg.com/736x/04/cc/85/04cc85b160bd9ee2ab7b7c0fd238b7ca.jpg",
    slug: "manipur",
    region: "Northeast",
    majorCities: [
      {
        name: "Imphal",
        type: "Capital",
        description: "Cultural Capital of Manipur",
        image: "https://i.pinimg.com/736x/43/a6/ec/43a6ecb63224939c81a1274f0c63900a.jpg",
        slug: "imphal",
        bestTimeToVisit: "October to February",
        rating: 4.5,
        famousFor: ["Loktak Lake", "Ima Market", "Kangla Fort"]
      }
    ],
    hiddenGems: [
      {
        name: "Ukhrul",
        type: "Natural",
        description: "Land of Tangkhul Nagas",
        image: "https://i.pinimg.com/736x/6d/7f/06/6d7f0623009e675238fd528efb56573f.jpg",
        slug: "ukhrul",
        bestTimeToVisit: "October to March",
        rating: 4.4
      }
    ]
  },
  {
    name: "Andaman & Nicobar Islands",
    description: "Paradise in the Bay of Bengal",
    capital: "Port Blair",
    image: "https://i.pinimg.com/736x/b0/78/2c/b0782c161edc9b73acbdcbc8465dca89.jpg",
    slug: "andaman-nicobar",
    region: "Union Territory",
    majorCities: [
      {
        name: "Port Blair",
        type: "Capital",
        description: "Gateway to the Andamans",
        image: "https://i.pinimg.com/736x/62/aa/b6/62aab64e910ee5c5f18e78411f1f381b.jpg",
        slug: "port-blair",
        bestTimeToVisit: "October to May",
        rating: 4.7,
        famousFor: ["Cellular Jail", "Ross Island", "North Bay Island"]
      },
      {
        name: "Havelock Island",
        type: "Beach",
        description: "Paradise for Beach Lovers",
        image: "https://i.pinimg.com/736x/fd/ee/4d/fdee4d577d254a0bd1a9099779aee976.jpg",
        slug: "havelock",
        bestTimeToVisit: "October to May",
        rating: 4.9,
        famousFor: ["Radhanagar Beach", "Elephant Beach", "Scuba Diving"]
      }
    ],
    hiddenGems: [
      {
        name: "Neil Island",
        type: "Beach",
        description: "Unexplored Paradise",
        image: "https://i.pinimg.com/736x/ea/9a/73/ea9a7391ca52303c93f2193a49173381.jpg",
        slug: "neil-island",
        bestTimeToVisit: "October to May",
        rating: 4.6
      }
    ]
  },
  {
    name: "Ladakh",
    description: "Land of High Passes",
    capital: "Leh",
    image: "https://i.pinimg.com/736x/c1/e1/0e/c1e10e9b0547019aff0ae33b39128e4f.jpg",
    slug: "ladakh",
    region: "Union Territory",
    majorCities: [
      {
        name: "Leh",
        type: "Capital",
        description: "Ancient Capital of Ladakh",
        image: "https://i.pinimg.com/736x/85/44/eb/8544eb5bbefa50233133d167be158f87.jpg",
        slug: "leh",
        bestTimeToVisit: "June to September",
        rating: 4.8,
        famousFor: ["Leh Palace", "Shanti Stupa", "Leh Market"]
      },
      {
        name: "Kargil",
        type: "Historical",
        description: "Gateway to Zanskar",
        image: "https://i.pinimg.com/736x/fc/b9/27/fcb927141720c58b440349198997da65.jpg",
        slug: "kargil",
        bestTimeToVisit: "June to September",
        rating: 4.5,
        famousFor: ["Kargil War Memorial", "Mulbekh Monastery", "Suru Valley"]
      }
    ],
    hiddenGems: [
      {
        name: "Nubra Valley",
        type: "Scenic",
        description: "Valley of Flowers",
        image: "https://i.pinimg.com/736x/29/ca/78/29ca78b740833741e8ec5b1c01a02661.jpg",
        slug: "nubra-valley",
        bestTimeToVisit: "June to September",
        rating: 4.7
      }
    ]
  },
  {
    name: "Mizoram",
    description: "Land of the Highlanders",
    capital: "Aizawl",
    image: "https://i.pinimg.com/736x/02/e2/f6/02e2f60916a120be2ad29aabf7eeeb1d.jpg",
    slug: "mizoram",
    region: "Northeast",
    majorCities: [
      {
        name: "Aizawl",
        type: "Capital",
        description: "City of Hills",
        image: "https://i.pinimg.com/736x/f0/89/c9/f089c9a645b2dafa7b4e19153277837c.jpg",
        slug: "aizawl",
        bestTimeToVisit: "October to March",
        rating: 4.5,
        famousFor: ["Mizoram State Museum", "Solomon's Temple", "Durtlang Hills"]
      },
      {
        name: "Lunglei",
        type: "Cultural",
        description: "Second largest city of Mizoram",
        image: "https://i.pinimg.com/736x/bf/ce/e3/bfcee37326d41e1638a98c562eefef07.jpg",
        slug: "lunglei",
        bestTimeToVisit: "October to March",
        rating: 4.3,
        famousFor: ["Lunglei Point", "Saikuti Hall", "Khawnglung Wildlife Sanctuary"]
      }
    ],
    hiddenGems: [
      {
        name: "Champhai",
        type: "Scenic",
        description: "Rice Bowl of Mizoram",
        image: "https://i.pinimg.com/736x/ea/a2/f4/eaa2f4f3af7ac6c7fc365a15d714fcc3.jpg",
        slug: "champhai",
        bestTimeToVisit: "October to March",
        rating: 4.4
      }
    ]
  },
  {
    name: "Nagaland",
    description: "Land of Festivals",
    capital: "Kohima",
    image: "https://i.pinimg.com/736x/ac/3e/d2/ac3ed288aa8c9c1dc2b275e3dd152712.jpg",
    slug: "nagaland",
    region: "Northeast",
    majorCities: [
      {
        name: "Kohima",
        type: "Capital",
        description: "Historical World War II Site",
        image: "https://i.pinimg.com/736x/d6/d7/5b/d6d75b1eb75bf20390283044e67b6f11.jpg",
        slug: "kohima",
        bestTimeToVisit: "October to May",
        rating: 4.6,
        famousFor: ["War Cemetery", "Kohima Cathedral", "Naga Heritage Village"]
      },
      {
        name: "Dimapur",
        type: "Commercial",
        description: "Commercial Capital of Nagaland",
        image: "https://i.pinimg.com/736x/1d/4b/67/1d4b679b700bc2cef284663003b7091c.jpg",
        slug: "dimapur",
        bestTimeToVisit: "October to May",
        rating: 4.4,
        famousFor: ["Kachari Ruins", "Triple Falls", "Zoological Park"]
      }
    ],
    hiddenGems: [
      {
        name: "Dzukou Valley",
        type: "Natural",
        description: "Valley of Flowers of the North East",
        image: "https://i.pinimg.com/736x/88/3e/ad/883eadc9260aca7cd7d2773d9c26f48a.jpg",
        slug: "dzukou-valley",
        bestTimeToVisit: "June to September",
        rating: 4.8
      }
    ]
  },
  {
    name: "Tripura",
    description: "Land of Fourteen Gods",
    capital: "Agartala",
    image: "https://i.pinimg.com/736x/7e/c3/d4/7ec3d485c797e31437a0ff61e29e645e.jpg",
    slug: "tripura",
    region: "Northeast",
    majorCities: [
      {
        name: "Agartala",
        type: "Capital",
        description: "Cultural Hub of Tripura",
        image: "https://i.pinimg.com/736x/47/f9/6a/47f96a30630c268c580235380fb769a8.jpg",
        slug: "agartala",
        bestTimeToVisit: "October to March",
        rating: 4.5,
        famousFor: ["Ujjayanta Palace", "Neermahal", "Albert Ekka Park"]
      },
      {
        name: "Udaipur",
        type: "Historical",
        description: "Temple Town of Tripura",
        image: "https://i.pinimg.com/736x/19/d9/0e/19d90ebcf3b9192412de77ab9aae7708.jpg",
        slug: "udaipur-tripura",
        bestTimeToVisit: "October to March",
        rating: 4.3,
        famousFor: ["Tripura Sundari Temple", "Mahamuni Temple", "Lake Palace"]
      }
    ],
    hiddenGems: [
      {
        name: "Unakoti",
        type: "Archaeological",
        description: "Ancient Rock Carvings Site",
        image: "https://i.pinimg.com/736x/ca/84/3b/ca843b7813c539075d6a1a99a013f465.jpg",
        slug: "unakoti",
        bestTimeToVisit: "October to March",
        rating: 4.6
      }
    ]
  },
  {
    name: "Uttarakhand",
    description: "Land of Gods and spiritual destinations nestled in the Himalayas",
    capital: "Dehradun",
    image: "https://i.pinimg.com/736x/9f/43/64/9f43649c4ce76213ee311e21ad5716d8.jpg",
    slug: "uttarakhand",
    region: "North",
    majorCities: [
      {
        name: "Rishikesh",
        type: "Spiritual",
        description: "Yoga Capital of the World",
        image: "https://i.pinimg.com/736x/34/56/78/345678rishikesh-ganga.jpg",
        slug: "rishikesh",
        bestTimeToVisit: "March to April, September to November",
        rating: 4.7,
        famousFor: [
          "River Rafting",
          "Yoga Centers",
          "Laxman Jhula",
          "Beatles Ashram",
          "Evening Aarti"
        ]
      },
      {
        name: "Nainital",
        type: "Hill Station",
        description: "Lake District of India",
        image: "https://i.pinimg.com/736x/d3/d8/6a/d3d86a028e0bc80dff478c4559d275b1.jpg",
        slug: "nainital",
        bestTimeToVisit: "March to June, September to November",
        rating: 4.6,
        famousFor: [
          "Naini Lake",
          "Mall Road",
          "Snow View Point",
          "Tiffin Top"
        ]
      }
    ],
    hiddenGems: [
      {
        name: "Auli",
        type: "Ski Resort",
        description: "Popular skiing destination with panoramic Himalayan views",
        image: "https://i.pinimg.com/736x/0a/43/e3/0a43e36f841d66a4a4df8732a48e7055.jpg",
        slug: "auli",
        bestTimeToVisit: "November to March",
        rating: 4.7
      }
    ]
  },
  {
    name: "Jammu and Kashmir",
    description: "Paradise on Earth with stunning landscapes and rich cultural heritage",
    capital: "Srinagar",
    image: "https://i.pinimg.com/736x/9b/4b/b7/9b4bb7f99133a32f061e32c5785f7042.jpg",
    slug: "jammu-kashmir",
    region: "North",
    majorCities: [
      {
        name: "Srinagar",
        type: "Summer Capital",
        description: "City of Lakes and Gardens",
        image: "https://i.pinimg.com/736x/a4/cb/e1/a4cbe18e07edcd832645a66b68439490.jpg",
        slug: "srinagar",
        bestTimeToVisit: "April to October",
        rating: 4.8,
        famousFor: [
          "Dal Lake",
          "Mughal Gardens",
          "Shikara Rides",
          "Floating Markets",
          "House Boats"
        ]
      },
      {
        name: "Gulmarg",
        type: "Hill Station",
        description: "Meadow of Flowers and premier ski resort",
        image: "https://i.pinimg.com/736x/53/b7/97/53b7977e297c2451b8f95f30a8103963.jpg",
        slug: "gulmarg",
        bestTimeToVisit: "December to March for skiing, April to October for summer",
        rating: 4.9,
        famousFor: [
          "Gondola Ride",
          "Skiing",
          "Golf Course",
          "Alpather Lake",
          "Strawberry Valley"
        ]
      }
    ],
    hiddenGems: [
      {
        name: "Pahalgam",
        type: "Hill Station",
        description: "Valley of Shepherds with pristine beauty",
        image: "https://i.pinimg.com/736x/3f/8f/95/3f8f95ca1711e7d181396b2bd2280cde.jpg",
        slug: "pahalgam",
        bestTimeToVisit: "March to November",
        rating: 4.7,
        famousFor: [
          "Betaab Valley",
          "Aru Valley",
          "Lidder River",
          "Golf Course"
        ]
      }
    ]
  },
  {
    name: "Punjab",
    description: "Land of Five Rivers and vibrant culture",
    capital: "Chandigarh",
    image: "https://i.pinimg.com/736x/b8/82/d1/b882d138d81e29b50cc561842895c9f1.jpg",
    slug: "punjab",
    region: "North",
    majorCities: [
      {
        name: "Amritsar",
        type: "Religious",
        description: "Holy City of the Sikhs",
        image: "https://i.pinimg.com/736x/7e/08/b8/7e08b842121cdae6c6d4a1b5993a7d81.jpg",
        slug: "amritsar",
        bestTimeToVisit: "October to March",
        rating: 4.8,
        famousFor: [
          "Golden Temple",
          "Wagah Border",
          "Jallianwala Bagh",
          "Punjabi Cuisine"
        ]
      },
      {
        name: "Chandigarh",
        type: "Capital",
        description: "The City Beautiful",
        image: "https://i.pinimg.com/736x/3e/12/f3/3e12f339b388d1f16f7c2a12e15400f6.jpg",
        slug: "chandigarh",
        bestTimeToVisit: "October to March",
        rating: 4.6,
        famousFor: [
          "Rock Garden",
          "Sukhna Lake",
          "Rose Garden",
          "Capitol Complex"
        ]
      }
    ],
    hiddenGems: [
      {
        name: "Kapurthala",
        type: "Historical",
        description: "City of Palaces and Gardens",
        image: "https://i.pinimg.com/736x/2a/95/56/2a9556fc7c281e065e7b9844df1ce7e5.jpg",
        slug: "kapurthala",
        bestTimeToVisit: "October to March",
        rating: 4.3
      }
    ]
  },
  {
    name: "Odisha",
    description: "Land of Ancient Temples and Rich Cultural Heritage",
    capital: "Bhubaneswar",
    image: "https://i.pinimg.com/736x/6e/26/10/6e2610ab2b1cdbb42066595eced5a02f.jpg",
    slug: "odisha",
    region: "East",
    majorCities: [
      {
        name: "Bhubaneswar",
        type: "Capital",
        description: "Temple City of India",
        image: "https://i.pinimg.com/736x/ac/39/d8/ac39d8164c390d5f4b560f8a0358f56f.jpg",
        slug: "bhubaneswar",
        bestTimeToVisit: "October to March",
        rating: 4.5,
        famousFor: [
          "Lingaraj Temple",
          "Nandankanan Zoological Park",
          "ISKCON Temple",
          "Udayagiri and Khandagiri Caves"
        ]
      },
      {
        name: "Puri",
        type: "Religious",
        description: "Holy City and Beach Destination",
        image: "https://i.pinimg.com/736x/c9/67/1c/c9671cb0cab5a7e3af9de12b830cc06f.jpg",
        slug: "puri",
        bestTimeToVisit: "October to February",
        rating: 4.7,
        famousFor: [
          "Jagannath Temple",
          "Puri Beach",
          "Gundicha Temple",
          "Golden Beach"
        ]
      }
    ],
    hiddenGems: [
      {
        name: "Bhitarkanika",
        type: "Wildlife",
        description: "Mangrove Wetlands and Wildlife Sanctuary",
        image: "https://i.pinimg.com/736x/75/8b/ad/758bad81b347306fa9dad331ee9a2935.jpg",
        slug: "bhitarkanika",
        bestTimeToVisit: "October to March",
        rating: 4.4
      }
    ]
  }
];
