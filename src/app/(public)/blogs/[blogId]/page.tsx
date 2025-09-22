import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getBlogById, getBlogs } from "@/services/PostServices";
import { IBlog } from "@/types";

export const generateStaticParams = async () => {
  const { data: blogs } = await getBlogs();

  return blogs.map((blog: IBlog) => ({
    blogId: String(blog.id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const blog: IBlog = await getBlogById(blogId);

  return {
    title: blog.title,
    description: blog.content,
  };
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const blog = await getBlogById(blogId);

  return (
    <div>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
