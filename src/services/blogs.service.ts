import { BlogsResponse } from "@/types";

const emptyBlogsResponse: BlogsResponse = {
  data: [],
  pagination: {
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
  },
};

const baseUrl = process.env.BACKEND_URL;

export const blogsService = {
  getAllBlogs: async (): Promise<BlogsResponse> => {
    try {
      const response = await fetch(`${baseUrl}/api/posts`, {
        next: {
          revalidate: 60,
        },
      });
      const data = await response.json();
      return data as BlogsResponse;
    } catch {
      return emptyBlogsResponse;
    }
  },
};
