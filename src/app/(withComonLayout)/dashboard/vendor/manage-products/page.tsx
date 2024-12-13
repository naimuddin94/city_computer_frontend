import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchShopOrders } from "@/services/OrderSrvice";
import { FilterIcon, FilterXIcon, ListOrderedIcon } from "lucide-react";
import OrdersTableRow from "./_components/OrderTableRow";

async function ManageOrders() {
  const { data } = await fetchShopOrders();

  return (
    <Container>
      <div className="flex flex-col h-full my-8">
        <header>
          <div className="bg-background border-b pb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Orders Management</h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between my-5">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 flex gap-4">
              <Input
                type="search"
                placeholder="Search orders..."
                className="w-full"
              />
            </div>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <FilterIcon className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 p-5">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="grid gap-2">
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <div className="grid gap-2">
                        <Label className="flex items-center gap-2">
                          <Checkbox value="Electronics" />
                          Electronics
                        </Label>
                        <Label className="flex items-center gap-2">
                          <Checkbox value="Bags" />
                          Bags
                        </Label>
                        <Label className="flex items-center gap-2">
                          <Checkbox value="Outdoor" />
                          Outdoor
                        </Label>
                        <Label className="flex items-center gap-2">
                          <Checkbox value="Accessories" />
                          Accessories
                        </Label>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="price-range">Price Range</Label>
                      <div className="w-full" />
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <ListOrderedIcon className="h-4 w-4 mr-2" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Latest</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Price: Low to High
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Price: High to Low
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline">
                <FilterXIcon className="h-4 w-4 mr-2" />
                Clear
              </Button>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="16">16</SelectItem>
                  <SelectItem value="32">32</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto pt-5">
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((order) => (
                  <OrdersTableRow key={order.orderId} order={order} />
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </Container>
  );
}

export default ManageOrders;
