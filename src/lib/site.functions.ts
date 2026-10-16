import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { getSiteOrigin } from "./site.server";

export const getSiteMetadata = createServerFn({ method: "GET" }).handler(() => {
  return { siteUrl: getSiteOrigin(getRequest().url) };
});
