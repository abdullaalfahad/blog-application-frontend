const baseUrl = process.env.BACKEND_URL;

export const blogsService = {
  getAllBlogs: async () => {
    try {
      const response = await fetch(`${baseUrl}/api/posts`, {
        next: {
          revalidate: 60,
        },
      });
      const data = await response.json();
      return { data, error: "" };
    } catch {
      return { data: [], error: "Failed to fetch blogs" };
    }
  },

  getBlogById: async (id: string) => {
    try {
      const response = await fetch(`${baseUrl}/api/posts/get-post-by-id/${id}`);
      const data = await response.json();
      return { data, error: "" };
    } catch {
      return { data: null, error: "Failed to fetch blog" };
    }
  },
};
