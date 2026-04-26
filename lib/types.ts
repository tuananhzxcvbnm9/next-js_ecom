export type ProductVariant = {
  id: string;
  name: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: "Accessories" | "Audio" | "Furniture" | "Wearables";
  price: number;
  compareAtPrice?: number;
  isNew?: boolean;
  rating: number;
  stock: number;
  images: string[];
  variants: ProductVariant[];
  tags: string[];
};

export type CartItem = {
  productId: string;
  variantId: string;
  quantity: number;
};
