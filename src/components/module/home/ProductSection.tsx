import ProductCard from "@/app/(withComonLayout)/products/_components/ProductCard";
import Container from "@/components/shared/Container";
import { IProduct } from "@/types";
import ProductSearch from "./features/ProductSearch";

interface IProps {
  products: IProduct[];
}
const ProductSection = ({ products }: IProps) => {
  return (
    <Container className="py-10">
      <h1 className="text-xl md:text-4xl text-center font-black text-primary">
        Latest Products
      </h1>
      <p className="text-center text-slate-600">
        Explore our top-rated products and enjoy exclusive offers
      </p>
      <ProductSearch />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products &&
          products?.map((product) => (
            <ProductCard product={product} key={product.productId} />
          ))}
      </div>
    </Container>
  );
};

export default ProductSection;
