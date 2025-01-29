import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { Tag } from "lucide-react";

function CartCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col gap-2 mt-3 p-3 rounded-2xl border border-zinc-200">
      <div className="flex justify-between flex-grow gap-3">
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          className="rounded-2xl"
        />
        <div>
          <h2 className="text-lg font-bold text-balance">{product.name}</h2>
          <p className="text-sm mt-1 text-gray-500 flex items-center gap-3">
            <Tag size={18} />
            Category
          </p>
        </div>
        <p className="text-lg font-bold">{product.price}</p>
      </div>
    </div>
  );
}

export default CartCard;
