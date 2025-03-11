import FeaturedPosts from "@/components/home/FeaturedPosts";
import Hero from "@/components/home/Hero";
import RecentPosts from "@/components/home/RecentPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4">
        <FeaturedPosts />
        <RecentPosts />
      </div>
    </>
  );
}
