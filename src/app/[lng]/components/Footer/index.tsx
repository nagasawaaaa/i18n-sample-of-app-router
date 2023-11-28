import type { i18n as i18N } from "i18next";

import { FooterBase } from "./FooterBase";

import { useTranslation } from "@/app/i18n";

interface Props {
  lng: string;
  path?: string;
}
export const Footer = async ({ lng, path = "" }: Props) => {
  const { t, i18n } = await useTranslation(lng, "footer");
  // FIXME: i18next のバグっぽいのでとりあえずキャストする
  // Refs: https://github.com/i18next/react-i18next/issues/1693
  return <FooterBase i18n={i18n as i18N} lng={lng} path={path} />;
};
