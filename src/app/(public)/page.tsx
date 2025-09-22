import BlogCard from "@/components/modules/Blogs/BlogCard";
import HeroSection from "@/components/modules/Home/HeroSection";
import { IBlog } from "@/types";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/post", {
    next: {
      tags: ["BLOGS"],
    },
  });
  const { data: blogs } = await res.json();

  return (
    <div>
      <HeroSection />
      <h2 className="text-center my-12 text-4xl font-semibold">
        Featured Posts
      </h2>
      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto mb-10">
        {blogs?.slice(0, 3).map((blog: IBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
