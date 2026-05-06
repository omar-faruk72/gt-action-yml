
import React from "react";
import { BlogBanner } from '@/components/blog/BlogBanner';
import BlogDetails from '@/components/blog/blogDetails';
import NewsletterBlog from '@/components/shared/NewsLetter/NewsLetter-Blog';
import { blogsData } from "@/constants/blog-data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const blog = blogsData.find((b) => b.slug === decodedSlug);
  
  if (!blog) return { title: "Blog Not Found" };

  const baseUrl = process.env.URL;

  return {
    title: `${blog.title} | Design Fixter`,
    description: blog.authorComment,
    openGraph: {
      title: blog.title,
      description: blog.authorComment,
      images: [
        {
          url: `${baseUrl}${blog.bannerImage}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        }
      ],
      url: `${baseUrl}/blog/${slug}`,
      type: "article",
      siteName: "Design Fixter",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.authorComment,
      images: [`${baseUrl}${blog.bannerImage}`],
    },
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {


  return (
    <main>
      <BlogBanner badgeText="Blog Details" />
      <BlogDetails params={params} />
      <NewsletterBlog />
    </main>
  );
};

export default Page;