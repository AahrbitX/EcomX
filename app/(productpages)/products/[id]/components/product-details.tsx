import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/product";
import React from "react";

function ProductDetails({ product }: { product: Product }) {
  return (
    <Card className="h-full p-2 bg-secondary">
      <CardHeader>
        <CardTitle>Reviews and Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <p>we can have reviews and comments here for product {product.id}</p>
      </CardContent>
    </Card>
  );
}

export default ProductDetails;
