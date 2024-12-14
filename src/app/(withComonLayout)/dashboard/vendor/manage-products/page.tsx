import Container from "@/components/shared/Container";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCurrentUser } from "@/services/AuthService";
import { getShopProducts } from "@/services/ProductService";
import { IFilterOptions } from "@/types";
import { redirect } from "next/navigation";
import ManageProductHeader from "./_components/ManageProductHeader";
import ProductRow from "./_components/ProductRow";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function ManageProducts(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/dashboard/vendor/manage-products");
  }

  const searchParams = await props.searchParams;
  const searchTerm = searchParams.searchTerm;
  const limit = searchParams.limit;

  const filters = { searchTerm, limit };

  const data = await getShopProducts(filters as IFilterOptions);

  return (
    <Container>
      <div className="flex flex-col h-full my-8">
        <ManageProductHeader />
        <div className="flex-1 overflow-auto pt-5">
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead className="text-center">Image</TableHead>
                  <TableHead className="text-center">Name</TableHead>
                  <TableHead className="text-center">Stock</TableHead>
                  <TableHead className="text-center">Price</TableHead>
                  <TableHead className="text-center">Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data &&
                  data?.data.map((product, idx) => (
                    <ProductRow
                      key={product.productId}
                      product={product}
                      index={idx}
                    />
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ManageProducts;
