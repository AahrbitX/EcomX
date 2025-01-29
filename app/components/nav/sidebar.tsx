import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function AppSidebar() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2 className="text-2xl font-bold font-dmsans">ECOMX</h2>
        <nav className="flex flex-col items-center gap-3">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/products">Products</Link>
        </nav>
      </Sidebar>
      <Button
        size="small"
        text
        className="md:hidden inline-block "
        onClick={() => setVisible(true)}
      >
        <Menu />
      </Button>
    </>
  );
}
