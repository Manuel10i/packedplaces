"use client";

import useSWR from "swr";
import type { BusynessSeriesResponse } from "@/app/api/busyness/route";

async function fetcher(url: string): Promise<BusynessSeriesResponse> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Busyness request failed: ${res.status}`);
  return res.json();
}

/**
 * Weekly busyness series (52 values, nulls where uncached) for up to 6
 * destinations in a year, from the precomputed heatmap cache.
 */
export function useBusynessSeries(ids: string[], year: number) {
  const key = ids.length > 0 ? `/api/busyness?ids=${ids.join(",")}&year=${year}` : null;
  return useSWR<BusynessSeriesResponse>(key, fetcher, {
    revalidateOnFocus: false,
    keepPreviousData: true,
  });
}
