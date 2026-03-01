import useSWR from "swr";
import type { HeatmapResponse, HolidayInfo } from "@/types";

async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });
  return res.json() as Promise<T>;
}

export function useHeatmapData(week: number, year: number) {
  const key = `/api/heatmap?week=${week}&year=${year}`;
  const { data, error, isLoading } = useSWR(
    key,
    (url: string) => fetcher<HeatmapResponse>(url),
    { keepPreviousData: true },
  );

  // Prefetch adjacent weeks for smooth scrubbing
  const prevWeek = week > 1 ? week - 1 : 52;
  const prevYear = week > 1 ? year : year - 1;
  const nextWeek = week < 52 ? week + 1 : 1;
  const nextYear = week < 52 ? year : year + 1;

  useSWR(
    `/api/heatmap?week=${prevWeek}&year=${prevYear}`,
    (url: string) => fetcher<HeatmapResponse>(url),
    { revalidateOnFocus: false },
  );
  useSWR(
    `/api/heatmap?week=${nextWeek}&year=${nextYear}`,
    (url: string) => fetcher<HeatmapResponse>(url),
    { revalidateOnFocus: false },
  );

  return { data, error, isLoading };
}

export function useHolidayData(week: number, year: number) {
  const key = `/api/holidays?week=${week}&year=${year}`;
  const { data, error, isLoading } = useSWR(
    key,
    (url: string) => fetcher<HolidayInfo[]>(url),
    { keepPreviousData: true },
  );

  return { data, error, isLoading };
}
