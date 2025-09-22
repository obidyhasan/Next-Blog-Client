import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IBlog } from "@/types";
import React from "react";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/post", {
    cache: "no-cache",
  });
  const { data: blogs } = await res.json();

  return (
    <div>
      <div className="w-full max-w-7xl mx-auto mt-32">
        <h1 className="text-3xl text-center">All Blogs</h1>
      </div>
      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto my-10">
        {blogs?.map((blog: IBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
