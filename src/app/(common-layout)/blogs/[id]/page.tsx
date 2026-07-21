import BlogDetails from "@/components/home/blog-details";
import { blogsService } from "@/services/blogs.service";
import { Blog } from "@/types";
import Link from "next/link";

type BlogDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const { data } = await blogsService.getAllBlogs();
  return data?.data
    ?.map((blog: Blog) => ({
      id: blog.id,
    }))
    .slice(0, 3);
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { id } = await params;
  const { data, error } = await blogsService.getBlogById(id);

  if (error) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 py-24 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Something went wrong</h1>
        <p className="text-sm text-muted-foreground">{error}</p>
        <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline">
          Back to blogs
        </Link>
      </div>
    );
  }

  const blog = (data?.data ?? data) as Blog | null;

  if (!blog?.id) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 py-24 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Blog not found</h1>
        <p className="text-sm text-muted-foreground">
          This post may have been removed or the link is incorrect.
        </p>
        <Link href="/" className="text-sm font-medium underline-offset-4 hover:underline">
          Back to blogs
        </Link>
      </div>
    );
  }

  return <BlogDetails blog={blog} />;
}
