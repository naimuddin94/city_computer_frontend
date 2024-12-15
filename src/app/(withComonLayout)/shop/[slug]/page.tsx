import { Calendar, Mail, MapPin } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getShopInfo } from "@/services/ShopService";
import moment from "moment";
import CouponRow from "./_components/CouponRow";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ShopDetailsPage(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const slug = params.slug;

  const { data: shop } = await getShopInfo(slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-6 pb-6">
          <Image
            src={shop.logo}
            alt={shop.name}
            width={150}
            height={150}
            className="rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <CardTitle className="text-3xl font-bold mb-2">
              {shop.name}
            </CardTitle>
            <p className="text-muted-foreground flex items-center justify-center sm:justify-start">
              <MapPin className="w-4 h-4 mr-2" />
              {shop.address}
            </p>
            <div className="mt-2">
              <Button variant="outline" size="sm">
                Follow
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-muted-foreground">{shop.description}</p>
          </div>
          <div className="sm:flex justify-between gap-4">
            <div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Vendor Information
                </h3>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={shop.vendor.image || undefined}
                      alt={shop.vendor.name}
                    />
                    <AvatarFallback>
                      {shop.vendor.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{shop.vendor.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {shop.vendor.email}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground flex mt-3">
                <Calendar className="w-4 h-4 mr-2" />
                Shop created on{" "}
                {moment(shop.createdAt).subtract(10, "days").calendar()}
              </div>
            </div>
            <div className="flex-1 max-w-md">
              {shop?.coupon && shop.coupon?.length > 0 && (
                <Card className="w-full max-w-4xl mx-auto mt-8">
                  <CardTitle className="text-center py-3 text-primary">
                    Coupons
                  </CardTitle>
                  <CardContent>
                    <Table className="mb-8">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Code</TableHead>
                          <TableHead>Discount</TableHead>
                          <TableHead>Expiry</TableHead>
                          <TableHead>Copy</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {shop?.coupon.map((coupon) => (
                          <CouponRow key={coupon.code} coupon={coupon} />
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
