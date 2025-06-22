import { defineConfig } from "issue-status";
import { github } from "issue-status/providers";

export default defineConfig({
  name: "Horwood System Status",
  description: "Status page for my services",
  provider: github({
    owner: "mhzawadi",
    repo: "issue-status",
  }),
});
