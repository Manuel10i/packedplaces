import type { WorldRegion } from "@/types";

export interface CountryInfo {
  code: string;
  name: string;
  flag: string;
  region: WorldRegion;
}

export const countries: CountryInfo[] = [
  // ========================================
  // EUROPE
  // ========================================
  { code: "DE", name: "Germany", flag: "\u{1F1E9}\u{1F1EA}", region: "europe" },
  { code: "AT", name: "Austria", flag: "\u{1F1E6}\u{1F1F9}", region: "europe" },
  { code: "NL", name: "Netherlands", flag: "\u{1F1F3}\u{1F1F1}", region: "europe" },
  { code: "BE", name: "Belgium", flag: "\u{1F1E7}\u{1F1EA}", region: "europe" },
  { code: "CH", name: "Switzerland", flag: "\u{1F1E8}\u{1F1ED}", region: "europe" },
  { code: "FR", name: "France", flag: "\u{1F1EB}\u{1F1F7}", region: "europe" },
  { code: "CZ", name: "Czech Republic", flag: "\u{1F1E8}\u{1F1FF}", region: "europe" },
  { code: "PL", name: "Poland", flag: "\u{1F1F5}\u{1F1F1}", region: "europe" },
  { code: "LU", name: "Luxembourg", flag: "\u{1F1F1}\u{1F1FA}", region: "europe" },
  { code: "GB", name: "United Kingdom", flag: "\u{1F1EC}\u{1F1E7}", region: "europe" },
  { code: "IE", name: "Ireland", flag: "\u{1F1EE}\u{1F1EA}", region: "europe" },
  { code: "DK", name: "Denmark", flag: "\u{1F1E9}\u{1F1F0}", region: "europe" },
  { code: "SE", name: "Sweden", flag: "\u{1F1F8}\u{1F1EA}", region: "europe" },
  { code: "NO", name: "Norway", flag: "\u{1F1F3}\u{1F1F4}", region: "europe" },
  { code: "FI", name: "Finland", flag: "\u{1F1EB}\u{1F1EE}", region: "europe" },
  { code: "IS", name: "Iceland", flag: "\u{1F1EE}\u{1F1F8}", region: "europe" },
  { code: "IT", name: "Italy", flag: "\u{1F1EE}\u{1F1F9}", region: "europe" },
  { code: "ES", name: "Spain", flag: "\u{1F1EA}\u{1F1F8}", region: "europe" },
  { code: "PT", name: "Portugal", flag: "\u{1F1F5}\u{1F1F9}", region: "europe" },
  { code: "GR", name: "Greece", flag: "\u{1F1EC}\u{1F1F7}", region: "europe" },
  { code: "HR", name: "Croatia", flag: "\u{1F1ED}\u{1F1F7}", region: "europe" },
  { code: "HU", name: "Hungary", flag: "\u{1F1ED}\u{1F1FA}", region: "europe" },
  { code: "RO", name: "Romania", flag: "\u{1F1F7}\u{1F1F4}", region: "europe" },
  { code: "BG", name: "Bulgaria", flag: "\u{1F1E7}\u{1F1EC}", region: "europe" },
  { code: "RS", name: "Serbia", flag: "\u{1F1F7}\u{1F1F8}", region: "europe" },
  { code: "SK", name: "Slovakia", flag: "\u{1F1F8}\u{1F1F0}", region: "europe" },
  { code: "SI", name: "Slovenia", flag: "\u{1F1F8}\u{1F1EE}", region: "europe" },
  { code: "EE", name: "Estonia", flag: "\u{1F1EA}\u{1F1EA}", region: "europe" },
  { code: "LV", name: "Latvia", flag: "\u{1F1F1}\u{1F1FB}", region: "europe" },
  { code: "LT", name: "Lithuania", flag: "\u{1F1F1}\u{1F1F9}", region: "europe" },
  { code: "ME", name: "Montenegro", flag: "\u{1F1F2}\u{1F1EA}", region: "europe" },
  { code: "AL", name: "Albania", flag: "\u{1F1E6}\u{1F1F1}", region: "europe" },
  { code: "MT", name: "Malta", flag: "\u{1F1F2}\u{1F1F9}", region: "europe" },
  { code: "CY", name: "Cyprus", flag: "\u{1F1E8}\u{1F1FE}", region: "europe" },
  { code: "UA", name: "Ukraine", flag: "\u{1F1FA}\u{1F1E6}", region: "europe" },

  // ========================================
  // MIDDLE EAST & NORTH AFRICA
  // ========================================
  { code: "TR", name: "Turkey", flag: "\u{1F1F9}\u{1F1F7}", region: "middle-east" },
  { code: "IL", name: "Israel", flag: "\u{1F1EE}\u{1F1F1}", region: "middle-east" },
  { code: "AE", name: "UAE", flag: "\u{1F1E6}\u{1F1EA}", region: "middle-east" },
  { code: "SA", name: "Saudi Arabia", flag: "\u{1F1F8}\u{1F1E6}", region: "middle-east" },
  { code: "JO", name: "Jordan", flag: "\u{1F1EF}\u{1F1F4}", region: "middle-east" },
  { code: "OM", name: "Oman", flag: "\u{1F1F4}\u{1F1F2}", region: "middle-east" },
  { code: "EG", name: "Egypt", flag: "\u{1F1EA}\u{1F1EC}", region: "africa" },
  { code: "MA", name: "Morocco", flag: "\u{1F1F2}\u{1F1E6}", region: "africa" },
  { code: "TN", name: "Tunisia", flag: "\u{1F1F9}\u{1F1F3}", region: "africa" },
  { code: "GE", name: "Georgia", flag: "\u{1F1EC}\u{1F1EA}", region: "middle-east" },

  // ========================================
  // ASIA
  // ========================================
  { code: "CN", name: "China", flag: "\u{1F1E8}\u{1F1F3}", region: "asia" },
  { code: "JP", name: "Japan", flag: "\u{1F1EF}\u{1F1F5}", region: "asia" },
  { code: "KR", name: "South Korea", flag: "\u{1F1F0}\u{1F1F7}", region: "asia" },
  { code: "TW", name: "Taiwan", flag: "\u{1F1F9}\u{1F1FC}", region: "asia" },
  { code: "TH", name: "Thailand", flag: "\u{1F1F9}\u{1F1ED}", region: "asia" },
  { code: "VN", name: "Vietnam", flag: "\u{1F1FB}\u{1F1F3}", region: "asia" },
  { code: "ID", name: "Indonesia", flag: "\u{1F1EE}\u{1F1E9}", region: "asia" },
  { code: "MY", name: "Malaysia", flag: "\u{1F1F2}\u{1F1FE}", region: "asia" },
  { code: "SG", name: "Singapore", flag: "\u{1F1F8}\u{1F1EC}", region: "asia" },
  { code: "PH", name: "Philippines", flag: "\u{1F1F5}\u{1F1ED}", region: "asia" },
  { code: "IN", name: "India", flag: "\u{1F1EE}\u{1F1F3}", region: "asia" },
  { code: "LK", name: "Sri Lanka", flag: "\u{1F1F1}\u{1F1F0}", region: "asia" },
  { code: "MV", name: "Maldives", flag: "\u{1F1F2}\u{1F1FB}", region: "asia" },
  { code: "NP", name: "Nepal", flag: "\u{1F1F3}\u{1F1F5}", region: "asia" },
  { code: "KH", name: "Cambodia", flag: "\u{1F1F0}\u{1F1ED}", region: "asia" },
  { code: "MM", name: "Myanmar", flag: "\u{1F1F2}\u{1F1F2}", region: "asia" },
  { code: "LA", name: "Laos", flag: "\u{1F1F1}\u{1F1E6}", region: "asia" },
  { code: "BT", name: "Bhutan", flag: "\u{1F1E7}\u{1F1F9}", region: "asia" },
  { code: "SC", name: "Seychelles", flag: "\u{1F1F8}\u{1F1E8}", region: "africa" },
  { code: "HK", name: "Hong Kong", flag: "\u{1F1ED}\u{1F1F0}", region: "asia" },

  // ========================================
  // AMERICAS
  // ========================================
  { code: "US", name: "United States", flag: "\u{1F1FA}\u{1F1F8}", region: "americas" },
  { code: "CA", name: "Canada", flag: "\u{1F1E8}\u{1F1E6}", region: "americas" },
  { code: "MX", name: "Mexico", flag: "\u{1F1F2}\u{1F1FD}", region: "americas" },
  { code: "BR", name: "Brazil", flag: "\u{1F1E7}\u{1F1F7}", region: "americas" },
  { code: "AR", name: "Argentina", flag: "\u{1F1E6}\u{1F1F7}", region: "americas" },
  { code: "CO", name: "Colombia", flag: "\u{1F1E8}\u{1F1F4}", region: "americas" },
  { code: "CL", name: "Chile", flag: "\u{1F1E8}\u{1F1F1}", region: "americas" },
  { code: "PE", name: "Peru", flag: "\u{1F1F5}\u{1F1EA}", region: "americas" },
  { code: "CR", name: "Costa Rica", flag: "\u{1F1E8}\u{1F1F7}", region: "americas" },
  { code: "CU", name: "Cuba", flag: "\u{1F1E8}\u{1F1FA}", region: "americas" },
  { code: "DO", name: "Dominican Republic", flag: "\u{1F1E9}\u{1F1F4}", region: "americas" },
  { code: "JM", name: "Jamaica", flag: "\u{1F1EF}\u{1F1F2}", region: "americas" },
  { code: "EC", name: "Ecuador", flag: "\u{1F1EA}\u{1F1E8}", region: "americas" },

  // ========================================
  // OCEANIA
  // ========================================
  { code: "AU", name: "Australia", flag: "\u{1F1E6}\u{1F1FA}", region: "oceania" },
  { code: "NZ", name: "New Zealand", flag: "\u{1F1F3}\u{1F1FF}", region: "oceania" },
  { code: "FJ", name: "Fiji", flag: "\u{1F1EB}\u{1F1EF}", region: "oceania" },
  { code: "WS", name: "Samoa", flag: "\u{1F1FC}\u{1F1F8}", region: "oceania" },
  { code: "PF", name: "French Polynesia", flag: "\u{1F1F5}\u{1F1EB}", region: "oceania" },

  // ========================================
  // AFRICA
  // ========================================
  { code: "ZA", name: "South Africa", flag: "\u{1F1FF}\u{1F1E6}", region: "africa" },
  { code: "KE", name: "Kenya", flag: "\u{1F1F0}\u{1F1EA}", region: "africa" },
  { code: "TZ", name: "Tanzania", flag: "\u{1F1F9}\u{1F1FF}", region: "africa" },
  { code: "MU", name: "Mauritius", flag: "\u{1F1F2}\u{1F1FA}", region: "africa" },
  { code: "NA", name: "Namibia", flag: "\u{1F1F3}\u{1F1E6}", region: "africa" },
  { code: "MG", name: "Madagascar", flag: "\u{1F1F2}\u{1F1EC}", region: "africa" },
  { code: "BW", name: "Botswana", flag: "\u{1F1E7}\u{1F1FC}", region: "africa" },
  { code: "NG", name: "Nigeria", flag: "\u{1F1F3}\u{1F1EC}", region: "africa" },
  { code: "GH", name: "Ghana", flag: "\u{1F1EC}\u{1F1ED}", region: "africa" },
  { code: "ET", name: "Ethiopia", flag: "\u{1F1EA}\u{1F1F9}", region: "africa" },
  { code: "MN", name: "Mongolia", flag: "\u{1F1F2}\u{1F1F3}", region: "asia" },

  // ========================================
  // CENTRAL ASIA
  // ========================================
  { code: "RU", name: "Russia", flag: "\u{1F1F7}\u{1F1FA}", region: "europe" },
  { code: "KZ", name: "Kazakhstan", flag: "\u{1F1F0}\u{1F1FF}", region: "asia" },
  { code: "UZ", name: "Uzbekistan", flag: "\u{1F1FA}\u{1F1FF}", region: "asia" },
  { code: "PK", name: "Pakistan", flag: "\u{1F1F5}\u{1F1F0}", region: "asia" },
  { code: "BD", name: "Bangladesh", flag: "\u{1F1E7}\u{1F1E9}", region: "asia" },
];

// Lookup maps
const byCode = new Map(countries.map((c) => [c.code, c]));

export function getCountry(code: string): CountryInfo | undefined {
  return byCode.get(code);
}

export function getCountryName(code: string): string {
  return byCode.get(code)?.name ?? code;
}

export function getCountryFlag(code: string): string {
  return byCode.get(code)?.flag ?? "";
}

export function getCountriesByRegion(region: WorldRegion): CountryInfo[] {
  return countries.filter((c) => c.region === region);
}
