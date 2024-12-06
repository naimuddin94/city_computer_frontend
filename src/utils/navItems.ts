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
<<<<<<< HEAD
        title: "Add Category",
        href: "/dashboard/add-category",
        description: "Add a new category to your store.",
      },
      {
        title: "Manage Product",
        href: "/dashboard/manage-product",
        description: "Edit or remove existing products.",
      },
      {
        title: "Reviews",
        href: "/dashboard/reviews",
        description: "Read and respond to customer reviews.",
      },
      {
        title: "Orders",
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
        href: "/dashboard/add-product",
        description: "Add a new product to your store.",
=======
        title: "Add Brand",
        href: "/dashboard/add-brand",
        description: "Add a new brand to your store.",
      },
      {
        title: "Add Product",
        href: "/dashboard/add-product",
        description: "Add new products to your inventory.",
>>>>>>> 8ab54666d26d471c636b4cdfafa4237bc890f2df
      },
      {
        title: "Manage Product",
        href: "/dashboard/manage-product",
        description: "Edit or remove existing products.",
      },
      {
        title: "Orders",
<<<<<<< HEAD
        href: "/dashboard/my-orders",
        description: "Track your order history and status.",
=======
        href: "/dashboard/orders",
        description: "View and manage all customer orders.",
>>>>>>> 8ab54666d26d471c636b4cdfafa4237bc890f2df
      },
      {
        title: "Reviews",
        href: "/dashboard/reviews",
        description: "Read and respond to customer reviews.",
      },
<<<<<<< HEAD
=======
      {
        title: "My Orders",
        href: "/dashboard/my-orders",
        description: "Track your order history and status.",
      },
>>>>>>> 8ab54666d26d471c636b4cdfafa4237bc890f2df
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
