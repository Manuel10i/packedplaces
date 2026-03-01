export interface HolidayResult {
  name: string;
  startDate: string;
  endDate: string;
  year: number;
}

export interface HolidayProvider {
  name: string;
  supports(regionId: string, countryCode: string): boolean;
  fetchHolidays(
    regionId: string,
    countryCode: string,
    subdivisionCode: string,
    validFrom: string,
    validTo: string,
  ): Promise<HolidayResult[]>;
}
