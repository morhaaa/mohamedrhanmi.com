import React from "react";
import ActiveSectionContextProvider from "./active-section";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import ThemeContextProvider from "./theme-context";

const LanguageContextProvider = dynamic(() => import("./language-context"), {
  ssr: false,
});

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Analytics />
          <Toaster />
          {children}
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </LanguageContextProvider>
  );
}
