"use client";

import React, { useState, createContext, useContext } from "react";
import it from "@/languages/it";
import en from "@/languages/en";
import { Texts } from "@/lib/types";

type Language = "It" | "En";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  activeLanguage: Language;
  setActiveLanguage: React.Dispatch<React.SetStateAction<Language>>;
  languageStrings: Texts;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [activeLanguage, setActiveLanguage] = useState<Language>(() => {
    const browserLanguage = navigator.language.toLowerCase();
    return browserLanguage.startsWith("it") ? "It" : "En";
  });
  const languageStrings = activeLanguage === "En" ? en : it;

  return (
    <LanguageContext.Provider
      value={{
        activeLanguage,
        setActiveLanguage,
        languageStrings,
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
