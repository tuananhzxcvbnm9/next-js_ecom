import { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "p_1",
    slug: "aura-noise-cancelling-headphones",
    name: "Aura Noise-Cancelling Headphones",
    description: "Premium over-ear headphones with adaptive ANC, studio-grade sound, and 40-hour battery.",
    category: "Audio",
    price: 299,
    compareAtPrice: 349,
    isNew: true,
    rating: 4.8,
    stock: 24,
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80"
    ],
    variants: [
      { id: "v1-black", name: "Color", value: "Matte Black" },
      { id: "v1-silver", name: "Color", value: "Arctic Silver" }
    ],
    tags: ["best-seller", "audio"]
  },
  {
    id: "p_2",
    slug: "pulse-smartwatch-pro",
    name: "Pulse Smartwatch Pro",
    description: "Titanium smartwatch with AMOLED display, health insights, and GPS tracking.",
    category: "Wearables",
    price: 399,
    rating: 4.7,
    stock: 42,
    isNew: true,
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
    ],
    variants: [
      { id: "v2-41mm", name: "Size", value: "41mm" },
      { id: "v2-45mm", name: "Size", value: "45mm" }
    ],
    tags: ["fitness", "wearables"]
  },
  {
    id: "p_3",
    slug: "nova-standing-desk",
    name: "Nova Standing Desk",
    description: "Electric height-adjustable desk with cable management and memory presets.",
    category: "Furniture",
    price: 799,
    compareAtPrice: 899,
    rating: 4.9,
    stock: 10,
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582582494700-f8ce0b0c24f5?auto=format&fit=crop&w=1200&q=80"
    ],
    variants: [
      { id: "v3-walnut", name: "Finish", value: "Walnut" },
      { id: "v3-white", name: "Finish", value: "Cloud White" }
    ],
    tags: ["workspace", "best-seller"]
  },
  {
    id: "p_4",
    slug: "lumen-wireless-charger",
    name: "Lumen Wireless Charger",
    description: "Fast Qi2 magnetic charging dock with soft ambient night light.",
    category: "Accessories",
    price: 79,
    rating: 4.6,
    stock: 130,
    images: [
      "https://images.unsplash.com/photo-1615526675059-31f9419f2f55?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1200&q=80"
    ],
    variants: [
      { id: "v4-white", name: "Color", value: "Ivory" },
      { id: "v4-charcoal", name: "Color", value: "Charcoal" }
    ],
    tags: ["accessories"]
  }
];

export const categories = [...new Set(products.map((item) => item.category))];

export const featuredCategories = [
  {
    title: "Smart Audio",
    subtitle: "Immersive listening built for focus.",
    href: "/products?category=Audio",
    image:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Productive Workspace",
    subtitle: "Furniture engineered for daily creators.",
    href: "/products?category=Furniture",
    image:
      "https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&w=1200&q=80"
  }
];
