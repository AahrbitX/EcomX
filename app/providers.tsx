"use client";

import { APIOptions, PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

export function Providers({ children }: { children: React.ReactNode }) {
  const value: APIOptions = {
    ripple: true,
    unstyled: true,
    pt: Tailwind,
  };

  return <PrimeReactProvider value={value}>{children}</PrimeReactProvider>;
}
