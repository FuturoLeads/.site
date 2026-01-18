export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// URL do servidor de produção
const PRODUCTION_URL = "https://digimarket-xr799ese.manus.space";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  
  // No celular, window.location.origin é localhost, então forçamos a URL de produção
  const redirectUri = `${PRODUCTION_URL}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
