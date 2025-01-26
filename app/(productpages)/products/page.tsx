import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

function ProductsIndexPage() {
  return (
    <section className="mt-24 container min-h-screen">
      <p className="my-4 text-muted-foreground">
        products search bar and filters goes here
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Link href={`/products/${i}`} key={`product-${i}`}>
            <Card>
              <CardHeader>
                <CardTitle>Product {i}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductsIndexPage;
