import Link from "next/link";

import { Footer } from "@/app/[lng]/components/Footer";
import { useTranslation } from "@/app/i18n";

export default async function SecondPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "second-page");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center text-4xl font-bold">{t("title")}</h1>
      <p>
        <Link href={`/${lng}`}>{t("back-to-home")}</Link>
      </p>
      <Footer lng={lng} path="/second-page" />
    </main>
  );
}
