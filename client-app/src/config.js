export const JWT_API = {
  secret: "SECRET-KEY",
  timeout: "1 days",
};

// basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
// like '/berry-material-react/react/default'
export const BASE_PATH = "";

export const DASHBOARD_PATH = "/dashboard/default";

const config = {
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 8,
  outlinedFilled: true,
  navType: "light", // light, dark
  presetColor: "default", // default, theme1, theme2, theme3, theme4, theme5, theme6
  locale: "en", // 'en' - English, 'fr' - French, 'ro' - Romanian, 'zh' - Chinese
  rtlLayout: false,
  container: false,
  newsTemplate: 1,
};

export default config;
