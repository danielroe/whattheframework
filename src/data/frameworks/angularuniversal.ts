import { Angular } from "./angular";
import { Framework, WebsiteType, AppType, FrameworkFeatures } from "../types";

//subframework — Angular

export const AngularUniversal: Framework = {
  websiteTypesInOrderOfPriority: [WebsiteType.Static],
  appTypesInOrderOfPriority: [AppType.Spa],
  features: [FrameworkFeatures.TypeScript, FrameworkFeatures.Cli],
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
