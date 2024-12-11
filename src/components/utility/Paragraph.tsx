import { IChildrenProps } from "@/types";

const Paragraph = ({ children }: IChildrenProps) => {
  return (
    <p className="py-2 text-slate-600 text-sm font-light max-w-md">
      {children}
    </p>
  );
};

export default Paragraph;
