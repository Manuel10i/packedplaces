/**
 * Maps each source region ID to Natural Earth admin-1 (or admin-0) codes.
 *
 * Mapping strategies:
 *  - "admin1"     → single admin-1 feature matched by `iso_3166_2` property
 *  - "admin1s"    → merge multiple admin-1 features by `iso_3166_2` codes
 *  - "country"    → merge all admin-1 features for a given `iso_a2` country code
 *  - "geonunit"   → merge all admin-1 features matching a `geonunit` value
 *  - "neRegions"  → merge admin-1 features matching `region` property values within a country
 */

export type BoundaryMapping =
  | { type: "admin1"; iso3166_2: string }
  | { type: "admin1s"; iso3166_2: string[] }
  | { type: "country"; isoA2: string }
  | { type: "geonunit"; geonunit: string }
  | { type: "neRegions"; isoA2: string; regions: string[] };

export const regionBoundaryMapping: Record<string, BoundaryMapping> = {
  // ─── Germany (16 Bundesländer) ──────────────────────────────
  "DE-BW": { type: "admin1", iso3166_2: "DE-BW" },
  "DE-BY": { type: "admin1", iso3166_2: "DE-BY" },
  "DE-BE": { type: "admin1", iso3166_2: "DE-BE" },
  "DE-BB": { type: "admin1", iso3166_2: "DE-BB" },
  "DE-HB": { type: "admin1", iso3166_2: "DE-HB" },
  "DE-HH": { type: "admin1", iso3166_2: "DE-HH" },
  "DE-HE": { type: "admin1", iso3166_2: "DE-HE" },
  "DE-MV": { type: "admin1", iso3166_2: "DE-MV" },
  "DE-NI": { type: "admin1", iso3166_2: "DE-NI" },
  "DE-NW": { type: "admin1", iso3166_2: "DE-NW" },
  "DE-RP": { type: "admin1", iso3166_2: "DE-RP" },
  "DE-SL": { type: "admin1", iso3166_2: "DE-SL" },
  "DE-SN": { type: "admin1", iso3166_2: "DE-SN" },
  "DE-ST": { type: "admin1", iso3166_2: "DE-ST" },
  "DE-SH": { type: "admin1", iso3166_2: "DE-SH" },
  "DE-TH": { type: "admin1", iso3166_2: "DE-TH" },

  // ─── Austria (9 Bundesländer) ───────────────────────────────
  "AT-1": { type: "admin1", iso3166_2: "AT-1" },
  "AT-2": { type: "admin1", iso3166_2: "AT-2" },
  "AT-3": { type: "admin1", iso3166_2: "AT-3" },
  "AT-4": { type: "admin1", iso3166_2: "AT-4" },
  "AT-5": { type: "admin1", iso3166_2: "AT-5" },
  "AT-6": { type: "admin1", iso3166_2: "AT-6" },
  "AT-7": { type: "admin1", iso3166_2: "AT-7" },
  "AT-8": { type: "admin1", iso3166_2: "AT-8" },
  "AT-9": { type: "admin1", iso3166_2: "AT-9" },

  // ─── Netherlands (3 macro-regions) ──────────────────────────
  "NL-NORTH": {
    type: "admin1s",
    iso3166_2: ["NL-GR", "NL-FR", "NL-DR", "NL-OV", "NL-FL"],
  },
  "NL-CENTRAL": {
    type: "admin1s",
    iso3166_2: ["NL-NH", "NL-UT", "NL-GE"],
  },
  "NL-SOUTH": {
    type: "admin1s",
    iso3166_2: ["NL-ZH", "NL-ZE", "NL-NB", "NL-LI"],
  },

  // ─── Belgium ────────────────────────────────────────────────
  "BE": { type: "country", isoA2: "BE" },

  // ─── Switzerland (5 cantons mapped individually) ────────────
  "CH-ZH": { type: "admin1", iso3166_2: "CH-ZH" },
  "CH-BE": { type: "admin1", iso3166_2: "CH-BE" },
  "CH-VD": { type: "admin1", iso3166_2: "CH-VD" },
  "CH-TI": { type: "admin1", iso3166_2: "CH-TI" },
  "CH-BS": { type: "admin1", iso3166_2: "CH-BS" },

  // ─── France (3 school-holiday zones by NE region property) ──
  "FR-ZA": {
    type: "neRegions",
    isoA2: "FR",
    regions: [
      "Auvergne-Rhône-Alpes",
      "Nouvelle-Aquitaine",
      "Bourgogne-Franche-Comté",
    ],
  },
  "FR-ZB": {
    type: "neRegions",
    isoA2: "FR",
    regions: [
      "Hauts-de-France",
      "Grand Est",
      "Pays de la Loire",
      "Provence-Alpes-Côte-d'Azur",
      "Bretagne",
      "Normandie",
      "Corse",
      "Centre-Val de Loire",
    ],
  },
  "FR-ZC": {
    type: "neRegions",
    isoA2: "FR",
    regions: [
      "Île-de-France",
      "Occitanie",
    ],
  },

  // ─── Czech Republic ─────────────────────────────────────────
  "CZ": { type: "country", isoA2: "CZ" },

  // ─── Poland ─────────────────────────────────────────────────
  "PL": { type: "country", isoA2: "PL" },

  // ─── Luxembourg ─────────────────────────────────────────────
  "LU": { type: "country", isoA2: "LU" },

  // ─── United Kingdom (4 nations via geonunit) ────────────────
  "GB-ENG": { type: "geonunit", geonunit: "England" },
  "GB-SCT": { type: "geonunit", geonunit: "Scotland" },
  "GB-WLS": { type: "geonunit", geonunit: "Wales" },
  "GB-NIR": { type: "geonunit", geonunit: "Northern Ireland" },

  // ─── Ireland ────────────────────────────────────────────────
  "IE": { type: "country", isoA2: "IE" },

  // ─── Denmark ────────────────────────────────────────────────
  "DK": { type: "country", isoA2: "DK" },

  // ─── Sweden (2 macro-regions) ───────────────────────────────
  "SE-SOUTH": {
    type: "admin1s",
    iso3166_2: [
      "SE-AB", "SE-M", "SE-O", "SE-E", "SE-D", "SE-C",
      "SE-F", "SE-G", "SE-H", "SE-I", "SE-K", "SE-N",
      "SE-T", "SE-U",
    ],
  },
  "SE-NORTH": {
    type: "admin1s",
    iso3166_2: ["SE-S", "SE-W", "SE-X", "SE-Y", "SE-Z", "SE-AC", "SE-BD"],
  },

  // ─── Norway (2 macro-regions — NE uses old county codes) ────
  "NO-SOUTH": {
    type: "admin1s",
    iso3166_2: [
      "NO-01", // Østfold
      "NO-02", // Akershus
      "NO-03", // Oslo
      "NO-04", // Hedmark
      "NO-05", // Oppland
      "NO-06", // Buskerud
      "NO-07", // Vestfold
      "NO-08", // Telemark
      "NO-09", // Aust-Agder
      "NO-10", // Vest-Agder
      "NO-11", // Rogaland
      "NO-12", // Hordaland
    ],
  },
  "NO-NORTH": {
    type: "admin1s",
    iso3166_2: [
      "NO-14", // Sogn og Fjordane
      "NO-15", // Møre og Romsdal
      "NO-16", // Sør-Trøndelag
      "NO-17", // Nord-Trøndelag
      "NO-18", // Nordland
      "NO-19", // Troms
      "NO-20", // Finnmark
    ],
  },

  // ─── Finland (2 macro-regions) ──────────────────────────────
  "FI-SOUTH": {
    type: "admin1s",
    iso3166_2: [
      "FI-18", // Uusimaa (Helsinki)
      "FI-19", // Finland Proper (Varsinais-Suomi)
      "FI-06", // Tavastia Proper (Kanta-Häme)
      "FI-11", // Pirkanmaa
      "FI-16", // Päijät-Häme
      "FI-09", // Kymenlaakso
      "FI-02", // South Karelia
      "FI-04", // Southern Savonia
      "FI-17", // Satakunta
    ],
  },
  "FI-NORTH": {
    type: "admin1s",
    iso3166_2: [
      "FI-15", // Northern Savonia
      "FI-13", // North Karelia
      "FI-08", // Central Finland
      "FI-03", // Southern Ostrobothnia
      "FI-12", // Ostrobothnia
      "FI-07", // Central Ostrobothnia
      "FI-14", // Northern Ostrobothnia
      "FI-05", // Kainuu
      "FI-10", // Lapland
    ],
  },

  // ─── Iceland ────────────────────────────────────────────────
  "IS": { type: "country", isoA2: "IS" },

  // ─── Italy (2 macro-regions via NE region property) ─────────
  "IT-NORTH": {
    type: "neRegions",
    isoA2: "IT",
    regions: [
      "Piemonte", "Valle d'Aosta", "Lombardia",
      "Trentino-Alto Adige", "Veneto", "Friuli-Venezia Giulia",
      "Liguria", "Emilia-Romagna", "Toscana",
    ],
  },
  "IT-SOUTH": {
    type: "neRegions",
    isoA2: "IT",
    regions: [
      "Umbria", "Marche", "Lazio", "Abruzzo", "Molise",
      "Campania", "Apulia", "Basilicata", "Calabria",
      "Sicily", "Sardegna",
    ],
  },

  // ─── Spain (3 communities via NE region property) ───────────
  "ES-MADRID": { type: "neRegions", isoA2: "ES", regions: ["Madrid"] },
  "ES-CATALONIA": { type: "neRegions", isoA2: "ES", regions: ["Cataluña"] },
  "ES-ANDALUSIA": { type: "neRegions", isoA2: "ES", regions: ["Andalucía"] },

  // ─── Portugal ───────────────────────────────────────────────
  "PT": { type: "country", isoA2: "PT" },

  // ─── Hungary ────────────────────────────────────────────────
  "HU": { type: "country", isoA2: "HU" },

  // ─── Romania ────────────────────────────────────────────────
  "RO": { type: "country", isoA2: "RO" },

  // ─── Bulgaria ───────────────────────────────────────────────
  "BG": { type: "country", isoA2: "BG" },

  // ─── Croatia ────────────────────────────────────────────────
  "HR": { type: "country", isoA2: "HR" },

  // ─── Serbia ─────────────────────────────────────────────────
  "RS": { type: "country", isoA2: "RS" },

  // ─── Slovakia ───────────────────────────────────────────────
  "SK": { type: "country", isoA2: "SK" },

  // ─── Slovenia ───────────────────────────────────────────────
  "SI": { type: "country", isoA2: "SI" },

  // ─── Estonia ────────────────────────────────────────────────
  "EE": { type: "country", isoA2: "EE" },

  // ─── Latvia ─────────────────────────────────────────────────
  "LV": { type: "country", isoA2: "LV" },

  // ─── Lithuania ──────────────────────────────────────────────
  "LT": { type: "country", isoA2: "LT" },

  // ─── Turkey (2 macro-regions) ───────────────────────────────
  "TR-WEST": {
    type: "admin1s",
    iso3166_2: [
      "TR-34", "TR-06", "TR-35", "TR-16", "TR-07",
      "TR-41", "TR-26", "TR-22", "TR-10", "TR-48", "TR-20",
    ],
  },
  "TR-EAST": {
    type: "admin1s",
    iso3166_2: [
      "TR-01", "TR-21", "TR-27", "TR-31", "TR-33",
      "TR-38", "TR-42", "TR-55", "TR-61", "TR-65", "TR-25",
    ],
  },

  // ─── Russia (2 metro-regions) ───────────────────────────────
  "RU-MOW": { type: "admin1", iso3166_2: "RU-MOW" },
  "RU-SPE": { type: "admin1", iso3166_2: "RU-SPE" },

  // ─── Ukraine ────────────────────────────────────────────────
  "UA": { type: "country", isoA2: "UA" },

  // ─── Israel ─────────────────────────────────────────────────
  "IL": { type: "country", isoA2: "IL" },

  // ─── UAE ────────────────────────────────────────────────────
  "AE": { type: "country", isoA2: "AE" },

  // ─── Saudi Arabia ───────────────────────────────────────────
  "SA": { type: "country", isoA2: "SA" },

  // ─── Egypt ──────────────────────────────────────────────────
  "EG": { type: "country", isoA2: "EG" },

  // ─── Morocco ────────────────────────────────────────────────
  "MA": { type: "country", isoA2: "MA" },

  // ─── China (4 macro-regions) ────────────────────────────────
  "CN-EAST": {
    type: "admin1s",
    iso3166_2: ["CN-SH", "CN-JS", "CN-ZJ", "CN-AH", "CN-SD"],
  },
  "CN-SOUTH": {
    type: "admin1s",
    iso3166_2: ["CN-GD", "CN-GX", "CN-HI", "CN-FJ"],
  },
  "CN-NORTH": {
    type: "admin1s",
    iso3166_2: ["CN-BJ", "CN-TJ", "CN-HE", "CN-LN", "CN-JL", "CN-HL"],
  },
  "CN-CENTRAL": {
    type: "admin1s",
    iso3166_2: ["CN-HA", "CN-HB", "CN-HN", "CN-JX", "CN-CQ", "CN-SC"],
  },

  // ─── Japan (3 macro-regions) ────────────────────────────────
  "JP-KANTO": {
    type: "admin1s",
    iso3166_2: ["JP-13", "JP-14", "JP-11", "JP-12", "JP-08", "JP-09", "JP-10"],
  },
  "JP-KANSAI": {
    type: "admin1s",
    iso3166_2: ["JP-27", "JP-26", "JP-28", "JP-29", "JP-25", "JP-30"],
  },
  "JP-OTHER": {
    type: "admin1s",
    iso3166_2: ["JP-01", "JP-04", "JP-23", "JP-34", "JP-40", "JP-47"],
  },

  // ─── South Korea ────────────────────────────────────────────
  "KR": { type: "country", isoA2: "KR" },

  // ─── Taiwan (NE uses iso_a2=TW for admin-1) ────────────────
  "TW": { type: "country", isoA2: "TW" },

  // ─── Thailand ───────────────────────────────────────────────
  "TH": { type: "country", isoA2: "TH" },

  // ─── Vietnam ────────────────────────────────────────────────
  "VN": { type: "country", isoA2: "VN" },

  // ─── Indonesia (2 macro-regions) ────────────────────────────
  "ID-JAVA": {
    type: "admin1s",
    iso3166_2: ["ID-JK", "ID-JB", "ID-JT", "ID-JI", "ID-BT"],
  },
  "ID-OTHER": {
    type: "admin1s",
    iso3166_2: ["ID-BA", "ID-SU", "ID-SS", "ID-KS", "ID-SA"],
  },

  // ─── Malaysia ───────────────────────────────────────────────
  "MY": { type: "country", isoA2: "MY" },

  // ─── Singapore ──────────────────────────────────────────────
  "SG": { type: "country", isoA2: "SG" },

  // ─── Philippines ────────────────────────────────────────────
  "PH": { type: "country", isoA2: "PH" },

  // ─── India (2 macro-regions) ────────────────────────────────
  "IN-NORTH": {
    type: "admin1s",
    iso3166_2: [
      "IN-DL", "IN-UP", "IN-RJ", "IN-HR", "IN-PB",
      "IN-MP", "IN-GJ", "IN-MH", "IN-WB",
    ],
  },
  "IN-SOUTH": {
    type: "admin1s",
    iso3166_2: ["IN-TN", "IN-KA", "IN-KL", "IN-AP", "IN-TG"],
  },

  // ─── United States (5 macro-regions) ────────────────────────
  "US-NE": {
    type: "admin1s",
    iso3166_2: [
      "US-NY", "US-NJ", "US-PA", "US-CT", "US-MA",
      "US-MD", "US-VA", "US-DC", "US-NH", "US-VT",
      "US-ME", "US-RI", "US-DE",
    ],
  },
  "US-SE": {
    type: "admin1s",
    iso3166_2: [
      "US-FL", "US-GA", "US-NC", "US-SC", "US-TN",
      "US-AL", "US-MS", "US-LA", "US-AR", "US-KY", "US-WV",
    ],
  },
  "US-MW": {
    type: "admin1s",
    iso3166_2: [
      "US-IL", "US-OH", "US-MI", "US-IN", "US-WI",
      "US-MN", "US-MO", "US-IA", "US-KS", "US-NE",
      "US-SD", "US-ND",
    ],
  },
  "US-SW": {
    type: "admin1s",
    iso3166_2: ["US-TX", "US-AZ", "US-NM", "US-OK"],
  },
  "US-W": {
    type: "admin1s",
    iso3166_2: [
      "US-CA", "US-WA", "US-OR", "US-CO", "US-NV",
      "US-UT", "US-HI", "US-AK", "US-ID", "US-MT", "US-WY",
    ],
  },

  // ─── Canada (2 macro-regions) ───────────────────────────────
  "CA-EAST": {
    type: "admin1s",
    iso3166_2: ["CA-ON", "CA-QC", "CA-NB", "CA-NS", "CA-PE", "CA-NL"],
  },
  "CA-WEST": {
    type: "admin1s",
    iso3166_2: ["CA-BC", "CA-AB", "CA-SK", "CA-MB"],
  },

  // ─── Mexico ─────────────────────────────────────────────────
  "MX": { type: "country", isoA2: "MX" },

  // ─── Brazil (2 macro-regions) ───────────────────────────────
  "BR-SE": {
    type: "admin1s",
    iso3166_2: ["BR-SP", "BR-RJ", "BR-MG", "BR-ES", "BR-PR", "BR-SC", "BR-RS"],
  },
  "BR-NE": {
    type: "admin1s",
    iso3166_2: ["BR-BA", "BR-PE", "BR-CE", "BR-MA", "BR-RN", "BR-AL", "BR-SE", "BR-PB", "BR-PI"],
  },

  // ─── Argentina ──────────────────────────────────────────────
  "AR": { type: "country", isoA2: "AR" },

  // ─── Colombia ───────────────────────────────────────────────
  "CO": { type: "country", isoA2: "CO" },

  // ─── Chile ──────────────────────────────────────────────────
  "CL": { type: "country", isoA2: "CL" },

  // ─── Peru ───────────────────────────────────────────────────
  "PE": { type: "country", isoA2: "PE" },

  // ─── Australia (5 states) ───────────────────────────────────
  "AU-NSW": { type: "admin1", iso3166_2: "AU-NSW" },
  "AU-VIC": { type: "admin1", iso3166_2: "AU-VIC" },
  "AU-QLD": { type: "admin1", iso3166_2: "AU-QLD" },
  "AU-WA": { type: "admin1", iso3166_2: "AU-WA" },
  "AU-SA": { type: "admin1", iso3166_2: "AU-SA" },

  // ─── New Zealand ────────────────────────────────────────────
  "NZ": { type: "country", isoA2: "NZ" },

  // ─── South Africa ───────────────────────────────────────────
  "ZA": { type: "country", isoA2: "ZA" },

  // ─── Kenya ──────────────────────────────────────────────────
  "KE": { type: "country", isoA2: "KE" },

  // ─── Pakistan ───────────────────────────────────────────────
  "PK": { type: "country", isoA2: "PK" },

  // ─── Bangladesh ─────────────────────────────────────────────
  "BD": { type: "country", isoA2: "BD" },

  // ─── Sri Lanka ──────────────────────────────────────────────
  "LK": { type: "country", isoA2: "LK" },

  // ─── Myanmar ────────────────────────────────────────────────
  "MM": { type: "country", isoA2: "MM" },

  // ─── Cambodia ───────────────────────────────────────────────
  "KH": { type: "country", isoA2: "KH" },

  // ─── Kazakhstan ─────────────────────────────────────────────
  "KZ": { type: "country", isoA2: "KZ" },

  // ─── Uzbekistan ─────────────────────────────────────────────
  "UZ": { type: "country", isoA2: "UZ" },

  // ─── Nigeria ────────────────────────────────────────────────
  "NG": { type: "country", isoA2: "NG" },
};
