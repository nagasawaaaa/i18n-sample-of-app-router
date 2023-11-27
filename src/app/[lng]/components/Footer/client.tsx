'use client';

import { i18n as i18N } from "i18next";
import { useTranslation } from "@/app/i18n/client";
import { FooterBase } from "./FooterBase";

interface Props {
  lng: string;
  path?: string;
}
export const Footer = ({ lng, path = "" }: Props) => {
  const { i18n } = useTranslation(lng, "footer");
  // FIXME: i18next のバグっぽいのでとりあえずキャストする
  // Refs: https://github.com/i18next/react-i18next/issues/1693
  return <FooterBase i18n={i18n as i18N} lng={lng} path={path} />
}
