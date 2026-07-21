import BlogsCard from "@/components/home/blogs-card";
import { blogsService } from "@/services/blogs.service";
import { Blog } from "@/types";

export default async function Home() {
  const { data: blogs, error } = await blogsService.getAllBlogs();

  return (
    <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs?.data?.map((blog: Blog) => (
        <BlogsCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
