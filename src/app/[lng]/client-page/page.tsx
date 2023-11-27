'use client';

import Link from "next/link";
import { useState } from "react";

import { useTranslation } from "@/app/i18n/client";
import { Footer } from "@/app/[lng]/components/Footer/client";

interface Props {
  params: {
    lng: string;
  }
}
export default function Page({ params: { lng } }: Props) {
  const { t } = useTranslation(lng, "client-page");
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(Math.min(10, counter + 1));
  const decrement = () => setCounter(Math.max(0, counter - 1));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">{t('title')}</h1>
      <p>{t('counter', { count: counter })}</p>
      <div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" onClick={increment}>+</button>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" onClick={decrement}>-</button>
      </div>
      <div>
        <Link href={`/${lng}/`}>
          {t('back-to-home')}
        </Link>
      </div>
      <Footer lng={lng} path="/client-page" />
    </main>
  )
}
