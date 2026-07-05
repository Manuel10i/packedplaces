export const THEME_STORAGE_KEY = "pp_theme";

/**
 * Inline no-FOUC script injected in <head> before first paint. Resolves the
 * stored preference ("light" | "dark", absent/anything else = system) against
 * the OS preference and stamps `.dark` + color-scheme on <html>.
 * Must stay in sync with ThemeProvider.
 */
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;
