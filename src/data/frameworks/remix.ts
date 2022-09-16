import { Framework, WebsiteType, AppType } from "../types";

//subframework — React

export const Remix: Framework = {
  websiteTypes: [WebsiteType.Dynamic],
  appTypes: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
    // fileBasedRouting: true,
  },
  ecosystemIntegrations: {},
  meta: {
    name: "Remix",
    docsLink: "https://remix.run/docs/en/v1",
    githubOrg: "remix-run",
    githubRepo: "remix",
  },
};