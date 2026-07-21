export type Blog = {
  id: string;
  title: string;
  content: string;
  isFeatured: boolean;
  thumbnail: string | null;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  tags: string[];
  views: number;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  _count: {
    comments: number;
  };
};

export type Pagination = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export type BlogsResponse = {
  data: Blog[];
  pagination: Pagination;
};
