import { CalendarFill } from "Icons/Calendar";
import { CalendarStroke } from "Icons/Calendar/Stroke";
import { DocsFill, DocsStroke } from "Icons/Docs";
import { HomeFill, HomeStroke } from "Icons/Home";
import { MoneyFill, MoneyStroke } from "Icons/Money";
import { RepairFill, RepairStroke } from "Icons/Repair";
import { CoreTheme } from "Themes/Core";
import { RouteConfig } from "./RouteConfig";

export const USER_HOME = "/user-home";
export const USER_ISSUES = "/user-issues";
export const USER_PAYMENTS = "/user-payments";
export const USER_PAYMENT_METHODS = "/user-payments/banks";
export const USER_PAYMENT_HISTORY = "/user-payments/history";
export const USER_DOCUMENTS = "/user-documents";
export const USER_EVENTS = "/user-events";

export const UserRoutes = new RouteConfig("user-home", {
  "user-home": {
    name: "Home",
    route: USER_HOME,
    icon: HomeStroke,
    activeIcon: HomeFill,
    theme: CoreTheme.UI_GRADIENT_BRIGHT,
  },
  "user-issues": {
    name: "Issues",
    route: USER_ISSUES,
    icon: RepairStroke,
    activeIcon: RepairFill,
    theme: CoreTheme.UI_GRADIENT_BRIGHT,
  },
  "user-payments": {
    name: "Payments",
    route: USER_PAYMENTS,
    icon: MoneyStroke,
    activeIcon: MoneyFill,
    theme: CoreTheme.UI_GRADIENT_BRIGHT,
  },
  "user-documents": {
    name: "Docs",
    route: USER_DOCUMENTS,
    icon: DocsStroke,
    activeIcon: DocsFill,
    theme: CoreTheme.UI_GRADIENT_BRIGHT,
  },
  "user-events": {
    name: "Events",
    route: USER_EVENTS,
    icon: CalendarStroke,
    activeIcon: CalendarFill,
    theme: CoreTheme.UI_GRADIENT_BRIGHT,
  },
});
