import React from "react";
import ProductDetails from "./components/reviews";
import { notFound } from "next/navigation";
import ProductGallery from "./components/gallery";
import { dummyProducts } from "../dummy_products";
import { Button } from "primereact/button";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const products = dummyProducts;
  const currProduct = products.find((i) => i.id === parseInt(id));
  return {
    title: currProduct?.name || "Product Not Found",
  };
}

async function SpecificProductPage({ params }: Props) {
  const { id } = await params;
  const products = dummyProducts;
  const currProduct = products.find((i) => i.id === parseInt(id));

  if (!currProduct) {
    notFound();
  }

  return (
    <section className="container mt-24 products-grid min-h-screen">
      <div className="relative">
        <ProductGallery />
        <div className="space-y-4">
          <h1 className="text-3xl mt-10 font-dmsans md:text-4xl lg:text-5xl">
            {currProduct.name}
          </h1>
          <p className="text-gray-500">{currProduct.description}</p>

          <div className="flex flex-row gap-2 w-full justify-end">
            <Link href="/cart" className="p-button text-white">
              Add to Cart
            </Link>
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
      <ProductDetails product={currProduct} />
    </section>
  );
}

export default SpecificProductPage;
