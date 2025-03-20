"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const CITY_THEMES = {
  mumbai: {
    primaryColor: "from-yellow-600 to-red-600",
    accentColor: "text-yellow-500",
    headerImage:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1200",
    title: "Mumbai: City of Dreams",
    subtitle: "Where Tradition Meets Modernity",
    description:
      "Mumbai, formerly known as Bombay, is India's largest city and financial powerhouse. This coastal metropolis is a melting pot of cultures, dreams, and aspirations, earning it the nickname 'City of Dreams'.",
    history: {
      title: "Historical Journey",
      content:
        "Originally a cluster of seven islands, Mumbai's history dates back to the 2nd century BCE. The city transformed under various rulers including the Gujarat Sultanate, Portuguese colonizers, and the British East India Company. The islands were merged through extensive land reclamation projects in the 18th and 19th centuries, creating the peninsula we know today.",
      timeline: [
        {
          year: "1661",
          event:
            "Mumbai Islands transferred from Portuguese to British control",
        },
        {
          year: "1853",
          event:
            "India's first passenger railway line established between Bori Bunder and Thane",
        },
        { year: "1887", event: "Victoria Terminus (now CST) completed" },
        { year: "1911", event: "Gateway of India construction began" },
        { year: "1995", event: "Bombay officially renamed to Mumbai" },
      ],
    },
    culturalSpots: [
      {
        name: "Gateway of India",
        description:
          "Built to commemorate the visit of King George V and Queen Mary, this iconic arch monument stands as a symbol of Mumbai's colonial heritage. The last British troops departed through this gateway after India's independence.",
        image:
          "https://images.unsplash.com/photo-1625731226721-b4d51ae70e20?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "Apollo Bunder, Colaba",
        visitingHours: "24 hours",
        bestTime: "Early morning or sunset",
      },
      {
        name: "Marine Drive",
        description:
          "This 3.6-kilometer-long boulevard features an Art Deco promenade and is nicknamed the 'Queen's Necklace' for its glittering nighttime view. The curved coastline, lined with palm trees and heritage buildings, offers stunning views of the Arabian Sea.",
        image:
          "https://images.unsplash.com/photo-1567870374047-3f9db5c06b16?w=1200",
        location: "Nariman Point to Malabar Hill",
        visitingHours: "24 hours",
        bestTime: "Evening for sunset views",
      },
      {
        name: "Dharavi",
        description:
          "One of Asia's largest urban settlements, Dharavi is a testament to human resilience and entrepreneurial spirit. This vibrant community hosts numerous small-scale industries and showcases the city's innovative spirit.",
        image:
          "https://images.unsplash.com/photo-1725122902462-ccbf3aa4d79c?w=1200",
        location: "Central Mumbai",
        visitingHours: "Guided tours available",
        bestTime: "Morning hours",
      },
    ],
    festivals: [
      {
        name: "Ganesh Chaturthi",
        description:
          "Mumbai's biggest festival celebrating Lord Ganesha. The city comes alive with elaborate pandals, processions, and cultural events.",
        timing: "August-September",
        duration: "11 days",
        highlights: [
          "Lalbaugcha Raja",
          "Girgaum Chowpatty immersion",
          "Cultural performances",
        ],
      },
      {
        name: "Diwali",
        description:
          "The festival of lights transforms Mumbai with dazzling decorations and celebrations.",
        timing: "October-November",
        duration: "5 days",
        highlights: ["Light displays", "Fireworks", "Traditional sweets"],
      },
      {
        name: "Mumbai Film Festival",
        description:
          "Annual celebration of cinema showcasing international and Indian films.",
        timing: "October",
        duration: "1 week",
        highlights: [
          "Film screenings",
          "Panel discussions",
          "Celebrity appearances",
        ],
      },
    ],
    cuisine: [
      {
        name: "Vada Pav",
        description:
          "Mumbai's iconic street food - spiced potato patty in a bun with chutneys",
        image:
          "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1200",
        bestPlaces: ["Ashok Vada Pav, Dadar", "Anand Vada Pav, Vile Parle"],
        price: "₹15-30",
      },
      {
        name: "Bombay Bhel Puri",
        description:
          "Popular beach snack made with puffed rice, vegetables, and tangy chutneys",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200",
        bestPlaces: ["Juhu Beach stalls", "Girgaum Chowpatty vendors"],
        price: "₹30-50",
      },
      {
        name: "Butter Chicken",
        description: "Rich and creamy curry with tender chicken pieces",
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1200",
        bestPlaces: ["Punjab Grill", "Butter Chicken Factory"],
        price: "₹400-600",
      },
    ],
    transportation: {
      title: "Getting Around",
      options: [
        {
          mode: "Local Trains",
          description: "Mumbai's lifeline - extensive suburban railway network",
          tips: "Avoid peak hours (8-11 AM, 5-8 PM)",
        },
        {
          mode: "Taxi/Auto-rickshaw",
          description: "Convenient for short distances",
          tips: "Use meter system, avoid negotiating",
        },
        {
          mode: "Metro",
          description: "Modern, air-conditioned transit option",
          tips: "Good for covering north-south corridor",
        },
      ],
    },
    accommodation: {
      luxury: [
        {
          name: "The Taj Mahal Palace",
          area: "Colaba",
          priceRange: "₹20,000+",
        },
        {
          name: "The Oberoi",
          area: "Nariman Point",
          priceRange: "₹18,000+",
        },
      ],
      midRange: [
        {
          name: "Residency Hotel",
          area: "Fort",
          priceRange: "₹5,000-8,000",
        },
      ],
      budget: [
        {
          name: "Backpacker Panda",
          area: "Andheri",
          priceRange: "₹800-1,500",
        },
      ],
    },
  },
  jaipur: {
    primaryColor: "from-pink-600 to-orange-600",
    accentColor: "text-pink-500",
    title: "Jaipur: Pink City of India",
    subtitle: "Where History Meets Culture",
    headerImage: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200",
    description: "Jaipur, the capital of Rajasthan, is known as the 'Pink City' due to the dominant pink hue of its buildings. It is a city steeped in history, culture, and royal heritage.",
    history: {
      title: "Historical Journey",
      content: "Founded in 1727 by Maharaja Jai Singh II, Jaipur was planned according to Vedic architecture principles. The city's layout, forts, palaces, and temples reflect the grandeur of the Rajput era.",
      timeline: [
        { year: "1727", event: "Foundation of Jaipur by Maharaja Jai Singh II" },
        { year: "1853", event: "Jaipur becomes the capital of Rajasthan" },
        { year: "1903", event: "City painted pink to welcome the Prince of Wales" }
      ]
    },
    culturalSpots: [
      {
        name: "Hawa Mahal",
        description: "Palace of Winds, an iconic landmark",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200",
        location: "Old City",
        visitingHours: "9 AM - 4:30 PM",
        bestTime: "Early morning"
      },
      {
        name: "Amber Fort",
        description: "Majestic fort complex showcasing Rajput architecture",
        image: "https://images.unsplash.com/photo-1624225761785-77a1644e7c93?w=1200",
        location: "Amer",
        visitingHours: "8 AM - 5:30 PM",
        bestTime: "Morning hours"
      },
      {
        name: "City Palace",
        description: "Royal residence and museum",
        image: "https://images.unsplash.com/photo-1590587456714-49ab0f8a5c91?w=1200",
        location: "City Center",
        visitingHours: "9:30 AM - 5 PM",
        bestTime: "Afternoon"
      }
    ],
    festivals: [
      {
        name: "Teej",
        description: "Traditional festival celebrating the monsoon season",
        timing: "July-August",
        duration: "3 days",
        highlights: ["Traditional swings", "Folk dances", "Local cuisine"]
      },
      {
        name: "Gangaur",
        description: "Festival honoring Goddess Parvati",
        timing: "March-April",
        duration: "16 days",
        highlights: ["Processions", "Traditional rituals", "Cultural performances"]
      }
    ],
    cuisine: [
      {
        name: "Dal Baati Churma",
        description: "Traditional Rajasthani dish",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=1200",
        bestPlaces: ["Chokhi Dhani", "Lassiwala"],
        price: "₹200-300"
      },
      {
        name: "Laal Maas",
        description: "Spicy meat curry",
        image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=1200",
        bestPlaces: ["Handi Restaurant", "Suvarna Mahal"],
        price: "₹400-600"
      }
    ],
    transportation: {
      title: "Getting Around",
      options: [
        {
          mode: "Auto-rickshaw",
          description: "Common mode of transport",
          tips: "Negotiate fare beforehand"
        },
        {
          mode: "Metro",
          description: "Modern transit system",
          tips: "Limited coverage but convenient"
        }
      ]
    },
    accommodation: {
      luxury: [
        {
          name: "Rambagh Palace",
          area: "Central Jaipur",
          priceRange: "₹30,000+"
        }
      ],
      midRange: [
        {
          name: "Hotel Clarks Amer",
          area: "Civil Lines",
          priceRange: "₹5,000-8,000"
        }
      ],
      budget: [
        {
          name: "Hotel Pearl Palace",
          area: "Ajmer Road",
          priceRange: "₹1,500-3,000"
        }
      ]
    }
  },
  varanasi: {
    primaryColor: "from-orange-600 to-amber-600",
    accentColor: "text-orange-500",
    title: "Varanasi: City of Lights",
    subtitle: "Spiritual Capital of India",
    headerImage: "https://i.pinimg.com/736x/fe/b5/16/feb5165cdc7fc7f722726312c5d35db4.jpg",
    description: "Varanasi, also known as Benares, is a city steeped in spirituality and tradition. It is considered one of the oldest continuously inhabited cities in the world and is revered as a holy city by Hindus, Buddhists, and Jains.",
    history: {
      title: "Historical Journey",
      content: "No data available",
      timeline: [
        { year: "Ancient", event: "One of the oldest living cities in the world" },
        { year: "528 BCE", event: "Buddha gave his first sermon near Varanasi" }
      ]
    },
    culturalSpots: [
      {
        name: "Dashashwamedh Ghat",
        description: "Famous for its spectacular Ganga Aarti ceremony",
        image: "https://images.unsplash.com/photo-1738151466865-32200afe9cf1?w=1200",
        location: "Main Ghat",
        visitingHours: "24 hours",
        bestTime: "Evening for Aarti"
      },
      {
        name: "Kashi Vishwanath Temple",
        description: "One of the most famous Hindu temples",
        image: "https://i.pinimg.com/736x/76/14/53/761453bb4d6a56407b68b452686d8860.jpg",
        location: "Vishwanath Gali",
        visitingHours: "4 AM - 11 PM",
        bestTime: "Early morning"
      },
      {
        name: "Sarnath",
        description: "Buddhist pilgrimage site",
        image: "https://i.pinimg.com/736x/2d/8d/32/2d8d321788a4634b17da1d768c031264.jpg",
        location: "Sarnath",
        visitingHours: "9 AM - 5 PM",
        bestTime: "Morning hours"
      }
    ],
    festivals: [
      {
        name: "Dev Deepawali",
        description: "Festival of lights on the ghats",
        timing: "November",
        duration: "1 day",
        highlights: ["Ghat illumination", "Ganga Aarti", "Cultural programs"]
      }
    ],
    cuisine: [
      {
        name: "Banarasi Paan",
        description: "Traditional betel leaf delicacy",
        image: "https://i.pinimg.com/736x/e4/35/f1/e435f196561ec62541265108fa4ccdee.jpg",
        bestPlaces: ["No data available"],
        price: "₹20-50"
      },
      {
        name: "Kachori Sabzi",
        description: "Popular breakfast dish",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200",
        bestPlaces: ["No data available"],
        price: "₹30-50"
      }
    ],
    transportation: {
      title: "Getting Around",
      options: [
        {
          mode: "Auto-rickshaw",
          description: "Common mode of transport",
          tips: "Negotiate fare beforehand"
        },
        {
          mode: "Boat rides",
          description: "Popular for ghat visits",
          tips: "Best during sunrise/sunset"
        }
      ]
    },
    accommodation: {
      luxury: [
        {
          name: "Taj Ganges",
          area: "Nadesar",
          priceRange: "₹15,000+"
        }
      ],
      midRange: [
        {
          name: "No data available",
          area: "No data available",
          priceRange: "No data available"
        }
      ],
      budget: [
        {
          name: "No data available",
          area: "No data available",
          priceRange: "No data available"
        }
      ]
    }
  },
  kerala: {
    primaryColor: "from-green-600 to-emerald-600",
    accentColor: "text-green-500",
    title: "Kerala: God's Own Country",
    subtitle: "Where Nature Meets Tradition",
    headerImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200",
    description: "Kerala, known as 'God's Own Country', is a tropical paradise famous for its backwaters, beaches, hill stations, and rich cultural heritage. The state is renowned for its unique blend of natural beauty, traditional architecture, and Ayurvedic traditions.",
    history: {
      title: "Historical Journey",
      content: "Kerala has a rich history dating back to ancient maritime trade with Arabs, Romans, and Chinese. The region was a major spice trading center and has been influenced by various cultures including Dutch, Portuguese, and British colonizers.",
      timeline: [
        { year: "3rd BCE", event: "Ancient spice trade with Romans and Arabs began" },
        { year: "1498", event: "Vasco da Gama's arrival in Calicut" },
        { year: "1956", event: "Formation of Kerala state" }
      ]
    },
    culturalSpots: [
      {
        name: "Alleppey Backwaters",
        description: "Network of lagoons, lakes, and canals parallel to the Arabian Sea coast",
        image: "https://i.pinimg.com/736x/2f/1d/80/2f1d807dff41d1787dbf42a1db99fa1c.jpg",
        location: "Alleppey",
        visitingHours: "24 hours",
        bestTime: "October to March"
      },
      {
        name: "Munnar Tea Gardens",
        description: "Vast expanses of tea plantations in the Western Ghats",
        image: "http://i.pinimg.com/736x/fd/f6/b3/fdf6b38870e1ef0fb9d59de564f7c220.jpg",
        location: "Munnar",
        visitingHours: "9 AM - 5 PM",
        bestTime: "September to March"
      },
      {
        name: "Fort Kochi",
        description: "Historic coastal area with colonial architecture",
        image: "https://i.pinimg.com/736x/06/f4/76/06f476de9fe166935ec822b89387c33b.jpg",
        location: "Kochi",
        visitingHours: "24 hours",
        bestTime: "October to March"
      }
    ],
    festivals: [
      {
        name: "Onam",
        description: "Kerala's harvest festival celebrating King Mahabali's return",
        timing: "August-September",
        duration: "10 days",
        highlights: ["Flower carpets", "Snake boat races", "Traditional feast"]
      },
      {
        name: "Thrissur Pooram",
        description: "Famous temple festival with spectacular elephant processions",
        timing: "April-May",
        duration: "36 hours",
        highlights: ["Elephant pageantry", "Fireworks", "Traditional percussion"]
      }
    ],
    cuisine: [
      {
        name: "Kerala Sadhya",
        description: "Traditional vegetarian feast served on banana leaf",
        image: "https://i.pinimg.com/736x/5f/1c/1e/5f1c1ebe6b59f41f5cb10335e5f4c187.jpg",
        bestPlaces: ["Traditional homes", "Local restaurants"],
        price: "₹200-500"
      },
      {
        name: "Malabar Biryani",
        description: "Aromatic rice dish with distinctive Kerala spices",
        image: "https://i.pinimg.com/736x/02/26/6d/02266d49ae2906271557e9ffcc1d3dff.jpg",
        bestPlaces: ["Paragon Restaurant", "Rahmath Hotel"],
        price: "₹250-400"
      }
    ],
    transportation: {
      title: "Getting Around",
      options: [
        {
          mode: "State Transport Buses",
          description: "Extensive network covering all major destinations",
          tips: "Book AC buses for long journeys"
        },
        {
          mode: "Houseboats",
          description: "Traditional way to explore backwaters",
          tips: "Book in advance during peak season"
        },
        {
          mode: "Auto-rickshaw",
          description: "Convenient for local travel",
          tips: "Use meter or negotiate fare beforehand"
        }
      ]
    },
    accommodation: {
      luxury: [
        {
          name: "Kumarakom Lake Resort",
          area: "Kumarakom",
          priceRange: "₹20,000+"
        },
        {
          name: "Taj Malabar",
          area: "Kochi",
          priceRange: "₹15,000+"
        }
      ],
      midRange: [
        {
          name: "Emerald Isle Heritage Villa",
          area: "Alleppey",
          priceRange: "₹5,000-8,000"
        }
      ],
      budget: [
        {
          name: "Fort House",
          area: "Fort Kochi",
          priceRange: "₹2,000-4,000"
        }
      ]
    }
  },
  delhi: {
    primaryColor: "from-red-100 to-amber-600",
    accentColor: "text-red-500",
    title: "Delhi: Capital of Empires",
    subtitle: "Where History Meets Modernity",
    headerImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200",
    description: "Delhi, India's capital, is a city where ancient monuments stand alongside modern architecture. With over 2,000 years of history, it has been the seat of numerous empires and dynasties, making it a living museum of Indian culture and heritage.",
    history: {
      title: "Historical Journey",
      content: "Delhi has served as the capital of various empires that ruled India, from the Delhi Sultanate to the Mughal Empire and finally the British Raj. Its strategic location and political importance have made it a crucial center of power throughout Indian history.",
      timeline: [
        { year: "1192", event: "Establishment of Delhi Sultanate" },
        { year: "1526", event: "Mughal Empire's reign begins" },
        { year: "1911", event: "Delhi becomes British India's capital" },
        { year: "1947", event: "Capital of Independent India" }
      ]
    },
    culturalSpots: [
      {
        name: "Red Fort",
        description: "UNESCO World Heritage site and symbol of India's sovereignty",
        image: "https://images.unsplash.com/photo-1602230349009-82f740989e4c?w=1200",
        location: "Old Delhi",
        visitingHours: "9:30 AM - 4:30 PM",
        bestTime: "Early morning"
      },
      {
        name: "Qutub Minar",
        description: "UNESCO site featuring the world's tallest brick minaret",
        image: "https://images.unsplash.com/photo-1584283092096-4a48b7d822a2?w=1200",
        location: "Mehrauli",
        visitingHours: "7 AM - 5 PM",
        bestTime: "Sunset"
      },
      {
        name: "Humayun's Tomb",
        description: "Magnificent Mughal architecture that inspired the Taj Mahal",
        image: "https://images.unsplash.com/photo-1646938691456-a03d01a8276a?w=1200",
        location: "Nizamuddin East",
        visitingHours: "6 AM - 6 PM",
        bestTime: "Morning"
      }
    ],
    festivals: [
      {
        name: "Diwali",
        description: "Festival of lights celebrated with grand decorations and festivities",
        timing: "October-November",
        duration: "5 days",
        highlights: ["Light displays", "Fireworks", "Shopping festivals"]
      },
      {
        name: "Republic Day",
        description: "National celebration with grand parade at Rajpath",
        timing: "January 26",
        duration: "1 day",
        highlights: ["Military parade", "Cultural performances", "Air show"]
      }
    ],
    cuisine: [
      {
        name: "Butter Chicken",
        description: "Delhi's iconic curry dish with rich, creamy tomato gravy",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1200",
        bestPlaces: ["Moti Mahal", "Pandara Road"],
        price: "₹400-600"
      },
      {
        name: "Paranthe Wali Gali",
        description: "Famous street food lane known for stuffed flatbreads",
        image: "https://i.pinimg.com/736x/2e/79/36/2e79363dede11eb3cb54725878ef2fa9.jpg",
        bestPlaces: ["Old Delhi", "Chandni Chowk"],
        price: "₹50-150"
      }
    ],
    transportation: {
      title: "Getting Around",
      options: [
        {
          mode: "Delhi Metro",
          description: "Modern, extensive metro network covering most of the city",
          tips: "Use Metro smart cards for discounted fares"
        },
        {
          mode: "Auto Rickshaw",
          description: "Convenient for short distances and narrow lanes",
          tips: "Insist on meter or negotiate fare beforehand"
        },
        {
          mode: "Bus",
          description: "Extensive public bus network",
          tips: "Download DTC app for routes and timings"
        }
      ]
    },
    accommodation: {
      luxury: [
        {
          name: "The Imperial",
          area: "Connaught Place",
          priceRange: "₹20,000+"
        },
        {
          name: "The Oberoi",
          area: "Dr Zakir Hussain Marg",
          priceRange: "₹18,000+"
        }
      ],
      midRange: [
        {
          name: "Bloom Rooms",
          area: "Janpath",
          priceRange: "₹4,000-7,000"
        },
        {
          name: "The Metropolitan Hotel",
          area: "Connaught Place",
          priceRange: "₹6,000-10,000"
        }
      ],
      budget: [
        {
          name: "Zostel Delhi",
          area: "Paharganj",
          priceRange: "₹800-2,000"
        },
        {
          name: "Hotel Palace Heights",
          area: "Karol Bagh",
          priceRange: "₹2,000-4,000"
        }
      ]
    }
  },
  agra: {
    primaryColor: "from-amber-100 to-orange-600",
    accentColor: "text-orange-500",
    title: "Agra: City of the Taj Mahal",
    subtitle: "Where Love is Set in Stone",
    headerImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200",
    description: "Agra, home to the iconic Taj Mahal, is a city steeped in Mughal history and architectural splendor. Once the capital of the Mughal Empire, today it stands as a testament to India's rich cultural heritage and architectural magnificence.",
    history: {
      title: "Historical Journey",
      content: "Agra rose to prominence as the capital of the Mughal Empire in the 16th century. The city witnessed its golden age under emperors Akbar, Jahangir, and Shah Jahan, who built some of India's most magnificent monuments including the Taj Mahal, Agra Fort, and Fatehpur Sikri.",
      timeline: [
        { year: "1526", event: "Babur establishes Mughal rule in Agra" },
        { year: "1565", event: "Akbar begins construction of Agra Fort" },
        { year: "1632", event: "Construction of Taj Mahal begins" },
        { year: "1648", event: "Taj Mahal completion" }
      ]
    },
    culturalSpots: [
      {
        name: "Taj Mahal",
        description: "UNESCO World Heritage site and symbol of eternal love",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200",
        location: "Tajganj",
        visitingHours: "Sunrise to Sunset (Closed on Fridays)",
        bestTime: "Sunrise or Sunset"
      },
      {
        name: "Agra Fort",
        description: "UNESCO site showcasing Mughal military architecture",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
        location: "Rakabganj",
        visitingHours: "6 AM - 6 PM",
        bestTime: "Early morning"
      },
      {
        name: "Fatehpur Sikri",
        description: "Ancient capital city built by Emperor Akbar",
        image: "https://images.unsplash.com/photo-1592555793101-4735dfe82341?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "Fatehpur Sikri",
        visitingHours: "6 AM - 6 PM",
        bestTime: "Morning or late afternoon"
      }
    ],
    festivals: [
      {
        name: "Taj Mahotsav",
        description: "Annual cultural festival celebrating arts and crafts",
        timing: "February",
        duration: "10 days",
        highlights: ["Craft exhibitions", "Cultural performances", "Food festival"]
      },
      {
        name: "Ram Barat",
        description: "Traditional wedding procession of Lord Ram",
        timing: "October-November",
        duration: "3 days",
        highlights: ["Wedding procession", "Religious ceremonies", "Cultural events"]
      }
    ],
    cuisine: [
      {
        name: "Petha",
        description: "Famous sweet made from ash gourd",
        image: "https://i.pinimg.com/736x/8a/72/a6/8a72a611a371ba9fbe28e3d3d4fc0f18.jpg",
        bestPlaces: ["Panchhi Petha", "Gopal Das Petha"],
        price: "₹200-400/kg"
      },
      {
        name: "Bedai",
        description: "Local breakfast of deep-fried bread with spicy curry",
        image: "https://i.pinimg.com/736x/63/73/d8/6373d8199975e942bcc8dc1e419845c2.jpg",
        bestPlaces: ["Ram Babu Paratha", "Joney's Place"],
        price: "₹30-50"
      }
    ],
    transportation: {
      title: "Getting Around",
      options: [
        {
          mode: "Auto Rickshaw",
          description: "Most common mode of transport",
          tips: "Fix price before starting journey"
        },
        {
          mode: "E-Rickshaw",
          description: "Eco-friendly option for short distances",
          tips: "Available near major tourist spots"
        },
        {
          mode: "Tourist Buses",
          description: "Organized tours covering major attractions",
          tips: "Book through government approved operators"
        }
      ]
    },
    accommodation: {
      luxury: [
        {
          name: "The Oberoi Amarvilas",
          area: "Taj East Gate Road",
          priceRange: "₹30,000+"
        },
        {
          name: "ITC Mughal",
          area: "Fatehabad Road",
          priceRange: "₹15,000+"
        }
      ],
      midRange: [
        {
          name: "Crystal Sarovar Premiere",
          area: "Fatehabad Road",
          priceRange: "₹5,000-8,000"
        },
        {
          name: "Howard Plaza The Fern",
          area: "Fatehabad Road",
          priceRange: "₹3,000-6,000"
        }
      ],
      budget: [
        {
          name: "Hotel Sidhartha",
          area: "Taj Ganj",
          priceRange: "₹1,000-2,500"
        },
        {
          name: "Tourist Rest House",
          area: "Mall Road",
          priceRange: "₹800-2,000"
        }
      ]
    }
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const router = useRouter();
  const cityTheme = CITY_THEMES[slug as keyof typeof CITY_THEMES];

  console.log(cityTheme)
  if (!cityTheme) {
    return <div>City not found</div>;
  }

  return (
    // Add min-h-screen and pb-20 to ensure content doesn't overlap with footer
    <div className="min-h-screen pb-20">

      {/* Hero Section */}
      <div
        className={`relative h-[70vh] bg-gradient-to-r ${cityTheme.primaryColor}`}
      >
        {/* Back Arrow */}
        <button 
          onClick={() => router.back()}
          className="absolute top-24 left-6 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 flex items-center justify-center"
          aria-label="Go back"
        >
          <ArrowLeft size={20} className="text-white" />
        </button>

        <Image
          src={cityTheme.headerImage}
          alt={`${slug} cityscape`}
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-6xl font-bold mb-4 font-playfair">
              {cityTheme.title}
            </h1>
            <p className="text-xl font-montserrat">{cityTheme.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed">
            {cityTheme.description}
          </p>
        </div>
      </section>

      {/* Historical Timeline - Only render if history data exists */}
      {cityTheme.history && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 font-playfair">
              {cityTheme.history.title}
            </h2>
            <p className="text-gray-700 mb-8">{cityTheme.history.content}</p>
            <div className="space-y-4">
              {cityTheme.history.timeline?.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="font-bold text-orange-600 w-20">
                    {item.year}
                  </div>
                  <div className="flex-1 text-gray-700">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cultural Spots */}
      {cityTheme?.culturalSpots && cityTheme.culturalSpots.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
              Cultural Heritage
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cityTheme.culturalSpots.map((spot, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={spot.image}
                      alt={spot.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
                    <p className="text-gray-600 mb-4">{spot.description}</p>
                    {spot.location && (
                      <div className="text-sm text-gray-500">
                        <p>
                          <strong>Location:</strong> {spot.location}
                        </p>
                        <p>
                          <strong>Hours:</strong> {spot.visitingHours}
                        </p>
                        <p>
                          <strong>Best Time:</strong> {spot.bestTime}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Festivals */}
      {cityTheme.festivals && cityTheme.festivals.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
              Festivals & Celebrations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cityTheme.festivals.map((festival, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">
                    {festival.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{festival.description}</p>
                  {festival.timing && (
                    <div className="text-sm">
                      <p className="text-orange-600">{festival.timing}</p>
                      <p className="text-gray-500">
                        Duration: {festival.duration}
                      </p>
                      {festival.highlights && (
                        <ul className="mt-2 space-y-1">
                          {festival.highlights.map((highlight, i) => (
                            <li key={i} className="text-gray-600">
                              • {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Cuisine */}
      {cityTheme.cuisine && cityTheme.cuisine.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
              Local Cuisine
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cityTheme.cuisine.map((dish, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                    <p className="text-gray-600">{dish.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Transportation Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
            {cityTheme.transportation.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cityTheme.transportation.options.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{option.mode}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="text-sm text-gray-500">Tip: {option.tips}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-playfair text-center">
            Where to Stay
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Luxury</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {cityTheme.accommodation.luxury.map((hotel, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold">{hotel.name}</h4>
                    <p className="text-gray-600">Area: {hotel.area}</p>
                    <p className="text-gray-600">Price: {hotel.priceRange}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Mid-Range</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {cityTheme.accommodation.midRange.map((hotel, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold">{hotel.name}</h4>
                    <p className="text-gray-600">Area: {hotel.area}</p>
                    <p className="text-gray-600">Price: {hotel.priceRange}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Budget</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {cityTheme.accommodation.budget.map((hotel, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold">{hotel.name}</h4>
                    <p className="text-gray-600">Area: {hotel.area}</p>
                    <p className="text-gray-600">Price: {hotel.priceRange}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
