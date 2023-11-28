import Link from "next/link";

import type { i18n } from "i18next";
import { Trans } from "react-i18next/TransWithoutContext";

import { languages } from "@/app/i18n/settings";

interface Props {
  i18n: i18n;
  lng: string;
  path: string;
}

export const FooterBase = ({ i18n, lng, path = "" }: Props) => {
  const t = i18n.getFixedT(lng, "footer");
  const filteredLanguages = languages.filter((l) => lng !== l);
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t">
      <Trans i18nKey="languageSwitcher" t={t} values={{ lng }}>
        Switch from <strong>{lng}</strong> to:{" "}
      </Trans>
      {filteredLanguages.map((l, index) => (
        <span key={l}>
          {index > 0 && " | "}
          <Link href={`/${l}${path}`}>{l}</Link>
        </span>
      ))}
    </footer>
  );
};
