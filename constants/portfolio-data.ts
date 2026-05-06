export interface VideoItem {
  video_url: string;
  title: string;
  subtitle: string;
}

export interface Portfolio {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  thumbnail_image: string;
  screens_designed_count: number;
  usability_improvement_percent: number;
  key_points: Array<{ label: string; content: string }>;
  gallery_images: string[];
  video_items?: VideoItem[];
}
export const categories = [
  "All",
  "Social Media",
  "Packaging",
  "Logo Design",
  "UI/UX Design",
  "Video & Motion",
];

export const Portfolios: Portfolio[] = [
  {
    id: "661f1a2b3c4d5e6f7a8b9c01",
    category: "Social Media",
    title: "Social Media Ads Creative",
    subtitle: "Meta ad design, cover photo",
    thumbnail_image: "/portfolio/social.png",
    screens_designed_count: 50,
    usability_improvement_percent: 40,
    key_points: [
      { label: "Problem", content: "Confusing navigation." },
      { label: "Goal", content: "Simplify user flow." },
      { label: "Solution", content: "Clean UI structure." },
      { label: "Result", content: "Faster transactions." },
    ],
    gallery_images: ["/portfolio/gallery/social.png"],
  },
  {
    id: "661f1a2b3c4d5e6f7a8b9c02",
    category: "Packaging",
    title: "Premium Packaging Design",
    subtitle: "Meta cover and ad design",
    thumbnail_image: "/portfolio/packaging.png",
    screens_designed_count: 35,
    usability_improvement_percent: 25,
    key_points: [
      { label: "Problem", content: "Slow product discovery." },
      { label: "Goal", content: "Increase conversions." },
      { label: "Solution", content: "Minimal UI flow." },
      { label: "Result", content: "Higher retention." },
    ],
    gallery_images: ["/portfolio/gallery/packaging.png"],
  },

  {
    id: "661f1a2b3c4d5e6f7a8b9c03",
    category: "Logo Design",
    title: "Premium Logo Design",
    subtitle: "Logo, Facebook cover photo",
    thumbnail_image: "/portfolio/logo.png",
    screens_designed_count: 12,
    usability_improvement_percent: 30,
    key_points: [
      { label: "Problem", content: "Outdated branding." },
      { label: "Goal", content: "Modern identity." },
      { label: "Solution", content: "New visual system." },
      { label: "Result", content: "Better recognition." },
    ],
    gallery_images: ["/portfolio/gallery/logo.png"],
  },

  {
    id: "661f1a2b3c4d5e6f7a8b9c04",
    category: "Social Media",
    title: "AdsFixter Social Media Post",
    subtitle: "Meta ad design, cover photo",
    thumbnail_image: "/portfolio/social1.png",
    screens_designed_count: 80,
    usability_improvement_percent: 45,
    key_points: [
      { label: "Problem", content: "Complex data UI." },
      { label: "Goal", content: "Simplify insights." },
      { label: "Solution", content: "Custom widgets." },
      { label: "Result", content: "Reduced errors." },
    ],
    gallery_images: ["/portfolio/gallery/social1.png"],
  },
  {
    id: "661f1a2b3c4d5e6f7a8b9c05",
    category: "Social Media",
    title: "SaleRefy Ads Creatives",
    subtitle: "Meta cover and ad design",
    thumbnail_image: "/portfolio/social2.png",
    screens_designed_count: 15,
    usability_improvement_percent: 50,
    key_points: [
      { label: "Problem", content: "Static models." },
      { label: "Goal", content: "Realistic motion." },
      { label: "Solution", content: "Advanced rigging." },
      { label: "Result", content: "Smooth interaction." },
    ],
    gallery_images: ["/portfolio/gallery/social2.png"],
  },
  {
    id: "661f1a2b3c4d5e6f7a8b9c06",
    category: "Social Media",
    title: "Facebook Cover Photo",
    subtitle: "Logo, Facebook cover photo",
    thumbnail_image: "/portfolio/social3.jpg",
    screens_designed_count: 20,
    usability_improvement_percent: 35,
    key_points: [
      { label: "Problem", content: "Low visual appeal." },
      { label: "Goal", content: "Boost excitement." },
      { label: "Solution", content: "Vibrant graphics." },
      { label: "Result", content: "Sold-out event." },
    ],
    gallery_images: ["/portfolio/gallery/social3.png"],
  },
  {
    id: "661f1a2b3c4d5e6f7a8b9c07",
    category: "Packaging",
    title: "Al amin packaging design",
    subtitle: "10 item product label design",
    thumbnail_image: "/portfolio/packaging1.jpg",
    screens_designed_count: 1,
    usability_improvement_percent: 60,
    key_points: [
      { label: "Problem", content: "Weak storytelling." },
      { label: "Goal", content: "Engaging narrative." },
      { label: "Solution", content: "Dynamic editing." },
      { label: "Result", content: "Raised funding." },
    ],
    gallery_images: ["/portfolio/gallery/packaging1.png"],
  },
  {
    id: "661f1a2b3c4d5e6f7a8b9c08",
    category: "Video & Motion",
    title: "Video & Motion Ads",
    subtitle: "Multiple Post Design",
    thumbnail_image: "/portfolio/video.png",
    screens_designed_count: 42,
    usability_improvement_percent: 55,
    key_points: [
      { label: "Problem", content: "Too cluttered." },
      { label: "Goal", content: "Quick tracking." },
      { label: "Solution", content: "Simple UI." },
      { label: "Result", content: "Higher engagement." },
    ],
    video_items: [
      {
        video_url: "https://youtube.com/shorts/DmDoKLMWBMc",
        title: "BoostFixter Promotional Reels",
        subtitle: "Content & Reels Edit",
      },
      {
        video_url: "https://youtube.com/shorts/fEtfQ1Q-dWo",
        title: "BoostFixter Marketing Reels",
        subtitle: "Content & Reels Edit",
      },
      {
        video_url: "https://youtube.com/shorts/Zt0J5Q-So_4",
        title: "English with Shawon Promotion Reels",
        subtitle: "Content, Video & Reels Edit",
      },
    ],
    gallery_images: ["/portfolio/gallery/social.png"],
  },

  {
    id: "661f1a2b3c4d5e6f7a8b9c09",
    category: "UI/UX Design",
    title: "UI/UX Design | Landing Page",
    subtitle: "Landing page, dashboard ",
    thumbnail_image: "/portfolio/ui.png",
    screens_designed_count: 10,
    usability_improvement_percent: 70,
    key_points: [
      { label: "Problem", content: "Static visuals." },
      { label: "Goal", content: "Sync with music." },
      { label: "Solution", content: "Procedural animation." },
      { label: "Result", content: "Immersive visuals." },
    ],
    gallery_images: ["/portfolio/gallery/ui.png"],
  },
];
