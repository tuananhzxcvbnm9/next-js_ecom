import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CheckoutPage() {
  return (
    <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
      <section className="space-y-4 rounded-2xl border p-6">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <div className="space-y-3">
          <Input placeholder="Full name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Address" />
          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="City" />
            <Input placeholder="ZIP code" />
          </div>
        </div>
      </section>
      <section className="space-y-4 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Shipping & Payment</h2>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2 rounded-xl border p-3">
            <input type="radio" name="shipping" defaultChecked /> Express Shipping (2-3 days)
          </label>
          <label className="flex items-center gap-2 rounded-xl border p-3">
            <input type="radio" name="shipping" /> Standard Shipping (5-7 days)
          </label>
        </div>
        <div className="space-y-3">
          <Input placeholder="Card holder name" />
          <Input placeholder="Card number" />
          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="MM/YY" />
            <Input placeholder="CVV" />
          </div>
        </div>
        <Button className="w-full" size="lg">Place order (mock)</Button>
      </section>
    </div>
  );
}
