import Image from 'next/image';
import { motion } from 'framer-motion';

const imageConfig = {
  quality: 75,
  loading: "lazy" as const,
  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
};

export default function CulturalSpots({ spots }: { spots: any[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 font-playfair text-center"
        >
          Cultural Heritage
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {spots.map((spot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  className="object-cover"
                  {...imageConfig}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
                <p className="text-gray-600 mb-4">{spot.description}</p>
                {spot.location && (
                  <div className="text-sm text-gray-500">
                    <p>Location: {spot.location}</p>
                    <p>Best Time: {spot.bestTime}</p>
                    <p>Hours: {spot.visitingHours}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}