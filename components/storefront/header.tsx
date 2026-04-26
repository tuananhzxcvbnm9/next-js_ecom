"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { useCartStore, getCartTotals } from "@/store/cart-store";

export function Header() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const { count } = useMemo(() => getCartTotals(items), [items]);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-lg font-bold tracking-tight">Asteria Store</Link>
        <form
          className="relative hidden w-full max-w-lg md:block"
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/products?q=${encodeURIComponent(search)}`);
          }}
        >
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search premium products..."
            className="pl-9"
          />
        </form>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/products">Products</Link>
          <Link href="/cart" className="relative inline-flex items-center">
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
