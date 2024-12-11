import { ElementType } from "react";

interface IProps {
  text: string;
  Icon: ElementType;
}

const AdvantageCard = ({ text, Icon }: IProps) => {
  return (
    <div className="flex gap-1 items-center font-semibold text-theme-color-400 px-4 py-2 rounded ring-1 ring-primary/30 bg-slate-800 shadow">
      <Icon className="text-3xl" />
      <h3>{text}</h3>
    </div>
  );
};

export default AdvantageCard;
