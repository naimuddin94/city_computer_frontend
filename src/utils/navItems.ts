type dropdownMenu = { title: string; href: string; description: string };

export type navItem = {
  label: string;
  href?: string;
  children?: dropdownMenu[];
};

export const adminNavItems: navItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Dashboard",
    children: [
      {
        title: "Add Brand",
        href: "/dashboard/add-brand",
        description: "Add a new brand to your store.",
      },
      {
        title: "Add Product",
        href: "/dashboard/add-product",
        description: "Add new products to your inventory.",
      },
      {
        title: "Manage Product",
        href: "/dashboard/manage-product",
        description: "Edit or remove existing products.",
      },
      {
        title: "Orders",
        href: "/dashboard/orders",
        description: "View and manage all customer orders.",
      },
      {
        title: "Reviews",
        href: "/dashboard/reviews",
        description: "Read and respond to customer reviews.",
      },
      {
        title: "My Orders",
        href: "/dashboard/my-orders",
        description: "Track your order history and status.",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export const userNavItems: navItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Dashboard",
    children: [
      {
        title: "Profile",
        href: "/dashboard/profile",
        description: "View and edit your personal information.",
      },
      {
        title: "My Orders",
        href: "/dashboard/my-orders",
        description: "Track your order history and status.",
      },
      {
        title: "Carts",
        href: "/dashboard/carts",
        description: "View items in your shopping cart.",
      },
      {
        title: "Ratings",
        href: "/dashboard/ratings",
        description: "Rate and review purchased products.",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
