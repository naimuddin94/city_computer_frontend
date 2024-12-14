export type TOrderStatus = "pending" | "processing" | "shipped" | "delivered";

export interface IChildrenProps {
  children: React.ReactNode;
}

export interface IUser {
  userId: string;
  email: string;
  role: string;
  name: string;
  image?: string;
}

export interface IInputProps {
  name: string;
  label: string;
  placeholder: string;
  defaultValue?: string | null;
}

export interface ITokenUser {
  userId: string;
  email: string;
  role: string;
  image?: string;
}

export interface ICategory {
  categoryId: string;
  name: string;
}

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IResponseWithMetadata<T> extends IResponse<T> {
  meta: IMeta;
}

export interface IGetCategoriesProps {
  page: number;
  limit: number;
}

export interface IShop {
  shopId: string;
  name: string;
  description: string;
  logo: string;
  address: string;
}

export interface IProduct {
  productId: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  category: ICategory;
  shop: IShop;
}

export interface IProductDetails extends IProduct {
  reviews: {
    comment: string;
    user: Pick<IUser, "name" | "image" | "email">;
  }[];
}

export interface IFilterOptions {
  page?: string;
  limit?: string;
  searchTerm?: string;
  fields?: string;
  sort?: string;
}

export interface IMyOrder {
  orderId: string;
  address: string;
  phone: string;
  totalAmount: number;
  status: TOrderStatus;
  paymentId: string;
  createdAt: string;
  orderItems: IOrderItem[];
}

export interface IShopOrder extends IMyOrder {
  user: { name: string; email: string };
  paymentStatus: string;
}

export interface IOrderItem {
  orderItemId: string;
  quantity: number;
  price: number;
  product: Pick<IProduct, "productId" | "image" | "name" | "price" | "shop">;
}

export interface IOrderItemType {
  productId: string;
  quantity: number;
  coupon?: string;
}

export interface IOrderData {
  address: string;
  phone: string;
  paymentInfo: string;
  payAmount: number;
  orderItems: IOrderItemType[];
}

export interface IRating {
  productId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface IReview {
  rating: number;
  comment: string;
  createdAt: string;
  user: Pick<IUser, "name" | "image" | "email">;
}

export interface IShop {
  shopId: string;
  name: string;
  address: string;
  description: string;
  logo: string;
  status: string;
  isVerified: boolean;
  createdAt: string;
  vendor: Vendor;
}

export interface Vendor {
  userId: string;
  name: string;
  email: string;
  image: string | null;
}
