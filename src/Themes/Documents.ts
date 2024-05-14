import { Screen } from "Dimensions/Screen";
import { DocsFill, DocsStroke } from "Icons/Docs";
import { ExchangeFill, ExchangeStroke } from "Icons/Exchange";
import { InsuranceFill, InsuranceStroke } from "Icons/Insurance";
import { LeaseFill, LeaseStroke } from "Icons/Lease";
import { RulesFill, RulesStroke } from "Icons/Rules";
import { TeamFill, TeamStroke } from "Icons/Team";
import type { IDocumentType } from "Models/Documents";
import type { IconVariant } from "Types/SVG";

export class DocumentsTheme {
  public static SURFACE_WIDTH = Screen.WIDTH * 0.85;
  public static TAB_WIDTH = this.SURFACE_WIDTH * 0.8;
  public static SCROLL_VIEW_MARGIN = (Screen.WIDTH - this.SURFACE_WIDTH) / 2;
  public static SCROLL_VIEW_WIDTH =
    this.SURFACE_WIDTH - this.SCROLL_VIEW_MARGIN;

  public static readonly ICONS: Record<IDocumentType, IconVariant> = {
    lease: { stroke: LeaseStroke, fill: LeaseFill },
    HOA: { stroke: TeamStroke, fill: TeamFill },
    insurance: { stroke: InsuranceStroke, fill: InsuranceFill },
    deposit: { stroke: ExchangeStroke, fill: ExchangeFill },
    rules: { stroke: RulesStroke, fill: RulesFill },
    other: { stroke: DocsStroke, fill: DocsFill },
  };

  public static DISPLAY_NAMES: Record<IDocumentType, string> = {
    lease: "Leases",
    HOA: "HOA",
    insurance: "Insurance",
    deposit: "Deposits",
    rules: "Rules",
    other: "Other",
  };

  public static icons(key: IDocumentType) {
    return this.ICONS[key];
  }

  public static icon(
    key: IDocumentType,
    variant: keyof IconVariant = "stroke",
  ) {
    return this.icons(key)[variant];
  }

  public static displayName(key: IDocumentType) {
    return this.DISPLAY_NAMES[key];
  }
}
