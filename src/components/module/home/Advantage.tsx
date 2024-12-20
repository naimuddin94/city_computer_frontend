import Container from "@/components/shared/Container";
import {
  BadgePercent,
  CircleCheckBig,
  Cog,
  TruckIcon,
  Wrench,
} from "lucide-react";
import AdvantageCard from "./features/AdvantageCard";

const Advantage = () => {
  return (
    <Container>
      <div className="flex flex-wrap gap-2 items-center justify-between bg-gradient-to-br from-theme-yellow to-theme-color-100 p-4 text-primary">
        <AdvantageCard text="Fast Delivery" Icon={TruckIcon} />
        <AdvantageCard text="100% Authentic Products" Icon={CircleCheckBig} />
        <AdvantageCard text="Best Price Guaranteed" Icon={BadgePercent} />
        <AdvantageCard text="Quick Service" Icon={Cog} />
        <AdvantageCard text="Quality Installation" Icon={Wrench} />
      </div>
    </Container>
  );
};

export default Advantage;
