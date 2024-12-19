import { ReactNode } from "react";

interface IProps {
  header: ReactNode;
  body: ReactNode;
}

const layout = ({ header, body }: IProps) => {
  return (
    <section>
      {header}
      {body}
    </section>
  );
};

export default layout;
