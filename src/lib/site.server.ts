export function getSiteOrigin(requestUrl: string) {
  const configuredOrigin = process.env["SITE_URL"]?.trim();

  if (configuredOrigin) {
    try {
      return new URL(configuredOrigin).origin;
    } catch {
      // Fall back to the current request when the configured URL is invalid.
    }
  }

  return new URL(requestUrl).origin;
}
