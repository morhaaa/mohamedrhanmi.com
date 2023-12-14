"use client";

import React, { useState, createContext, useContext } from "react";

type Language = "It" | "En";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  activeLanguage: Language;
  setActiveLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [activeLanguage, setActiveLanguage] = useState<Language>(() => {
    const browserLanguage = navigator.language.toLowerCase();
    return browserLanguage.startsWith("it") ? "It" : "En";
  });

  return (
    <LanguageContext.Provider
      value={{
        activeLanguage,
        setActiveLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguageContext must be used within an ActiveLanguageProvider"
    );
  }

  return context;
}