import ActionCameraSection from "@/components/module/home/ActionCameraSection";
import Advantage from "@/components/module/home/Advantage";
import Advertizement from "@/components/module/home/Advertizement";
import Banner from "@/components/module/home/Banner";
import Category from "@/components/module/home/Category";
import Features from "@/components/module/home/Features";
import WhyUs from "@/components/module/home/WhyUs";

export default function Home() {
  return (
    <section>
      <Banner />
      <Advantage />
      <Category />
      <WhyUs />
      <Features />
      <ActionCameraSection />
      <Advertizement />
    </section>
  );
}
