
import HeroSection from "@/components/shared/Hero/HeroSection";


export const PricingHeader = () => {
  return (
    <HeroSection
      badgeIcon="/image/heroBridgeIcons/Dollar.svg"
      badgeText="Flexible Pricing"
      title={
        <>
          Simple Pricing for Your <br></br> Design Needs
        </>
      }
      description={
        <>
         Choose a plan that fits your business. We offer flexible and affordable design services.
        </>
      }
      buttons={
        <>
          {/* <PrimaryButton href="/contact">View Portfolio</PrimaryButton> */}
        </>
      }
    />
  );
};
