import Banner from "@/components/home/Banner";
import OurCoreServices from "@/components/home/OurCoreServices";
import FAQ from "@/components/home/FAQ";
import LatestInsights from "@/components/home/LatestInsights";
import BenefitsSection from "@/components/home/BenefitsSection";
import OurTrustedBrands from "@/components/shared/OurTrustedBrands/OurTrustedBrands";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <div className="bg-gradient-custom">
        <OurTrustedBrands />
        <OurCoreServices />
      </div>
      <WhyChooseUs />
      <BenefitsSection />
      <TestimonialSection />

      <FAQ />
      <LatestInsights />
    </div>
  );
}
