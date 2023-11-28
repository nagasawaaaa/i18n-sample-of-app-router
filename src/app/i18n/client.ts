"use client";

import { useEffect, useState } from "react";

import i18next, { type KeyPrefix, type FlatNamespace } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { useCookies } from "react-cookie";
import {
  type FallbackNs,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { initReactI18next } from "react-i18next/initReactI18next";

import { getOptions, languages, cookieName } from "./settings";

const runsOnServerSide = typeof window === "undefined";

// クライアント側では通常のシングルトンでOK。
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespase: string) =>
        import(`./locales/${language}/${namespase}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined, // クライアント側で言語を検出できるようにする
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>>,
>(lng: string, ns?: Ns, options: { keyPrefix?: KPrefix } = {}) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const translationResponse = useTranslationOrg(ns, options);
  const { i18n } = translationResponse;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng);
    }, [lng, i18n]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (cookies.i18next === lng) return;
      setCookie(cookieName, lng, { path: "/" });
    }, [lng, cookies.i18next, setCookie]);
  }

  return translationResponse;
}
