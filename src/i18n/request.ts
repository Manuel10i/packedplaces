import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import { locales, defaultLocale } from "./config";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;

  let locale = defaultLocale;
  if (cookieLocale && locales.includes(cookieLocale as (typeof locales)[number])) {
    locale = cookieLocale as typeof locale;
  } else {
    const headerStore = await headers();
    const acceptLang = headerStore.get("accept-language") ?? "";
    const preferred = acceptLang
      .split(",")
      .map((s) => s.split(";")[0].trim().substring(0, 2));
    const match = preferred.find((l) =>
      locales.includes(l as (typeof locales)[number]),
    );
    if (match) locale = match as typeof locale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
