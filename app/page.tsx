import Image from "next/image";
import Link from "next/link";

import { ProductCard } from "@/components/storefront/product-card";
import { featuredCategories, products } from "@/lib/data/products";

export default function HomePage() {
  const bestSellers = products.filter((p) => p.tags.includes("best-seller"));

  return (
    <div className="space-y-14">
      <section className="grid items-center gap-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-white md:grid-cols-2 md:p-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-100">Premium Commerce Experience</p>
          <h1 className="text-4xl font-bold md:text-5xl">Ship your next high-converting storefront.</h1>
          <p className="text-indigo-100">Modern UI, reusable architecture, and scalable product data model.</p>
          <Link href="/products" className="inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-medium text-white hover:bg-white/20">Shop now</Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20">
          <Image
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
            alt="Premium gadgets"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Featured Categories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredCategories.map((category) => (
            <Link key={category.title} href={category.href} className="group relative block overflow-hidden rounded-2xl">
              <div className="relative h-64">
                <Image src={category.image} alt={category.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                  <p className="text-sm text-zinc-200">{category.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Best Sellers</h2>
          <Link href="/products" className="text-sm text-primary">View all</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
