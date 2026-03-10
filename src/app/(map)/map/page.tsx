"use client";

import { useState } from "react";
import { MapView } from "@/components/map/MapView";
import { MapHeader } from "@/components/map/MapHeader";
import { MapDisclaimer } from "@/components/map/MapDisclaimer";
import { TimeSlider } from "@/components/controls/TimeSlider";
import { YearSelector } from "@/components/controls/YearSelector";
import { HolidayPanel } from "@/components/controls/HolidayPanel";
import { Legend } from "@/components/controls/Legend";
import { useUrlSync } from "@/hooks/useUrlSync";

export default function MapPage() {
  useUrlSync();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);

  function handleTogglePanel() {
    // Desktop: toggle sidebar
    setIsPanelOpen((v) => !v);
    // Mobile: toggle bottom sheet
    setMobileSheetOpen((v) => !v);
  }

  return (
    <>
      <MapDisclaimer />

      {/* Header */}
      <MapHeader onTogglePanel={handleTogglePanel} isPanelOpen={isPanelOpen} />

      {/* Middle: map + optional sidebar */}
      <div className="flex min-h-0 flex-1">
        <div className="relative flex-1">
          <MapView />
        </div>

        {/* Desktop sidebar — always mounted, animated width */}
        <aside
          className={`hidden shrink-0 overflow-hidden border-l border-gray-200 bg-white transition-[width] duration-300 ease-in-out md:block ${
            isPanelOpen ? "w-80" : "w-0 border-l-0"
          }`}
        >
          <div className="h-full w-80 overflow-y-auto p-4">
            <HolidayPanel className="p-0" />
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="z-10 border-t border-gray-200 bg-white px-4 py-3">
        {/* Mobile: year selector + legend side by side */}
        <div className="mb-2 flex items-center justify-between gap-3 md:hidden">
          <YearSelector className="flex shrink-0 gap-1 rounded-lg bg-gray-100 p-1" />
          <Legend className="min-w-0 flex-1 rounded-lg bg-gray-50 px-3 py-2" />
        </div>

        <div className="flex items-end gap-3">
          <div className="flex-1">
            <TimeSlider className="px-1" />
          </div>
          <div className="hidden w-44 shrink-0 md:block">
            <Legend className="rounded-lg bg-gray-50 px-3 py-2" />
          </div>
        </div>
      </footer>

      {/* Mobile bottom sheet for HolidayPanel */}
      {mobileSheetOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileSheetOpen(false)}
          />
          {/* Sheet */}
          <div className="absolute bottom-0 left-0 right-0 max-h-[70vh] overflow-y-auto rounded-t-2xl bg-white p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <div className="mx-auto h-1 w-10 rounded-full bg-gray-300" />
            </div>
            <button
              onClick={() => setMobileSheetOpen(false)}
              className="absolute right-3 top-3 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <HolidayPanel className="p-0" />
          </div>
        </div>
      )}
    </>
  );
}
