import HeadingWithSubheading from "@/components/utility/HeadingWithSubheading";
import Paragraph from "@/components/utility/Paragraph";
import { CogIcon, DrillIcon, ShieldCheckIcon } from "lucide-react";
import FeatureList from "./FeatureList";

const FeatureHero = () => {
  return (
    <div className="flex-1 text-theme-color-400">
      <HeadingWithSubheading
        heading="We offer best price"
        subHeading="Key features"
      />
      <Paragraph>
        Unlock incredible value with our second-hand laptops, where
        affordability meets quality. At our store, we redefine the notion of
        pre-owned devices by curating a selection of top-tier laptops that boast
        not only competitive prices but also exceptional quality.
      </Paragraph>
      <div>
        <FeatureList
          heading="1 year free services"
          description="Enjoy peace of mind with our services"
          Icon={DrillIcon}
        />
        <FeatureList
          heading="Quality Checked"
          description="Each laptop quality checks from us"
          Icon={ShieldCheckIcon}
        />
        <FeatureList
          heading="Professionally Refurbished"
          description="Our laptops are professionally refurbished"
          Icon={CogIcon}
        />
      </div>
    </div>
  );
};

export default FeatureHero;
