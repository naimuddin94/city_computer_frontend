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
