import React from "react";
import { Card } from "primereact/card";
import { Product } from "@/types/product";
import { dummyReviews } from "./dummy_reviews";
import { Rating } from "primereact/rating";

import "./reviews.css";
import { Panel } from "primereact/panel";

function ProductReviews({ product }: { product: Product }) {
  return (
    <Panel header={`Reviews for ${product.name}`} className="">
      <div className="space-y-4">
        {dummyReviews.map((r) => (
          <Card unstyled key={r.id}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 justify-between items-center">
                <div className="">
                  <h2 className="text-lg font-bold mb-2">{r.userName}</h2>
                  <p className="text-sm text-gray-500">{r.date}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <Rating value={r.rating} disabled cancel={false} />
                </div>
              </div>
              <p className="text-sm text-gray-500">{r.comment}</p>
            </div>
          </Card>
        ))}
      </div>
    </Panel>
  );
}

export default ProductReviews;
