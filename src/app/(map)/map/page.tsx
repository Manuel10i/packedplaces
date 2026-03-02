"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { MapView } from "@/components/map/MapView";
import { TimeSlider } from "@/components/controls/TimeSlider";
import { YearSelector } from "@/components/controls/YearSelector";
import { HolidayPanel } from "@/components/controls/HolidayPanel";
import { Legend } from "@/components/controls/Legend";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useUrlSync } from "@/hooks/useUrlSync";

export default function MapPage() {
  useUrlSync();
  const t = useTranslations("map");

  return (
    <div className="relative h-screen w-screen">
      <MapView />

      {/* Top-left: title + year selector + language */}
      <div className="absolute left-4 top-4 z-10 flex items-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-white/95 px-4 py-2 text-lg font-bold text-gray-800 shadow-lg backdrop-blur-sm hover:bg-white transition-colors"
        >
          {t("title")}
        </Link>
        <YearSelector />
        <LanguageSwitcher variant="map" />
      </div>

      {/* Right sidebar: Holidays & Events panel */}
      <div className="absolute right-4 top-[66px] z-10 w-72">
        <HolidayPanel />
      </div>

      {/* Bottom: Time slider + Legend */}
      <div className="absolute bottom-10 left-4 right-4 z-10 flex items-end gap-3">
        <div className="flex-1">
          <TimeSlider />
        </div>
        <div className="w-48 shrink-0">
          <Legend />
        </div>
      </div>
    </div>
  );
}
