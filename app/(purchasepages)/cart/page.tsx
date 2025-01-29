import React from "react";
import Link from "next/link";
import { dummyProducts } from "@/app/(productpages)/products/dummy_products";
import CartCard from "../common/cart-card";

export async function metadata() {
  return {
    title: "Cart",
  };
}

function CartPage() {
  return (
    <section className="mt-24 test-section flex-col container min-h-screen">
      <div className="flex flex-col gap-4 max-w-md">
        {dummyProducts.map((item) => (
          <CartCard product={item} key={item.id} />
        ))}
      </div>
      <Link href="/checkout" className="p-button text-white">
        Checkout
      </Link>
    </section>
  );
}

export default CartPage;
