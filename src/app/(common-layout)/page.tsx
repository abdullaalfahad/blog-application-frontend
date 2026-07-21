import BlogsCard from "@/components/home/blogs-card";
import { blogsService } from "@/services/blogs.service";

export default async function Home() {
  const { data } = await blogsService.getAllBlogs();

  console.log(data);

  return (
    <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((blog) => (
        <BlogsCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
