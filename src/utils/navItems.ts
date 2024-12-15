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
        title: "Add Category",
        href: "/dashboard/admin/add-category",
        description: "Add a new category to your store.",
      },
      {
        title: "Manage Shops",
        href: "/dashboard/admin/manage-shops",
        description: "Edit or remove existing manage shops.",
      },
      {
        title: "Manage Users",
        href: "/dashboard/admin/manage-users",
        description: "Edit or remove existing manage users.",
      },
      {
        title: "Orders",
        href: "/dashboard/admin/my-orders",
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

export const vendorNavItems: navItem[] = [
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
        title: "Add Product",
        href: "/dashboard/vendor/add-product",
        description: "Add a new product to your store.",
      },
      {
        title: "Manage Product",
        href: "/dashboard/vendor/manage-products",
        description: "Edit or remove existing products.",
      },
      {
        title: "Manage Orders",
        href: "/dashboard/vendor/manage-orders",
        description: "Track your order history and status.",
      },
      {
        title: "Manage Coupons",
        href: "/dashboard/vendor/manage-coupons",
        description: "Read and respond to customer reviews.",
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
        href: "/my-orders",
        description: "Track your order history and status.",
      },
      {
        title: "Carts",
        href: "/carts",
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

export const unauthenticatedNavItems: navItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
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
