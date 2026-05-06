import PrimaryButton from "@/components/button/PrimaryButton";
import WhiteButton from "@/components/button/WhiteButton";
import HeroSection from "../shared/Hero/HeroSection";

export const ABoutHero = () => {
  return (
    <HeroSection
      badgeIcon="/image/heroBridgeIcons/Award.svg"
      badgeText="About Us"
      title={
        <>
          Great designs <br /> are built by great people
        </>
      }
      description={
        <>
          At DesignFixter, we turn ideas into visually stunning and
          high-performing digital experiences. Our mission is to help brands
          grow <br></br>through creative design, smart strategy, and seamless
          user experiences.
        </>
      }
    />
  );
};
