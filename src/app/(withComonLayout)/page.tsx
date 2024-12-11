import ActionCameraSection from "@/components/module/home/ActionCameraSection";
import Advantage from "@/components/module/home/Advantage";
import Advertizement from "@/components/module/home/Advertizement";
import Banner from "@/components/module/home/Banner";
import Category from "@/components/module/home/Category";
import Features from "@/components/module/home/Features";
import ProductSection from "@/components/module/home/ProductSection";
import WhyUs from "@/components/module/home/WhyUs";
import { getProducts } from "@/services/ProductService";

async function Home() {
  const res = await getProducts({ page: "1", limit: "8" });

  const products = res.data;

  return (
    <section className="-mt-[3.8rem]">
      <Banner />
      <Advantage />
      <Category />
      <ProductSection products={products} />
      <WhyUs />
      <Features />
      <ActionCameraSection />
      <Advertizement />
    </section>
  );
}

export default Home;
