import Image, { StaticImageData } from "next/image";

interface IProps {
  category: { image: StaticImageData; category: string };
}

const CategoryCard = ({ category }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white/25 mask-parallelogram-4 px-4 py-6 w-48 text-theme-color-400 group">
      <Image
        src={category.image}
        alt={`${category.category} image`}
        width={96}
        height={96}
      />
      <h2 className="text-xl font-semibold group-hover:underline">{category.category}</h2>
    </div>
  );
};

export default CategoryCard;
