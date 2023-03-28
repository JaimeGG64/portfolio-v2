declare global {
  interface Window {
    __NUXT__: { state: RootState };
  }
}

interface Post {
  title: string;
  slug?: string;
  excerpt?: string;
  content: string;
  publishedAt: string;
  liveLink: string;
  featuredImage?: string;
  seoDescription?: string;
  seoMetaImage?: string;
}

interface Page {
  title: string;
  subtitle?: string;
  slug?: string;
  content: string;
  featuredImage?: string;
  seoDescription?: string;
  seoMetaImage?: string;
}
