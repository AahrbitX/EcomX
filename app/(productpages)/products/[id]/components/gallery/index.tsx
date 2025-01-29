"use client";

import React from "react";
import { Galleria } from "primereact/galleria";
import Image from "next/image";
import "./gallery.css";

export default function ResponsiveDoc() {
  const itemData = [
    { src: "/sample/batmanframe.webp", alt: "batmanframe" },
    { src: "/sample/camera.jpeg", alt: "camera" },
    { src: "/sample/cosmetic.jpg", alt: "cosmetic" },
    { src: "/sample/copyimage.jpg", alt: "copyimage" },
  ];

  const responsiveOptions = [
    { breakpoint: "1024px", numVisible: 5 },
    { breakpoint: "960px", numVisible: 4 },
    { breakpoint: "768px", numVisible: 3 },
  ];

  const itemTemplate = (item: { src: string; alt: string }) => {
    return (
      <Image
        src={item.src}
        alt={item.alt}
        width={280}
        height={200}
        style={{ objectFit: "contain", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item: { src: string; alt: string }) => {
    return (
      <Image
        src={item.src}
        alt={item.alt}
        width={100}
        height={100}
        style={{ objectFit: "cover", display: "block" }}
      />
    );
  };

  return (
    <Galleria
      value={itemData}
      responsiveOptions={responsiveOptions}
      numVisible={7}
      circular
      style={{}}
      item={itemTemplate}
      thumbnail={thumbnailTemplate}
      showThumbnails
    />
  );
}
