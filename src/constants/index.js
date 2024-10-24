import { Cart, Category, Dashboard, Search, User, WhishList } from "./icons";
import DnsIcon from "@mui/icons-material/Dns";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Browse1,
  Browse2,
  Browse3,
  Ck,
  Creed,
  Dior,
  Gucci,
  Popular,
  Sample,
  Seller,
  Yardly,
} from "./images";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Shop",
    path: "/shop",
  },
  {
    id: 3,
    title: "About",
    path: "/about",
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    title: "Language",
    path: null,
  },
];

export const MENU_ITEMS = [
  {
    title: "Dashboard",
    icon: Dashboard,
    path: "/admin",
    iconType: "img",
  },
  {
    title: "Category",
    icon: Category,
    iconType: "img",
    subItems: [
      { title: "Category List", path: "/admin/list" },
      { title: "New Category", path: "/admin/add-list" },
    ],
  },
  {
    title: "Products",
    icon: DnsIcon,
    iconType: "component",
    subItems: [
      { title: "Product List", path: "/admin/product-list" },
      { title: "New Product", path: "/admin/add-product" },
    ],
  },
  {
    title: "Orders",
    icon: ShoppingCartIcon,
    iconType: "component",
    subItems: [{ title: "Order List", path: "/admin/order-list" }],
  },
];
export const navbarBottomSection = [
  {
    id: 1,
    title: "Best Seller",
    path: "/best-seller",
  },
  {
    id: 2,
    title: "New Collection",
    path: "/new-collection",
  },
  {
    id: 3,
    title: "Holiday Sale",
    path: "/holiday-sale",
  },
  {
    id: 4,
    title: "Atyab Special",
    path: "/atyab-special",
  },
];
export const aboutUsStatics = [
  {
    id: 1,
    title: "year of experience",
    value: 25,
  },
  {
    id: 2,
    title: "Happly Clients",
    value: 1200,
  },
  {
    id: 3,
    title: "Happly Clients",
    value: 1300,
  },
  {
    id: 4,
    title: "Products",
    value: 100,
  },
];
export const iconMenu = [
  {
    id: 1,
    title: "user",
    icon: User,
    path: null,
  },
  {
    id: 2,
    title: "search",
    icon: Search,
    path: null,
  },
  {
    id: 3,
    title: "whishlist",
    icon: WhishList,
    path: "/whishlist",
  },
  {
    id: 4,
    title: "cart",
    icon: Cart,
    path: null,
  },
];

export const brands = [
  {
    id: 1,
    title: "gucci",
    image: Gucci,
  },
  {
    id: 2,
    title: "creed",
    image: Creed,
  },
  {
    id: 3,
    title: "dior",
    image: Dior,
  },
  {
    id: 4,
    title: "ck",
    image: Ck,
  },
  {
    id: 5,
    title: "yardley",
    image: Yardly,
  },
];

export const explore = [
  {
    id: 1,
    title: "Most Seller",
    image: Seller,
  },
  {
    id: 2,
    title: "Sample",
    image: Sample,
  },
  {
    id: 3,
    title: "Popular",
    image: Popular,
  },
];
export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
// framer motion effects
export const motionUp = {
  initial: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export const browse = [
  {
    id: 1,
    title: "Best sellers",
    image: Browse1,
  },
  {
    id: 2,
    title: "Popular Brands",
    image: Browse2,
  },
  {
    id: 3,
    title: "Popular",
    image: Browse3,
  },
];

export const productCategories = [
  {
    id: 1,
    title: "Antiques",
  },
  {
    id: 2,
    title: "Oud oil",
  },
  {
    id: 3,
    title: "Natural Oud",
  },
  {
    id: 4,
    title: "Perfumes",
  },
  {
    id: 5,
    title: "Oud oil spray",
  },
  {
    id: 6,
    title: "Nano Tola",
  },
  {
    id: 7,
    title: "Source service",
  },
  {
    id: 8,
    title: "Home fragrances",
  },
];

export const sort = [
  {
    id: 1,
    title: "Best Seller",
  },
  {
    id: 2,
    title: "New Collection",
  },
  {
    id: 3,
    title: "Holiday Sale",
  },
  {
    id: 4,
    title: "Atyab sepecial",
  },
];

export const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB in bytes
export const ACCEPTED_FILE_TYPES = {
  "image/png": [".png"],
  "image/jpeg": [".jpg", ".jpeg"],
  "image/svg+xml": [".svg"],
  "image/webp": [".webp"],
};

export const dogFoodCategories = [
  {
    id: 1,
    category: "Dried food",
    name: "name 1",
    description: "description 1",
    price: 10,
    quantity: 1638,
    sale: 20,
    image:
      "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
  },
  {
    id: 2,
    category: "Wet food",
    name: "name 2",
    description: "description 2",
    price: 300,
    quantity: 1638,
    sale: 20,
    image:
      "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
  },
  {
    id: 3,
    category: "Supplemental food",
    name: "name 3",
    description: "description 3",
    price: 300,
    quantity: 1638,
    sale: 20,
    image:
      "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
  },
];

export const productListDummy = [
  {
    id: 1,
    category: "Dried food",
    name: "name 1",
    description: "description 1",
    price: 10,
    quantity: 1638,
    sale: 20,
    image: [
      {
        FileUrl:
          "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
      },
      {
        FileUrl:
          "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
      },
      {
        FileUrl:
          "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
      },
      {
        FileUrl:
          "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
      },
    ],
  },
  {
    id: 2,
    category: "Wet food",
    name: "name 2",
    description: "description 2",
    price: 300,
    quantity: 1638,
    sale: 20,
    image: [
      {
        FileUrl:
          "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
      },
      {
        FileUrl:
          "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
      },
      {
        FileUrl:
          "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
      },
      {
        FileUrl:
          "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
      },
    ],
  },
  {
    id: 3,
    category: "Supplemental food",
    name: "name 3",
    description: "description 3",
    price: 300,
    quantity: 1638,
    sale: 20,
    image: [
      {
        FileUrl:
          "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
      },
      {
        FileUrl:
          "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
      },
      {
        FileUrl:
          "https://fileserver.sacrosys.net/clients/1010002/products/638615536462710768_12983846_5114855.jpg",
      },
    ],
  },
];
