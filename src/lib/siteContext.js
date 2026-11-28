import { createContext, useContext } from "react";
import { defaultFooter, defaultNav, toMenu } from "./siteDefaults";

export const SiteContext = createContext(null);

/** { menu, footer } from the CMS, or the original defaults when nothing was provided */
export function useSite() {
  const site = useContext(SiteContext);
  return { menu: site?.menu ?? toMenu(defaultNav), footer: { ...defaultFooter, ...(site?.footer ?? {}) } };
}
