import Image from "next/image";
import { notFound } from "next/navigation";

import { ProductDetailClient } from "@/components/storefront/product-detail-client";
import { products } from "@/lib/data/products";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="grid gap-4">
        <div className="relative aspect-square overflow-hidden rounded-2xl border">
          <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {product.images.slice(0, 2).map((image) => (
            <div key={image} className="relative aspect-square overflow-hidden rounded-xl border">
              <Image src={image} alt={product.name} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <ProductDetailClient product={product} />
    </div>
  );
}
