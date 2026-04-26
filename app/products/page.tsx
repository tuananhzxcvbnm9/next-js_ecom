import { ProductCard } from "@/components/storefront/product-card";
import { categories, products } from "@/lib/data/products";

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = typeof params.category === "string" ? params.category : "all";
  const q = typeof params.q === "string" ? params.q.toLowerCase() : "";
  const sort = typeof params.sort === "string" ? params.sort : "featured";

  let filtered = products.filter(
    (product) =>
      (category === "all" || product.category === category) &&
      (q.length === 0 || product.name.toLowerCase().includes(q) || product.tags.some((tag) => tag.includes(q)))
  );

  if (sort === "price_asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price_desc") filtered = [...filtered].sort((a, b) => b.price - a.price);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-2xl border p-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-sm text-muted-foreground">Filter by category, sort by price, and discover premium picks.</p>
        </div>
        <form className="grid gap-3 sm:grid-cols-2" action="/products">
          <select name="category" defaultValue={category} className="h-10 rounded-xl border px-3 text-sm">
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select name="sort" defaultValue={sort} className="h-10 rounded-xl border px-3 text-sm">
            <option value="featured">Featured</option>
            <option value="price_asc">Price: Low to high</option>
            <option value="price_desc">Price: High to low</option>
          </select>
          <input type="hidden" name="q" value={q} />
          <button className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white sm:col-span-2">Apply Filters</button>
        </form>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center">
          <h2 className="text-xl font-semibold">No products found</h2>
          <p className="text-sm text-muted-foreground">Try another search keyword or category.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
