import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-2xl border border-dashed p-12 text-center">
      <h1 className="text-3xl font-bold">Product not found</h1>
      <p className="mt-2 text-muted-foreground">The product may have been removed or the URL is invalid.</p>
      <Link href="/products" className="mt-4 inline-block text-primary">Back to products</Link>
    </div>
  );
}
