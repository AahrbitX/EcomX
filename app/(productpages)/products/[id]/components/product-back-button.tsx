"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function ProductBackButton() {
  const router = useRouter();

  return (
    <Button variant="secondary" size="icon" onClick={() => router.back()}>
      <ChevronLeft />
    </Button>
  );
}

export default ProductBackButton;
