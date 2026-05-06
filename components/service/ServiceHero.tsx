import PrimaryButton from "@/components/button/PrimaryButton";
import HeroSection from "../shared/Hero/HeroSection";

export const ServiceHero = () => {
  return (
    <HeroSection
      badgeIcon="/image/heroBridgeIcons/Award.svg"
      badgeText="Our Services"
      title={
        <>
          Design Services That Help <br></br> Your Business Grow
        </>
      }
      description={
        <>
          We provide Ul/UX, graphic, and motion design to create simple, modern,<br></br>
and effective digital experiences.
        </>
      }
      buttons={
        <>
          <PrimaryButton href="/portfolio">View Portfolio</PrimaryButton>
        </>
      }
    />
  );
};
