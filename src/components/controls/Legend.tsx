"use client";

export function Legend() {
  return (
    <div className="rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
      <div className="mb-1.5 text-xs font-semibold text-gray-500">Busyness</div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Quiet</span>
        <div
          className="h-3 flex-1 rounded-full"
          style={{
            background: "linear-gradient(to right, #22c55e, #facc15, #f97316, #dc2626)",
          }}
        />
        <span className="text-xs text-gray-500">Very Busy</span>
      </div>
    </div>
  );
}
