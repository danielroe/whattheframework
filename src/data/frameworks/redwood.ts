import { React } from "./react";
import { Framework, WebsiteType, AppType } from "../types";

// lots of ecosystem integrations in this one

export const Redwood: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Dynamic, WebsiteType.Hybrid, WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Mpa, AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
  },
  usesFrameworks: [React],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Redwood",
    docsLink: "https://redwoodjs.com/docs/introduction",
    githubOrg: "redwoodjs",
    githubRepo: "redwood",
  },
};
