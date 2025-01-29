import Link from "next/link";
import React from "react";

export async function metadata() {
  return {
    title: "Checkout",
  };
}

function CheckoutPage() {
  return (
    <section className="mt-24 min-h-screen container">
      <div className="">
        <h1 className="text-2xl font-bold mb-10">Checkout</h1>
        <Link href="/status" className="p-button inline">
          Status
        </Link>
      </div>
    </section>
  );
}

export default CheckoutPage;
