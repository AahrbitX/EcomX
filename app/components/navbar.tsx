"use client";

import * as React from "react";
import Link from "next/link";

import { Menu, ProductItem } from "@/components/custom/navmenu";
import Logo from "@/components/custom/Logo";
import { MenuItem } from "@/components/custom/navmenu";
import AppSidebar from "./nav/sidebar";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const navProducts = [
  {
    title: "Product 1",
    href: "/products/1",
    description: "Description for product 1",
    src: "/product1.jpg",
  },
  {
    title: "Product 2",
    href: "/products/2",
    description: "Description for product 2",
    src: "/product2.jpg",
  },
  {
    title: "Product 3",
    href: "/products/3",
    description: "Description for product 3",
    src: "/product3.jpg",
  },
  {
    title: "Product 4",
    href: "/products/4",
    description: "Description for product 4",
    src: "/product4.jpg",
  },
];

export default function Navbar() {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <header className="fixed top-0 w-full backdrop-blur-lg z-50 border-b">
      <Menu setActive={setActive} className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo logoText="EcomX" />
          <div className="hidden md:flex justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="font-medium transition-colors hover:text-primary hover:opacity-[0.9]"
              >
                {item.title}
              </Link>
            ))}
            <MenuItem
              setActive={setActive}
              active={active}
              item="Products"
              itemLink="/products"
            >
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                {navProducts.map((product) => (
                  <ProductItem
                    key={product.title}
                    title={product.title}
                    href={product.href}
                    description={product.description}
                  />
                ))}
              </div>
            </MenuItem>
          </div>
          <AppSidebar />
          <div className="md:flex hidden items-center gap-5">
            <Link href="/signin">Sign In</Link>
            <Link className="p-button outline-none text-white" href="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </Menu>
    </header>
  );
}
