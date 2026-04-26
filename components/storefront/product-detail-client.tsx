"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

export function ProductDetailClient({ product }: { product: Product }) {
  const [variant, setVariant] = useState(product.variants[0]?.id);
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">{formatCurrency(product.price)}</span>
        {product.compareAtPrice && <span className="text-muted-foreground line-through">{formatCurrency(product.compareAtPrice)}</span>}
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">Variants</p>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((v) => (
            <button
              key={v.id}
              onClick={() => setVariant(v.id)}
              className={`rounded-xl border px-3 py-2 text-sm ${variant === v.id ? "border-primary bg-primary/10 text-primary" : ""}`}
            >
              {v.value}
            </button>
          ))}
        </div>
      </div>
      <Button
        size="lg"
        className="w-full md:w-auto"
        onClick={() => {
          if (!variant) return;
          addItem(product.id, variant);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}
