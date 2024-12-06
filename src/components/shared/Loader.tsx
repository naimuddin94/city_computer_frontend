import { ThreeCircles } from "react-loader-spinner";

const Loader = ({ size }: { size: number }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <ThreeCircles
        visible={true}
        color="#DC0083"
        width={size}
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
