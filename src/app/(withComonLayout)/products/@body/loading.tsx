import Container from "@/components/shared/Container";
import ProductSkeleton from "../_components/ProductSkeleton";

const loading = () => {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
      {Array.from({ length: 8 }).map((un, idx) => (
        <ProductSkeleton key={idx} />
      ))}
    </Container>
  );
};

export default loading;
