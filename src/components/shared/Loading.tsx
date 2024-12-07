import HashLoader from "react-spinners/HashLoader";

export default function Loading() {
  return (
    <div className="h-screen bg-black/10 fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      <HashLoader
        color="#F26B0F"
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
