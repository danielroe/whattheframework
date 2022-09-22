import { Angular } from "./angular";
import { Framework, WebsiteType, AppType } from "../types";

//subframework — Angular

export const AngularUniversal: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: {
    typescript: true,
    hasCli: true,
  },
  usesFrameworks: [Angular],
  templatingEngines: [],
  ecosystemIntegrations: [],
  meta: {
    name: "Angular Universal",
    docsLink: "https://angular.io/guide/universal",
    githubOrg: "angular",
    githubRepo: "universal",
  },
};
