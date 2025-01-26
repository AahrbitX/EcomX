import React from "react";
import { Product } from "@/types/product";
import ProductDetails from "./components/product-details";
// import ProductBackButton from "./components/product-back-button";
import { CustomCarousel } from "./components/products-image-carousel";

function SpecificProductPage({ params }: { params: { id: string } }) {
  const products: Product[] = [
    {
      id: 1,
      name: "product 1",
      price: 100,
      description: "product 1 description",
      image: "product 1 image",
    },
    {
      id: 2,
      name: "product 2",
      price: 200,
      description: "product 2 description",
      image: "product 2 image",
    },
    {
      id: 3,
      name: "product 3",
      price: 300,
      description: "product 3 description",
      image: "product 3 image",
    },
  ];

  const currProduct = products.find((i) => i.id === parseInt(params.id));

  if (!currProduct) {
    return <div>Product not found</div>;
  }

  return (
    <section className="container mt-24 products-grid min-h-screen">
      <div className="relative">
        {/* <div className="flex items-center gap-3 mb-6">
          <ProductBackButton />
        </div> */}
        <div className="flex justify-center items-center">
          <CustomCarousel />
        </div>
      </div>
      <ProductDetails product={currProduct} />
    </section>
  );
}

export default SpecificProductPage;
