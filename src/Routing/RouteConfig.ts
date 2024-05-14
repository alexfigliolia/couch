import type { IRoute } from "./types";

export class RouteConfig<
  T extends Record<string, IRoute> = Record<string, IRoute>,
> {
  public readonly map: T;
  public defaultRoute: string;
  public readonly list: IRoute[];
  constructor(defaultRoute: Extract<keyof T, string>, map: T) {
    this.map = map;
    this.list = Object.values(this.map);
    this.defaultRoute = map[defaultRoute].route;
  }

  public matchIndex(path: string) {
    let pointer = 0;
    for (const { route } of this.list) {
      if (path.startsWith(route)) {
        return pointer;
      }
      pointer++;
    }
    return 0;
  }

  public iterate<U>(callback: (route: IRoute, index: number) => U) {
    const routes = this.list;
    return routes.map(callback);
  }
}
