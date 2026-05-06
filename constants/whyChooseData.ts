// constants/whyChooseData.ts
import whyImage from "@/public/image/affordableprice.png";

export interface WhyChooseItem {
  id: number;
  title: string;
  headingMain: string;
  headingAccent: string;
  description: string;
  image: any;
}

export const whyChooseData: WhyChooseItem[] = [
  {
    id: 1,
    title: "Easy to Use Design",
    headingMain: "Simple and intuitive designs that anyone can easily understand ",
    headingAccent: "and use without confusion.",
    description:
      "We focus on user-centric design that reduces complexity and enhances user satisfaction.",
    image: "/image/whyChooseImage/1.png"
  },
  {
    id: 2,
    title: "Creative Design",
    headingMain: "Unique and modern designs that bring fresh ideas and make ",
    headingAccent: "your brand stand out.",
    description:
      "Our design team pushes boundaries to create visuals that are both beautiful and functional.",
    image: "/image/whyChooseImage/2.png"
  },
  {
    id: 3,
    title: "Affordable Price",
    headingMain:
      "High quality design services at a cost effective price ",
    headingAccent: "that fits your budget perfectly.",
    description:
      "We don't just design visuals — we create meaningful digital experiences that help brands grow.",
   image: "/image/whyChooseImage/3.png"
  },
  {
    id: 4,
    title: "Fast Delivery",
    headingMain: "Quick and efficient design process to deliver your ",
    headingAccent: "projects on time without delays.",
    description:
      "Our agile workflow ensures your project goes from concept to launch in record time.",
    image: "/image/whyChooseImage/4.png"
  },
  {
    id: 5,
    title: "Client Focused",
    headingMain: "We listen carefully and create designs based ",
    headingAccent: "on your needs and business goals.",
    description:
      "We listen, adapt, and deliver results that align perfectly with your business vision.",
   image: "/image/whyChooseImage/5.png"
  },
];
