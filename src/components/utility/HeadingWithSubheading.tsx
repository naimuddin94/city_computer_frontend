interface IProps {
  heading: string;
  subHeading: string;
}

const HeadingWithSubheading = ({ heading, subHeading }: IProps) => {
  return (
    <>
      <h4 className="text-primary uppercase font-semibold">{subHeading}</h4>
      <h1 className="text-xl text-primary md:text-4xl font-black max-w-sm">
        {heading}
      </h1>
    </>
  );
};

export default HeadingWithSubheading;
