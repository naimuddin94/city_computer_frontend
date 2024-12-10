import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { apiFetch } from "@/lib/fetch";
import { IProduct, IResponse } from "@/types";
import Image from "next/image";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface IProps {
  params: Params;
  searchParams: SearchParams;
}

const ProductDetailPage = async (props: IProps) => {
  const params = await props.params;

  const res = (await apiFetch(
    `/products/${params.slug}`
  )) as IResponse<IProduct>;

  const product = res.data;

  return (
    <Container className="py-8 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            width={800}
            height={600}
            src={product.image}
            alt="Product Image"
            className="w-full rounded-lg object-cover aspect-[4/3]"
          />
        </div>
        <div className="grid gap-4">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold">{product.name}</h1>
            </div>
            <p className="text-2xl font-bold text-primary">$ {product.price}</p>

            <Button size="lg" className="mt-4">
              Add to Cart
            </Button>
          </div>
          <Tabs defaultValue="specification">
            <TabsList className="border-b">
              <TabsTrigger value="specification">Specification</TabsTrigger>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
            </TabsList>
            <TabsContent value="specification">
              <div className="grid gap-4 py-6">
                <div className="grid gap-2">
                  <h2 className="text-xl font-bold">Product Specifications</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="grid gap-1">
                      <p className="font-medium">Stock</p>
                      <p className="text-muted-foreground">{product.stock}</p>
                    </div>
                    <div className="grid gap-1">
                      <p className="font-medium">Category</p>
                      <p className="text-muted-foreground">
                        {product.category.name}
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <p className="font-medium">Shop</p>
                      <p className="text-muted-foreground">
                        {product.shop.name}
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        {product.shop.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="description">
              <div className="grid gap-4 py-6">
                <div className="grid gap-2">
                  <h2 className="text-xl font-bold">Product Description</h2>
                  {product.description
                    .split("\n")
                    .map((paragraph: string, index: number) => (
                      <div key={index}>
                        <p className="text-muted-foreground pb-5">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="questions">
              <div className="grid gap-4 py-6">
                <div className="grid gap-2">
                  <h2 className="text-xl font-bold">Customer Questions</h2>
                  <div className="grid gap-6">
                    <div className="grid gap-4">
                      {/* Payment Issue */}
                      <div className="grid gap-1">
                        <p className="font-medium">
                          What payment methods do you accept?
                        </p>
                        <p className="text-muted-foreground">
                          We accept major credit/debit cards, PayPal, Stripe,
                          and other popular payment gateways.
                        </p>
                      </div>

                      {/* Warranty Issue */}
                      <div className="grid gap-1">
                        <p className="font-medium">
                          What is your product warranty policy?
                        </p>
                        <p className="text-muted-foreground">
                          We offer a 1-year warranty for manufacturing defects.
                          Please contact support for claims.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {/* Return Issue */}
                      <div className="grid gap-1">
                        <p className="font-medium">
                          What is your return policy?
                        </p>
                        <p className="text-muted-foreground">
                          You can return products within 30 days of purchase.
                          The product must be in its original condition.
                        </p>
                      </div>

                      {/* Shipping Issue */}
                      <div className="grid gap-1">
                        <p className="font-medium">
                          How long does shipping take?
                        </p>
                        <p className="text-muted-foreground">
                          Standard shipping takes 3-7 business days. Expedited
                          shipping options are also available.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailPage;
