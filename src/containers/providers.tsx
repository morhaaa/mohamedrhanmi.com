import React from "react";
import ActiveSectionContextProvider from "./active-section";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "./theme-context";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <Toaster />
        {children}
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
