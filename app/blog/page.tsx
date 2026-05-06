import NewsLetterBlog from "@/components/shared/NewsLetter/NewsLetter-Blog";
import React from "react";
import LatestBlogs from "@/components/blog/LatestBlogs";

import LatestInsightsSlides from "@/components/shared/LatestInsightsSlides";
import { BlogBanner } from "@/components/blog/BlogBanner";

const Blog = () => {
  return (
    <div>
      <BlogBanner></BlogBanner>
      <div className="bg-[#F1F2FF]">
        <div className="container-custom ">
          <LatestInsightsSlides></LatestInsightsSlides>
        </div>
      </div>

      <div id="all-blogs">
        <LatestBlogs />
      </div>

      <NewsLetterBlog></NewsLetterBlog>
    </div>
  );
};

export default Blog;
