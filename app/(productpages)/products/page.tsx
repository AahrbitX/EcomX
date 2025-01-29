import React from "react";

import { dummyProducts } from "./dummy_products";
import ProductCard from "@/app/(purchasepages)/common/product-card";

function ProductsIndexPage() {
  return (
    <section className="mt-24 container min-h-screen">
      <p className="my-4 text-muted-foreground">
        products search bar and filters goes here
      </p>
      <div className="flex flex-wrap gap-4">
        {dummyProducts.map((i) => (
          <ProductCard product={i} key={`product-${i.id}`} />
        ))}
      </div>
    </section>
  );
}

export default ProductsIndexPage;
