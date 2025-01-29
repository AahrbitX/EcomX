"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Tag } from "lucide-react";
import { Button } from "primereact/button";

import { Product } from "@/types/product";
import { Toast } from "primereact/toast";

function ProductCard({ product }: { product: Product }) {
  const toast = useRef<Toast>(null);

  const handleAddToCart = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Product added to cart",
    });
  };

  return (
    <>
      <div
        key={`product-${product.id}`}
        className="p-4 border-zinc-300 border rounded-2xl"
      >
        <Link href={`/products/${product.id}`} key={`product-${product.id}`}>
          <div className="flex justify-center items-center w-[350px] h-[300px] rounded-2xl">
            <Image
              src={product.image}
              alt={product.name}
              width={350}
              height={350}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex justify-between flex-grow gap-3">
              <div>
                <h2 className="text-lg font-bold text-balance">
                  {product.name}
                </h2>
                <p className="text-sm mt-2 text-gray-500 flex items-center gap-3">
                  <Tag size={18} />
                  Category
                </p>
              </div>
              <p className="text-lg font-bold pl-3">{product.price}</p>
            </div>
          </div>
        </Link>
        <Button
          outlined
          className="w-full flex items-center mt-5"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={18} />
          <span className="flex-grow font-bold">Add to Cart</span>
        </Button>
      </div>
      <Toast ref={toast} />
    </>
  );
}

export default ProductCard;
