export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  category: string;
  content: string;
  featured?: boolean;
}

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
  featured?: boolean;
}
