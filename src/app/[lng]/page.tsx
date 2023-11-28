import Link from "next/link";

import { Footer } from "@/app/[lng]/components/Footer";
import { useTranslation } from "@/app/i18n";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "translation");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center text-4xl font-bold">{t("title")}</h1>
      <p>
        <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
      </p>
      <p>
        <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
      </p>
      <Footer lng={lng} />
    </main>
  );
}
