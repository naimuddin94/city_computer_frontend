import Container from "@/components/shared/Container";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCurrentUser } from "@/services/AuthService";
import { getAllShops } from "@/services/ShopService";
import { IFilterOptions } from "@/types";
import { redirect } from "next/navigation";
import ManageShopHeader from "./_components/ManageShopHeader";
import ShopRow from "./_components/ShopRow";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function ManageProduct(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const user = await getCurrentUser();

  if (!user) {
    return redirect("/dashboard/admin/manage-shops");
  }

  const searchParams = await props.searchParams;
  const searchTerm = searchParams.searchTerm;
  const limit = searchParams.limit;

  const filters = { searchTerm, limit };

  const data = await getAllShops(filters as IFilterOptions);

  return (
    <Container>
      <div className="flex flex-col h-full my-8">
        <ManageShopHeader />
        <div className="flex-1 overflow-auto pt-5">
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead className="text-center">Shop</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Verified</TableHead>
                  <TableHead className="text-center">Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.data &&
                  data?.data.map((shop, idx) => (
                    <ShopRow key={shop.shopId} shop={shop} index={idx} />
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ManageProduct;
