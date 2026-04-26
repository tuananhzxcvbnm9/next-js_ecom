"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import { products } from "@/lib/data/products";
import type { CartItem } from "@/lib/types";

type CartStore = {
  items: CartItem[];
  addItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  removeItem: (productId: string, variantId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (productId, variantId) =>
        set((state) => {
          const existing = state.items.find((item) => item.productId === productId && item.variantId === variantId);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.productId === productId && item.variantId === variantId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            };
          }
          return { items: [...state.items, { productId, variantId, quantity: 1 }] };
        }),
      updateQuantity: (productId, variantId, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((item) => !(item.productId === productId && item.variantId === variantId))
              : state.items.map((item) =>
                  item.productId === productId && item.variantId === variantId ? { ...item, quantity } : item
                )
        })),
      removeItem: (productId, variantId) =>
        set((state) => ({
          items: state.items.filter((item) => !(item.productId === productId && item.variantId === variantId))
        })),
      clearCart: () => set({ items: [] })
    }),
    { name: "ecom-cart-v1" }
  )
);

export const getCartTotals = (items: CartItem[]) => {
  const subtotal = items.reduce((acc, item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return acc;
    return acc + product.price * item.quantity;
  }, 0);

  return { subtotal, count: items.reduce((acc, item) => acc + item.quantity, 0) };
};
