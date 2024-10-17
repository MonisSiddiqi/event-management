import ct from "countries-and-timezones";
import moment from "moment-timezone";

export type UTagViewOption = {
  page_name: string;
  page_category?: string; // mandatory (if there is a menu)
  page_subcategory?: string; // mandatory (if there is a menu)
  page_sub_subcategory?: string; // mandatory (if there is a menu)
  page_type:
    | "website"
    | "article"
    | "landing_page"
    | "error_page"
    | "shopping-cart"
    | "privacy_policy";
  page_language?: "en";
  page_country?: "global" | string;
  page_privacy_policy?: boolean;
};

export const uTagView = (options: UTagViewOption) => {
  if (options?.page_name && typeof window?.utag?.view === "function") {
    if (!options?.page_language) {
      options.page_language = "en";
    }

    if (!options?.page_country) {
      options.page_country =
        ct.getCountryForTimezone(moment.tz.guess())?.id?.toLowerCase() ||
        "global";
    }

    if (options?.page_privacy_policy === undefined) {
      options.page_privacy_policy = false;
    }

    window?.utag?.view(options);
  }
};
