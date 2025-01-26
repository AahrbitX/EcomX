"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  SheetDescription,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu, ProductItem } from "@/components/custom/navmenu";
import Logo from "@/components/custom/Logo";
import { MenuItem } from "@/components/custom/navmenu";
import { ModeToggle } from "@/lib/theme-toggler";
import { MenuIcon } from "lucide-react";

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
  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <header className="fixed top-0 w-full bg-background z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo logoText="EcomX" />
          <nav className="hidden md:flex justify-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="font-medium transition-colors hover:text-primary hover:opacity-[0.9]"
              >
                {item.title}
              </Link>
            ))}
            <Menu setActive={setActive}>
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
            </Menu>
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <div className="hidden md:block space-x-3">
              <Button variant="ghost" asChild>
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>
                    <Logo logoText="EcomX" />
                  </SheetTitle>
                  <SheetDescription>Navigation menu</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col h-full justify-between pb-10">
                  <div className="flex flex-col justify-between space-y-4 pt-10">
                    {navItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="font-medium transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col justify-between space-y-4 pb-5">
                    <ModeToggle />
                    <Button variant="ghost" asChild>
                      <Link href="/signin" onClick={() => setIsOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="/signup" onClick={() => setIsOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
