import FeaturePics from "./features/FeaturePics";
import FeatureHero from "./features/FeatureHero";

const Features = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row common-padding py-10 items-center justify-between px-20">
      <FeatureHero />
      <FeaturePics />
    </div>
  );
};

export default Features;
