import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Blog } from "@/types";
import { Eye, MessageCircle } from "lucide-react";

type BlogsCardProps = {
  blog: Blog;
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

const BlogsCard = ({ blog }: BlogsCardProps) => {
  const excerpt =
    blog.content.length > 120
      ? `${blog.content.slice(0, 120).trimEnd()}…`
      : blog.content;

  return (
    <Card className="group h-full gap-0 overflow-hidden rounded-2xl border-0 bg-card py-0 shadow-sm ring-1 ring-foreground/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:ring-foreground/15">
      <div className="relative aspect-16/10 overflow-hidden bg-muted">
        {blog.thumbnail ? (
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="size-full bg-linear-to-br from-muted via-secondary to-muted-foreground/15" />
        )}
        {blog.isFeatured && (
          <span className="absolute top-3 left-3 rounded-full bg-foreground/90 px-2.5 py-1 text-[11px] font-medium tracking-wide text-background backdrop-blur-sm">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <CardHeader className="gap-2 p-0">
          <CardTitle className="line-clamp-2 text-lg leading-snug font-semibold tracking-tight">
            {blog.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-sm leading-relaxed">
            {excerpt}
          </CardDescription>
        </CardHeader>

        {blog.tags.length > 0 && (
          <CardContent className="p-0">
            <div className="flex flex-wrap gap-2">
              {blog.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        )}

        <CardFooter className="mt-auto justify-between gap-3 border-0 bg-transparent p-0 pt-1 text-xs text-muted-foreground">
          <time dateTime={blog.createdAt}>{formatDate(blog.createdAt)}</time>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <Eye className="size-3.5 opacity-70" aria-hidden />
              {blog.views}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MessageCircle className="size-3.5 opacity-70" aria-hidden />
              {blog._count.comments}
            </span>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default BlogsCard;
