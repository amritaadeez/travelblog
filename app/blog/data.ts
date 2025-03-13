export const BLOG_POSTS = [
  {
    id: 5,
    title: "Delhi: A Journey Through Time",
    excerpt: "Explore the captivating blend of old and new Delhi, from ancient monuments to modern marvels.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=60",
    date: "2024-03-20",
    slug: "delhi",
    category: "Heritage",
    readTime: "5 min read",
    author: {
      name: "Aditya Sharma",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 1,
    title: "The Mystical Ghats of Varanasi",
    excerpt:
      "Explore the spiritual heart of India through its ancient ghats, morning rituals, and the eternal flow of the Ganges.",
    image:
      "https://i.pinimg.com/736x/fe/b5/16/feb5165cdc7fc7f722726312c5d35db4.jpg", // Varanasi Ghats during morning aarti
    date: "2024-03-15",
    slug: "varanasi",
    category: "Sacred Places",
    readTime: "5 min read",
    author: {
      name: "Priya Kumar",
      avatar:
        "https://i.pinimg.com/736x/fe/b5/16/feb5165cdc7fc7f722726312c5d35db4.jpg",
    },
  },
  {
    id: 2,
    title: "Kerala's Hidden Backwaters",
    excerpt:
      "Journey through the serene backwaters of Kerala on traditional houseboats, discovering local life and pristine nature.",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&auto=format&fit=crop&q=60", // Kerala backwaters with houseboat
    date: "2024-03-10",
    slug: "kerala",
    category: "Nature Escapes",
    readTime: "4 min read",
    author: {
      name: "Rahul Mehta",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 3,
    title: "Royal Heritage of Rajasthan",
    excerpt:
      "Discover the magnificent forts and palaces of Rajasthan, where every stone tells a story of valor and grandeur.",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=1200&auto=format&fit=crop&q=60", // Amber Fort, Jaipur
    date: "2024-03-05",
    slug: "jaipur",
    category: "Heritage",
    readTime: "6 min read",
    author: {
      name: "Arjun Singh",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 4,
    title: "Mumbai Street Food Safari",
    excerpt:
      "A gastronomic adventure through the bustling streets of Mumbai, from Vada Pav to Pani Puri.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&auto=format&fit=crop&q=60",
    date: "2024-03-01",
    slug: "mumbai",
    category: "Food & Culture",
    readTime: "4 min read",
    author: {
      name: "Meera Shah",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=60",
    },
  },
];

export const CITY_THEMES = {
  delhi: {
    primaryColor: "from-red-600 to-amber-600",
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
        image: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=1200",
        location: "Old Delhi",
        visitingHours: "9:30 AM - 4:30 PM",
        bestTime: "Early morning"
      },
      {
        name: "Qutub Minar",
        description: "UNESCO site featuring the world's tallest brick minaret",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200",
        location: "Mehrauli",
        visitingHours: "7 AM - 5 PM",
        bestTime: "Sunset"
      },
      {
        name: "Humayun's Tomb",
        description: "Magnificent Mughal architecture that inspired the Taj Mahal",
        image: "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?w=1200",
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
        image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=1200",
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
  varanasi: {
    description: "Varanasi, one of the world's oldest living cities, is a spiritual haven where ancient traditions meet modern life.",
    history: {
      title: "Historical Journey",
      content: "Dating back to the 11th century BCE, Varanasi has been a cultural and religious center for thousands of years.",
      timeline: [
        { year: "1000 BCE", event: "First historical records of the city" },
        { year: "600 BCE", event: "Buddha gave his first sermon near Varanasi" },
        // Add more timeline events
      ]
    }
  },
  // Add other city themes
};