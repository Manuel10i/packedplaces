"use client";

import { MapView } from "@/components/map/MapView";
import { TimeSlider } from "@/components/controls/TimeSlider";
import { YearSelector } from "@/components/controls/YearSelector";
import { HolidayPanel } from "@/components/controls/HolidayPanel";
import { Legend } from "@/components/controls/Legend";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <MapView />

      {/* Top-left: title + year selector */}
      <div className="absolute left-4 top-4 z-10 flex items-center gap-3">
        <h1 className="rounded-xl bg-white/95 px-4 py-2 text-lg font-bold text-gray-800 shadow-lg backdrop-blur-sm">
          Busymap
        </h1>
        <YearSelector />
      </div>

      {/* Right sidebar: Holiday panel */}
      <div className="absolute right-4 top-4 z-10 w-72">
        <HolidayPanel />
      </div>

      {/* Bottom-left: Legend */}
      <div className="absolute bottom-24 left-4 z-10 w-48">
        <Legend />
      </div>

      {/* Bottom: Time slider */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <TimeSlider />
      </div>
    </div>
  );
}
