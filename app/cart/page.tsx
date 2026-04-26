"use client";

import Link from "next/link";

import { products } from "@/lib/data/products";
import { formatCurrency } from "@/lib/utils";
import { getCartTotals, useCartStore } from "@/store/cart-store";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  const cartRows = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return null;
      const variant = product.variants.find((v) => v.id === item.variantId);
      return { item, product, variant };
    })
    .filter(Boolean);

  const { subtotal } = getCartTotals(items);

  if (cartRows.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed p-14 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-sm text-muted-foreground">Discover premium products and add them to your cart.</p>
        <Link href="/products" className="mt-5 inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-sm font-medium text-white hover:opacity-90">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Cart</h1>
        {cartRows.map((row) => {
          if (!row) return null;
          return (
            <article key={`${row.product.id}_${row.item.variantId}`} className="rounded-2xl border p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-semibold">{row.product.name}</h2>
                  <p className="text-sm text-muted-foreground">{row.variant?.value}</p>
                  <p className="mt-2 font-medium">{formatCurrency(row.product.price)}</p>
                </div>
                <button
                  className="text-sm text-red-600"
                  onClick={() => removeItem(row.product.id, row.item.variantId)}
                >
                  Remove
                </button>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl border p-1">
                <button className="px-3 py-1" onClick={() => updateQuantity(row.product.id, row.item.variantId, row.item.quantity - 1)}>-</button>
                <span className="min-w-8 text-center">{row.item.quantity}</span>
                <button className="px-3 py-1" onClick={() => updateQuantity(row.product.id, row.item.variantId, row.item.quantity + 1)}>+</button>
              </div>
            </article>
          );
        })}
      </section>
      <aside className="h-fit rounded-2xl border p-5">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <div className="mt-4 flex justify-between text-sm">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <Link href="/checkout" className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-xl bg-primary px-4 text-sm font-medium text-white hover:opacity-90">Continue to checkout</Link>
      </aside>
    </div>
  );
}
