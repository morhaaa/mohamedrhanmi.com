import React from "react";
import ActiveSectionContextProvider from "./active-section";
import { Toaster } from "react-hot-toast";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ActiveSectionContextProvider>
      <Toaster />
      {children}
    </ActiveSectionContextProvider>
  );
}
