import { publicRoutes } from "./constant";

export const isInRouteList = (routes: Array<string | RegExp>, path: string) => {
  for (const route of routes) {
    if (route instanceof RegExp && route.test(path)) return true;
    if (route === path) return true;
  }

  return false;
};

export const inWhitelist = (path: string) => isInRouteList(publicRoutes, path);


