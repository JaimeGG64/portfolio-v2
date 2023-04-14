declare global {
  interface Window {
    __NUXT__: { state: RootState };
  }
}

interface Post {
teamMembers: any;
featuredButton: any;
  title: string;
  slug?: string;
  excerpt?: string;
  content: string;
  publishedAt: string;
  liveLink: string;
  projectType: string;
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
