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
        title: "Manage Product",
        href: "/dashboard/admin/manage-product",
        description: "Edit or remove existing products.",
      },
      {
        title: "Reviews",
        href: "/dashboard/admin/reviews",
        description: "Read and respond to customer reviews.",
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
        href: "/dashboard/vendor/manage-product",
        description: "Edit or remove existing products.",
      },
      {
        title: "Orders",
        href: "/dashboard/vendor/my-orders",
        description: "Track your order history and status.",
      },
      {
        title: "Reviews",
        href: "/dashboard/vendor/reviews",
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
