"use client";

import { useState, useEffect } from "react";

export function useTranslation() {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState({});

  useEffect(() => {
    async function loadMessages() {
      const res = await fetch(`/locales/${locale}.json`);
      const data = await res.json();
      setMessages(data);
    }
    loadMessages();
  }, [locale]);

  const t = (path) => {
    return path.split(".").reduce((obj, key) => obj?.[key], messages) || path;
  };

  return { t, locale, setLocale };
}
