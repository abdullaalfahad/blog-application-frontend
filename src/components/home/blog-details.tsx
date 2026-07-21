import { Blog } from "@/types";
import { ArrowLeft, Eye, MessageCircle } from "lucide-react";
import Link from "next/link";

type BlogDetailsProps = {
  blog: Blog;
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  return (
    <article className="mx-auto max-w-3xl py-8 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to blogs
      </Link>

      <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl bg-muted">
        {blog.thumbnail ? (
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="size-full object-cover"
          />
        ) : (
          <div className="size-full bg-linear-to-br from-muted via-secondary to-muted-foreground/15" />
        )}
      </div>

      <header className="mb-10 space-y-5">
        {blog.isFeatured && (
          <span className="inline-flex rounded-full bg-foreground px-2.5 py-1 text-[11px] font-medium tracking-wide text-background">
            Featured
          </span>
        )}

        <h1 className="text-3xl leading-tight font-semibold tracking-tight md:text-4xl md:leading-tight">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <time dateTime={blog.createdAt}>{formatDate(blog.createdAt)}</time>
          <span className="size-1 rounded-full bg-border" aria-hidden />
          <span className="inline-flex items-center gap-1.5">
            <Eye className="size-3.5 opacity-70" aria-hidden />
            {blog.views} views
          </span>
          <span className="size-1 rounded-full bg-border" aria-hidden />
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="size-3.5 opacity-70" aria-hidden />
            {blog._count.comments} comments
          </span>
        </div>

        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="border-t border-border/60 pt-10">
        <p className="text-base leading-8 whitespace-pre-wrap text-foreground/90 md:text-lg md:leading-9">
          {blog.content}
        </p>
      </div>
    </article>
  );
};

export default BlogDetails;
