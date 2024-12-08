export interface IChildrenProps {
  children: React.ReactNode;
}

export interface IUser {
  userId: string;
  email: string;
  role: string;
  image?: string;
}

export interface IInputProps {
  name: string;
  label: string;
  placeholder: string;
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