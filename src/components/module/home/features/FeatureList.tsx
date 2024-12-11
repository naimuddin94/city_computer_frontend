import { ElementType } from "react";

interface IProps {
  heading: string;
  description: string;
  Icon: ElementType;
}

const FeatureList = ({ heading, description, Icon }: IProps) => {
  return (
    <div className="flex gap-3 py-2 items-center w-fit px-6 rounded-lg">
      <div className=" bg-theme-color-100 rounded-xl p-3">
        <Icon className="text-3xl text-primary" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-primary">{heading}</h4>
        <p className="text-sm opacity-60">{description}</p>
      </div>
    </div>
  );
};

export default FeatureList;
