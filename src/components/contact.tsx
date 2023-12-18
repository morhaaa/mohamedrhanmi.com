"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useLanguage } from "@/containers/language-context";

export default function Contact() {
  const { ref } = useSectionInView("#contact");
  const { activeLanguage } = useLanguage();

  const [senderEmail, setSenderEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    const formData = { senderEmail, message };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const { data, error } = await response.json();

      if (error) {
        toast.error(error);
        return;
      }
      if (data) {
        setSenderEmail("");
        setMessage("");
        toast.success("Email sent successfully!");
      }
    } catch (error: unknown) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>
        {activeLanguage === "It" ? "Contatami" : "Contact Me"}
      </SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {activeLanguage === "It"
          ? "Non esitare a contattarmi tramite questo form"
          : "Feel free to contact me directly through this form"}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={activeLanguage === "It" ? "La tua mail" : "Your email"}
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={
            activeLanguage === "It" ? "Il tuo messaggio" : "Your email"
          }
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn text={activeLanguage === "It" ? "Invia" : "Submit"} />
      </form>
    </motion.section>
  );
}
