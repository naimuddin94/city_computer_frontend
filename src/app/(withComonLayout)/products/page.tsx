import Container from "@/components/shared/Container";
import ProductFiltering from "./_components/ProductFiltering";

async function Products() {
  return (
    <Container className="my-8">
      <ProductFiltering />
    </Container>
  );
}

export default Products;
