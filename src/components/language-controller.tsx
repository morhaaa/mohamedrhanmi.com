"use client";

import React from "react";
import { useLanguage } from "@/containers/language-context";
import Switch from "./switch";

export default function LanguageSwitch() {
  const { activeLanguage, setActiveLanguage } = useLanguage();

  const setLanguage = () => {
    setActiveLanguage(activeLanguage === "It" ? "En" : "It");
  };

  return (
    <div className="fixed bottom-5 left-5">
      <Switch
        activeButton={activeLanguage}
        hiddenButton={activeLanguage === "It" ? "En" : "It"}
        setActiveButton={setLanguage}
      />
    </div>
  );
}
