"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MapView, type MapDestinationClick } from "@/components/map/MapView";
import { MapHeader } from "@/components/map/MapHeader";
import { MapDisclaimer } from "@/components/map/MapDisclaimer";
import { DestinationSheet } from "@/components/map/DestinationSheet";
import { TimeSlider } from "@/components/controls/TimeSlider";
import { YearSelector } from "@/components/controls/YearSelector";
import { HolidayPanel } from "@/components/controls/HolidayPanel";
import { Legend } from "@/components/controls/Legend";
import { Sheet } from "@/components/ui/Sheet";
import { useUrlSync } from "@/hooks/useUrlSync";

export default function MapPage() {
  useUrlSync();
  const t = useTranslations("map");
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<MapDestinationClick | null>(null);

  function handleTogglePanel() {
    setIsPanelOpen((v) => !v);
    setMobileSheetOpen((v) => !v);
  }

  return (
    <>
      <MapDisclaimer />

      {/* Header */}
      <MapHeader onTogglePanel={handleTogglePanel} isPanelOpen={isPanelOpen} />

      {/* Middle: map + optional sidebar */}
      <div className="flex min-h-0 flex-1">
        <div className="relative min-h-0 flex-1">
          <div className="absolute inset-0">
            <MapView
              onDestinationClick={setSelectedDestination}
              suppressTooltip={selectedDestination !== null}
            />
          </div>
        </div>

        {/* Desktop sidebar — always mounted, animated width */}
        <aside
          className={`hidden shrink-0 overflow-hidden border-l border-line bg-surface-raised transition-[width] duration-300 ease-in-out md:block ${
            isPanelOpen ? "w-80" : "w-0 border-l-0"
          }`}
        >
          <div className="h-full w-80 overflow-y-auto p-4">
            <HolidayPanel className="p-0" />
          </div>
        </aside>
      </div>

      {/* Bottom control dock */}
      <footer className="z-10 border-t border-line bg-surface px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2.5 sm:px-4 sm:py-3">
        {/* Mobile: year selector + legend side by side */}
        <div className="mb-2 flex items-center justify-between gap-3 md:hidden">
          <YearSelector className="flex shrink-0 gap-1 rounded-[3px] border border-line bg-surface-sunken p-1" />
          <Legend className="min-w-0 flex-1 rounded-[3px] border border-line bg-surface-sunken px-3 py-1.5" />
        </div>

        <div className="flex items-end gap-3">
          <div className="min-w-0 flex-1">
            <TimeSlider className="px-1" />
          </div>
          <div className="hidden w-44 shrink-0 pb-1 md:block">
            <Legend className="rounded-[3px] border border-line bg-surface-sunken px-3 py-2" />
          </div>
        </div>
      </footer>

      {/* Destination details sheet (opened by tapping a map dot) */}
      <DestinationSheet
        selected={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />

      {/* Mobile bottom sheet for HolidayPanel */}
      <div className="md:hidden">
        <Sheet
          open={mobileSheetOpen}
          onClose={() => {
            setMobileSheetOpen(false);
            setIsPanelOpen(false);
          }}
          title={t("holidays")}
          closeLabel={t("close")}
        >
          <HolidayPanel className="max-h-none p-0 pb-4" />
        </Sheet>
      </div>
    </>
  );
}
