import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-premium">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="space-y-3 p-4">
        <div className="flex items-center gap-2">
          {product.compareAtPrice && <Badge variant="sale">Sale</Badge>}
          {product.isNew && <Badge variant="new">New</Badge>}
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{product.category}</p>
          <Link href={`/products/${product.slug}`} className="font-semibold leading-tight hover:text-primary">
            {product.name}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold">{formatCurrency(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatCurrency(product.compareAtPrice)}</span>
          )}
        </div>
        <Link href={`/products/${product.slug}`} className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-white hover:opacity-90">View details</Link>
      </div>
    </article>
  );
}
